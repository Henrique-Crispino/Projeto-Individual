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

-- Seleciona todos usuarios
select * from usuario;

-- Seleciona todas as tentativas
select * from tentativas;

-- Seleciona o email, Id do usuario, Nome do usuario e o Id da sua raça preferida de um usuário específico
SELECT email, idUsuario, nome, fkRaca FROM usuario WHERE email = 'admin@admin.com' AND senha = 'admin@admin';
        
-- Seleciona o nome e a quantidade de usuários que as raças de cavalo preferidas tem 
SELECT r.nome, COUNT(u.idUsuario) as quantidade
FROM usuario u
JOIN raca r ON u.fkRaca = r.idRaca
GROUP BY r.nome, u.fkRaca
order by quantidade desc;

-- Seleciona o total de acertos e erros fáceis que um usuário específico tem no total
select sum(t.acertos_facil) as acertosFaceis, sum(t.erros_facil) as errosFaceis 
from tentativas t
join usuario u on t.fkUsuario = u.idUsuario
where u.idUsuario = 1;

-- Seleciona o total de acertos e erros Médios que o usuário específico tem no total
select sum(t.acertos_medio) as acertosMedios, sum(t.erros_medio) as errosMedios 
from tentativas t
join usuario u on t.fkUsuario = u.idUsuario
where u.idUsuario = 1;

-- Seleciona o total de acertos e erros Difíceis que o usuário específico tem no total
select sum(t.acertos_dificil) as acertosDificeis, sum(t.erros_dificil) as errosDificeis 
from tentativas t
join usuario u on t.fkUsuario = u.idUsuario
where u.idUsuario = 1;

-- Seleciona o total de acertos e erros que o usuário específico tem no total
select sum(t.acertos_geral) as totalAcertos, sum(t.erros_geral) as totalErros
from tentativas t
join usuario u on t.fkUsuario = u.idUsuario
where u.idUsuario = 1;

-- Seleciona todos os tipos de acertos e erros que um usuário específico tem no total
SELECT 
	u.nome as NomeUsuario,
    SUM(t.acertos_facil) as acertosFaceis, 
    SUM(t.erros_facil) as errosFaceis,
    SUM(t.acertos_medio) as acertosMedios, 
    SUM(t.erros_medio) as errosMedios,
    SUM(t.acertos_dificil) as acertosDificeis, 
    SUM(t.erros_dificil) as errosDificeis,
    SUM(t.acertos_geral) as totalAcertosGerais, 
    SUM(t.erros_geral) as TotalErrosGerais
FROM 
    tentativas t
JOIN 
    usuario u ON t.fkUsuario = u.idUsuario
WHERE 
    u.idUsuario = 1;