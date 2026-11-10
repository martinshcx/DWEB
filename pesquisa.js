// vetores para guardar os dados de cada pessoa
var idades = [];
var sexos = [];
var opinioes = [];

function adicionar() {
    var idade = Number(document.getElementById("idade").value);
    var sexo = document.getElementById("sexo").value;
    var opiniao = Number(document.getElementById("opiniao").value);

    if (idades.length == 45) {
        document.getElementById("erro").innerHTML = "Já tem 45 respostas!";
        return;
    }

    if (idade <= 0) {
        document.getElementById("erro").innerHTML = "Digite uma idade válida!";
        return;
    }

    document.getElementById("erro").innerHTML = "";

    idades.push(idade);
    sexos.push(sexo);
    opinioes.push(opiniao);

    document.getElementById("idade").value = "";
    document.getElementById("contador").innerHTML = "Respostas: " + idades.length + " de 45";
}

function mostrarResultado() {
    if (idades.length == 0) {
        document.getElementById("erro").innerHTML = "Adicione pelo menos uma resposta!";
        return;
    }

    var soma = 0;
    var maisVelha = idades[0];
    var maisNova = idades[0];
    var pessimo = 0;
    var otimoBom = 0;
    var mulheres = 0;
    var homens = 0;
    var outros = 0;

    for (var i = 0; i < idades.length; i++) {
        soma = soma + idades[i];

        if (idades[i] > maisVelha) {
            maisVelha = idades[i];
        }
        if (idades[i] < maisNova) {
            maisNova = idades[i];
        }

        if (opinioes[i] == 1) {
            pessimo++;
        }
        if (opinioes[i] == 4 || opinioes[i] == 3) {
            otimoBom++;
        }

        if (sexos[i] == "F") {
            mulheres++;
        } else if (sexos[i] == "M") {
            homens++;
        } else {
            outros++;
        }
    }

    var media = soma / idades.length;
    var porcentagem = (otimoBom * 100) / idades.length;

    document.getElementById("resultado").innerHTML =
        "<h2>Resultado</h2>" +
        "Média de idade: " + media.toFixed(1) + "<br>" +
        "Pessoa mais velha: " + maisVelha + " anos<br>" +
        "Pessoa mais nova: " + maisNova + " anos<br>" +
        "Responderam péssimo: " + pessimo + "<br>" +
        "Responderam ótimo ou bom: " + porcentagem.toFixed(1) + "%<br>" +
        "Mulheres: " + mulheres + "<br>" +
        "Homens: " + homens + "<br>" +
        "Outros: " + outros;
}
