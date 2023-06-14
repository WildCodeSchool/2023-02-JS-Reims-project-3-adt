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

INSERT INTO category (title) VALUES ("Gestion de l'énergie"),("Gestion de l'eau"),("Gestion des déchets"),("Biodeversité"), ("Communication et Sensibilitaion"),('Responsabilité sociale') ;
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

-- Water management category

  ("Relevé mensuel de la consommation d'eau avec un suivi dans le temps", "obligatoire", 2, "Seules les consommations liées à l'activité touristiques doivent être comptabilisées"),
 
  ("Robinets économes en eau : mousseurs, mitigeurs avec double commande pour les lavabos, évier de cuisine et baignoires, robinet thermostatique pour les douches", "obligatoire", 2, "Au moins 75%  des points de puisage intérieurs sont concernés"),
 
  ("Mécanisme double commande pour les sanitaires ou à défaut sur sanitaires anciens système de réduction du volume de la cuve", "obligatoire", 2),

  ("Les appareils lavants (linge, vaisselle) sont économes en eau", "essentiel", 2, "L'étiquette environnementale permet de connaître la consommation d'eau par cycle. 
  La valeur seuil et de 10 l/kg de linge lavé pour les lave linge et de 1l/couvert plafonné à 10l pour les lave-vaisselle"),

  ("Alimentation en eau de pluie pour les extérieurs si applicable", "essentiel", 2),

  ("Irrigation adaptée des espaces extérieurs : système de maîtrise de l'eau distribuée, végétaux peu gourmands en eau, etc.", "essentiel", 2),

  ("Alimentation en eau de pluie pour les sanitaires", "optionnel", 2),

  ("Les sanitaires sont des toilettes sèches", "optionnel", 2, "Au moins l'un des sanitaires"),

  ("Désimperméabilisation des sols extérieurs", "optionnel", 2),

  ("Les piscines ou spas sont 
      - couverts pour limiter l'évaporation 
      et/ou 
      - pourvus d'une gestion optimisée du chlore ", "optionnel", 2),

-- Communication and awareness category

  ("Affichage de l'engagement en faveur de l'écotourisme : signalétique extérieure, site internet, support print", "obligatoire", 5),

  ("Sensibiliser les clients sur leur rôle  : économies d'énergies, d'eau, réduction des déchets, etc.", "obligatoire", 5),

  ("Le personnel est formé à la politique environnementale de l'établissement : engagements, gestes et/ou procédures (eau, énergie, etc)", "obligatoire", 5),

  ("Communiquer sur les modes de transport bas-carbone permettant d'accéder à l'hébergement et de visiter le territoire", "obligatoire", 5, "Les mobilités concernées sont collectives, à pied, en vélo"),

  ("Informer les clients sur l'offre touristique à proximité de l'établissement en mettant en avant ceux qui sont engagés dans une démarche écotouristique", "obligatoire", 5),

  ("Offrir en direct ou par le biais d'un partenariat des modes de transport bas-carbone : vélo, borne de recharge, etc", "essentiel", 5, "P. ex : La possibilité de faire déposer sur site des vélos loués auprès d'un professionnel partenaire"),

  ("Communication auprès des clients et du personnel sur des procédures de nettoyage avec un recours maîtrisé et raisonné des produits d'entretien", "essentiel", 5);


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