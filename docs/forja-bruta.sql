create table pais (
	id serial primary key,
	nome varchar(255)
);

create table regiao (
	id serial primary key,
	estado varchar(255),
	uf char(2),
	id_pais integer,
	foreign key (id_pais) references pais(id)
);

create table genero (
	id serial primary key,
	nome varchar(255),
	url_imagem varchar(255),
	id_regiao integer,
	foreign key (id_regiao) references regiao(id)
);

create table artista (
	id serial primary key,
	nome varchar(255),
	data_formacao date,
	ativo boolean,
	descricao text,
	url_imagem varchar(255),
	id_genero integer,
	id_regiao integer,
	foreign key (id_genero) references genero(id),
	foreign key (id_regiao) references regiao(id)
);

create table gravadora (
	id serial primary key,
	nome varchar(255),
	url_imagem varchar(255),
	id_regiao integer,
	foreign key (id_regiao) references regiao(id)
);

create table tipo (
	id serial primary key,
	titulo varchar(255)
);

create table disco (
	id serial primary key,
	titulo varchar(255),
	data_lancamento date,
	url_imagem varchar(255),
	id_artista integer,
	id_gravadora integer,
	id_tipo integer,
	foreign key (id_artista) references artista(id),
	foreign key (id_gravadora) references gravadora(id),
	foreign key (id_tipo) references tipo(id)
);

create table faixa (
	id serial primary key,
	titulo varchar(255),
	duracao decimal(4, 2),
	num_faixa integer,
	letra text,
	id_disco integer,
	foreign key (id_disco) references disco(id)
);

create table permissao (
	id serial primary key,
	titulo varchar(255),
	descricao text
);

create table usuario (
	id serial primary key,
	nome varchar(255),
	email varchar(255),
	telefone varchar(255),
	senha varchar(255),
	id_permissao integer,
	foreign key (id_permissao) references permissao(id)
);

















