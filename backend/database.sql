create table `user` (
  id int(11) unsigned primary key not null AUTO_INCREMENT,
  email varchar(80) unique,
  hashedPassword varchar(255),
  firstname varchar(80), 
  lastname varchar(80) ,
  company_name varchar(80),
  phone_number varchar (15), 
  is_admin boolean default false
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

create table category (
id int(11) unsigned primary key not null AUTO_INCREMENT,
title varchar(100) not null,
image varchar(100) not null
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO category (title, image) VALUES 
("Gestion de l'énergie", '/assets/images/images_icons/energie.png'),
("Gestion de l'eau", '/assets/images/images_icons/water.png'),
("Gestion des déchets", '/assets/images/images_icons/waste.png'),
("Biodiversité", '/assets/images/images_icons/recycle.png'), 
("Communication et sensibilisation", '/assets/images/images_icons/communication.png'),
("Responsabilité sociale", '/assets/images/images_icons/human.png');


create table question (
  id int(11) unsigned primary key not null AUTO_INCREMENT,
  content text not null,
  mandatory_level varchar(80) not null,
  tooltip_content text,
  category_id int unsigned not null,
  CONSTRAINT fk_category_id
  FOREIGN KEY (category_id)
  REFERENCES category(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO question (content, mandatory_level, category_id, tooltip_content) VALUES 

  ("Suivi mensuel des consommations électriques.", "Obligatoire", 1, "Seules les consommations liées à l'activité touristique doivent être comptablilisées."),
    
  ("Isolation performante des parois vitrées : double ou triple vitrage sur au moins 90% des ouvertures.
  Pour les  constructions neuves ou rénovées, la totalité des ouvertures doit être équipée.", "Obligatoire", 1, NULL),

  ("Plus de la moitié des dispositifs d'éclairage sont de classe A.", "Obligatoire", 1, "Eclairage à LED dans les pièces intérieures et les extérieurs."),
    
  ("L'hébergement n'a pas recours à des dispositifs de chauffage ou de climatisation extérieurs.","Obligatoire", 1, "P. ex : parasol chauffant, brumisateur de terrasse, etc."),

  ("Chauffage à faible consommation : chaudière gaz à condensation, PAC à air classe A+ mini, etc.", "Obligatoire", 1, "L'étiquette énergie des Pompes à Chaleur (PAC) dépend de nombreux paramètres. Vous retrouverez toutes les informations de votre matériel sur le site du fabricant."),

  ("Appareils électroménagers performants selon les recommandations de l'ADEME (cf. infographie de l'ADEME)
  A minima 3 équipements suivants : Réfrigérateur, lave-linge, sèche-linge, lave-vaisselle, four.", "Essentiel", 1, "Une infographie de l'ADEME permet d'identifier facilement les classes recommandées. Elle est accessible à cette adresse : https://agirpourlatransition.ademe.fr/particuliers/conso/droit-conso/nouvelle-etiquette-energie."),

  ("Pour les constructions neuves ou rénovation totale : utilisation de matériaux de construction biosourcés.", "Essentiel", 1, "Les matériaux de construction biosourcés sont par exemple le bois, les panneaux type Fermacell®, les enduits terre, etc."),

  ("Isolation thermique performante des murs et plafonds.

  https://librairie.ademe.fr/cadic/2047/guide-pratique-isoler-sa-maison.pdf?modal=false", "Essentiel", 1, "La résistance thermique applicable est de :
    > toiture (comples perdus ou rampants)  r>= 6 m². K/W
    > murs (isolation intérieure ou extérieure) r>= 3,7 m². K/W"),

  ("Les parois vitrées exposées au soleil doivent pouvoir être occultées en été : volets battants, électriques, casquette végétale, etc.", "Essentiel", 1, NULL),

  ("Pour ses besoins en chauffage ou eau chaude sanitaire, l'établissement 
    - utilise des énergies renouvelables
    ou 
    - est alimenté en électricité par un fournisseur labellisé Vert Volt

  https://agirpourlatransition.ademe.fr/particuliers/vertvolt#paragraph-584788", "Essentiel", 1, "A minima pour le chauffage ou la production d'eau chaude sanitaire (ECS). Un ballon d'eau chaude sanitaire thermodynamique satisfait ce critère. Attention à bien dimensionner ses besoins en ECS."),

  ("Possibilité de régulation différenciée du chauffage selon la période ou les pièces.", "Essentiel", 1, NULL),

  ("L'éclairage d'espaces communs est équipé de détecteur de mouvement. Les minuteries sont à éviter pour les personnes porteuses de handicap.", "Essentiel", 1, "Un niveau d'éclairage minimum pour des questions de sécurité des biens ou des personnes peut être prévu. Il devra être dimensionné en conséquence de manière à s'adapter à la présence ou non de personnes."),

  ("Les besoins en électricité sont couverts par 
    - un mode de production basé sur les énergies renouvelables 
    ou
    -  un fournisseur labellisé Vert Volt
    
  https://agirpourlatransition.ademe.fr/particuliers/vertvolt#paragraph-584788", "Essentiel", 1, NULL),

  ("Conception du bâtiment avec un niveau de performance élevé : Haute Qualité Environnementale, bioclimatique, BBC, bâtiment passif ou à énergie positive.", "Optionnel", 1, NULL),
    
  ("Matériaux d'isolation biosourcés", "Optionnel", 1, "Les matériaux d'isolation biosourcés peuvent être d'origine végétale (laine de bois, laine de chanvre, etc.), animale (laine de mouton, etc) ou issus du recyclage (textile p.ex.)."),

  ("Relevé mensuel de la consommation d'eau avec un suivi dans le temps", "Obligatoire", 2, "Seules les consommations liées à l'activité touristique doivent être comptabilisées."),
 
  ("Robinets économes en eau : mousseurs, mitigeurs avec double commande pour les lavabos, évier de cuisine et baignoires, robinet thermostatique pour les douches.", "Obligatoire", 2, "Au moins 75%  des points de puisage intérieurs sont concernés."),
 
  ("Mécanisme double commande pour les sanitaires ou à défaut sur sanitaires anciens système de réduction du volume de la cuve.", "Obligatoire", 2, NULL),

  ("Les appareils lavants (linge, vaisselle) sont économes en eau", "Essentiel", 2, "L'étiquette environnementale permet de connaître la consommation d'eau par cycle. 
  La valeur seuil et de 10 l/kg de linge lavé pour les lave linge et de 1l/couvert plafonné à 10l pour les lave-vaisselle."),

  ("Alimentation en eau de pluie pour les extérieurs si applicable.", "Essentiel", 2, NULL),

  ("Irrigation adaptée des espaces extérieurs : système de maîtrise de l'eau distribuée, végétaux peu gourmands en eau, etc.", "Essentiel", 2, NULL),

  ("Alimentation en eau de pluie pour les sanitaires.", "Optionnel", 2, NULL),

  ("Les sanitaires sont des toilettes sèches.", "Optionnel", 2, "Au moins l'un des sanitaires."),

  ("Désimperméabilisation des sols extérieurs.", "Optionnel", 2, NULL),

  ("Les piscines ou spas sont 
      - couverts pour limiter l'évaporation 
      et/ou 
      - pourvus d'une gestion optimisée du chlore. ", "Optionnel", 2, NULL),
 
 ("Mise en place du tri des déchets selon les modes de collecte locaux : papier, plastiques, métal, verre.", "Obligatoire", 3, NULL),

 ("Aucun produit jetable n'est proposé ou un plan de suppresssion est proposé pour :
    >  les articles de toilette
    >  les articles de restauration (couverts, assiettes, etc)", "Obligatoire", 3, "Les produits jetables sont considérés comme à usage unique."),

 ("Les produits ménagers sont porteurs d'un écolabel ou fabriqués à partir de produits naturels (ex. vinaigre blanc).", "Obligatoire", 3, NULL),

 ("Les produits d'hygiène mis à disposition sont porteurs d'un écolabel ou fabriqués à partir de produits naturels.", "Obligatoire", 3, NULL),

 ("Mise en place de la collecte sélective des déchets pour compostage (sur site ou dans une filière de collecte).", "Essentiel", 3, NULL),

 ("Réduction des déchets d'emballage pour les produits ménagers et la restauration : suppression des emballages individuels à minima, plus des trois quarts des produits sont conditionnés en vrac.", "Essentiel", 3, NULL),

 ("Les biens mobiliers en fin de vie font l'objet prioritairement d'une mise sur le marché de seconde main/don en priorité lorsque leur état le permet.", "Optionnel", 3, NULL),

 ("Le recours aux mobilier se fait via l'achat de seconde main lorsque la réglementation le permet.", "Optionnel", 3, NULL),

 ("Une procédure de collecte et recyclage des mégots est mise en place en direction du personnel et des clients.", "Optionnel", 3, NULL),

 ("Entretien des espaces extérieurs sans produits phytosanitaires : herbicides, fongicides, insecticides, etc.", "Obligatoire", 4, NULL),

 ("Choix d'espèce végétales non invasives.", "Obligatoire", 4, "Certaines espèces exotiques envahissantes font l'objet d'une surveillance comme par exemple la renouée du Japon, l'herbe de la pampa, l'armoisie à feuille épi, etc."),

 ("Les aménagements extérieurs ne doivent pas représenter de danger pour la biodiversité (ex. risque de noyade dans un bac récupérateur d'eau de pluie).", "Obligatoire", 4, NULL),

 ("Espèces végétales principalement locales avec un impact positif sur la biodiversité : mellifères, baies pour les oiseaux, etc.", "Essentiel", 4, NULL),

 ("Aménagements en faveur de l'accueil de la biodiversité (au moins trois) parmi : nichoir, mangeoire (été/hiver), mare, refuge à hérisson, hôtel à insectes (disposé judicieusement), etc.", "Essentiel", 4, NULL),
 
  ("Engagement dans un réseau / label en faveur de la biodiversité.", "Optionnel", 4, "P. ex : LPO"),

  ("Affichage de l'engagement en faveur de l'écotourisme : signalétique extérieure, site internet, support print.", "Obligatoire", 5, NULL),

  ("Sensibiliser les clients sur leur rôle  : économies d'énergies, d'eau, réduction des déchets, etc.", "Obligatoire", 5, NULL),

  ("Le personnel est formé à la politique environnementale de l'établissement : engagements, gestes et/ou procédures (eau, énergie, etc.).", "Obligatoire", 5, NULL),

  ("Communiquer sur les modes de transport bas-carbone permettant d'accéder à l'hébergement et de visiter le territoire.", "Obligatoire", 5, "Les mobilités concernées sont collectives, à pied, en vélo"),

  ("Informer les clients sur l'offre touristique à proximité de l'établissement en mettant en avant ceux qui sont engagés dans une démarche écotouristique.", "Obligatoire", 5, NULL),

  ("Offrir en direct ou par le biais d'un partenariat des modes de transport bas-carbone : vélo, borne de recharge, etc.", "Essentiel", 5, "P. ex : La possibilité de faire déposer sur site des vélos loués auprès d'un professionnel partenaire."),

  ("Communication auprès des clients et du personnel sur des procédures de nettoyage avec un recours maîtrisé et raisonné des produits d'entretien.", "Essentiel", 5, NULL),

  ("L'établissement veille à respecter l'égalité des genres.", "Obligatoire", 6, "L'index de l'égalité est applicable aux entreprisess de plus de 50 salariés. 
  En deçà, il est souhaitable de mettre en place une démarche interne qui peut être appuyée par un guide produit par le ministère du travail : https://travail-emploi.gouv.fr/demarches-ressources-documentaires/documentation-et-publications-officielles/guides/guide-egapro-tpepme"),

  ("Les modes de paiement type chèques vacances sont acceptés.", "Essentiel", 6, NULL),

  ("L'hébergement est accessible à au moins deux types de handicaps parmi : handicap moteur, visuel, auditif ou mental.", "Essentiel", 6, "Cette accessibilité peut être travaillée en lien avec l'ADT de la Marne."),

  ("L'établissement est labellisé pour l'accueil de personnes en situation de handicap.", "Optionnel", 6, NULL);

create table user_survey (
  id int(11) unsigned primary key not null AUTO_INCREMENT,
  user_id int unsigned not null,
  CONSTRAINT fk_user_survey_user
  FOREIGN KEY (user_id)
  REFERENCES user(id),
  category_id int unsigned not null,
  CONSTRAINT fk_survey_category_id 
  FOREIGN KEY (category_id)
  REFERENCES category(id),
  score int unsigned not null
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE answer (
  id INT(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_answer_user
  FOREIGN KEY (user_id)
  REFERENCES user(id),
  question_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_question_id
  FOREIGN KEY (question_id)
  REFERENCES question(id),
  response enum("Atteint", "Non atteint", "Non Concerné", "Ne sais pas") not null
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- INSERT INTO `user` (
--   email,
--   hashedPassword,
--   firstname,
--   lastname,
--   company_name,
--   phone_number,
--   is_admin) VALUES
-- ('pierre@adt.fr', 'azerty', 'Pierre', 'Labadie', 'ADT', '0326456789', true);