IF EXISTS DROP DATABASE corona_cocktaildb;

CREATE DATABASE corona_cocktailDB;
Use corona_cocktailDB;

create table Users
(
	id int auto_increment,
	first_name VARCHAR(30) null,
	last_name VARCHAR(30) null,
	password VARCHAR(50) null,
	constraint Users_pk
		primary key (id)
);


create table reviews
(
	id int auto_increment,
	rate_cocktail int null,
	review_cocktail VARCHAR(250) null,
	user_id int null,
	constraint reviews_pk
		primary key (id),
	constraint reviews_users_id_fk
		foreign key (user_id) references users (id)
			on update cascade on delete cascade
);

--Juan 7/9/2020
INSERT INTO corona_cocktaildb.users (first_name, last_name, password) VALUES ('Bill', 'Nye', 'scienceguy');
INSERT INTO corona_cocktaildb.users (first_name, last_name, password) VALUES ('Sam', 'Williams', 'soccerman');
