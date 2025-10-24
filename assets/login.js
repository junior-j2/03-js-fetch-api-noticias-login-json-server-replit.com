async function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    let usuario = await lerUsuario(emailInformado);
    
    if (!usuario) {
        alert("E-mail informado incorretamente!");
        return;
    }

    if (emailInformado === usuario.email) {
        // alert("E-mail informado corretamente!");
        if (senhaInformada === usuario.senha) {
            // alert("Senha informada corretamente!");
            window.location = "home.html";
        } else
            alert("Senha informada incorretamente!")
    } else
        alert("E-mail informado incorretamente!");
}

async function lerUsuario(email) {
    const replit = 'https://c859a9f8-f371-494d-bbb5-1a8b28bfe0f3-00-2fsik0q3u3c47.worf.replit.dev:3000/'; // URL do projeto no Replit.com.
    const url = replit + `usuarios?email=${email}`;
    let usuario;

    await fetch(url)
        .then(response => response.json())
        .then(json => 
            usuario = { "email": json[0].email, "senha": json[0].senha }
        )
        .catch(error => console.error(error))

    return usuario;
}