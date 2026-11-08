// Lista completa de personagens disponíveis para o sorteio
const CHARACTERS = [
  { NAME: "Mario", VELOCIDADE: 4, MANOBRABILIDADE: 3, PODER: 3, PONTOS: 0 },
  { NAME: "Luigi", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 4, PONTOS: 0 },
  { NAME: "Peach", VELOCIDADE: 3, MANOBRABILIDADE: 5, PODER: 2, PONTOS: 0 },
  { NAME: "Bowser", VELOCIDADE: 2, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 },
  { NAME: "Yoshi", VELOCIDADE: 5, MANOBRABILIDADE: 2, PODER: 3, PONTOS: 0 },
  { NAME: "Donkey Kong", VELOCIDADE: 2, MANOBRABILIDADE: 3, PODER: 5, PONTOS: 0 }
];

// Função para sortear dois corredores diferentes aleatoriamente
function getRandomRacers(charactersList) {
  let shuffled = [...charactersList].sort(() => 0.5 - Math.random());
  // Retorna cópias dos objetos para não alterar a lista original
  return {
    player1: { ...shuffled[0] },
    player2: { ...shuffled[1] }
  };
}

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }
  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(`🎲 ${characterName} rolou um dado de ${block} [${diceResult}] + Atributo [${attribute}] = Total: ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`\n🏁 ---------------- Rodada ${round} ---------------- 🏁`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`📍 Tipo de Bloco: ${block}`);

    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(character1.NAME, "velocidade", diceResult1, character1.VELOCIDADE);
      await logRollResult(character2.NAME, "velocidade", diceResult2, character2.VELOCIDADE);
    }

    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(character1.NAME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
      await logRollResult(character2.NAME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;
      
      console.log(`🥊 BATE-BOCA NA PISTA! ${character1.NAME} confrontou com ${character2.NAME}!`);

      await logRollResult(character1.NAME, "poder", diceResult1, character1.PODER);
      await logRollResult(character2.NAME, "poder", diceResult2, character2.PODER);

      // Função interna para aplicar dano aleatório (Casco ou Bomba)
      const applyDamage = (loser) => {
        if (loser.PONTOS > 0) {
          let danoAleatorio = Math.random() < 0.5 ? "CASCO" : "BOMBA";
          if (danoAleatorio === "CASCO") {
            loser.PONTOS -= 1;
            console.log(`🐢 ${loser.NAME} foi atingido por um Casco e perdeu 1 ponto!`);
          } else {
            loser.PONTOS -= 2;
            if (loser.PONTOS < 0) loser.PONTOS = 0;
            console.log(`💣 ${loser.NAME} foi atingido por uma Bomba e perdeu 2 pontos!`);
          }
        } else {
          console.log(`🛡️ ${loser.NAME} está zerado de pontos e escapou do ataque!`);
        }
      };

      if (powerResult1 > powerResult2) {
        console.log(`✨ ${character1.NAME} venceu o confronto!`);
        character1.PONTOS += 1;
        console.log(`🚀 ${character1.NAME} ganhou um Turbo e somou +1 ponto!`);
        applyDamage(character2);
      } else if (powerResult2 > powerResult1) {
        console.log(`✨ ${character2.NAME} venceu o confronto!`);
        character2.PONTOS += 1;
        console.log(`🚀 ${character2.NAME} ganhou um Turbo e somou +1 ponto!`);
        applyDamage(character1);
      } else {
        console.log("🤝 Confronto empatado! Nenhum item foi disparado.");
      }
    }

    // Verificando o vencedor da rodada (apenas para RETA e CURVA)
    if (block !== "CONFRONTO") {
      if (totalTestSkill1 > totalTestSkill2) {
        console.log(`🏆 ${character1.NAME} marcou um ponto nesta rodada!`);
        character1.PONTOS++;
      } else if (totalTestSkill2 > totalTestSkill1) {
        console.log(`🏆 ${character2.NAME} marcou um ponto nesta rodada!`);
        character2.PONTOS++;
      } else {
        console.log(`🤝 Empate na rodada! Ninguém pontuou.`);
      }
    }
  }
}

async function declareWinner(character1, character2){
  console.log("\n==================================");
  console.log("📊 RESULTADO FINAL DA CORRIDA");
  console.log("==================================");
  console.log(`👤 ${character1.NAME}: ${character1.PONTOS} ponto(s)`); 
  console.log(`👤 ${character2.NAME}: ${character2.PONTOS} ponto(s)`); 
  console.log("==================================");

  if(character1.PONTOS > character2.PONTOS){
    console.log(`🏆🎉 ${character1.NAME} venceu a corrida! Parabéns! 👑\n`);
  } else if(character2.PONTOS > character1.PONTOS){
    console.log(`🏆🎉 ${character2.NAME} venceu a corrida! Parabéns! 👑\n`);
  } else {
    console.log("🤝 A corrida terminou em um empate emocionante!\n");
  }
}

(async function main() {
  // Sorteia dois corredores aleatórios a cada execução
  const { player1, player2 } = getRandomRacers(CHARACTERS);

  console.log(`\n🏎️💨 Corrida oficial entre ${player1.NAME} e ${player2.NAME} começando...\n`);

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();