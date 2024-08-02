var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "dc",
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM dc.produtos;", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    console.log(result.filter((item) => item.preco > 10));
    process.exit();
  });
});
