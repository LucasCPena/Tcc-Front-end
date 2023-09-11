document.getElementById("btnentrar").addEventListener("click", function() {
    var usuario = document.getElementById("usuario").querySelector("input").value;
    var senha = document.getElementById("senha").querySelector("input").value;

    if (usuario === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var usermock = [
        { email: "teste@gmail.com", senha: "teste" },
       
    ];

    // Verificando se o usuário e senha correspondem a um usuário válido
    var usuarioValido = usermock.find
    (function(usuar){
        
        return usuar.email === usuario && usuar.senha === senha;
    });

    if (usuarioValido) {
        alert("Login bem-sucedido!");
        // Rediciona para a pagina main
         window.location.href = "Main.html";
    } else {
        alert("Credenciais inválidas. Por favor, tente novamente.");
    }
});