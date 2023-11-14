Per1 = {
  nome: "Tanjiro",
  img: "https://images.alphacoders.com/129/1290857.png",
  atributos: {
    Força: 7,
    Resistência: 9,
    Velocidade: 6,
    Respiração: 10,
  },
};

Per2 = {
  nome: "Nezuko (Trunfo)",
  img: "https://images3.alphacoders.com/110/1105901.jpg",
  atributos: {
    Força: 10,
    Resistência: 10,
    Velocidade: 10,
    Poder: 10,
  },
};

Per3 = {
  nome: "Zenitsu",
  img: "https://images8.alphacoders.com/111/1114659.jpg",
  atributos: {
    Força: 5,
    Resistência: 6,
    Velocidade: 9,
    Respiração: 8,
  },
};

Per4 = {
  nome: "Inosuke",
  img: "https://images.alphacoders.com/133/1339436.png",
  atributos: {
    Força: 7,
    Resistência: 8,
    Velocidade: 6,
    Respiração: 6,
  },
};

Per5 = {
  nome: "Giyu",
  img: "https://images8.alphacoders.com/123/1234488.png",
  atributos: {
    Força: 8,
    Resistência: 7,
    Velocidade: 7,
    Respiração: 9,
  },
};

Per6 = {
  nome: "Shinobu",
  img: "https://images8.alphacoders.com/129/1290860.png",
  atributos: {
    Força: 4,
    Resistência: 5,
    Velocidade: 7,
    Respiração: 7,
  },
};

Per7 = {
  nome: "Uzui",
  img: "https://images2.alphacoders.com/119/1195554.png",
  atributos: {
    Força: 8,
    Resistência: 9,
    Velocidade: 10,
    Respiração: 8,
  },
};

Per8 = {
  nome: "Mitsuri",
  img: "https://images4.alphacoders.com/124/1242458.png",
  atributos: {
    Força: 10,
    Resistência: 7,
    Velocidade: 6,
    Respiração: 7,
  },
};

Per9 = {
  nome: "Muichiro",
  img: "https://images3.alphacoders.com/131/1316633.jpeg",
  atributos: {
    Força: 8,
    Resistência: 7,
    Velocidade: 9,
    Respiração: 10,
  },
};

Per10 = {
  nome: "Kyojuro",
  img: "https://images8.alphacoders.com/100/1005830.jpg",
  atributos: {
    Força: 8,
    Resistência: 9,
    Velocidade: 8,
    Respiração: 10,
  },
};

let cartaMaquina;
let cartaJogador;
let cartas = [Per1, Per2, Per3, Per4, Per5, Per6, Per7, Per8, Per9, Per10];

function sortearCarta() {
  let numeroCartaMaquina = parseInt(Math.random() * 8);
  cartaMaquina = cartas[numeroCartaMaquina];

  let numeroCartaJogador = parseInt(Math.random() * 8);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 8);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibeCartaJogador();
}

function exibeCartaJogador() {
  let divCartaJogador = document.getElementById("carta-jogador");
  let moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.img})`;
  let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  let opcoesTexto = "";

  for (let atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  let html = "<div id='opcoes' class='carta-status'>";

  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
}

function obtemAtributoSelecionado() {
  let radioAtributo = document.getElementsByName("atributo");
  for (let i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  let divResultado = document.getElementById("resultado");
  let atributoSelecionado = obtemAtributoSelecionado();

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = '<p class="resultado-final">VENCEU!</p>';
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = '<p class="resultado-final">PERDEU!</p>';
  } else {
    htmlResultado = '<p class="resultado-final">Empatou</p>';
  }

  divResultado.innerHTML = htmlResultado;
  exibeCartaMaquina();
}

function exibeCartaMaquina() {
  let divCartaMaquina = document.getElementById("carta-maquina");
  let moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.img})`;
  let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  let opcoesTexto = "";

  for (let atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "<br>";
  }

  let html = "<div id='opcoes' class='carta-status'>";

  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>";

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}
