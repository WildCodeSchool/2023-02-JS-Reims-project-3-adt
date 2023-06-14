create table user (
  id int(11) unsigned primary key not null AUTO_INCREMENT,
  username varchar(80) not null unique,
  email varchar(80) not null unique,
  password varchar(80) not null
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

create table category (
id int(11) unsigned primary key not null AUTO_INCREMENT,
title varchar(100) not null
)ENGINE=InnoDB DEFAULT CHARSET=latin1;


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


INSERT INTO user (username, email, password) VALUES ('user', 'wcd@gmail.com', 'admin');

INSERT INTO category (title) VALUES ("Energy"),('Eau'),('Gestion des dechets'),('Biodeversité'), ('Communication et Sensibilitaion'),('Responsabilité sociale') ;

INSERT INTO question (content, mandatory_level, category_id, tooltip_content) VALUES 
("Mise en place du tri des déchets selon les modes de collecte locaux : papier, plastiques, métal, verre","Obligatoire", 3),
("Aucun produit jetable n'est proposé ou un plan de suppresssion est proposé pour :
 >  les articles de toilette
 >  les articles de restauration (couverts, assiettes, etc)","Obligatoire", 3, "Les produits jetables sont considérés comme à usage unique."),
("Les produits ménagers sont porteurs d''un écolabel ou fabriqués à partir de produits naturels (ex. vinaigre blanc)", "Obligatoire", 3),
("Les produits d'hygiène mis à disposition sont porteurs d''un écolabel ou fabriqués à partir de produits naturels", "Obligatoire", 3),
("Mise en place de la collecte sélective des déchets pour compostage (sur site ou dans une filière de collecte)", "Essentiel", 3),
("Réduction des déchets d'emballage pour les produits ménagers et la restauration : suppression des emballages individuels à minima, plus des trois quarts des produits sont conditionnés en vrac.", "Essentiel", 3),
("Les biens mobiliers en fin de vie font l''objet prioritairement d''une mise sur le marché de seconde main/don en priorité lorsque leur état le permet", "Optionnel", 3),
("Le recours aux mobilier se fait via l'achat de seconde main lorsque la réglementation le permet.", "Optionnel", 3),
("Une procédure de collecte et recyclage des mégots est mise en place en direction du personnel et des clients", "Optionnel", 3);
