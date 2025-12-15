import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      );
    }

    // Envoyer l'email à l'administrateur
    const { data, error } = await resend.emails.send({
      from: 'Le Miel Havre <onboarding@resend.dev>', // Remplacez par votre domaine vérifié
      to: ['diambujeannotarobalse@gmail.com'],
      replyTo: email,
      subject: `Nouveau message de contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #f97316;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
                padding: 10px;
                background: white;
                border-radius: 5px;
                border-left: 3px solid #f97316;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Nouveau Message de Contact</h1>
              <p>Le Miel Havre</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Nom complet:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${email}</div>
              </div>
              ${phone ? `
              <div class="field">
                <span class="label">Téléphone:</span>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              <div class="field">
                <span class="label">Sujet:</span>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
              <div class="footer">
                <p>Ce message a été envoyé depuis le formulaire de contact du site Le Miel Havre.</p>
                <p>Vous pouvez répondre directement à cet email pour contacter ${name}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nouveau message de contact - Le Miel Havre

Nom complet: ${name}
Email: ${email}
${phone ? `Téléphone: ${phone}` : ''}
Sujet: ${subject}

Message:
${message}

---
Ce message a été envoyé depuis le formulaire de contact du site Le Miel Havre.
Vous pouvez répondre directement à cet email pour contacter ${name}.
      `,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    // Envoyer un email de confirmation à l'utilisateur
    await resend.emails.send({
      from: 'Le Miel Havre <onboarding@resend.dev>',
      to: [email],
      subject: 'Confirmation de réception - Le Miel Havre',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .message {
                background: white;
                padding: 20px;
                border-radius: 5px;
                border-left: 3px solid #f97316;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Merci pour votre message!</h1>
            </div>
            <div class="content">
              <p>Bonjour ${name},</p>
              <p>Nous avons bien reçu votre message concernant: <strong>${subject}</strong></p>
              <div class="message">
                <p>${message}</p>
              </div>
              <p>Notre équipe va examiner votre demande et vous répondra dans les plus brefs délais (généralement sous 24-48 heures).</p>
              <p>En attendant, n'hésitez pas à nous contacter directement:</p>
              <ul>
                <li>📞 Téléphone: +243 852 105 668</li>
                <li>💬 WhatsApp: +243 825 910 778</li>
                <li>📧 Email: diambujeannotarobalse@gmail.com</li>
              </ul>
              <p>Cordialement,<br><strong>L'équipe Le Miel Havre</strong></p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Votre message a été envoyé avec succès! Nous vous répondrons bientôt.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur API:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}

