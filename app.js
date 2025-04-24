const matrizGastos = [
    ["Alimentação", 0],
    ["Transporte", 0],
    ["Lazer", 0],
    ["Outros", 0],
    ["Total", 0],
]

//Funções utilitárias
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;
const limparCampos = () => obterElemento("valor").value = "";
const formataValor = (valor) => valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

//obter valores do formulário
const obterValorInformado = () => parseFloat(obterElemento("valor").value);
const obterCategoriaInformada = () => obterElemento("categoria").value;

//Obter categoria da Matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);

//Atualizar valores
const atualizarValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);

const atualizarInterface = () => {
    matrizGastos.forEach(([nome, valor]) => {
        const elemento = obterElemento(nome);
        if(elemento) {
            elemento.textContent = `${nome}: R$ ${formataValor(valor)}`;
        }
    })
}

function adicionar() {
    const valorInformado = obterValorInformado();
    const categoriaInformada = obterCategoriaInformada();

    if(valorNegativo(valorInformado) || isNaN(valorInformado)) {
        alert("Valor inválido. Insira um valor válido");
        limparCampos();
        return;
    }

    const categoria = obterCategoria(matrizGastos, categoriaInformada);
    const total = obterCategoria(matrizGastos, "Total");
    atualizarValorCategoria(categoria, valorInformado);
    atualizarValorCategoria(total, valorInformado);
    atualizarInterface();
    limparCampos();
}