function logar(){
    let email = document.getElementById('txtemail').value;
    let senha = document.getElementById('txtsenha').value;
    
     document.getElementById('msg').innerText = "";   
 
    if(email.trim()==="" || senha.trim()==="")
       document.getElementById('msg').innerText = "Informar e-mail e senha";
    else{
        let emailSalvo = localStorage.getItem("emailSalvo");
        let senhaSalva = localStorage.getItem("senhaSalva");

         if(email=== emailSalvo && senha=== senhaSalva){

             localStorage.setItem("key_email", email);
             location.href='filmes.html';
         }
         else
          document.getElementById('msg').innerText = "Dados incorretos";   
 
     }
 }
 
 function cadastrar(){
    window.location.href = "cadastro.html";
 }

 function salvar(){
     const inputnome = document.getElementById('txtnome');
     let nome = inputnome.value;

     localStorage.setItem("lsnome", nome);
     inputnome.value = "";
 
 }
 
 function recuperar(){
     let nome = localStorage.getItem("lsnome");
     if(nome){
         document.getElementById('spannome').innerText = nome;
     }
 
 }

 