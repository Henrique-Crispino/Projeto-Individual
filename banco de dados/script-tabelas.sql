create database projeto_individual;

use projeto_individual;

create table raca
(
idRaca int primary key auto_increment,
nome varchar(45),
fkCavalos int,
constraint fkCavalos foreign key (fkCavalos) references Cavalos (idCavalos)
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

create table Cavalos
(
    idCavalos int primary key auto_increment unique
);

create table usuario
(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
fkRaca int,
constraint fkRaca foreign key (fkRaca) references raca (idRaca)
);

create table quiz 
(
idQuiz int primary key auto_increment,
nome varchar(45)
);

insert into quiz (nome) values
	('Esportes Equestres');
    
create table tentativas 
(
idTentativa int primary key auto_increment,
acertos_facil int,
erros_facil int,
acertos_medio int,
erros_medio int,
acertos_dificil int,
erros_dificil int,
acertos_geral int,
erros_geral int,
fkUsuario int,
fkQuiz int,
constraint fkUsuario foreign key (fkUsuario) references usuario (idUsuario),
constraint fkQuiz foreign key (fkQuiz) references quiz (idQuiz)
);

select * from usuario;

SELECT email, idUsuario, nome, fkRaca FROM usuario WHERE email = 'asdadw@' AND senha = 'weofbqwubfyqrg';
        
SELECT r.nome, COUNT(u.idUsuario) as quantidade
FROM usuario u
JOIN raca r ON u.fkRaca = r.idRaca
GROUP BY r.nome, u.fkRaca
order by quantidade desc;

select sum(t.acertos_facil) as acertosFaceis, sum(t.erros_facil) as errosFaceis 
from tentativas t
join usuario u on t.fkUsuario = u.idUsuario
where u.idUsuario = 1;

select sum(t.acertos_medio) as acertosMedios, sum(t.erros_medio) as errosMedios 
from tentativas t
join usuario u on t.fkUsuario = u.idUsuario
where u.idUsuario = 1;

select sum(t.acertos_dificil) as acertosDificeis, sum(t.erros_dificil) as errosDificeis 
from tentativas t
join usuario u on t.fkUsuario = u.idUsuario
where u.idUsuario = 1;

select sum(t.acertos_geral) as totalAcertos, sum(t.erros_geral) as totalErros
from tentativas t
join usuario u on t.fkUsuario = u.idUsuario
where u.idUsuario = 1;