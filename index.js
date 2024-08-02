const { Sequelize } = require("sequelize"); // Importa o Sequelize

// Cria uma instância do Sequelize, configurando a conexão com o banco de dados
const sequelize = new Sequelize("dc", "root", "1234", {
  host: "localhost", // Endereço do servidor MySQL
  dialect: "mysql", // Dialeto a ser usado (MySQL)
});

// Autentica a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso."); // Mensagem de sucesso

    // Exemplo de consulta bruta: Seleciona todos os usuários da tabela 'Users'
    return sequelize.query("SELECT * FROM dc.produtos;", {
      type: sequelize.QueryTypes.SELECT,
    });
  })
  .then((users) => {
    console.log("Usuários:", users); // Exibe o resultado da consulta
  })
  .catch((err) => {
    console.error("Erro ao conectar ou executar a consulta:", err); // Mensagem de erro
  });
