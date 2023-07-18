async function buscaEndereco(cep) {
  var mensagemErro = document.getElementById("erro");
  mensagemErro.innerHTML = "";
  try {
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) {
      throw Error("CEP inexistente!");
    }
    var cidade = document.getElementById("cidade");
    var logradouro = document.getElementById("endereco");
    var estado = document.getElementById("estado");
    var bairro = document.getElementById("bairro");
    bairro.value = consultaCEPConvertida.bairro;
    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;
    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
  } catch (erro) {
    console.log(erro);
    mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente! </p>`;
  }
}

var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
