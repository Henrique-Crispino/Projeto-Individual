-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

create database projeto_individual;

use projeto_individual;

create table raca
(
idRaca int primary key auto_increment,
nome varchar(45)
);

insert into raca (nome) values
	('Frísio'),
    ('Quarto de Milha'),
    ('Puro-Sangue Inglês'),
    ('Puro-Sangue Árabe'),
    ('Andaluz'),
    ('Paint Horse'),
    ('Belga'),
    ('Warmblood Holandês'),
    ('Appaloosa'),
    ('Percheron');
    
select * from raca;

create table usuario
(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
fkRaca int,
constraint fkRaca foreign key (fkRaca) references raca (idRaca)
);
/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
