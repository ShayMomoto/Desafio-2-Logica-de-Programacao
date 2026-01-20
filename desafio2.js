const prompt = require("readline");
const rl = prompt.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que calcula o nível do jogador
function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } 
    else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } 
    else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } 
    else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } 
    else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } 
    else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } 
    else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return {
        saldoVitorias,
        nivel
    };
}

// Laço para permitir testar vários jogadores
function iniciar() {
    rl.question("Digite o número de vitórias: ", (vit) => {
        rl.question("Digite o número de derrotas: ", (der) => {

            let vitorias = parseInt(vit);
            let derrotas = parseInt(der);

            let resultado = calcularRank(vitorias, derrotas);

            console.log(
                `O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`
            );

            rl.question("Deseja calcular outro jogador? (s/n): ", (resposta) => {
                if (resposta.toLowerCase() === "s") {
                    iniciar(); // repete
                } else {
                    console.log("Programa encerrado.");
                    rl.close();
                }
            });

        });
    });
}

iniciar();
