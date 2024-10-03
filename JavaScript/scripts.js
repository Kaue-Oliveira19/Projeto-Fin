//Função que valida o login, verficando se o usuário e senha estão corretos.
function login(){
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    /*
    Se o nome do usuário e a senha for igual da condição abaixo, será mostrado um alert, 
    dizendo que foi logado com sucesso e será redirecionado para outra página.
    */
    if(user == "adm" && password == "123"){
        alert('Logado com sucesso!');
        location. href = "home.html";
    }
    //Senão, será mostrado um alert dizendo que o usuário ou senha estão incorretos
    else{
        alert('Usuário ou senha incorrento!');
    }
}