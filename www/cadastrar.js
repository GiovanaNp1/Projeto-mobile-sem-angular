const dadosCadastro = [{
  nome: '',
  email: '',
  senha: '',
  acesso: ''
}]

function confirmarSenhas(params) {
    var todo = document.getElementById("password");
    var todo2 = document.getElementById("password-again");

    var todoEmail = document.getElementById("email");
    var todoNome = document.getElementById("nome");
    var todoAcesso = document.getElementById("acesso");
      if(todo.value != todo2.value) { 
        todo2.classList.add("is-invalid");
        document.getElementById("invalid-feedback").style.display = "flex";
        document.getElementById("password-again-formgroup").classList.add("form-group-invalid")
      }else if(todoEmail.value === '' || todoNome.value === '' || todoAcesso.value === '' || todo.value === ''){
        console.log('Entro aqui')
        confirmarInputs(todoEmail, todoNome, todo, todoAcesso)
      }
      else{
        console.log("Funfou")
        dadosCadastro.nome = todoNome.value
        if(todoAcesso == 1){
          dadosCadastro.acesso = 'Professor'
        }else{
          dadosCadastro.acesso = 'Pais'
        }
        dadosCadastro.email = todoEmail.value
        dadosCadastro.senha = todo.value
        cadastrarUsuario()
      }
}

function confirmarInputs(todoEmail, todoNome, todo, todoAcesso) {
  if(todoEmail.value === ''){
    todoEmail.classList.add("is-invalid");
    document.getElementById("invalid-email").style.display = "flex";
    document.getElementById("email-formgroup").classList.add("form-group-invalid")
  }else{
    todoEmail.classList.remove("is-invalid");
    document.getElementById("invalid-email").style.display = "none";
    document.getElementById("email-formgroup").classList.remove("form-group-invalid")
  }
  if(todoAcesso.value === ''){
    todoAcesso.classList.add("is-invalid");
    document.getElementById("invalid-acesso").style.display = "flex";
    document.getElementById("acesso-formgroup").classList.add("form-group-invalid")
  }else{
    todoAcesso.classList.remove("is-invalid");
    document.getElementById("invalid-acesso").style.display = "none";
    document.getElementById("acesso-formgroup").classList.remove("form-group-invalid")
  }
  if(todoNome.value === ''){
    todoNome.classList.add("is-invalid");
    document.getElementById("invalid-nome").style.display = "flex";
    document.getElementById("nome-formgroup").classList.add("form-group-invalid")
  }else{
    todoNome.classList.remove("is-invalid");
    document.getElementById("invalid-nome").style.display = "none";
    document.getElementById("nome-formgroup").classList.remove("form-group-invalid")
  }
  if(todo.value === ''){
    todo.classList.add("is-invalid");
    document.getElementById("invalid-password").style.display = "flex";
    document.getElementById("password-formgroup").classList.add("form-group-invalid")
  }
  else{
    todo.classList.remove("is-invalid");
    document.getElementById("invalid-password").style.display = "none";
    document.getElementById("password-formgroup").classList.remove("form-group-invalid")
  }
}

function cadastrarUsuario(params) {
    var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
    db.transaction(function (tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS CADASTRO (nome, email, senha, acesso)');
      tx.executeSql('INSERT INTO CADASTRO (nome, email, senha, acesso) VALUES (?,?,?,?)', 
      [dadosCadastro.nome, dadosCadastro.email, dadosCadastro.senha, dadosCadastro.acesso]);
    });
    window.location.replace("./index.html");
};