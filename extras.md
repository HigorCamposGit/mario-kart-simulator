// Exemplo de como você pode adaptar a função de confronto no seu código:
async function playRaceEngine(character1, character2) {
  // ... (sua lógica de rodadas e blocos)

  // SE CAIU EM CONFRONTO:
  if(block === "CONFRONTO") {
    let powerDice1 = Math.floor(Math.random() * 6) + 1 + character1.PONTOS;
    let powerDice2 = Math.floor(Math.random() * 6) + 1 + character2.PONTOS;

    console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

    if(powerDice1 > powerDice2) {
      console.log(`${character1.NOME} venceu o confronto!`);
      
      // REGRA NOVA: O vencedor ganha um turbo (+1 ponto) aleatoriamente ou direto
      character1.PONTOS += 1;
      console.log(`🚀 ${character1.NOME} ganhou um Turbo e somou +1 ponto!`);

      // Sorteia o dano para o perdedor (Casco ou Bomba)
      let danoAleatorio = Math.random() < 0.5 ? "CASCO" : "BOMBA";
      if(danoAleatorio === "CASCO" && character2.PONTOS > 0) {
        character2.PONTOS -= 1;
        console.log(`🐢 ${character2.NOME} foi atingido por um Casco e perdeu 1 ponto!`);
      } else if(danoAleatorio === "BOMBA" && character2.PONTOS > 0) {
        character2.PONTOS -= 2;
        console.log(`💣 ${character2.NOME} foi atingido por uma Bomba e perdeu 2 pontos!`);
      }
    } 
    else if(powerDice2 > powerDice1) {
      console.log(`${character2.NOME} venceu o confronto!`);
      
      character2.PONTOS += 1;
      console.log(`🚀 ${character2.NOME} ganhou um Turbo e somou +1 ponto!`);

      let danoAleatorio = Math.random() < 0.5 ? "CASCO" : "BOMBA";
      if(danoAleatorio === "CASCO" && character1.PONTOS > 0) {
        character1.PONTOS -= 1;
        console.log(`🐢 ${character1.NOME} foi atingido por um Casco e perdeu 1 ponto!`);
      } else if(danoAleatorio === "BOMBA" && character1.PONTOS > 0) {
        character1.PONTOS -= 2;
        console.log(`💣 ${character1.NOME} foi atingido por uma Bomba e perdeu 2 pontos!`);
      }
    } else {
      console.log("Confronto empatado! Nenhum item foi disparado.");
    }
  }
}