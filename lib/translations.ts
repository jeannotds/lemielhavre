export type TranslationKey = 
  // Navigation
  | 'nav.home' | 'nav.about' | 'nav.parrainage' | 'nav.contact'
  // Hero
  | 'hero.badge' | 'hero.title1' | 'hero.title2' | 'hero.title3' | 'hero.description' | 'hero.button'
  | 'hero.feature1' | 'hero.feature2' | 'hero.feature3'
  | 'hero.slide1' | 'hero.slide2' | 'hero.slide3' | 'hero.slide4'
  | 'hero.welcomeTitle' | 'hero.welcomeMessage' | 'hero.togetherText'
  // Stats
  | 'stats.title' | 'stats.description' | 'stats.donors' | 'stats.volunteers' | 'stats.beneficiaries' | 'stats.projects'
  | 'stats.donorsDesc' | 'stats.volunteersDesc' | 'stats.beneficiariesDesc' | 'stats.projectsDesc'
  | 'stats.schoolsClosed' | 'stats.schoolsClosedDesc' | 'stats.childrenOutOfSchool' | 'stats.childrenOutOfSchoolDesc'
  | 'stats.minimumLevel' | 'stats.minimumLevelDesc'
  // Charity Causes
  | 'causes.badge' | 'causes.title' | 'causes.subtitle' | 'causes.description' | 'causes.button'
  | 'causes.food' | 'causes.education' | 'causes.medical' | 'causes.water'
  // Why Sponsor
  | 'whySponsor.title' | 'whySponsor.subtitle' | 'whySponsor.challenge1Title' | 'whySponsor.challenge1Desc'
  | 'whySponsor.challenge2Title' | 'whySponsor.challenge2Desc' | 'whySponsor.challenge3Title' | 'whySponsor.challenge3Desc'
  | 'whySponsor.challenge4Title' | 'whySponsor.challenge4Desc' | 'whySponsor.stat1' | 'whySponsor.stat2' | 'whySponsor.stat3'
  | 'whySponsor.message' | 'whySponsor.childrenTitle'
  // Program Section
  | 'program.title' | 'program.description' | 'program.step1Title' | 'program.step1Desc'
  | 'program.step2Title' | 'program.step2Desc' | 'program.step3Title' | 'program.step3Desc'
  | 'program.step4Title' | 'program.step4Desc'
  // Sponsor Match
  | 'sponsor.badge' | 'sponsor.title' | 'sponsor.description'
  | 'sponsor.slide1' | 'sponsor.slide2' | 'sponsor.slide3'
  | 'sponsor.processTitle' | 'sponsor.processDescription'
  | 'sponsor.step1Title' | 'sponsor.step1Desc'
  | 'sponsor.step2Title' | 'sponsor.step2Desc'
  | 'sponsor.step3Title' | 'sponsor.step3Desc'
  | 'sponsor.howProcessTitle' | 'sponsor.howProcessStep1' | 'sponsor.howProcessStep2' | 'sponsor.howProcessStep3' | 'sponsor.howProcessStep4'
  | 'sponsor.howProcessSlide1' | 'sponsor.howProcessSlide2' | 'sponsor.howProcessSlide3' | 'sponsor.howProcessNote'
  | 'sponsor.howTitle' | 'sponsor.howDescription'
  | 'sponsor.howStep1' | 'sponsor.howStep1Desc'
  | 'sponsor.howStep2' | 'sponsor.howStep2Desc'
  | 'sponsor.howStep3' | 'sponsor.howStep3Desc'
  | 'sponsor.howStep4' | 'sponsor.howStep4Desc'
  | 'sponsor.benefitsTitle' | 'sponsor.benefit1' | 'sponsor.benefit2' | 'sponsor.benefit3' | 'sponsor.benefit4'
  | 'sponsor.benefit5' | 'sponsor.benefit6' | 'sponsor.benefit7' | 'sponsor.cost' | 'sponsor.costFull'
  | 'sponsor.faqBadge' | 'sponsor.faqTitle' | 'sponsor.faqDescription'
  | 'sponsor.faq1Q' | 'sponsor.faq1A'
  | 'sponsor.faq2Q' | 'sponsor.faq2A'
  | 'sponsor.faq3Q' | 'sponsor.faq3A'
  | 'sponsor.faq4Q' | 'sponsor.faq4A'
  | 'sponsor.faq5Q' | 'sponsor.faq5A'
  | 'sponsor.faq6Q' | 'sponsor.faq6A'
  | 'sponsor.faq7Q' | 'sponsor.faq7A'
  | 'sponsor.faq8Q' | 'sponsor.faq8A'
  | 'sponsor.faq9Q' | 'sponsor.faq9A'
  | 'sponsor.faqIntro'
  | 'sponsor.faqNew1Q' | 'sponsor.faqNew1A'
  | 'sponsor.faqNew2Q' | 'sponsor.faqNew2A'
  | 'sponsor.faqNew3Q' | 'sponsor.faqNew3A'
  | 'sponsor.faqNew4Q' | 'sponsor.faqNew4A'
  | 'sponsor.faqNew5Q' | 'sponsor.faqNew5A'
  | 'sponsor.faqNew6Q' | 'sponsor.faqNew6A'
  | 'sponsor.faqNew7Q' | 'sponsor.faqNew7A'
  | 'sponsor.faqNew8Q' | 'sponsor.faqNew8A'
  | 'sponsor.faqNew9Q' | 'sponsor.faqNew9A'
  | 'sponsor.button'
  | 'sponsor.sponsorThemTitle'
  | 'sponsor.child1Name' | 'sponsor.child1Age' | 'sponsor.child1Birthdate' | 'sponsor.child1Class' | 'sponsor.child1Meet'
  | 'sponsor.child2Name' | 'sponsor.child2Age' | 'sponsor.child2Birthdate' | 'sponsor.child2Class' | 'sponsor.child2Meet'
  | 'sponsor.child3Name' | 'sponsor.child3Age' | 'sponsor.child3Birthdate' | 'sponsor.child3Class' | 'sponsor.child3Meet'
  | 'sponsor.child4Name' | 'sponsor.child4Age' | 'sponsor.child4Birthdate' | 'sponsor.child4Class' | 'sponsor.child4Meet'
  | 'sponsor.child5Name' | 'sponsor.child5Age' | 'sponsor.child5Birthdate' | 'sponsor.child5Class' | 'sponsor.child5Meet'
  // Partners
  | 'partners.badge' | 'partners.title' | 'partners.description'
  // Booklet
  | 'booklet.badge' | 'booklet.title' | 'booklet.description' | 'booklet.readButton' | 'booklet.openButton' | 'booklet.downloadButton'
  // Newsletter
  | 'newsletter.title' | 'newsletter.subtitle' | 'newsletter.description' | 'newsletter.placeholder' | 'newsletter.button' | 'newsletter.subscribed' | 'newsletter.thankYou'
  // Footer
  | 'footer.description' | 'footer.address' | 'footer.callUs' | 'footer.mailUs' | 'footer.hours' | 'footer.copyright' | 'footer.privacy' | 'footer.terms'
  | 'footer.email' | 'footer.phone' | 'footer.location' | 'footer.followUs' | 'footer.companyName'
  // About Page
  | 'about.badge' | 'about.title' | 'about.description'
  | 'about.missionBadge' | 'about.missionTitle' | 'about.missionP1' | 'about.missionP2' | 'about.missionP3'
  | 'about.historyTitle' | 'about.historyP1' | 'about.historyP2' | 'about.historyP3' | 'about.historyP3b' | 'about.historyP4' | 'about.historyP5'
  | 'about.founderTitle' | 'about.founderName' | 'about.founderRole' | 'about.founderMessage'
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
  | 'about.challengesTitle' | 'about.challenge1' | 'about.challenge2' | 'about.challenge3' | 'about.challenge4'
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
    'nav.parrainage': 'Parrainage',
    'nav.contact': 'Contact',
    // Hero
    'hero.badge': 'TRANSFORMER DES VIES',
    'hero.title1': 'Transformer la vie',
    'hero.title2': "d'un enfant grâce à",
    'hero.title3': "l'éducation",
    'hero.description': 'Devenez sponsor dès aujourd\'hui et contribuez à ouvrir la voie à un avenir meilleur, un enfant à la fois.',
    'hero.button': 'Lire le Livret',
    'hero.feature1': 'Voir notre Mission',
    'hero.feature2': 'Top Fondateurs',
    'hero.feature3': 'Demander un Devis',
    'hero.slide1': 'Charité, Foi et Espoir',
    'hero.slide2': 'Aidez les Sans-Abri',
    'hero.slide3': 'Vie de charité',
    'hero.slide4': 'Faire une Différence',
    'hero.welcomeTitle': 'Bienvenue au Le Miel Havre',
    'hero.welcomeMessage': 'Bienvenue à la fondation Le Miel Havre. Nous sommes très honorés que vous vous joigniez à notre mission visant à autonomiser les enfants défavorisés grâce à l\'éducation. Votre décision de participer à ce programme contribue à ouvrir la voie à un avenir meilleur, un enfant à la fois.',
    'hero.togetherText': 'Ensemble, nous pouvons changer la vie d\'un enfant.',
    // Stats
    'stats.title': 'Notre Impact en Chiffres',
    'stats.description': 'Les défis auxquels les enfants de l\'est de la RDC sont confrontés',
    'stats.donors': '2,500',
    'stats.volunteers': '1.6M',
    'stats.beneficiaries': '27%',
    'stats.projects': '5',
    'stats.donorsDesc': 'Écoles fermées',
    'stats.volunteersDesc': 'Enfants non scolarisés',
    'stats.beneficiariesDesc': 'Niveau minimum atteint',
    'stats.projectsDesc': 'Enfants dans le programme',
    'stats.schoolsClosed': '2,500',
    'stats.schoolsClosedDesc': 'Écoles et lieux d\'apprentissage fermés',
    'stats.childrenOutOfSchool': '1.6M',
    'stats.childrenOutOfSchoolDesc': 'Enfants dans l\'est de la RDC ne sont pas scolarisés',
    'stats.minimumLevel': '27%',
    'stats.minimumLevelDesc': 'Des élèves ont atteint le niveau minimum requis',
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
    // Program Section
    'program.title': 'Notre programme de parrainage',
    'program.description': 'Le programme de bourses Le Miel Havre permet aux enfants d\'accéder à une école sûre, de qualité et performante. Les besoins fondamentaux de chaque enfant sont satisfaits.',
    'program.step1Title': 'Orientation et évaluation des enfants',
    'program.step1Desc': 'Les enfants sont généralement orientés vers l\'orphelinat soutenu par le programme de bourses Le Miel Havre soutenu par l\'intermédiaire des églises locales, des organisations communautaires et des services sociaux.',
    'program.step2Title': 'Processus d\'allocation des fonds',
    'program.step2Desc': 'Chaque enfant est lié à un parrain qui s\'engage à lui fournir un soutien financier mensuel ou annuel. Bien que le parrainage soit personnalisé, les contributions sont regroupées au sein du programme afin de garantir que tous les enfants vivant dans un orphelinat partenaire soutenu par Le Miel Havre bénéficient d\'un soutien égal. Le soutien peut provenir de parrains d\'enfants, de sympathisants du programme, etc.',
    'program.step3Title': 'Placement des enfants',
    'program.step3Desc': 'Chaque enfant a accès à l\'éducation, y compris aux uniformes scolaires, aux livres, aux fournitures et au soutien scolaire si nécessaire. Parallèlement à leurs études, ils bénéficient de repas équilibrés, de bilans de santé réguliers et de soins médicaux afin de favoriser leur croissance et leur développement. Au sein de l\'orphelinat, les enfants apprennent également les valeurs du travail d\'équipe, de l\'empathie et de la coopération.',
    'program.step4Title': 'La vie après le programme',
    'program.step4Desc': 'Au moment où ils obtiennent leur diplôme, les enfants des orphelinats partenaires soutenus par le programme de bourses Le Miel Havre ont généralement terminé leur scolarité ou leur formation professionnelle. Cela leur permet d\'acquérir les outils nécessaires à leur autonomie, tels que des connaissances financières, des compétences en matière de résolution de problèmes et de prise de décision. Les diplômés repartent avec une base solide en matière de foi et de résilience.',
    // Why Sponsor
    'whySponsor.title': 'Pourquoi le parrainage est-il nécessaire ?',
    'whySponsor.subtitle': 'Les principaux défis auxquels les enfants sont confrontés sont les suivants :',
    'whySponsor.stat1': '2 500',
    'whySponsor.stat2': '1,6 million',
    'whySponsor.stat3': '27 %',
    'whySponsor.challenge1Title': 'Conflits et déplacements',
    'whySponsor.challenge1Desc': 'Les violences incessantes ont entraîné la fermeture de nombreuses écoles et le déplacement de familles, privant ainsi des milliers d\'enfants d\'accès à l\'éducation.',
    'whySponsor.challenge2Title': 'Obstacles économiques',
    'whySponsor.challenge2Desc': 'Malgré la gratuité de l\'enseignement primaire, les familles n\'ont pas les moyens d\'acheter les fournitures et les uniformes scolaires en raison de la crise économique.',
    'whySponsor.challenge3Title': 'Infrastructures et ressources limitées',
    'whySponsor.challenge3Desc': 'Les classes surpeuplées, les installations médiocres et la pénurie d\'enseignants qualifiés nuisent à la qualité de l\'enseignement.',
    'whySponsor.challenge4Title': 'Faibles résultats scolaires',
    'whySponsor.challenge4Desc': 'De nombreux élèves ont du mal à atteindre le niveau de compétence de base en raison de la perturbation de leur scolarité et du soutien pédagogique insuffisant.',
    'whySponsor.message': 'Faire un don n\'est pas seulement un acte de charité. C\'est aussi donner de l\'espoir à ces enfants qui n\'ont pas la possibilité ni la chance d\'aller dans de bonnes écoles. Ce faisant, nous leur faisons comprendre que, quelle que soit leur situation, ils ne doivent jamais renoncer à leurs rêves.',
    'whySponsor.childrenTitle': 'Nos Enfants',
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
    'sponsor.howProcessTitle': 'Comment fonctionne le programme de parrainage d\'enfants?',
    'sponsor.howProcessStep1': 'Le processus de jumelage peut prendre quelques mois, car le personnel s\'efforce de trouver l\'enfant qui convient à chaque parrain.',
    'sponsor.howProcessStep2': 'Une fois qu\'un enfant rejoint le programme de bourses Le Miel Havre, le personnel recueille des informations personnelles, médicales et scolaires afin de créer son profil.',
    'sponsor.howProcessStep3': 'Une fois le parrain jumelé, celui-ci reçoit un dossier de bienvenue contenant la photo, l\'histoire, le parcours et le numéro d\'identification de l\'enfant.',
    'sponsor.howProcessStep4': 'À partir de là, les parrains peuvent commencer à communiquer avec l\'enfant par courrier ou par e-mail en utilisant le numéro d\'identification de la bourse.',
    'sponsor.howProcessSlide1': 'Notre fondateur avec l\'orphelinat Flammme D\'amour',
    'sponsor.howProcessSlide2': 'Notre fondateur avec les enfants de l\'orphelinat',
    'sponsor.howProcessSlide3': 'Les enfants se préparent pour l\'école',
    'sponsor.howProcessNote': 'Remarque : le jumelage n\'est disponible que pour les parrains qui satisfont au niveau de financement requis.',
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
    'sponsor.benefitsTitle': 'Ce Que Votre Parrainage Apporte',
    'sponsor.benefit1': 'Frais de scolarité et frais d\'examen - Permet à l\'enfant de fréquenter l\'école sans interruption.',
    'sponsor.benefit2': 'Uniforme scolaire et chaussures - Fournit à l\'enfant des vêtements adaptés à l\'école.',
    'sponsor.benefit3': 'Livres et fournitures scolaires - Cahiers, stylos, crayons et tout le matériel scolaire nécessaire.',
    'sponsor.benefit4': 'Repas quotidiens - Aide l\'enfant à rester en bonne santé et concentré en classe.',
    'sponsor.benefit5': 'Soins de santé de base - Couvre les examens médicaux essentiels et les traitements nécessaires.',
    'sponsor.benefit6': 'Trousse d\'hygiène - Savon, dentifrice, serviettes hygiéniques pour les filles, lotion et autres articles de soins personnels.',
    'sponsor.benefit7': 'Mises à jour régulières pour le parrain - Photos, progrès scolaires et mises à jour sur le bien-être.',
    'sponsor.cost': 'Le coût est de 400 $ par année scolaire, soit environ 35 $ par mois. Votre engagement continu contribuera à changer la vie d\'un enfant. Vous pouvez payer mensuellement, trimestriellement, semestriellement ou annuellement. Vous pouvez également parrainer plusieurs enfants.',
    'sponsor.costFull': 'Le coût est de 400 $ par année scolaire, soit environ 35 $ par mois. Votre engagement continu contribuera à changer la vie d\'un enfant. Vous pouvez payer mensuellement, trimestriellement, semestriellement ou annuellement. Vous pouvez également parrainer plusieurs enfants. Quelle bénédiction de savoir que vous partagez l\'amour du Christ avec ces enfants précieux !',
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
    'sponsor.faq7A': '1) Dossier de bienvenue – Une fois votre premier paiement traité, vous recevrez un dossier de bienvenue par e-mail dans un délai d\'environ trois semaines. Ce dossier contient une brève biographie et une photo de votre enfant, ainsi que des informations sur le programme. 2) Photo et biographie mises à jour – Vous recevrez également chaque année une photo et une biographie mises à jour de votre enfant. 3) Newsletter – Nous envoyons également deux fois par an notre newsletter par e-mail.',
    'sponsor.faq8Q': 'Puis-je envoyer des cadeaux à mon enfant parrainé ?',
    'sponsor.faq8A': 'Dans le cadre du parrainage Le Miel Havre, le foyer pour enfants où vit votre enfant parrainé, Flamme D\'amour, vous aidera à célébrer l\'anniversaire de votre enfant ainsi que Noël, deux occasions spéciales dans la vie de chaque enfant. Vous pouvez envoyer un don supplémentaire pour rendre ces événements encore plus festifs.',
    'sponsor.faq9Q': 'Pourrai-je communiquer ou écrire à l\'enfant que je parraine ?',
    'sponsor.faq9A': 'Écrire à l\'enfant que vous parrainez est un moyen privilégié de nouer des liens durables et de construire une relation. Les enfants trop jeunes pour écrire ou ayant des besoins particuliers vous enverront une empreinte de leur main ou un dessin. Un membre du personnel du foyer écrira un message à votre intention au nom de l\'enfant.',
    'sponsor.faqIntro': 'Chaque enfant est un cadeau précieux de Dieu, en particulier ceux qui ont besoin de savoir qu\'ils ne sont pas oubliés. Ils ont besoin d\'anges ici-bas pour veiller sur eux et s\'assurer que leurs besoins sont satisfaits.',
    'sponsor.faqNew1Q': 'Combien de parrains pour chaque enfant ?',
    'sponsor.faqNew1A': 'Les parrains peuvent parrainer plusieurs enfants. Nous vous encourageons à écrire régulièrement à votre enfant parrainé afin de développer un lien et une relation privilégiés. Les enfants sont impatients de recevoir vos lettres !',
    'sponsor.faqNew2Q': 'Combien d\'enfants participent au programme de bourses Le Miel Havre ?',
    'sponsor.faqNew2A': 'Nous avons commencé avec 5 enfants vivant dans un orphelinat de Goma appelé Flamme D\'amour. Notre objectif à terme est que plus de 500 enfants vivant dans différents orphelinats puissent bénéficier du programme de bourses Le Miel Havre.',
    'sponsor.faqNew3Q': 'Où Le Miel Havre est-il présent ?',
    'sponsor.faqNew3A': 'Notre siège social se trouve à Kinshasa, en République démocratique du Congo. Nous travaillons avec des partenaires locaux qui nous aident à gérer le programme à Goma. À l\'avenir, nous prévoyons de nous étendre à d\'autres villes du pays.',
    'sponsor.faqNew4Q': 'Puis-je envoyer des cadeaux à mon enfant parrainé ?',
    'sponsor.faqNew4A': 'Dans le cadre du parrainage Le Miel Havre, le foyer pour enfants où vit votre enfant parrainé, Flamme D\'amour, vous aidera à célébrer l\'anniversaire de votre enfant ainsi que Noël, deux occasions spéciales dans la vie de chaque enfant. Vous pouvez envoyer un don supplémentaire pour rendre ces événements encore plus festifs.',
    'sponsor.faqNew5Q': 'Pourrai-je communiquer ou écrire à l\'enfant que je parraine ?',
    'sponsor.faqNew5A': 'Écrire à l\'enfant que vous parrainez est un moyen privilégié de nouer des liens durables et de construire une relation. Les enfants trop jeunes pour écrire ou ayant des besoins particuliers vous enverront une empreinte de leur main ou un dessin. Un membre du personnel du foyer écrira un message à votre intention au nom de l\'enfant.',
    'sponsor.faqNew6Q': 'Pourquoi parrainer un enfant dans le cadre du programme de bourses Le Miel Havre?',
    'sponsor.faqNew6A': 'Depuis sa création en 2025, Le Miel Havre a pour objectif d\'améliorer la vie des enfants issus de milieux extrêmement pauvres et/ou abandonnés ou retirés de leur famille en raison d\'une situation à risque, grâce à l\'éducation. Votre soutien permettra à ces enfants de guérir, de s\'épanouir et de grandir dans un environnement familial stable et aimant. C\'est uniquement grâce à nos parrains que nous pouvons offrir une bonne éducation avec les éléments de base indispensables (nourriture, vêtements, fournitures scolaires, etc.), organiser des événements spéciaux pour les anniversaires et Noël, effectuer de petites réparations dans les maisons, et bien plus encore.',
    'sponsor.faqNew7Q': 'Mon enfant parrainé connaît-il mon nom complet et mon adresse ?',
    'sponsor.faqNew7A': 'Afin de protéger votre vie privée, nous ne communiquons que votre prénom à votre enfant parrainé. Nous ne lui fournissons pas votre adresse, votre ville ou votre état de résidence.',
    'sponsor.faqNew8Q': 'Pourrai-je choisir mon enfant ?',
    'sponsor.faqNew8A': 'Tous les enfants participant à ce programme ont besoin et méritent amour et soutien. Afin d\'être aussi équitables et utiles que possible, nous sélectionnons avec soin un enfant pour vous en fonction de ses besoins les plus urgents. Cette méthode de sélection nous permet non seulement de répondre en priorité aux besoins les plus urgents, mais également de réduire nos frais administratifs en évitant d\'avoir à faire correspondre les critères demandés à un enfant en particulier. Si l\'enfant que vous parrainez quitte l\'orphelinat, est adopté, va vivre chez des proches ou atteint l\'âge adulte, vous en serez informé et aurez la possibilité de parrainer un autre enfant.',
    'sponsor.faqNew9Q': 'Que vais-je recevoir lorsque je parraine un enfant ?',
    'sponsor.faqNew9A': '1) Dossier de bienvenue – Une fois votre premier paiement traité, vous recevrez un dossier de bienvenue par e-mail dans un délai d\'environ trois semaines. Ce dossier contient une brève biographie et une photo de votre enfant, ainsi que des informations sur le programme. 2) Photo et biographie mises à jour – Vous recevrez également chaque année une photo et une biographie mises à jour de votre enfant. Quel bonheur de voir votre enfant grandir et mûrir d\'année en année ! 3) Newsletter – Nous envoyons également deux fois par an notre newsletter par e-mail. Elle regorge de belles histoires et de photos des enfants bénéficiant du programme de bourses Le Miel Havre.',
    'sponsor.button': 'Parrainez un Enfant Aujourd\'hui',
    'sponsor.sponsorThemTitle': 'Parrainez-les dès aujourd\'hui',
    'sponsor.child1Meet': 'Rencontrez Prosper Muhubiri Ciririmbo',
    'sponsor.child1Name': 'Prosper Muhubiri Ciririmbo',
    'sponsor.child1Age': '10 ans',
    'sponsor.child1Birthdate': '05/05/2015',
    'sponsor.child1Class': '5e primaire',
    'sponsor.child2Meet': 'Rencontrez Arléne Tumusifu Ciririmbo',
    'sponsor.child2Name': 'Arléne Tumusifu Ciririmbo',
    'sponsor.child2Age': '12 ans',
    'sponsor.child2Birthdate': '04/04/2013',
    'sponsor.child2Class': '5e primaire',
    'sponsor.child3Meet': 'Rencontrez François Matuko Birekeraho',
    'sponsor.child3Name': 'François Matuko Birekeraho',
    'sponsor.child3Age': '11 ans',
    'sponsor.child3Birthdate': '16/06/2014',
    'sponsor.child3Class': '5e primaire',
    'sponsor.child4Meet': 'Rencontrez Elie Mapendo Espoir',
    'sponsor.child4Name': 'Elie Mapendo Espoir',
    'sponsor.child4Age': '9 ans',
    'sponsor.child4Birthdate': '11/07/2016',
    'sponsor.child4Class': '2e primaire',
    'sponsor.child5Meet': 'Rencontrez Justin Maisha Semirama',
    'sponsor.child5Name': 'Justin Maisha Semirama',
    'sponsor.child5Age': '9 ans',
    'sponsor.child5Birthdate': '16/06/2016',
    'sponsor.child5Class': '5e primaire',
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
    'footer.companyName': 'Le Miel Havre',
    'footer.email': 'Lemielhavre@gmail.com',
    'footer.phone': '+243 976 752 660',
    'footer.location': 'Goma • Kinshasa',
    'footer.followUs': 'Suivez-nous',
    // About Page
    'about.badge': 'À PROPOS DE NOUS',
    'about.title': 'À propos de',
    'about.description': 'Nous sommes dédiés à transformer les vies des enfants en République Démocratique du Congo grâce à l\'éducation, au soutien et à la compassion.',
    'about.missionBadge': 'NOTRE MISSION',
    'about.missionTitle': 'Notre Mission &',
    'about.missionP1': 'Le Miel Havre est une organisation à but non lucratif engagée à améliorer les vies des enfants en République Démocratique du Congo grâce à l\'éducation et aux programmes de soutien complets.',
    'about.missionP2': 'Notre mission est de fournir des opportunités éducatives, des ressources essentielles et un environnement stable et aimant pour les enfants qui viennent de l\'extrême pauvreté ou ont été abandonnés ou retirés de leurs familles.',
    'about.missionP3': 'Nous envisageons un avenir où chaque enfant en RDC a accès à une éducation de qualité, des soins de santé appropriés et le soutien dont ils ont besoin pour s\'épanouir et devenir des adultes autosuffisants.',
    'about.historyTitle': 'Notre Histoire',
    'about.historyP1': 'De nombreux enfants à Goma sont confrontés à des difficultés financières, à des guerres incessantes et à une instabilité politique qui les empêchent de recevoir une éducation adéquate.',
    'about.historyP2': 'Inspirée par cette situation, notre fondatrice, qui a grandi à Goma, a vu sa mère venir en aide aux orphelins dès son plus jeune âge. Cette expérience précoce a suscité en elle une passion durable pour le don et l\'aide aux enfants dans le besoin.',
    'about.historyP3': 'Après avoir étudié et voyagé à l\'étranger, elle a réalisé à quel point l\'éducation pouvait transformer des vies. Déterminée à offrir la même chance aux enfants de son pays natal, elle a créé le Miel Design et consacre 10 % de chaque vente au lancement de la Fondation le Miel Havre en 2025.',
    'about.historyP3b': 'Depuis sa création, Le Miel Havre\'s a pour objectif d\'améliorer la vie des enfants issus de milieux extrêmement pauvres et/ou abandonnés ou séparés de leur famille en raison d\'une situation à risque, grâce à l\'éducation.',
    'about.historyP4': 'Nous avons commencé par aider cinq enfants vivant à Flamme D\'amour, à Goma. Aujourd\'hui, nous opérons depuis notre siège social à Kinshasa et travaillons avec des partenaires locaux pour gérer et développer nos programmes. Nous prévoyons d\'étendre bientôt nos activités à d\'autres villes.',
    'about.historyP5': 'À la Fondation Le Miel Havre, nous pensons que chaque enfant mérite d\'avoir accès à une éducation de qualité, quelle que soit son origine. Ensemble, nous construisons un avenir meilleur, un enfant à la fois.',
    'about.founderTitle': 'Message de la Fondatrice',
    'about.founderName': 'Laetitia',
    'about.founderRole': 'Fondatrice de Le Miel Havre',
    'about.founderMessage': 'Bienvenue à la fondation Le Miel Havre. Nous sommes très honorés que vous vous joigniez à notre mission visant à autonomiser les enfants défavorisés grâce à l\'éducation. Votre décision de participer à ce programme contribue à ouvrir la voie à un avenir meilleur, un enfant à la fois.',
    'about.challengesTitle': 'Pourquoi le Parrainage Est-il Nécessaire ?',
    'about.challenge1': 'Conflits et déplacements : Les violences incessantes ont entraîné la fermeture de nombreuses écoles et le déplacement de familles, privant ainsi des milliers d\'enfants d\'accès à l\'éducation.',
    'about.challenge2': 'Obstacles économiques : Malgré la gratuité de l\'enseignement primaire, les familles n\'ont pas les moyens d\'acheter les fournitures et les uniformes scolaires en raison de la crise économique.',
    'about.challenge3': 'Infrastructures et ressources limitées : Les classes surpeuplées, les installations médiocres et la pénurie d\'enseignants qualifiés nuisent à la qualité de l\'enseignement.',
    'about.challenge4': 'Faibles résultats scolaires : De nombreux élèves ont du mal à atteindre le niveau de compétence de base en raison de la perturbation de leur scolarité et du soutien pédagogique insuffisant.',
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
    'nav.parrainage': 'Sponsorship',
    'nav.contact': 'Contact',
    // Hero
    'hero.badge': 'TRANSFORM LIVES',
    'hero.title1': 'Transform the life',
    'hero.title2': 'of a child through',
    'hero.title3': 'education',
    'hero.description': 'Become a sponsor today and help pave the way for a better future, one child at a time.',
    'hero.button': 'Read the Booklet',
    'hero.feature1': 'View our Mission',
    'hero.feature2': 'Top Founders',
    'hero.feature3': 'Request a Quote',
    'hero.slide1': 'Charity, Faith and Hope',
    'hero.slide2': 'Help the Homeless',
    'hero.slide3': 'Charity life',
    'hero.slide4': 'Making a Difference',
    'hero.welcomeTitle': 'Welcome to Le Miel Havre',
    'hero.welcomeMessage': 'Welcome to Le Miel Havre Foundation. We are very honored that you are joining our mission to empower disadvantaged children through education. Your decision to participate in this program helps pave the way for a better future, one child at a time.',
    'hero.togetherText': 'Together, we can change a child\'s life.',
    // Stats
    'stats.title': 'Our Impact in Numbers',
    'stats.description': 'The challenges children in eastern DRC face',
    'stats.donors': '2,500',
    'stats.volunteers': '1.6M',
    'stats.beneficiaries': '27%',
    'stats.projects': '5',
    'stats.donorsDesc': 'Schools closed',
    'stats.volunteersDesc': 'Children out of school',
    'stats.beneficiariesDesc': 'Reached minimum level',
    'stats.projectsDesc': 'Children in program',
    'stats.schoolsClosed': '2,500',
    'stats.schoolsClosedDesc': 'Schools and learning places closed',
    'stats.childrenOutOfSchool': '1.6M',
    'stats.childrenOutOfSchoolDesc': 'Children in eastern DRC are not in school',
    'stats.minimumLevel': '27%',
    'stats.minimumLevelDesc': 'Of students have reached the minimum required level',
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
    // Program Section
    'program.title': 'Our Sponsorship Program',
    'program.description': 'The Le Miel Havre scholarship program allows children to access a safe, quality, and high-performing school. The fundamental needs of each child are met.',
    'program.step1Title': 'Children\'s Referral and Assessment',
    'program.step1Desc': 'Children are usually referred to the orphanage supported by the Le Miel Havre scholarship program through local churches, community organizations, and social services.',
    'program.step2Title': 'Fund Allocation Process',
    'program.step2Desc': 'Each child is linked to a sponsor who commits to providing monthly or annual financial support. Although sponsorship is personalized, contributions are pooled within the program to ensure that all children living in a partner orphanage supported by Le Miel Havre benefit from equal support. Support can come from child sponsors, program supporters, etc.',
    'program.step3Title': 'Children\'s Placement',
    'program.step3Desc': 'Each child has access to education, including school uniforms, books, supplies, and tutoring if necessary. Alongside their studies, they benefit from balanced meals, regular health checkups, and medical care to promote their growth and development. Within the orphanage, children also learn the values of teamwork, empathy, and cooperation.',
    'program.step4Title': 'Life After the Program',
    'program.step4Desc': 'By the time they graduate, children in partner orphanages supported by the Le Miel Havre scholarship program have generally completed their schooling or vocational training. This enables them to acquire the tools necessary for their autonomy, such as financial knowledge, problem-solving and decision-making skills. Graduates leave with a solid foundation in faith and resilience.',
    // Why Sponsor
    'whySponsor.title': 'Why is sponsorship necessary?',
    'whySponsor.subtitle': 'The main challenges children face are as follows:',
    'whySponsor.stat1': '2,500',
    'whySponsor.stat2': '1.6 million',
    'whySponsor.stat3': '27%',
    'whySponsor.challenge1Title': 'Conflicts and displacement',
    'whySponsor.challenge1Desc': 'Incessant violence has led to the closure of many schools and the displacement of families, depriving thousands of children of access to education.',
    'whySponsor.challenge2Title': 'Economic obstacles',
    'whySponsor.challenge2Desc': 'Despite free primary education, families cannot afford to buy supplies and school uniforms due to the economic crisis.',
    'whySponsor.challenge3Title': 'Limited infrastructure and resources',
    'whySponsor.challenge3Desc': 'Overcrowded classrooms, poor facilities, and a shortage of qualified teachers undermine the quality of education.',
    'whySponsor.challenge4Title': 'Low academic performance',
    'whySponsor.challenge4Desc': 'Many students struggle to reach basic competency levels due to disrupted schooling and insufficient educational support.',
    'whySponsor.message': 'Making a donation is not just an act of charity. It is also giving hope to these children who do not have the opportunity or chance to attend good schools. In doing so, we make them understand that, whatever their situation, they must never give up on their dreams.',
    'whySponsor.childrenTitle': 'Our Children',
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
    'sponsor.howProcessTitle': 'How Does the Children\'s Sponsorship Program Work?',
    'sponsor.howProcessStep1': 'The matching process can take several months, as staff work to find the child who is right for each sponsor.',
    'sponsor.howProcessStep2': 'Once a child joins the Le Miel Havre scholarship program, staff gather personal, medical, and academic information to create their profile.',
    'sponsor.howProcessStep3': 'Once the sponsor is matched, they receive a welcome packet containing the child\'s photo, story, background, and identification number.',
    'sponsor.howProcessStep4': 'From there, sponsors can begin communicating with the child by mail or email using the scholarship identification number.',
    'sponsor.howProcessSlide1': 'Our founder with Flammme D\'amour orphanage',
    'sponsor.howProcessSlide2': 'Our founder with the children of the orphanage',
    'sponsor.howProcessSlide3': 'Children preparing for school',
    'sponsor.howProcessNote': 'Note: Matching is only available for sponsors who meet the required funding level.',
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
    'sponsor.benefitsTitle': 'What Your Sponsorship Provides',
    'sponsor.benefit1': 'School fees and examination fees - Allows the child to attend school without interruption.',
    'sponsor.benefit2': 'School uniform and shoes - Provides the child with appropriate school clothing.',
    'sponsor.benefit3': 'Books and school supplies - Notebooks, pens, pencils, and all necessary school materials.',
    'sponsor.benefit4': 'Daily meals - Helps the child stay healthy and focused in class.',
    'sponsor.benefit5': 'Basic health care - Covers essential medical exams and necessary treatments.',
    'sponsor.benefit6': 'Hygiene kit - Soap, toothpaste, sanitary pads for girls, lotion, and other personal care items.',
    'sponsor.benefit7': 'Regular updates for the sponsor - Photos, academic progress, and updates on well-being.',
    'sponsor.cost': 'The cost is $400 per school year, which is approximately $35 per month. Your ongoing commitment will help change a child\'s life. You can pay monthly, quarterly, semestrially, or annually. You can also sponsor multiple children.',
    'sponsor.costFull': 'The cost is $400 per school year, which is approximately $35 per month. Your ongoing commitment will help change a child\'s life. You can pay monthly, quarterly, semestrially, or annually. You can also sponsor multiple children. What a blessing to know that you are sharing Christ\'s love with these precious children!',
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
    'sponsor.faq7A': '1) Welcome Packet – Once your first payment is processed, you will receive a welcome packet via email within approximately three weeks. This packet contains a brief biography and photo of your child, as well as information about the program. 2) Updated photo and biography – You will also receive an updated annual photo and biography of your child. 3) Newsletter – We also send our newsletter via email twice a year.',
    'sponsor.faq8Q': 'Can I send gifts to my sponsored child?',
    'sponsor.faq8A': 'As part of Le Miel Havre sponsorship, the children\'s home where your sponsored child lives, Flamme D\'amour, will help you celebrate your child\'s birthday as well as Christmas, two special occasions in every child\'s life. You can send an additional donation to make these events even more festive.',
    'sponsor.faq9Q': 'Will I be able to communicate or write to the child I sponsor?',
    'sponsor.faq9A': 'Writing to the child you sponsor is a privileged way to build lasting bonds and build a relationship. Children too young to write or with special needs will send you a handprint or drawing. A staff member from the home will write a message on behalf of the child.',
    'sponsor.faqIntro': 'Each child is a precious gift from God, especially those who need to know they are not forgotten. They need angels here on earth to watch over them and ensure their needs are met.',
    'sponsor.faqNew1Q': 'How many sponsors per child?',
    'sponsor.faqNew1A': 'Sponsors can sponsor multiple children. We encourage you to write regularly to your sponsored child to develop a special bond and relationship. Children are eager to receive your letters!',
    'sponsor.faqNew2Q': 'How many children participate in the Le Miel Havre scholarship program?',
    'sponsor.faqNew2A': 'We started with 5 children living in an orphanage in Goma called Flamme D\'amour. Our long-term goal is for more than 500 children living in different orphanages to benefit from the Le Miel Havre scholarship program.',
    'sponsor.faqNew3Q': 'Where is Le Miel Havre located?',
    'sponsor.faqNew3A': 'Our headquarters is in Kinshasa, Democratic Republic of Congo. We work with local partners who help us manage the program in Goma. In the future, we plan to expand to other cities in the country.',
    'sponsor.faqNew4Q': 'Can I send gifts to my sponsored child?',
    'sponsor.faqNew4A': 'As part of Le Miel Havre sponsorship, the children\'s home where your sponsored child lives, Flamme D\'amour, will help you celebrate your child\'s birthday and Christmas, two special occasions in every child\'s life. You can send an additional donation to make these events even more festive.',
    'sponsor.faqNew5Q': 'Will I be able to communicate or write to the child I sponsor?',
    'sponsor.faqNew5A': 'Writing to the child you sponsor is a privileged way to build lasting bonds and build a relationship. Children too young to write or with special needs will send you a handprint or drawing. A staff member from the home will write a message on behalf of the child.',
    'sponsor.faqNew6Q': 'Why sponsor a child through the Le Miel Havre scholarship program?',
    'sponsor.faqNew6A': 'Since its inception in 2025, Le Miel Havre has aimed to improve the lives of children from extremely poor backgrounds and/or abandoned or removed from their families due to risky situations, through education. Your support will enable these children to heal, thrive, and grow in a stable and loving family environment. It is only through our sponsors that we can provide a good education with essential basic items (food, clothing, school supplies, etc.), organize special events for birthdays and Christmas, make small repairs to homes, and much more.',
    'sponsor.faqNew7Q': 'Does my sponsored child know my full name and address?',
    'sponsor.faqNew7A': 'To protect your privacy, we only share your first name with your sponsored child. We do not provide them with your address, city, or state of residence.',
    'sponsor.faqNew8Q': 'Can I choose my child?',
    'sponsor.faqNew8A': 'All children participating in this program need and deserve love and support. To be as fair and helpful as possible, we carefully select a child for you based on their most urgent needs. This selection method allows us not only to prioritize the most urgent needs, but also to reduce our administrative costs by avoiding having to match requested criteria to a particular child. If the child you sponsor leaves the orphanage, is adopted, goes to live with relatives, or reaches adulthood, you will be informed and have the opportunity to sponsor another child.',
    'sponsor.faqNew9Q': 'What will I receive when I sponsor a child?',
    'sponsor.faqNew9A': '1) Welcome package – Once your first payment is processed, you will receive a welcome package by email within approximately three weeks. This package contains a brief biography and photo of your child, as well as information about the program. 2) Updated photo and biography – You will also receive an updated photo and biography of your child each year. What joy to see your child grow and mature year after year! 3) Newsletter – We also send our newsletter by email twice a year. It is full of beautiful stories and photos of children benefiting from the Le Miel Havre scholarship program.',
    'sponsor.button': 'Sponsor a Child Today',
    'sponsor.sponsorThemTitle': 'Sponsor Them Today',
    'sponsor.child1Meet': 'Meet Prosper Muhubiri Ciririmbo',
    'sponsor.child1Name': 'Prosper Muhubiri Ciririmbo',
    'sponsor.child1Age': '10 years old',
    'sponsor.child1Birthdate': '05/05/2015',
    'sponsor.child1Class': '5th grade',
    'sponsor.child2Meet': 'Meet Arléne Tumusifu Ciririmbo',
    'sponsor.child2Name': 'Arléne Tumusifu Ciririmbo',
    'sponsor.child2Age': '12 years old',
    'sponsor.child2Birthdate': '04/04/2013',
    'sponsor.child2Class': '5th grade',
    'sponsor.child3Meet': 'Meet François Matuko Birekeraho',
    'sponsor.child3Name': 'François Matuko Birekeraho',
    'sponsor.child3Age': '11 years old',
    'sponsor.child3Birthdate': '16/06/2014',
    'sponsor.child3Class': '5th grade',
    'sponsor.child4Meet': 'Meet Elie Mapendo Espoir',
    'sponsor.child4Name': 'Elie Mapendo Espoir',
    'sponsor.child4Age': '9 years old',
    'sponsor.child4Birthdate': '11/07/2016',
    'sponsor.child4Class': '2nd grade',
    'sponsor.child5Meet': 'Meet Justin Maisha Semirama',
    'sponsor.child5Name': 'Justin Maisha Semirama',
    'sponsor.child5Age': '9 years old',
    'sponsor.child5Birthdate': '16/06/2016',
    'sponsor.child5Class': '5th grade',
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
    'footer.companyName': 'Le Miel Havre',
    'footer.email': 'Lemielhavre@gmail.com',
    'footer.phone': '+243 976 752 660',
    'footer.location': 'Goma • Kinshasa',
    'footer.followUs': 'Follow Us',
    // About Page
    'about.badge': 'ABOUT US',
    'about.title': 'About',
    'about.description': 'We are dedicated to transforming the lives of children in the Democratic Republic of Congo through education, support, and compassion.',
    'about.missionBadge': 'OUR MISSION',
    'about.missionTitle': 'Our Mission &',
    'about.missionP1': 'Le Miel Havre is a non-profit organization committed to improving the lives of children in the Democratic Republic of Congo through education and comprehensive support programs.',
    'about.missionP2': 'Our mission is to provide educational opportunities, essential resources, and a stable, loving environment for children who come from extreme poverty or have been abandoned or removed from their families.',
    'about.missionP3': 'We envision a future where every child in the DRC has access to quality education, proper healthcare, and the support they need to thrive and become self-sufficient adults.',
    'about.historyTitle': 'Our History',
    'about.historyP1': 'Many children in Goma face financial difficulties, incessant wars, and political instability that prevent them from receiving adequate education.',
    'about.historyP2': 'Inspired by this situation, our founder, who grew up in Goma, saw her mother helping orphans from a young age. This early experience instilled in her a lasting passion for giving and helping children in need.',
    'about.historyP3': 'After studying and traveling abroad, she realized how education could transform lives. Determined to offer the same opportunity to children in her home country, she created Miel Design and dedicates 10% of each sale to launch the Le Miel Havre Foundation in 2025.',
    'about.historyP3b': 'Since its creation, Le Miel Havre\'s goal has been to improve the lives of children from extremely poor backgrounds and/or abandoned or separated from their families due to a risky situation, through education.',
    'about.historyP4': 'We started by helping five children living at Flamme D\'amour in Goma. Today, we operate from our headquarters in Kinshasa and work with local partners to manage and develop our programs. We plan to expand to other cities soon.',
    'about.historyP5': 'At Le Miel Havre Foundation, we believe that every child deserves access to quality education, regardless of their background. Together, we are building a better future, one child at a time.',
    'about.founderTitle': 'Message from the Founder',
    'about.founderName': 'Laetitia',
    'about.founderRole': 'Founder of Le Miel Havre',
    'about.founderMessage': 'Welcome to Le Miel Havre Foundation. We are very honored that you are joining our mission to empower disadvantaged children through education. Your decision to participate in this program helps pave the way for a better future, one child at a time.',
    'about.challengesTitle': 'Why is Sponsorship Necessary?',
    'about.challenge1': 'Conflicts and displacement: Incessant violence has led to the closure of many schools and the displacement of families, depriving thousands of children of access to education.',
    'about.challenge2': 'Economic obstacles: Despite free primary education, families cannot afford to buy supplies and school uniforms due to the economic crisis.',
    'about.challenge3': 'Limited infrastructure and resources: Overcrowded classrooms, poor facilities, and a shortage of qualified teachers undermine the quality of education.',
    'about.challenge4': 'Low academic performance: Many students struggle to reach basic competency levels due to disrupted schooling and insufficient educational support.',
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

