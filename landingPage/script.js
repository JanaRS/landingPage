let form = document.getElementById('cadastro');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let dataNasc = document.getElementById('data-nasc').value;
    let email = document.getElementById('email').value;


    if (nome, dataNasc, email != " ") {
        confirm(`
        Nome: ${nome}, 
        Data de nascimento: ${dataNasc}, 
        e-mail: ${email}. 
        Clique em OK para confirmar os dados.`)
        
        alert(`Parabéns, ${nome}, você ganhou 30% de desconto na sua primeira compra!`)

    }
    
})