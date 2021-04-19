const dadosCadastro = [{
  nome: '',
  email: '',
  senha: '',
}]

function confirmarSenhas(params) {
    var todo = document.getElementById("password");
    var todo2 = document.getElementById("password-again");
    if(todo.value != todo2.value) { 
      todo2.classList.add("is-invalid");
      document.getElementById("invalid-feedback").style.display = "flex";
      document.getElementById("password-again-formgroup").classList.add("form-group-invalid")
    }else{
      console.log("Funfou")
      dadosCadastro.nome = document.getElementById("nome").value
      dadosCadastro.email = document.getElementById("email").value
      dadosCadastro.senha = document.getElementById("password").value
      cadastrarUsuario()
    }
}

function cadastrarUsuario(params) {
  var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
  db.transaction(function (tx) {
     tx.executeSql('CREATE TABLE IF NOT EXISTS COVID (nome, data, telefone, bairro, estado, cep)');
     tx.executeSql('INSERT INTO COVID (nome, data, telefone, bairro, estado, cep) VALUES (?,?,?,?,?,?)', 
     [nome, data, telefone, bairro, estado, cep]);
  });
};