let cep = document.querySelector("#cep");
let rua = document.querySelector("#rua");
let bairro = document.querySelector("#bairro");
let cidade = document.querySelector("#cidade");
let estado = document.querySelector("#estado");

// cep.value = "01001000";

cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement("script");
    script.src ='https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
    document.body.appendChild(script);
});

function popularForm(resposta){
    if("erro" in resposta){
        alert('Cep não encontrado');
        return;
    }
    console.log(resposta);
    rua.value =  resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}

function limparFormulario() {
  // Obtém todos os elementos de input do formulário
  const inputs = document.querySelectorAll("input");

  // Percorre cada elemento de input
  for (const input of inputs) {
    // Se for um campo de texto, limpa o valor
    if (input.type === "text") {
      input.value = "";
    }

    // Se for um campo de seleção, define a opção "selecionado" como a primeira
    if (input.type === "select") {
      input.selectedIndex = 0;
    }

    // Se for um campo de rádio, desmarca todos
    if (input.type === "radio") {
      input.checked = false;
    }

    // Se for um campo de checkbox, desmarca todos
    if (input.type === "checkbox") {
      input.checked = false;
    }
  }

  // Exibe uma mensagem de confirmação (opcional)
  alert("Formulário limpo com sucesso!");
}



