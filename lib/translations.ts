export type TranslationKey = 
  // Navigation
  | 'nav.home' | 'nav.about' | 'nav.contact'
  // Hero
  | 'hero.badge' | 'hero.title1' | 'hero.title2' | 'hero.title3' | 'hero.description' | 'hero.button'
  | 'hero.feature1' | 'hero.feature2' | 'hero.feature3'
  | 'hero.slide1' | 'hero.slide2' | 'hero.slide3' | 'hero.slide4'
  // Stats
  | 'stats.title' | 'stats.description' | 'stats.donors' | 'stats.volunteers' | 'stats.beneficiaries' | 'stats.projects'
  | 'stats.donorsDesc' | 'stats.volunteersDesc' | 'stats.beneficiariesDesc' | 'stats.projectsDesc'
  // Charity Causes
  | 'causes.badge' | 'causes.title' | 'causes.subtitle' | 'causes.description' | 'causes.button'
  | 'causes.food' | 'causes.education' | 'causes.medical' | 'causes.water'
  // Sponsor Match
  | 'sponsor.badge' | 'sponsor.title' | 'sponsor.description'
  | 'sponsor.slide1' | 'sponsor.slide2' | 'sponsor.slide3'
  | 'sponsor.processTitle' | 'sponsor.processDescription'
  | 'sponsor.step1Title' | 'sponsor.step1Desc'
  | 'sponsor.step2Title' | 'sponsor.step2Desc'
  | 'sponsor.step3Title' | 'sponsor.step3Desc'
  | 'sponsor.howTitle' | 'sponsor.howDescription'
  | 'sponsor.howStep1' | 'sponsor.howStep1Desc'
  | 'sponsor.howStep2' | 'sponsor.howStep2Desc'
  | 'sponsor.howStep3' | 'sponsor.howStep3Desc'
  | 'sponsor.howStep4' | 'sponsor.howStep4Desc'
  | 'sponsor.faqBadge' | 'sponsor.faqTitle' | 'sponsor.faqDescription'
  | 'sponsor.faq1Q' | 'sponsor.faq1A'
  | 'sponsor.faq2Q' | 'sponsor.faq2A'
  | 'sponsor.faq3Q' | 'sponsor.faq3A'
  | 'sponsor.faq4Q' | 'sponsor.faq4A'
  | 'sponsor.faq5Q' | 'sponsor.faq5A'
  | 'sponsor.faq6Q' | 'sponsor.faq6A'
  | 'sponsor.faq7Q' | 'sponsor.faq7A'
  | 'sponsor.button'
  // Partners
  | 'partners.badge' | 'partners.title' | 'partners.description'
  // Booklet
  | 'booklet.badge' | 'booklet.title' | 'booklet.description' | 'booklet.readButton' | 'booklet.openButton' | 'booklet.downloadButton'
  // Newsletter
  | 'newsletter.title' | 'newsletter.subtitle' | 'newsletter.description' | 'newsletter.placeholder' | 'newsletter.button' | 'newsletter.subscribed' | 'newsletter.thankYou'
  // Footer
  | 'footer.description' | 'footer.address' | 'footer.callUs' | 'footer.mailUs' | 'footer.hours' | 'footer.copyright' | 'footer.privacy' | 'footer.terms'
  // About Page
  | 'about.badge' | 'about.title' | 'about.description'
  | 'about.missionBadge' | 'about.missionTitle' | 'about.missionP1' | 'about.missionP2' | 'about.missionP3'
  | 'about.valuesTitle' | 'about.valuesDescription'
  | 'about.value1Title' | 'about.value1Desc'
  | 'about.value2Title' | 'about.value2Desc'
  | 'about.value3Title' | 'about.value3Desc'
  | 'about.value4Title' | 'about.value4Desc'
  | 'about.timelineTitle' | 'about.timelineDescription'
  | 'about.timeline1Year' | 'about.timeline1Title' | 'about.timeline1Desc'
  | 'about.timeline2Year' | 'about.timeline2Title' | 'about.timeline2Desc'
  | 'about.timeline3Year' | 'about.timeline3Title' | 'about.timeline3Desc'
  | 'about.locationTitle' | 'about.locationDescription'
  // Contact Page
  | 'contact.badge' | 'contact.title' | 'contact.description'
  | 'contact.waysTitle' | 'contact.waysDescription'
  | 'contact.phone' | 'contact.phoneDesc'
  | 'contact.whatsapp' | 'contact.whatsappDesc'
  | 'contact.email' | 'contact.emailDesc'
  | 'contact.address' | 'contact.addressDesc'
  | 'contact.hoursTitle' | 'contact.hoursDesc'
  | 'contact.responseTitle' | 'contact.responseDesc'
  | 'contact.locationTitle' | 'contact.locationDescription'
  // Booklet Page
  | 'bookletPage.back' | 'bookletPage.badge' | 'bookletPage.title' | 'bookletPage.description' | 'bookletPage.openButton' | 'bookletPage.downloadButton' | 'bookletPage.error'

export const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    // Hero
    'hero.badge': 'VIE DE CHARITÉ',
    'hero.title1': 'Charité, Foi et Espoir.',
    'hero.title2': 'Aidez les Sans-Abri.',
    'hero.title3': 'Vie de charité.',
    'hero.description': 'Rejoignez-nous pour faire une différence significative dans la vie des enfants de la RDC. Ensemble, nous pouvons construire un avenir meilleur pour les enfants du Congo.',
    'hero.button': 'Lire le Livret',
    'hero.feature1': 'Voir notre Mission',
    'hero.feature2': 'Top Fondateurs',
    'hero.feature3': 'Demander un Devis',
    'hero.slide1': 'Charité, Foi et Espoir',
    'hero.slide2': 'Aidez les Sans-Abri',
    'hero.slide3': 'Vie de charité',
    'hero.slide4': 'Faire une Différence',
    // Stats
    'stats.title': 'Notre Impact en Chiffres',
    'stats.description': 'Ensemble, nous faisons une vraie différence dans les communautés du monde entier',
    'stats.donors': 'Donateurs',
    'stats.volunteers': 'Bénévoles',
    'stats.beneficiaries': 'Bénéficiaires',
    'stats.projects': 'Projets',
    'stats.donorsDesc': 'Généreux donateurs',
    'stats.volunteersDesc': 'Aides dévoués',
    'stats.beneficiariesDesc': 'Vies transformées',
    'stats.projectsDesc': 'Initiatives actives',
    // Charity Causes
    'causes.badge': 'NOS CAUSES',
    'causes.title': 'Nos Causes',
    'causes.subtitle': 'Si vous voulez travailler avec la charité Le Miel Havre ?',
    'causes.description': 'Nous nous engageons à avoir un impact durable dans les communautés de la République Démocratique du Congo. Grâce à nos différents programmes, nous répondons aux besoins critiques et permettons aux enfants de construire de meilleurs avenirs pour eux-mêmes et leurs familles.',
    'causes.button': 'Contactez-Nous',
    'causes.food': 'Nourriture pour les Affamés',
    'causes.education': 'Éducation pour Tous',
    'causes.medical': 'Aide Médicale',
    'causes.water': 'Eau Potable pour Tous',
    // Sponsor Match
    'sponsor.badge': 'PROGRAMME DE PARRAINAGE',
    'sponsor.title': 'Comment Fonctionne le Parrainage Enfant-Parrain ?',
    'sponsor.description': 'Découvrez comment nous connectons des parrains bienveillants avec des enfants dans le besoin',
    'sponsor.slide1': 'Rencontrez Votre Enfant Parrainé',
    'sponsor.slide2': 'Construisez une Connexion Durable',
    'sponsor.slide3': 'Soutenez Leur Avenir',
    'sponsor.processTitle': 'Le Processus de Parrainage',
    'sponsor.processDescription': 'Découvrez comment nous créons des connexions durables entre les parrains et les enfants',
    'sponsor.step1Title': 'Évaluation et Profil',
    'sponsor.step1Desc': 'Le processus de jumelage peut prendre plusieurs mois. Notre équipe collecte soigneusement des informations sur le passé de chaque enfant, sa santé et son éducation pour créer un profil personnel détaillé.',
    'sponsor.step2Title': 'Confirmation et Intégration',
    'sponsor.step2Desc': 'Une fois le jumelage confirmé, le processus d\'intégration commence. Les parrains reçoivent un paquet de bienvenue avec la photo de l\'enfant, son histoire personnelle, les détails de son passé et le numéro d\'identification Le Miel Havre.',
    'sponsor.step3Title': 'Communication et Suivi',
    'sponsor.step3Desc': 'Une fois l\'intégration terminée, les parrains commenceront à recevoir des lettres de leur enfant assigné et pourront communiquer par lettres ou par email en utilisant le numéro d\'identification de bourse de l\'enfant.',
    'sponsor.howTitle': 'COMMENT ÇA FONCTIONNE ?',
    'sponsor.howDescription': 'Le programme de bourses Le Miel Havre connecte les enfants avec des écoles sûres et de qualité. Les besoins de base de chaque enfant sont satisfaits avec des vêtements, des articles de soins personnels. Ils reçoivent une éducation comprenant des fournitures scolaires et du tutorat.',
    'sponsor.howStep1': 'RÉFÉRENCE ET ÉVALUATION DES ENFANTS',
    'sponsor.howStep1Desc': 'Les enfants sont généralement référés à l\'orphelinat soutenu par le programme de bourses Le Miel Havre par des églises locales, des organisations communautaires, des services sociaux.',
    'sponsor.howStep2': 'PROCESSUS D\'ALLOCATION DES FONDS',
    'sponsor.howStep2Desc': 'Chaque enfant est connecté à un parrain qui s\'engage à fournir un soutien financier mensuel ou annuel. Bien que le parrainage soit personnalisé, les contributions sont agrégées dans le programme pour garantir que chaque enfant vivant dans un orphelinat partenaire soutenu par Le Miel Havre bénéficie équitablement.',
    'sponsor.howStep3': 'PLACEMENT DES ENFANTS',
    'sponsor.howStep3Desc': 'Chaque enfant a accès à l\'éducation, y compris les uniformes scolaires, les livres, les fournitures et le tutorat si nécessaire. En plus de leurs études, ils reçoivent des repas équilibrés, des examens de santé réguliers et des soins médicaux pour soutenir une croissance et un développement sains.',
    'sponsor.howStep4': 'LA VIE APRÈS LE PROGRAMME',
    'sponsor.howStep4Desc': 'Au moment de leur diplôme, les enfants dans les orphelinats partenaires soutenus par le programme de bourses Le Miel Havre ont généralement terminé une éducation formelle ou une formation professionnelle, les équipant d\'outils pour l\'autosuffisance.',
    'sponsor.faqBadge': 'QUESTIONS FRÉQUENTES',
    'sponsor.faqTitle': 'Questions',
    'sponsor.faqDescription': 'Trouvez des réponses aux questions courantes sur notre programme de parrainage',
    'sponsor.faq1Q': 'Pourquoi devriez-vous parrainer un enfant par le biais du programme de bourses Le Miel Havre ?',
    'sponsor.faq1A': 'Depuis ses débuts en 2025, l\'objectif de Le Miel Havre est d\'améliorer les vies par l\'éducation des enfants qui viennent de l\'extrême pauvreté et/ou ont été abandonnés ou retirés de leurs familles. Votre soutien permettra à ces enfants de guérir, s\'épanouir et grandir dans un environnement de maison de groupe stable et aimant.',
    'sponsor.faq2Q': 'Combien d\'enfants sont dans le programme de bourses Le Miel Havre ?',
    'sponsor.faq2A': 'Nous avons commencé avec 5 enfants, adolescents et jeunes adultes vivant dans un orphelinat à Goma. Les enfants ont entre les âges de nourrissons à 21 ans. Notre objectif futur est que nous estimons que plus de 500 enfants vivant dans différents orphelinats deviendront bénéficiaires du programme de bourses Le Miel Havre.',
    'sponsor.faq3Q': 'Où opère Le Miel Havre ?',
    'sponsor.faq3A': 'Notre bureau principal est à Kinshasa, RD Congo. Nous travaillons avec des partenaires locaux qui nous aident à administrer le programme à Goma. Les plans futurs seront d\'étendre à d\'autres villes du pays.',
    'sponsor.faq4Q': 'Combien de parrains pour chaque enfant ?',
    'sponsor.faq4A': 'Le Miel Havre connecte un parrain à un enfant. Nous vous encourageons à écrire régulièrement à votre enfant pour développer un lien et une relation spéciaux. Les enfants ont hâte de recevoir vos lettres !',
    'sponsor.faq5Q': 'Combien cela coûte-t-il de parrainer un enfant ?',
    'sponsor.faq5A': '400 $ par année scolaire, ce qui est proche de 35 $ par mois. Votre engagement continu aidera à changer la vie d\'un enfant. Vous pouvez payer mensuellement, trimestriellement, semestriellement ou annuellement. Vous pouvez également parrainer plus d\'un enfant.',
    'sponsor.faq6Q': 'Mon enfant parrainé connaît-il mon nom complet et mon adresse ?',
    'sponsor.faq6A': 'Afin de protéger votre vie privée, nous ne partageons que votre prénom avec votre enfant parrainé. Nous ne fournissons pas votre adresse, votre ville ou votre localisation d\'état.',
    'sponsor.faq7Q': 'Que vais-je recevoir lorsque je parraine un enfant ?',
    'sponsor.faq7A': 'Vous recevrez un paquet de bienvenue par email avec une courte biographie et une photo de votre enfant dans les 3 semaines. Vous recevrez également une photo et une biographie annuelles mises à jour de votre enfant, et pouvez communiquer par lettres ou email.',
    'sponsor.button': 'Parrainez un Enfant Aujourd\'hui',
    // Partners
    'partners.badge': 'NOS PARTENAIRES',
    'partners.title': 'Avec qui nous travaillons',
    'partners.description': 'Ensemble avec nos partenaires de confiance, nous créons un impact durable dans les communautés du monde entier',
    // Booklet
    'booklet.badge': 'NOTRE LIVRET',
    'booklet.title': 'Découvrez Notre',
    'booklet.description': 'Téléchargez ou consultez notre livret complet pour en savoir plus sur notre mission, nos programmes et notre impact sur la vie des enfants en RDC.',
    'booklet.readButton': 'Lire le Livret',
    'booklet.openButton': 'Ouvrir dans un nouvel onglet',
    'booklet.downloadButton': 'Télécharger',
    // Newsletter
    'newsletter.title': 'Abonnez-vous à notre newsletter pour recevoir les dernières mises à jour',
    'newsletter.subtitle': 'Restez connecté avec notre mission. Nous ne vous enverrons pas de courriers indésirables.',
    'newsletter.description': 'Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles et mises à jour',
    'newsletter.placeholder': 'Entrez votre adresse email',
    'newsletter.button': 'S\'abonner',
    'newsletter.subscribed': 'Abonné!',
    'newsletter.thankYou': 'Merci de vous être abonné! Vérifiez votre email pour confirmation.',
    // Footer
    'footer.description': 'Faire une différence dans les communautés du monde entier grâce à l\'éducation, au soutien et à la compassion.',
    'footer.address': 'Notre Adresse',
    'footer.callUs': 'Appelez-Nous',
    'footer.mailUs': 'Écrivez-Nous',
    'footer.hours': 'Lun - Ven 10:30 - 18:00',
    'footer.copyright': 'Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    // About Page
    'about.badge': 'À PROPOS DE NOUS',
    'about.title': 'À propos de',
    'about.description': 'Nous sommes dédiés à transformer les vies des enfants en République Démocratique du Congo grâce à l\'éducation, au soutien et à la compassion.',
    'about.missionBadge': 'NOTRE MISSION',
    'about.missionTitle': 'Notre Mission &',
    'about.missionP1': 'Le Miel Havre est une organisation à but non lucratif engagée à améliorer les vies des enfants en République Démocratique du Congo grâce à l\'éducation et aux programmes de soutien complets.',
    'about.missionP2': 'Notre mission est de fournir des opportunités éducatives, des ressources essentielles et un environnement stable et aimant pour les enfants qui viennent de l\'extrême pauvreté ou ont été abandonnés ou retirés de leurs familles.',
    'about.missionP3': 'Nous envisageons un avenir où chaque enfant en RDC a accès à une éducation de qualité, des soins de santé appropriés et le soutien dont ils ont besoin pour s\'épanouir et devenir des adultes autosuffisants.',
    'about.valuesTitle': 'Nos Valeurs',
    'about.valuesDescription': 'Les principes qui guident tout ce que nous faisons',
    'about.value1Title': 'Compassion',
    'about.value1Desc': 'Nous approchons chaque enfant avec empathie, compréhension et soin authentique pour leur bien-être.',
    'about.value2Title': 'Éducation',
    'about.value2Desc': 'Nous croyons que l\'éducation est la clé pour briser le cycle de la pauvreté et créer un changement durable.',
    'about.value3Title': 'Communauté',
    'about.value3Desc': 'Nous travaillons ensemble avec les communautés locales pour construire des solutions durables pour les enfants dans le besoin.',
    'about.value4Title': 'Excellence',
    'about.value4Desc': 'Nous maintenons les plus hauts standards dans tous nos programmes et services pour les enfants que nous servons.',
    'about.timelineTitle': 'Notre Parcours',
    'about.timelineDescription': 'Les étapes importantes qui ont façonné notre organisation',
    'about.timeline1Year': '2025',
    'about.timeline1Title': 'Fondation',
    'about.timeline1Desc': 'Le Miel Havre a été établi avec une mission de soutenir les enfants en République Démocratique du Congo.',
    'about.timeline2Year': '2025',
    'about.timeline2Title': 'Premier Programme',
    'about.timeline2Desc': 'Lancement de notre programme de bourses à Goma, commençant avec 5 enfants dans des orphelinats partenaires.',
    'about.timeline3Year': 'Futur',
    'about.timeline3Title': 'Expansion',
    'about.timeline3Desc': 'Notre objectif est de soutenir plus de 500 enfants dans différents orphelinats en RDC.',
    'about.locationTitle': 'Où Nous Opérons',
    'about.locationDescription': 'Nous travaillons actuellement en République Démocratique du Congo, avec des plans d\'expansion future.',
    // Contact Page
    'contact.badge': 'CONTACTEZ-NOUS',
    'contact.title': 'Contactez',
    'contact.description': 'Nous sommes là pour vous aider. N\'hésitez pas à nous contacter pour toute question ou pour en savoir plus sur nos programmes.',
    'contact.waysTitle': 'Nos',
    'contact.waysDescription': 'Choisissez le moyen qui vous convient le mieux pour nous joindre. Nous sommes disponibles pour répondre à toutes vos questions.',
    'contact.phone': 'Téléphone',
    'contact.phoneDesc': 'Appelez-nous directement',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsappDesc': 'Contactez-nous sur WhatsApp',
    'contact.email': 'Email',
    'contact.emailDesc': 'Envoyez-nous un email',
    'contact.address': 'Adresse',
    'contact.addressDesc': 'Bureau principal',
    'contact.hoursTitle': 'Heures de Bureau',
    'contact.hoursDesc': 'Nous sommes disponibles aux heures suivantes',
    'contact.responseTitle': 'Temps de Réponse',
    'contact.responseDesc': 'Nous nous efforçons de répondre à tous les messages dans les 24 heures.',
    'contact.locationTitle': 'Notre Localisation',
    'contact.locationDescription': 'Trouvez notre bureau principal à Kinshasa, RD Congo',
    // Booklet Page
    'bookletPage.back': 'Retour à l\'accueil',
    'bookletPage.badge': 'NOTRE LIVRET',
    'bookletPage.title': 'Booklet',
    'bookletPage.description': 'Découvrez notre mission, nos programmes et notre impact dans ce livret complet.',
    'bookletPage.openButton': 'Ouvrir dans un nouvel onglet',
    'bookletPage.downloadButton': 'Télécharger',
    'bookletPage.error': 'Votre navigateur ne supporte pas l\'affichage des PDFs.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    // Hero
    'hero.badge': 'CHARITY LIFE',
    'hero.title1': 'Charity, Faith and Hope.',
    'hero.title2': 'Help the Homeless.',
    'hero.title3': 'Charity life.',
    'hero.description': 'Join us to make a meaningful difference in the lives of children in the DRC. Together, we can build a better future for the children of Congo.',
    'hero.button': 'Read the Booklet',
    'hero.feature1': 'View our Mission',
    'hero.feature2': 'Top Founders',
    'hero.feature3': 'Request a Quote',
    'hero.slide1': 'Charity, Faith and Hope',
    'hero.slide2': 'Help the Homeless',
    'hero.slide3': 'Charity life',
    'hero.slide4': 'Making a Difference',
    // Stats
    'stats.title': 'Our Impact in Numbers',
    'stats.description': 'Together, we\'re making a real difference in communities around the world',
    'stats.donors': 'Donors',
    'stats.volunteers': 'Volunteers',
    'stats.beneficiaries': 'Beneficiaries',
    'stats.projects': 'Projects',
    'stats.donorsDesc': 'Generous supporters',
    'stats.volunteersDesc': 'Dedicated helpers',
    'stats.beneficiariesDesc': 'Lives changed',
    'stats.projectsDesc': 'Active initiatives',
    // Charity Causes
    'causes.badge': 'OUR CAUSES',
    'causes.title': 'Our Charity',
    'causes.subtitle': 'If you want to work with Le Miel Havre charity?',
    'causes.description': 'We are committed to making a lasting impact in the communities of the Democratic Republic of Congo. Through our various programs, we address critical needs and enable children to build better futures for themselves and their families.',
    'causes.button': 'Contact Us',
    'causes.food': 'Food for the Hungry',
    'causes.education': 'Education for All',
    'causes.medical': 'Medical Assistance',
    'causes.water': 'Clean Water for All',
    // Sponsor Match
    'sponsor.badge': 'SPONSORSHIP PROGRAM',
    'sponsor.title': 'How the Sponsor-Child',
    'sponsor.description': 'Discover how we connect caring sponsors with children in need',
    'sponsor.slide1': 'Meet Your Sponsored Child',
    'sponsor.slide2': 'Build a Lasting Connection',
    'sponsor.slide3': 'Support Their Future',
    'sponsor.processTitle': 'The',
    'sponsor.processDescription': 'Discover how we create lasting connections between sponsors and children',
    'sponsor.step1Title': 'Assessment & Profile',
    'sponsor.step1Desc': 'The matching process may take several months. Our team carefully collects information on each child\'s background, health, and education to create a detailed personal profile.',
    'sponsor.step2Title': 'Confirmation & Onboarding',
    'sponsor.step2Desc': 'Once the match is confirmed, the onboarding process begins. Sponsors receive a welcome packet with the child\'s photo, personal story, background details, and Le Miel Havre identification number.',
    'sponsor.step3Title': 'Communication & Follow-up',
    'sponsor.step3Desc': 'After onboarding is complete, sponsors will begin receiving letters from their assigned child and can communicate through letters or via email using the child\'s scholarship identification number.',
    'sponsor.howTitle': 'HOW DOES IT',
    'sponsor.howDescription': 'Le Miel Havre scholarship program connects children with safe, and good school. Each child\'s basic needs are met with clothing, personal care items. They receive education including school supplies, and tutoring.',
    'sponsor.howStep1': 'CHILDREN REFERRAL & ASSESSMENT',
    'sponsor.howStep1Desc': 'Children are usually referred to the orphanage supported by Le Miel Havre scholarship program through local churches, community organizations, social services.',
    'sponsor.howStep2': 'FUND ALLOCATION PROCESS',
    'sponsor.howStep2Desc': 'Each child is connected to a sponsor who commits to providing monthly or annual financial support. While sponsorship is personalized, contributions are aggregated within the program to ensure every child living in a partner orphanage supported by Le Miel Havre benefits equally.',
    'sponsor.howStep3': 'CHILDREN\'S PLACEMENT',
    'sponsor.howStep3Desc': 'Every child is provided with access to education, including school uniforms, books, supplies, and tutoring when needed. Alongside their studies, they receive balanced meals, regular health checkups, and medical care to support healthy growth and development.',
    'sponsor.howStep4': 'LIFE AFTER THE PROGRAM',
    'sponsor.howStep4Desc': 'By the time they graduate, children in partner orphanages supported by Le Miel Havre scholarship program have usually completed formal education or vocational training, equipping them with tools for self-sufficiency.',
    'sponsor.faqBadge': 'FREQUENTLY ASKED QUESTIONS',
    'sponsor.faqTitle': 'Frequently Asked',
    'sponsor.faqDescription': 'Find answers to common questions about our sponsorship program',
    'sponsor.faq1Q': 'Why should you sponsor a child through Le Miel Havre scholarship program?',
    'sponsor.faq1A': 'Since its beginning in 2025, Le Miel Havre\'s goal is to improve the lives through education of children who come from extreme poverty and/or have been abandoned or removed from their families. Your support will allow these children to heal, thrive and grow in a stable and loving group home environment.',
    'sponsor.faq2Q': 'How many children are in Le Miel Havre scholarship program?',
    'sponsor.faq2A': 'We have started with 5 children, teenagers and young adults living in an orphanage in Goma. The children range in age from infants to 21 years old. Our future goal is that we estimate more than 500 children living in different orphanages will become beneficiaries of Le Miel Havre scholarship program.',
    'sponsor.faq3Q': 'Where does Le Miel Havre operate?',
    'sponsor.faq3A': 'Our Head Office is in Kinshasa, DR Congo. We work with in-country partners who help us administrate the program in Goma. Plans in the future will be to expand to other cities in the country.',
    'sponsor.faq4Q': 'How many sponsors for each child?',
    'sponsor.faq4A': 'Le Miel Havre connects one sponsor to one child. We encourage you to regularly write to your child to develop a special bond and relationship. The children cannot wait to receive your letters!',
    'sponsor.faq5Q': 'How much does it cost to sponsor a child?',
    'sponsor.faq5A': '$400 per school year, which is closer to $35 per month. Your ongoing commitment will help to change a child\'s life. You can pay monthly, quarterly, semestrially or annually. You can also sponsor more than one child.',
    'sponsor.faq6Q': 'Does my sponsored child know my full name and address?',
    'sponsor.faq6A': 'In order to protect your privacy, we only share your first name with your sponsored child. We do not provide your address, city or state location.',
    'sponsor.faq7Q': 'What will I receive when I sponsor a child?',
    'sponsor.faq7A': 'You will receive a Welcome Packet via email with a brief bio and photo of your child within 3 weeks. You will also receive an updated annual photo and bio of your child, and can communicate through letters or email.',
    'sponsor.button': 'Sponsor a Child Today',
    // Partners
    'partners.badge': 'OUR PARTNERS',
    'partners.title': 'Whom we work with',
    'partners.description': 'Together with our trusted partners, we create lasting impact in communities worldwide',
    // Booklet
    'booklet.badge': 'OUR BOOKLET',
    'booklet.title': 'Discover Our',
    'booklet.description': 'Download or view our complete booklet to learn more about our mission, programs, and impact on the lives of children in the DRC.',
    'booklet.readButton': 'Read the Booklet',
    'booklet.openButton': 'Open in New Tab',
    'booklet.downloadButton': 'Download',
    // Newsletter
    'newsletter.title': 'Subscribe our Newsletter to receive latest updates from us',
    'newsletter.subtitle': 'Stay connected with our mission. We won\'t give you spam mails.',
    'newsletter.description': 'Subscribe to our newsletter to receive the latest news and updates',
    'newsletter.placeholder': 'Enter Your Email Address',
    'newsletter.button': 'Subscribe Now',
    'newsletter.subscribed': 'Subscribed!',
    'newsletter.thankYou': 'Thank you for subscribing! Check your email for confirmation.',
    // Footer
    'footer.description': 'Making a difference in communities worldwide through education, support, and compassion.',
    'footer.address': 'Our Address',
    'footer.callUs': 'Call Us',
    'footer.mailUs': 'Mail Us',
    'footer.hours': 'Mon - Fri 10:30 - 18:00',
    'footer.copyright': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    // About Page
    'about.badge': 'ABOUT US',
    'about.title': 'About',
    'about.description': 'We are dedicated to transforming the lives of children in the Democratic Republic of Congo through education, support, and compassion.',
    'about.missionBadge': 'OUR MISSION',
    'about.missionTitle': 'Our Mission &',
    'about.missionP1': 'Le Miel Havre is a non-profit organization committed to improving the lives of children in the Democratic Republic of Congo through education and comprehensive support programs.',
    'about.missionP2': 'Our mission is to provide educational opportunities, essential resources, and a stable, loving environment for children who come from extreme poverty or have been abandoned or removed from their families.',
    'about.missionP3': 'We envision a future where every child in the DRC has access to quality education, proper healthcare, and the support they need to thrive and become self-sufficient adults.',
    'about.valuesTitle': 'Our Core',
    'about.valuesDescription': 'The principles that guide everything we do',
    'about.value1Title': 'Compassion',
    'about.value1Desc': 'We approach every child with empathy, understanding, and genuine care for their well-being.',
    'about.value2Title': 'Education',
    'about.value2Desc': 'We believe education is the key to breaking the cycle of poverty and creating lasting change.',
    'about.value3Title': 'Community',
    'about.value3Desc': 'We work together with local communities to build sustainable solutions for children in need.',
    'about.value4Title': 'Excellence',
    'about.value4Desc': 'We maintain the highest standards in all our programs and services for the children we serve.',
    'about.timelineTitle': 'Our Journey',
    'about.timelineDescription': 'The key milestones that have shaped our organization',
    'about.timeline1Year': '2025',
    'about.timeline1Title': 'Foundation',
    'about.timeline1Desc': 'Le Miel Havre was established with a mission to support children in the Democratic Republic of Congo.',
    'about.timeline2Year': '2025',
    'about.timeline2Title': 'First Program',
    'about.timeline2Desc': 'Launched our scholarship program in Goma, starting with 5 children in partner orphanages.',
    'about.timeline3Year': 'Future',
    'about.timeline3Title': 'Expansion',
    'about.timeline3Desc': 'Our goal is to support over 500 children across different orphanages in the DRC.',
    'about.locationTitle': 'Where We Operate',
    'about.locationDescription': 'We currently work in the Democratic Republic of Congo, with plans for future expansion.',
    // Contact Page
    'contact.badge': 'CONTACT US',
    'contact.title': 'Contact',
    'contact.description': 'We are here to help. Feel free to contact us for any questions or to learn more about our programs.',
    'contact.waysTitle': 'Our',
    'contact.waysDescription': 'Choose the method that suits you best to reach us. We are available to answer all your questions.',
    'contact.phone': 'Phone',
    'contact.phoneDesc': 'Call us directly',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsappDesc': 'Contact us on WhatsApp',
    'contact.email': 'Email',
    'contact.emailDesc': 'Send us an email',
    'contact.address': 'Address',
    'contact.addressDesc': 'Head office',
    'contact.hoursTitle': 'Office Hours',
    'contact.hoursDesc': 'We are available at the following times',
    'contact.responseTitle': 'Response Time',
    'contact.responseDesc': 'We strive to respond to all messages within 24 hours.',
    'contact.locationTitle': 'Our Location',
    'contact.locationDescription': 'Find our head office in Kinshasa, DR Congo',
    // Booklet Page
    'bookletPage.back': 'Back to Home',
    'bookletPage.badge': 'OUR BOOKLET',
    'bookletPage.title': 'Booklet',
    'bookletPage.description': 'Discover our mission, programs, and impact in this complete booklet.',
    'bookletPage.openButton': 'Open in New Tab',
    'bookletPage.downloadButton': 'Download',
    'bookletPage.error': 'Your browser does not support PDF display.',
  },
};

export function useTranslation(language: 'fr' | 'en') {
  return (key: TranslationKey): string => {
    return translations[language][key] || key;
  };
}

