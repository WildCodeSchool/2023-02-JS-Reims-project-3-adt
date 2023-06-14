create table user (
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

INSERT INTO category (title) VALUES ("title");

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
  ("Relevé mensuel de la consommation d'eau avec un suivi dans le temps", "obligatoire", 1, "Seules les consommations liées à l'activité touristiques doivent être comptabilisées."),
  ("Robinets économes en eau : mousseurs, mitigeurs avec double commande pour les lavabos, évier de cuisine et baignoires, robinet thermostatique pour les douches", "obligatoire", 1, "Au moins 75%  des points de puisage intérieurs sont concernés");

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