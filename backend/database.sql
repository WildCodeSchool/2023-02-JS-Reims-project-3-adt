create table `user` (
  id int(11) unsigned primary key not null AUTO_INCREMENT,
  username varchar(80) not null unique,
  email varchar(80) not null unique,
  password varchar(80) not null
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO user (username, email, password) VALUES ('user', 'wcd@gmail.com', 'admin');

create table category (
id int(11) unsigned primary key not null AUTO_INCREMENT,
title varchar(100) not null
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO category (title) VALUES ("Gestion de l'énergie"),("Gestion de l'eau"),("Gestion des déchets"),("Biodeversité"), ("Communication et Sensibilitaion"),("Responsabilité sociale") ;

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

  ("Suivi mensuel des consommations électriques", "obligatoire", 1, "Seules les consommations liées à l'activité touristique doivent être comptablilisées."),

  ("Isolation performante des parois vitrées : double ou triple vitrage sur au moins 90% des ouvertures.
Pour les  constructions neuves ou rénovées, la totalité des ouvertures doit être équipée.", "obligatoire", 1, NULL),

  ("Plus de la moitié des dispositifs d'éclairage sont de classe A", "obligatoire", 1, "Eclairage à LED dans les pièces intérieures et les extérieurs."),

  ("L'hébergement n'a pas recours à des dispositifs de chauffage ou de climatisation extérieurs","obligatoire", 1, "P. ex : parasol chauffant, brumisateur de terrasse, etc."),

  ("Chauffage à faible consommation : chaudière gaz à condensation, PAC à air classe A+ mini,  etc.", "obligatoire", 1, "L'étiquette énergie des Pompes à Chaleur (PAC) dépend de nombreux paramètres. Vous retrouverez toutes les informations de votre matériel sur le site du fabricant."),

  ("Appareils électroménagers performants selon les recommandations de l'ADEME (cf. infographie de l'ADEME)
A minima 3 équipements suivants : Réfrigérateur, lave-linge, sèche-linge, lave-vaisselle, four.", "essentiel", 1, "Une infographie de l'ADEME permet d'identifier facilement les classes recommandées. Elle est accessible à cette adresse : https://agirpourlatransition.ademe.fr/particuliers/conso/droit-conso/nouvelle-etiquette-energie."),

  ("Pour les constructions neuves ou rénovation totale : utilisation de matériaux de construction biosourcés.", "essentiel", 1, "Les matériaux de construction biosourcés sont par exemple le bois, les panneaux type Fermacell®, les enduits terre, etc. "),

  ("Isolation thermique performante des murs et plafonds
https://librairie.ademe.fr/cadic/2047/guide-pratique-isoler-sa-maison.pdf?modal=false", "essentiel", 1, "La résistance thermique applicable est de :
  > toiture (comples perdus ou rampants)  r>= 6 m². K/W
  > murs (isolation intérieure ou extérieure) r>= 3,7 m². K/W"),

  ("Les parois vitrées exposées au soleil doivent pouvoir être occultées en été : volets battants, électriques, casquette végétale, etc.", "essentiel", 1, NULL),

  ("Pour ses besoins en chauffage ou eau chaude sanitaire, l'établissement 
  - utilise des énergies renouvelables
ou 
  - est alimenté en électricité par un fournisseur labellisé Vert Volt
https://agirpourlatransition.ademe.fr/particuliers/vertvolt#paragraph-584788", "essentiel", 1, "A minima pour le chauffage ou la production d'eau chaude sanitaire (ECS). Un ballon d'eau chaude sanitaire thermodynamique satisfait ce critère. Attention à bien dimensionner ses besoins en ECS."),
  ("Possibilité de régulation différenciée du chauffage selon la période ou les pièces", "essentiel", 1, NULL),

  ("L'éclairage d'espaces communs est équipé de détecteur de mouvement. Les minuteries sont à éviter pour les personnes porteuses de handicap.", "essentiel", 1, "Un niveau d'éclairage minimum pour des questions de sécurité des biens ou des personnes peut être prévu. Il devra être dimensionné en conséquence de manière à s'adapter à la présence ou non de personnes."),

  ("Les besoins en électricité sont couverts par 
  - un mode de production basé sur les énergies renouvelables 
ou
  -  un fournisseur labellisé Vert Volt
https://agirpourlatransition.ademe.fr/particuliers/vertvolt#paragraph-584788", "essentiel", 1, NULL),

  ("Conception du bâtiment avec un niveau de performance élevé : Haute Qualité Environnementale, bioclimatique, BBC, bâtiment passif ou à énergie positive.", "optionnel", 1, NULL),
  
  ("Matériaux d'isolation biosourcés", "optionnel", 1, "Les matériaux d'isoaltion biosourcés peuvent être d'origine végétale (laine de bois, laine de chanvre, etc.), animale (laine de mouton, etc) ou issus du recyclage (textile p.ex.)."),


 ("Mise en place du tri des déchets selon les modes de collecte locaux : papier, plastiques, métal, verre", "Obligatoire", 3, NULL),

 ("Aucun produit jetable n'est proposé ou un plan de suppresssion est proposé pour :
 >  les articles de toilette
 >  les articles de restauration (couverts, assiettes, etc)", "Obligatoire", 3, "Les produits jetables sont considérés comme à usage unique."),

 ("Les produits ménagers sont porteurs d'un écolabel ou fabriqués à partir de produits naturels (ex. vinaigre blanc)", "Obligatoire", 3, NULL),

 ("Les produits d'hygiène mis à disposition sont porteurs d'un écolabel ou fabriqués à partir de produits naturels", "Obligatoire", 3, NULL),

 ("Mise en place de la collecte sélective des déchets pour compostage (sur site ou dans une filière de collecte)", "Essentiel", 3, NULL),

 ("Réduction des déchets d'emballage pour les produits ménagers et la restauration : suppression des emballages individuels à minima, plus des trois quarts des produits sont conditionnés en vrac.", "Essentiel", 3, NULL),

 ("Les biens mobiliers en fin de vie font l'objet prioritairement d'une mise sur le marché de seconde main/don en priorité lorsque leur état le permet", "Optionnel", 3, NULL),

 ("Le recours aux mobilier se fait via l'achat de seconde main lorsque la réglementation le permet.", "Optionnel", 3, NULL),

 ("Une procédure de collecte et recyclage des mégots est mise en place en direction du personnel et des clients", "Optionnel", 3, NULL),

 ("Entretien des espaces extérieurs sans produits phytosanitaires : herbicides, fongicides, insecticides, etc.", "Obligatoire", 4, NULL),

 ("Choix d'espèce végétales non invasives", "Obligatoire", 4, "Certaines espèces exotiques envahissantes font l'objet d'une surveillance comme par exemple la renouée du Japon, l'herbe de la pampa, l'armoisie à feuille épi, etc."),

 ("Les aménagements extérieurs ne doivent pas représenter de danger pour la biodiversité (ex. risque de noyade dans un bac récupérateur d'eau de pluie).", "Obligatoire", 4, NULL),

 ("Espèces végétales principalement locales avec un impact positif sur la biodiversité : mellifères, baies pour les oiseaux, etc", "Essentiel", 4, NULL),

 ("Aménagements en faveur de l'accueil de la biodiversité (au moins trois) parmi : nichoir, mangeoire (été/hiver), mare, refuge à hérisson, hôtel à insectes (disposé judicieusement), etc.", "Essentiel", 4, NULL),

 ("Engagement dans un réseau / label en faveur de la biodiversité", "Optionnel", 4, "P. ex : LPO");

create table user_survey (
  id int(11) unsigned primary key not null AUTO_INCREMENT,
  user_id int unsigned not null,
  CONSTRAINT fk_user_id
  FOREIGN KEY (user_id)
  REFERENCES user(id),
  category_id int unsigned not null,
  CONSTRAINT fk_survey_category_id 
  FOREIGN KEY (category_id)
  REFERENCES category(id),
  score int unsigned not null
)ENGINE=InnoDB DEFAULT CHARSET=latin1;
