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
