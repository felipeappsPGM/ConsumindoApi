async function buscarEndereco(cep) {
    var mensagem = document.getElementById('erro');
    mensagem.innerHTML = '';
    try {
        let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error('CEP não existente');
        }
        let cidade = document.getElementById('cidade');
        let rua = document.getElementById('endereco');
        let estado = document.getElementById('estado');

        cidade.value = consultaCepConvertida.localidade;
        rua.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;
        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    }
    catch (erro) {
        mensagem.innerHTML = `<p>Cep inválido</p>`
        console.log(erro);
    }
}

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscarEndereco(cep.value));




