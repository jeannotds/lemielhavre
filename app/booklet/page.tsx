'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { BookOpen, Download, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BookletPage() {
  const pdfPath = '/assets/book/Le Miel Havre Booklet French.pdf';

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-6 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l&apos;accueil</span>
          </Link>

          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream dark:bg-slate-800 rounded-full border border-brand-cream dark:border-slate-700 mb-4">
              <BookOpen className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">NOTRE LIVRET</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-200 mb-4">
              Le Miel Havre{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                Booklet
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Découvrez notre mission, nos programmes et notre impact dans ce livret complet.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 px-6 py-3 font-semibold rounded-lg transition-all"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Ouvrir dans un nouvel onglet
                </Button>
              </a>
              <a href={pdfPath} download>
                <Button
                  variant="outline"
                  className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 px-6 py-3 font-semibold rounded-lg transition-all"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="pb-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl border border-slate-200 dark:border-slate-700">
              <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={`${pdfPath}#toolbar=1&navpanes=1&scrollbar=1`}
                  className="w-full h-[600px] md:h-[800px] lg:h-[900px] border-0"
                  title="Le Miel Havre Booklet"
                >
                  <p className="p-8 text-center text-slate-600 dark:text-slate-400">
                    Votre navigateur ne supporte pas l&apos;affichage des PDFs.{' '}
                    <a
                      href={pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-orange hover:underline"
                    >
                      Cliquez ici pour télécharger le PDF
                    </a>
                    .
                  </p>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}


