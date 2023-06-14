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
  ("Entretien des espaces extérieurs sans produits phytosanitaires : herbicides, fongicides, insecticides, etc.", "obligatoire", 4, NULL),

  ("Choix d'espèce végétales non invasives", "obligatoire", 4, "Certaines espèces exotiques envahissantes font l'objet d'une surveillance comme par exemple la renouée du Japon, l'herbe de la pampa, l'armoisie à feuille épi, etc."),

  ("Les aménagements extérieurs ne doivent pas représenter de danger pour la biodiversité (ex. risque de noyade dans un bac récupérateur d'eau de pluie).", "obligatoire", 4, NULL),

 ("Espèces végétales principalement locales avec un impact positif sur la biodiversité : mellifères, baies pour les oiseaux, etc", "Essentiel", 4, NULL),
  ("Communiquer sur les modes de transport bas-carbone permettant d'accéder à l'hébergement et de visiter le territoire", "obligatoire", 5, "Les mobilités concernées sont collectives, à pied, en vélo"),

 ("Aménagements en faveur de l'accueil de la biodiversité (au moins trois) parmi : nichoir, mangeoire (été/hiver), mare, refuge à hérisson, hôtel à insectes (disposé judicieusement), etc.", "Essentiel", 4, NULL),
  ("Informer les clients sur l'offre touristique à proximité de l'établissement en mettant en avant ceux qui sont engagés dans une démarche écotouristique", "obligatoire", 5, NULL),

 ("Offrir en direct ou par le biais d'un partenariat des modes de transport bas-carbone : vélo, borne de recharge, etc", "essentiel", 5, "P. ex : La possibilité de faire déposer sur site des vélos loués auprès d'un professionnel partenaire"),
 ("Engagement dans un réseau / label en faveur de la biodiversité", "Optionnel", 4, "P. ex : LPO"),

 ("L'établissement veille à respecter l'égalité des genres.", "Obligatoire", 6, "L'index de l'égalité est applicable aux entreprisess de plus de 50 salariés. 
En deçà, il est souhaitable de mettre en place une démarche interne qui peut être appuyée par un guide produit par le ministère du travail : https://travail-emploi.gouv.fr/demarches-ressources-documentaires/documentation-et-publications-officielles/guides/guide-egapro-tpepme"),

("Les modes de paiement type chèques vacances sont acceptés.", "Essentiel", 6, NULL),

("L'hébergement est accessible à au moins deux types de handicaps parmi : handicap moteur, visuel, auditif ou mental.", "Essentiel", 6, "Cette accessibilité peut être travaillée en lien avec l'ADT de la Marne."),

("L'établissement est labellisé pour l'accueil de personnes en situation de handicap.", "Optionnel", 6, NULL),

("Communication auprès des clients et du personnel sur des procédures de nettoyage avec un recours maîtrisé et raisonné des produits d'entretien", "essentiel", 5, NULL);

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
