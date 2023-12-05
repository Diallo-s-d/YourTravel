CREATE TABLE continent (
  `continent_id` INT NOT NULL AUTO_INCREMENT,
  `continent_name` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`continent_id`)
   )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE country (
  `country_id` INT NOT NULL AUTO_INCREMENT,
  `continent_id` INT NOT NULL,
  `country_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`country_id`),
  CONSTRAINT `fk_continent_country`
    FOREIGN KEY (`continent_id`)
    REFERENCES continent (`continent_id`)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

  CREATE TABLE user (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(80) NOT NULL,
  `lastname` VARCHAR(80) NOT NULL,
  `email` VARCHAR(100) UNIQUE NOT NULL,
  `hashedPassword` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`user_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE announce (
  `announce_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `price` INT NOT NULL,
  `continent_id` INT NOT NULL,
  `country_id` INT NOT NULL,
  `description` TEXT NOT NULL,
  `image` TEXT NOT NULL,
  `activity` TEXT NOT NULL,

  PRIMARY KEY (`announce_id`),

  CONSTRAINT `fk_user_announce`
  FOREIGN KEY (`user_id`)
  REFERENCES user(`user_id`),

  CONSTRAINT `fk_continent_announce`
  FOREIGN KEY (`continent_id`)
  REFERENCES continent(`continent_id`),

  CONSTRAINT `fk_country_announce`
  FOREIGN KEY (`country_id`)
  REFERENCES country(`country_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE favorite (
  `favorite_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `announce_id` INT NOT NULL,
  PRIMARY KEY (`favorite_id`),

  CONSTRAINT `fk_user_favorite`
    FOREIGN KEY (`user_id`)
    REFERENCES user (`user_id`)
    ,
  CONSTRAINT `fk_announce_favorite`
    FOREIGN KEY (`announce_id`)
    REFERENCES announce (`announce_id`)
   )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
  
  CREATE TABLE newsletter (
  `newsletter_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) UNIQUE NOT NULL,
   PRIMARY KEY (`newsletter_id`)
     )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO continent (`continent_name`) VALUES ('Afrique');
INSERT INTO continent (`continent_name`) VALUES ('Asie');
INSERT INTO continent (`continent_name`) VALUES ('Amérique du Nord');
INSERT INTO continent (`continent_name`) VALUES ('Amérique du Sud');
INSERT INTO continent (`continent_name`) VALUES ('Europe');
INSERT INTO continent (`continent_name`) VALUES ('Océanie');


INSERT INTO country (`continent_id`, `country_name`) VALUES ('1', 'Sénégal');
INSERT INTO country (`continent_id`, `country_name`) VALUES ('1', 'Egypte');
INSERT INTO country (`continent_id`, `country_name`) VALUES ('2', 'Turquie');
INSERT INTO country (`continent_id`, `country_name`) VALUES ('2', 'Dubaï');
INSERT INTO country (`continent_id`, `country_name`) VALUES ('3', 'New-York');
INSERT INTO country (`continent_id`, `country_name`) VALUES ('3', 'Miami');
INSERT INTO country (`continent_id`, `country_name`) VALUES ('4', 'Brésil');
INSERT INTO country (`continent_id`, `country_name`) VALUES ('4', 'Colombie');
INSERT INTO country (`continent_id`, `country_name`) VALUES ('5', 'Belgique');
INSERT INTO country (`continent_id`, `country_name`) VALUES ('5', 'Italie');
INSERT INTO country (`continent_id`, `country_name`) VALUES ('6', 'Fidji');
INSERT INTO country (`continent_id`, `country_name`) VALUES ('6', 'Australie');

INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('SALA', 'sala', 'sala4@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$HR/lNvZ6zWRH4ObyGrlMtw$7wAqMGtpdJaSFYCmTPnV+gTaX7dwy0KC4cXhVyC5/Ks');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('KEVIN', 'PESET', 'kevin4@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$lnatfSXFrBSkZWyIiUpuVg$jmgjxwAIsYzB3rHP4IQMCOeBnBUVcn8HZPTCP8/WKZw');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('test', 'test', 'test4@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$lnatfSXFrBSkZWyIiUpuVg$jmgjxwAIsYzB3rHP4IQMCOeBnBUVcn8HZPTCP8/WKZw');

INSERT INTO announce (`user_id`, `title`, `price`, `continent_id`, `country_id`, `image`, `description`, `activity`) VALUES ('1', 'Nos voyages au Sénégal', '584', '1', '1', 'https://t4.ftcdn.net/jpg/00/87/14/03/360_F_87140329_hKVl9pk95AaFpNfXqw9qwHPSYTZym7GK.jpg', 'Découvrez le Sénégal, un joyau de l''Afrique de l''Ouest, où la richesse culturelle, les plages immaculées et l''hospitalité chaleureuse vous promettent une expérience touristique inoubliable.', 'Visite du monument de la Renaissance');
INSERT INTO announce (`user_id`, `title`, `price`, `continent_id`, `country_id`, `image`, `description`, `activity`) VALUES ('1', 'Nos voyages en Égypte', '300', '1', '2', 'https://www.geo.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FGEO.2Fvar.2Fgeo.2Fstorage.2Fimages.2Fmedia.2Fles-pyramides-de-gizeh.2F1876339-1-fre-FR.2Fles-pyramides-de-gizeh.2Ejpg/1200x630/cr/wqkgR2V0dHkgSW1hZ2VzIC8gR0VP/testez-vos-connaissances-sur-l-egypte-antique.jpg', 'Explorez l''Égypte, berceau de l''histoire ancienne et moderne, où les pyramides majestueuses, les trésors archéologiques et le Nil fascinant vous invitent à vivre une aventure unique au cœur de la civilisation égyptienne.', 'Visite des pyramides de Gizeh et de Khéops');

INSERT INTO announce (`user_id`, `title`, `price`, `continent_id`, `country_id`, `image`, `description`, `activity`) VALUES ('2', 'Nos voyages en Turquie', '450', '2', '3', 'https://www.tourmag.com/photo/art/grande/69839010-48789880.jpg?v=1672407419', 'Découvrez la Turquie, carrefour entre l''Est et l''Ouest, où les splendeurs historiques d''Istanbul, les paysages diversifiés et la cuisine délicieuse vous offrent une expérience de voyage inégalée.', 'Visite de la mosquée bleue');
INSERT INTO announce (`user_id`, `title`, `price`, `continent_id`, `country_id`, `image`, `description`, `activity`) VALUES ('2', 'Nos voyages à Dubaï', '584', '2', '4', 'https://media.istockphoto.com/id/1333035210/fr/photo/vue-sur-le-coucher-du-soleil-de-la-marina-de-duba%C3%AF-et-de-la-r%C3%A9gion-de-jbr-et-des-c%C3%A9l%C3%A8bres.jpg?s=612x612&w=0&k=20&c=9ro4Rg40evscEFJxmzNeEKxYBR3mLWX7xlCmhPUmwes=', 'Plongez dans le luxe et l''extravagance à Dubaï, où les gratte-ciel futuristes, les centres commerciaux opulents et le désert mystique créent un cadre idyllique pour une escapade unique au cœur du Moyen-Orient.', 'Visite du Burj Khalifa');

INSERT INTO announce (`user_id`, `title`, `price`, `continent_id`, `country_id`, `image`, `description`, `activity`) VALUES ('3', 'Nos voyages à New-York', '1010', '3', '5', 'https://a.cdn-hotels.com/gdcs/production196/d1429/5c2581f0-c31d-11e8-87bb-0242ac11000d.jpg?impolicy=fcrop&w=800&h=533&q=medium', 'Vivez l''énergie frénétique de New York, la ville qui ne dort jamais, avec ses gratte-ciels emblématiques, sa diversité culturelle et ses quartiers empreints de caractère, offrant une expérience urbaine incomparable.', 'Visite de Times Square');
INSERT INTO announce (`user_id`, `title`, `price`, `continent_id`, `country_id`, `image`, `description`, `activity`) VALUES ('3', 'Nos voyages à Miami', '2400', '3', '6', 'https://resize.elle.fr/original/var/plain_site/storage/images/deco/news-tendances/une-ville-une-architecture-miami-et-le-style-art-deco/94226926-1-fre-FR/Une-ville-une-architecture-Miami-et-le-style-Art-Deco.jpg', 'Plongez dans le glamour ensoleillé de Miami, où les plages de sable blanc, l''art déco vibrant et la vie nocturne animée vous promettent une escapade tropicale mémorable.', 'Visite du Bayside Marketplace');

INSERT INTO announce (`user_id`, `title`, `price`, `continent_id`, `country_id`, `image`, `description`, `activity`) VALUES ('1', 'Nos voyages au Brésil', '765', '4', '7', 'https://cdn.generationvoyage.fr/2021/01/shutterstock_421013719-630x398.jpg', 'Explorez le Brésil, un pays d''une diversité éblouissante, des plages ensoleillées de Rio de Janeiro à l''Amazonie luxuriante, offrant une expérience unique entre nature, culture et carnaval.', 'Visite de Rio de Janeiro');
INSERT INTO announce (`user_id`, `title`, `price`, `continent_id`, `country_id`, `image`, `description`, `activity`) VALUES ('1', 'Nos voyages en Colombie', '802', '4', '8', 'https://media.istockphoto.com/id/1148861090/fr/photo/beau-coucher-de-soleil-sur-carthag%C3%A8ne-colombie.jpg?s=612x612&w=0&k=20&c=G8D7N6RfQK6Dxun_1Q4aOWagz-ECu6_yGQtqB-tiR74=', 'Immergez-vous dans la beauté naturelle et la richesse culturelle de la Colombie, avec ses paysages variés allant de la forêt amazonienne aux plages caribéennes, en passant par les villes historiques et animées, offrant une aventure captivante en Amérique du Sud.', 'Visite de Medellín');

INSERT INTO announce (`user_id`, `title`, `price`, `continent_id`, `country_id`, `image`, `description`, `activity`) VALUES ('2', 'Nos voyages en Belgique', '223', '5', '9', 'https://media.istockphoto.com/id/476653220/fr/photo/gand.jpg?s=612x612&w=0&k=20&c=Rk_kO2rTgZI2jMcpFMkJ8M-C_fuZQ1A4TiQqT6vgSJs=', 'Découvrez la Belgique, un pays enchanteur où l''architecture médiévale, la gastronomie délicieuse et l''atmosphère accueillante des villes comme Bruxelles et Bruges vous invitent à une escapade culturelle et gourmande.', 'Visite de Bruges');
INSERT INTO announce (`user_id`, `title`, `price`, `continent_id`, `country_id`, `image`, `description`, `activity`) VALUES ('2', 'Nos voyages en Italie', '664', '5', '10', 'https://cdn.generationvoyage.fr/2021/02/colisee-rome.jpg', 'Plongez-vous dans l''art, l''histoire et la romance en Italie, où les cités historiques telles que Rome, Florence et Venise vous transportent à travers les époques, offrant une expérience inoubliable mêlant culture, cuisine et style de vie dolce vita.', 'Visite de la Tour de Pise');

INSERT INTO announce (`user_id`, `title`, `price`, `continent_id`, `country_id`, `image`, `description`, `activity`) VALUES ('3', 'Nos voyages au Fidji', '2050', '6', '11', 'https://media.routard.com/image/71/7/fidji-home-fiche.1472717.jpg', 'Évadez-vous vers les îles paradisiaques des Fidji, un joyau du Pacifique Sud, où les plages de sable blanc, les eaux cristallines et la culture chaleureuse des habitants créent un cadre idyllique pour une escapade tropicale de rêve.', 'Visite du port de Denarau Marina');
INSERT INTO announce (`user_id`, `title`, `price`, `continent_id`, `country_id`, `image`, `description`, `activity`) VALUES ('3', 'Nos voyages en Australie', '2300', '6', '12', 'https://thumbs.dreamstime.com/b/th%C3%A9atre-de-l-op%C3%A9ra-de-sydney-australie-14210813.jpg', 'Explorez l''Australie, un continent aux contrastes saisissants, des plages dorées de la Gold Coast aux paysages spectaculaires de l''Outback. L''Australie offre une diversité naturelle et culturelle unique, promettant une aventure inoubliable.', 'Visite de l''opéra de Sydney');
