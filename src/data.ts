import { Expertise, Benefit, ApproachStep, CaseStudy } from './types';

export const EXPERTISES: Expertise[] = [
  {
    id: 'agents-ia',
    title: "Développement d'Agents IA",
    shortDescription: "Conception d'agents autonomes intelligents capables de prendre des décisions, de planifier et d'exécuter des tâches complexes.",
    fullDescription: "Nos agents IA ne se contentent pas de répondre à des questions : ils agissent. Équipés de capacités de raisonnement multi-étapes et d'accès aux outils de votre entreprise, ils orchestrent des processus entiers de manière autonome.",
    iconName: 'Cpu',
    features: [
      "Raisonnement autonome et planification",
      "Prise de décision basée sur le contexte",
      "Intégration d'outils tiers (APIs, bases de données)",
      "Agents spécialisés par métier (Ventes, Support, Ops)"
    ],
    techStack: ["LangGraph", "LangChain", "CrewAI", "Llama 3.3 via Groq", "Python"],
    useCase: {
      problem: "Une équipe support passait 4 heures par jour à trier, classifier et attribuer manuellement les tickets entrants complexes.",
      solution: "Déploiement d'un Agent de Tri Autonome qui analyse le contenu, interroge la base de connaissances et le CRM, et applique la résolution ou escalade au bon expert.",
      impact: "92% des tickets classés et enrichis instantanément, réduction du temps de résolution global de 45%."
    }
  },
  {
    id: 'chatbots',
    title: "Chatbots Intelligents",
    shortDescription: "Assistants conversationnels de nouvelle génération offrant un support client et utilisateur 24/7 de niveau humain.",
    fullDescription: "Oubliez les arbres de décision rigides. Nos chatbots s'appuient sur les LLMs les plus récents pour comprendre l'intention réelle de l'utilisateur, gérer l'ambiguïté et tenir des conversations fluides, empathiques et résolutives.",
    iconName: 'MessageSquareCode',
    features: [
      "Compréhension du langage naturel (NLU) avancée",
      "Gestion d'intentions complexes et multitâches",
      "Mémoire conversationnelle persistante",
      "Support multilingue natif (plus de 50 langues)"
    ],
    techStack: ["Llama 3.1 via Groq", "React", "Node.js", "WebSockets", "TailwindCSS"],
    useCase: {
      problem: "Un site e-commerce subissait une surcharge du service client durant les week-ends et soirées, entraînant une perte de ventes.",
      solution: "Intégration d'un chatbot conversationnel connecté en temps réel aux stocks et au système de suivi des colis.",
      impact: "78% des questions résolues sans intervention humaine, augmentation de 14% du taux de conversion nocturne."
    }
  },
  {
    id: 'rag',
    title: "Systèmes RAG (Retrieval-Augmented Generation)",
    shortDescription: "Connectez l'IA générative à vos bases de connaissances internes en toute sécurité pour des réponses ultra-précises sans hallucination.",
    fullDescription: "Le RAG permet à l'IA d'interroger vos documents internes (PDFs, Wikis, contrats, bases SQL) en temps réel pour formuler des réponses sourcées, précises et à jour, tout en garantissant la stricte confidentialité de vos données.",
    iconName: 'Database',
    features: [
      "Indexation intelligente de documents multi-formats",
      "Recherche vectorielle sémantique hybride",
      "Garantie zéro hallucination (citations systématiques)",
      "Respect strict des droits d'accès et permissions"
    ],
    techStack: ["Pinecone", "ChromaDB", "LlamaIndex", "LangChain", "Groq / Llama Embeddings"],
    useCase: {
      problem: "Les conseillers financiers d'un grand cabinet perdaient un temps précieux à chercher des clauses spécifiques dans des milliers de pages de régulation.",
      solution: "Création d'un moteur RAG d'aide à la conformité indexant l'ensemble de la documentation réglementaire.",
      impact: "Recherche documentaire réduite de 25 minutes à 12 secondes, conformité des réponses validée à 100%."
    }
  },
  {
    id: 'workflows',
    title: "Automatisation de Workflows",
    shortDescription: "Orchestration et connexion de vos applications d'entreprise pour éliminer la saisie manuelle et les tâches répétitives.",
    fullDescription: "Nous créons des ponts intelligents entre vos logiciels métier (ERP, CRM, emails, facturation) pour créer des flux de travail fluides où l'information circule automatiquement et sans erreur, enrichie par l'intelligence artificielle.",
    iconName: 'Workflow',
    features: [
      "Analyse des goulots d'étranglement existants",
      "Scénarios d'automatisation complexes avec embranchements",
      "Parsing de documents automatiques (factures, devis)",
      "Monitoring en temps réel et alertes d'erreurs"
    ],
    techStack: ["n8n", "Make.com", "Zapier", "Custom Python APIs", "Docker"],
    useCase: {
      problem: "L'onboarding d'un nouveau client nécessitait 14 étapes manuelles sur 5 logiciels différents, générant des retards et des fautes de frappe.",
      solution: "Automatisation complète du flux de la signature du contrat à la création des accès et à l'envoi du kit de bienvenue.",
      impact: "Temps d'onboarding réduit de 48 heures à 3 minutes, taux d'erreur humaine réduit à 0%."
    }
  },
  {
    id: 'data',
    title: "Analyse de Données & Prédictions",
    shortDescription: "Transformez vos données brutes en insights stratégiques et en modèles prédictifs pour guider vos décisions.",
    fullDescription: "Ne vous contentez pas de regarder le passé. Nos modèles d'analyse avancés et de machine learning vous permettent de repérer les tendances émergentes, de prédire les comportements d'achat ou de détecter les anomalies opérationnelles.",
    iconName: 'BarChart3',
    features: [
      "Pipelines d'ingestion et de nettoyage de données",
      "Dashboards interactifs d'aide à la décision",
      "Algorithmes de machine learning prédictif",
      "Segmentation client et prévision de la demande"
    ],
    techStack: ["Python", "Pandas", "Scikit-Learn", "D3.js", "BigQuery", "Looker"],
    useCase: {
      problem: "Un distributeur industriel souffrait de ruptures de stock fréquentes suivies de périodes de surstockage coûteuses.",
      solution: "Implémentation d'un algorithme de prévision de la demande basé sur l'historique de ventes et les facteurs externes.",
      impact: "Réduction de 30% des coûts de stockage et baisse de 85% des ruptures de stock critiques."
    }
  },
  {
    id: 'generative',
    title: "Solutions d'IA Générative",
    shortDescription: "Création de contenus, personnalisation de masse et outils de créativité assistée par IA adaptés à votre marque.",
    fullDescription: "Intégrez les capacités de génération de texte, d'images ou de code directement dans vos produits. Nous adaptons les technologies génératives à votre charte éditoriale et à vos contraintes de marque pour décupler votre créativité.",
    iconName: 'Sparkles',
    features: [
      "Génération automatique de fiches produits & articles",
      "Génération d'images marketing personnalisées",
      "Fine-tuning de modèles sur votre ton éditorial",
      "Traduction et adaptation de contenu contextuelle"
    ],
    techStack: ["Llama 3 via Groq", "Hugging Face", "Fine-tuning", "Vite"],
    useCase: {
      problem: "Une agence de communication devait produire des centaines de déclinaisons de bannières et de textes publicitaires personnalisés par cible.",
      solution: "Développement d'un portail interne de co-création assistée par IA pour générer textes et visuels de campagne conformes à la marque.",
      impact: "Vitesse de production des campagnes multipliée par 5, taux d'engagement des publicités accru de 22%."
    }
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'productivity',
    title: "Gain de productivité",
    description: "Libérez vos équipes des tâches administratives et répétitives chronophages pour leur permettre de se concentrer sur des tâches à haute valeur ajoutée.",
    metric: "+40%",
    metricLabel: "d'efficacité opérationnelle constatée",
    iconName: 'TrendingUp'
  },
  {
    id: 'costs',
    title: "Réduction des coûts",
    description: "Optimisez vos ressources et minimisez les erreurs humaines de saisie ou d'interprétation. Réduisez vos coûts de traitement et accélérez vos cycles.",
    metric: "-60%",
    metricLabel: "de temps passé sur la saisie manuelle",
    iconName: 'Zap'
  },
  {
    id: 'ux',
    title: "Expérience client transcendée",
    description: "Offrez des réponses instantanées, précises et ultra-personnalisées à vos clients ou collaborateurs, de jour comme de nuit, sans aucun délai.",
    metric: "24/7",
    metricLabel: "disponibilité absolue de vos services",
    iconName: 'Smile'
  },
  {
    id: 'growth',
    title: "Croissance accélérée",
    description: "Prenez une longueur d'avance sur vos concurrents grâce à des processus agiles, des décisions basées sur la donnée et des outils évolutifs.",
    metric: "3x",
    metricLabel: "plus de projets menés à effectif constant",
    iconName: 'Award'
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    stepNumber: 1,
    title: "Audit & Cadrage",
    subtitle: "Comprendre vos goulots d'étranglement",
    description: "Nous analysons vos processus métier actuels, vos outils et vos flux de données pour identifier les opportunités d'automatisation et d'intégration d'IA ayant le ROI le plus élevé.",
    duration: "1 - 2 semaines",
    details: [
      "Ateliers d'idéation avec vos équipes métiers",
      "Cartographie précise de vos flux d'information actuels",
      "Rapport d'opportunité avec calcul de ROI estimatif",
      "Sélection des cas d'usage prioritaires (Quick Wins)"
    ]
  },
  {
    stepNumber: 2,
    title: "Prototypage (PoC)",
    subtitle: "Valider la faisabilité technique",
    description: "Nous construisons un prototype fonctionnel (Proof of Concept) sur vos données réelles pour tester la pertinence de l'IA et l'efficacité des connecteurs logiciels.",
    duration: "2 - 3 semaines",
    details: [
      "Configuration des modèles de langage de base",
      "Mise en place de la recherche vectorielle (RAG local)",
      "Développement d'une interface de démonstration simplifiée",
      "Ajustement et validation de la précision des réponses"
    ]
  },
  {
    stepNumber: 3,
    title: "Développement & Intégration",
    subtitle: "Bâtir une solution robuste",
    description: "Nous industrialisons le prototype pour en faire une application stable, hautement sécurisée, intégrée à vos systèmes informatiques (SSO, ERP, CRM) et conforme RGPD.",
    duration: "4 - 8 semaines",
    details: [
      "Développement de l'architecture finale (APIs et UI)",
      "Connexion sécurisée aux outils de votre entreprise",
      "Tests intensifs de robustesse, sécurité et conformité",
      "Fine-tuning ou optimisation des coûts de jetons (tokens)"
    ]
  },
  {
    stepNumber: 4,
    title: "Déploiement & Onboarding",
    subtitle: "Garantir l'adoption par vos équipes",
    description: "Nous déployons la solution en production de manière progressive et formons vos collaborateurs pour maximiser le taux d'adoption et l'efficacité opérationnelle.",
    duration: "1 - 2 semaines",
    details: [
      "Mise en service en production (Cloud sécurisé)",
      "Sessions de formation adaptées aux différents profils",
      "Documentation complète et tutoriels interactifs",
      "Mise en place d'indicateurs de performance (KPIs)"
    ]
  },
  {
    stepNumber: 5,
    title: "Support & Optimisation",
    subtitle: "Amélioration continue des performances",
    description: "L'IA évolue rapidement, et vos besoins aussi. Nous assurons un suivi technique et fonctionnel continu pour maintenir, sécuriser et améliorer vos systèmes d'IA.",
    duration: "Continu",
    details: [
      "Maintenance corrective et préventive active",
      "Analyse des logs d'utilisation pour optimiser l'IA",
      "Mises à jour vers les modèles de langage les plus récents",
      "Ajustements de vos workflows selon vos évolutions"
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-nexia',
    clientName: "Nexia Logistics",
    clientIndustry: "Supply Chain & Logistique",
    title: "Automatisation IA du traitement des litiges douaniers",
    category: "Agents IA & Workflows",
    problem: "Nexia devait traiter quotidiennement plus de 300 rapports d'anomalies douanières rédigés dans 12 langues différentes, entraînant des pénalités de retard d'envoi.",
    solution: "Déploiement d'un agent IA traducteur et extracteur de données capable de lire les formulaires, vérifier les factures d'origine dans le Cloud, et générer les drafts de réclamation réglementaires pré-remplis.",
    results: [
      "Temps de traitement moyen par dossier divisé par 8 (de 40 minutes à 5 minutes)",
      "Élimination totale des amendes pour retard d'envoi",
      "96% d'exactitude dans l'extraction des données critiques"
    ],
    testimonial: {
      quote: "L'agent IA conçu par NeuraTech a littéralement transformé notre service de conformité. Nos agents ne font plus de copier-coller fatigant et se concentrent sur la résolution des cas litigieux complexes.",
      author: "Marc-Antoine Dubois",
      role: "Directeur des Opérations chez Nexia"
    }
  },
  {
    id: 'case-solufin',
    clientName: "SoluFin Advisors",
    clientIndustry: "Conseil Financier & Gestion",
    title: "Moteur de RAG et d'audit de contrats de prêt",
    category: "RAG & Gestion de Données",
    problem: "Les analystes perdaient jusqu'à 2 heures par contrat de prêt complexe pour vérifier la conformité des clauses avec le nouveau cadre réglementaire européen.",
    solution: "Mise en place d'une plateforme sécurisée d'IA dotée d'un système RAG (Retrieval-Augmented Generation) sur l'ensemble de la base documentaire juridique de l'entreprise.",
    results: [
      "Recherche sémantique instantanée à travers 15 ans d'archives réglementaires",
      "Extraction automatique et comparaison des clauses suspectes ou obsolètes",
      "Économie estimée à plus de 120 000€ par an en temps de recherche"
    ],
    testimonial: {
      quote: "Nous avions peur des hallucinations de l'IA. NeuraTech a mis en place un système RAG ultra-sécurisé où chaque réponse de l'IA pointe directement vers l'article précis du contrat avec surbrillance. Une fiabilité absolue.",
      author: "Sophie Keller",
      role: "Associée Principale chez SoluFin"
    }
  },
  {
    id: 'case-instabuy',
    clientName: "InstaBuy International",
    clientIndustry: "E-Commerce & Retail",
    title: "Assistant d'achat conversationnel omnicanal",
    category: "Chatbots Intelligents",
    problem: "InstaBuy faisait face à un fort taux d'abandon de panier sur mobile car les clients ne trouvaient pas rapidement les réponses à leurs questions de compatibilité.",
    solution: "Développement d'un chatbot de conseil d'achat intelligent, branché sur la base de données produits de 50 000 références et capable de conseiller des alternatives.",
    results: [
      "+18% d'augmentation directe du taux de conversion e-commerce",
      "75% des demandes clients automatisées avec succès",
      "Score de satisfaction client (CSAT) passé de 3.2 à 4.7/5"
    ],
    testimonial: {
      quote: "L'IA comprend les demandes formulées de manière approximative ou familière, comme le ferait un vendeur chevronné en magasin. Nos clients adorent l'expérience.",
      author: "Yasmine Belkacem",
      role: "Head of Digital Experience"
    }
  }
];

export const MOCK_CHATBOT_FAQ = [
  {
    keywords: ['demo', 'démo', 'tester', 'essayer', 'rendez-vous', 'rdv', 'contact'],
    answer: "Je serais ravi de vous planifier une démonstration en direct ! Remplissez le formulaire de contact juste en dessous de notre discussion, ou dites-moi quel type d'IA (Agent, Chatbot, RAG ou Automatisation) vous intéresse pour que je prépare notre entretien.",
    suggestion: "Demander une démo"
  },
  {
    keywords: ['tarifs', 'prix', 'coût', 'budget', 'combien'],
    answer: "Chaque projet chez NeuraTech AI est sur mesure car il dépend de vos outils et processus. Cependant, nous proposons des forfaits d'audit et PoC à partir de 2 500€ pour valider le ROI de votre future IA avant tout développement d'envergure. Cela évite tout risque financier !",
    suggestion: "Estimer mon ROI"
  },
  {
    keywords: ['rag', 'retrieval', 'hallucination', 'données', 'sécurité', 'confidentialité'],
    answer: "La sécurité de vos données est notre priorité absolue. Nos architectures RAG (Retrieval-Augmented Generation) fonctionnent avec des bases vectorielles isolées. Vos documents restent chiffrés et ne sont jamais utilisés pour entraîner des modèles publics d'IA.",
    suggestion: "Découvrir le RAG"
  },
  {
    keywords: ['workflow', 'automatisation', 'n8n', 'make', 'logiciel'],
    answer: "Nous automatisons vos workflows en connectant vos outils du quotidien (CRM, ERP, emails, Slack, Google Drive) via des plateformes comme n8n, Make ou du code Python sur mesure. L'IA intervient pour analyser, classer et générer du contenu aux étapes clés.",
    suggestion: "Voir un cas d'usage"
  },
  {
    keywords: ['agent', 'autonome', 'agents ia'],
    answer: "Un agent IA est un système qui va au-delà du simple chat. Il reçoit un objectif complexe (ex: 'Prospecter 50 entreprises cibles'), planifie ses étapes, effectue des recherches web, rédige des propositions personnalisées et met à jour votre CRM de façon autonome.",
    suggestion: "Voir les expertises"
  }
];

export const WORKFLOW_STEPS_DEMO = [
  {
    id: 'trigger',
    title: "1. Déclencheur (Trigger)",
    type: 'trigger',
    status: 'idle',
    description: "Réception d'un nouvel e-mail de demande de devis client.",
    icon: 'Mail',
    details: "Expéditeur: client@entreprise.com - Objet: Demande d'intégration IA"
  },
  {
    id: 'rag-search',
    title: "2. Recherche Sémantique (RAG)",
    type: 'action',
    status: 'idle',
    description: "Scan des contrats passés et de la grille tarifaire de l'entreprise.",
    icon: 'SearchCode',
    details: "Recherche de correspondances sémantiques dans la base de données vectorielle."
  },
  {
    id: 'ai-analysis',
    title: "3. Analyse & Génération IA",
    type: 'action',
    status: 'idle',
    description: "Analyse du devis et rédaction automatique d'une proposition personnalisée.",
    icon: 'BrainCircuit',
    details: "Modèle: Llama 3.3 70B via Groq - Rédaction d'une réponse technique et commerciale."
  },
  {
    id: 'crm-update',
    title: "4. Mise à jour CRM & Notification",
    type: 'action',
    status: 'idle',
    description: "Création d'une opportunité dans le CRM et envoi d'une alerte Slack.",
    icon: 'BellRing',
    details: "Statut opportunité: 'Généré par IA' - Notification Slack envoyée à l'équipe commerciale."
  }
];
