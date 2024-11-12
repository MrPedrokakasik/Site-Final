function cadastrar(){
    let temail = document.getElementById('txtemail').value;
    let tsenha = document.getElementById('txtsenha').value;
    let tnome = document.getElementById('txtnome').value;
    
     document.getElementById('msg').innerText = "";   

    if(temail.trim() === "" || tsenha.trim() === "" || tnome.trim() === ""){
        document.getElementById('msg').innerText = "Todos os campos são obrigatórios!";
        return;
    }

     const usuario = {
        nome: tnome,
        senha : tsenha,
        email : temail
     };
     
      let array = localStorage.getItem('array_usuarios');
      let array_usuarios =  array==null?[]:JSON.parse(array);

      array_usuarios.push(usuario);

      localStorage.setItem('array_usuarios', 
                JSON.stringify(array_usuarios));

      document.getElementById('msg').innerText='Dados salvos com Sucesso!'


}