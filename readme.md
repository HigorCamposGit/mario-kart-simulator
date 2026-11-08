# 🏎️ Mario Kart Simulation (Node.js)

Simulador de corridas de Mario Kart desenvolvido em **Node.js** (CLI), baseado no desafio da trilha de Backend da DIO, customizado e refatorado com regras avançadas de itens e combate.

## 🕹️ Regras e Mecânicas

- **Corredores:** O sistema sorteia automaticamente dois personagens aleatórios no início de cada corrida entre os disponíveis (Mario, Luigi, Peach, Bowser, Yoshi, Donkey Kong), cada um com atributos próprios de **Velocidade**, **Manobrabilidade** e **Poder**.
- **Pista (5 Rodadas):** A cada rodada, um bloco aleatório é sorteado:
  - 🛣️ **Reta:** Dado de 6 lados + atributo `VELOCIDADE`. O maior resultado pontua.
  - 🔄 **Curva:** Dado de 6 lados + atributo `MANOBRABILIDADE`. O maior resultado pontua.
  - 🥊 **Confronto:** Dado de 6 lados + atributo `PODER`. 
    - O **vencedor** ganha um **Turbo** (`+1 ponto`).
    - O **perdedor** é atingido aleatoriamente por um **Casco** (`-1 ponto`) ou uma **Bomba** (`-2 pontos`, com proteção contra pontos negativos).
- **Vitória:** Vence o corredor que acumular mais pontos ao final das 5 rodadas.

---

## 🚀 Como Executar

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. Clone o repositório ou abra a pasta do projeto no seu terminal.
2. Instale as dependências (caso utilize o Nodemon):
   ```bash
   npm install

---
## 🤝 Conecte-se Comigo

<p align="center">
  <img src="https://github.com/HigorCamposGit.png" width="100px" style="border-radius: 50%;" alt="Foto de Higor de Campos" /><br />
  <b>Projeto atualizado por:</b> <a href="https://github.com/HigorCamposGit">Higor de Campos</a>
</p>

---
