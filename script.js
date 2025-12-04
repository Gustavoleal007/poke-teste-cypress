// --- LOGIN ---
function fazerLogin() {
  const user = document.getElementById('usuario').value;
  const pass = document.getElementById('senha').value;
  const erro = document.getElementById('erro');

  if (user === "ash" && pass === "pikachu") {
    window.location.href = "home.html";
  } else {
    erro.textContent = "Usuário ou senha incorretos!";
  }
}

function sair() {
  window.location.href = "login.html";
}

// --- POKÉMONS LENDÁRIOS ---
const pokemons = [
  // os 20 anteriores
  { nome: "Mewtwo", especie: "Pokémon Geneticamente Criado", raridade: "Lendário", forca: 99, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png", desc: "Criado em laboratório a partir do DNA de Mew, Mewtwo possui um poder psíquico avassalador." },
  { nome: "Lugia", especie: "Guardião dos Mares", raridade: "Lendário", forca: 98, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png", desc: "Vive nas profundezas do oceano para evitar causar tempestades." },
  { nome: "Ho-Oh", especie: "Guardião do Céu", raridade: "Lendário", forca: 97, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/250.png", desc: "Diz-se que Ho-Oh renasce as almas dos justos e cria arco-íris em seu rastro." },
  { nome: "Rayquaza", especie: "Guardião dos Céus", raridade: "Lendário", forca: 99, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png", desc: "Habita as camadas superiores da atmosfera e acalma as batalhas entre Groudon e Kyogre." },
  { nome: "Groudon", especie: "Pokémon Continental", raridade: "Lendário", forca: 96, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/383.png", desc: "Representa a terra e os vulcões." },
  { nome: "Kyogre", especie: "Pokémon Oceânico", raridade: "Lendário", forca: 96, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/382.png", desc: "Senhor das águas, capaz de criar mares inteiros." },
  { nome: "Dialga", especie: "Guardião do Tempo", raridade: "Lendário", forca: 95, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/483.png", desc: "O tempo flui por sua vontade." },
  { nome: "Palkia", especie: "Guardião do Espaço", raridade: "Lendário", forca: 95, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/484.png", desc: "Controla dimensões e o espaço." },
  { nome: "Giratina", especie: "Sentinela do Mundo Reverso", raridade: "Ultra Lendário", forca: 98, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/487.png", desc: "Banido por sua natureza violenta, observa o mundo a partir de uma dimensão espelhada." },
  { nome: "Reshiram", especie: "Chama da Verdade", raridade: "Lendário", forca: 97, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/643.png", desc: "Representa a verdade e o fogo purificador." },
  { nome: "Zekrom", especie: "Relâmpago dos Ideais", raridade: "Lendário", forca: 97, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/644.png", desc: "O dragão elétrico que defende os ideais e a justiça." },
  { nome: "Xerneas", especie: "Guardião da Vida", raridade: "Mítico", forca: 96, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/716.png", desc: "Pode conceder vida eterna. Suas galhadas brilham com as cores do arco-íris." },
  { nome: "Yveltal", especie: "Guardião da Destruição", raridade: "Mítico", forca: 96, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/717.png", desc: "Rouba a energia vital de tudo ao redor." },
  { nome: "Zygarde", especie: "Guardião do Equilíbrio", raridade: "Lendário", forca: 94, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/718.png", desc: "Forma perfeita da ordem natural." },
  { nome: "Solgaleo", especie: "Pokémon Sol", raridade: "Lendário", forca: 96, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/791.png", desc: "Representa o brilho do sol." },
  { nome: "Lunala", especie: "Pokémon Lua", raridade: "Lendário", forca: 96, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/792.png", desc: "Representa a escuridão e o mistério lunar." },
  { nome: "Necrozma", especie: "Devorador de Luz", raridade: "Ultra Lendário", forca: 99, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/800.png", desc: "Um ser enigmático que absorve luz e energia." },
  { nome: "Zacian", especie: "Espada do Rei", raridade: "Lendário", forca: 98, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/888.png", desc: "Um guerreiro elegante com uma espada lendária." },
  { nome: "Zamazenta", especie: "Escudo da Realeza", raridade: "Lendário", forca: 98, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/889.png", desc: "Companheiro de Zacian, símbolo de proteção e honra." },
  { nome: "Arceus", especie: "Criador do Universo Pokémon", raridade: "Divino", forca: 100, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/493.png", desc: "Criador de tudo, o deus supremo dos Pokémon." },
  // +10 novos
  { nome: "Regigigas", especie: "Titã dos Regi", raridade: "Lendário", forca: 95, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/486.png", desc: "Puxou os continentes com cordas de gelo e criou as montanhas." },
  { nome: "Cresselia", especie: "Lunar Pokémon", raridade: "Lendário", forca: 90, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/488.png", desc: "Símbolo de sonhos bons e calmaria." },
  { nome: "Heatran", especie: "Pokémon Lava", raridade: "Lendário", forca: 92, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/485.png", desc: "Habita o magma das montanhas, com um corpo de aço derretido." },
  { nome: "Calyrex", especie: "Rei da Colheita", raridade: "Mítico", forca: 94, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/898.png", desc: "Rei sábio que governa a natureza e os corações dos seres vivos." },
  { nome: "Entei", especie: "Fera Vulcânica", raridade: "Lendário", forca: 93, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png", desc: "Nascido de uma erupção, carrega fogo eterno." },
  { nome: "Raikou", especie: "Trovão da Tempestade", raridade: "Lendário", forca: 93, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png", desc: "Incorpora a velocidade e o poder dos relâmpagos." },
  { nome: "Suicune", especie: "Vento do Norte", raridade: "Lendário", forca: 93, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png", desc: "Purifica as águas e traz tranquilidade aos ventos." },
  { nome: "Darkrai", especie: "Senhor dos Pesadelos", raridade: "Mítico", forca: 95, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/491.png", desc: "Habita os sonhos e espalha pesadelos eternos." },
  { nome: "Deoxys", especie: "Forma Genética", raridade: "Lendário", forca: 98, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/386.png", desc: "Criado a partir de um vírus espacial, com múltiplas formas." },
  { nome: "Melmetal", especie: "Metal Vivo", raridade: "Mítico", forca: 97, imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/809.png", desc: "Forma evoluída de Meltan, com corpo líquido metálico." }
];

// --- Renderização da Pokédex ---
function renderizarPokemons(lista) {
  const pokedex = document.getElementById("pokedex");
  if (!pokedex) return;

  pokedex.innerHTML = "";
  lista.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${p.imagem}" alt="${p.nome}"><h3>${p.nome}</h3>`;
    card.onclick = () => abrirModal(p);
    pokedex.appendChild(card);
  });
}

// --- Modal ---
function abrirModal(p) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-nome").textContent = p.nome;
  document.getElementById("modal-img").src = p.imagem;
  document.getElementById("modal-especie").textContent = p.especie;
  document.getElementById("modal-raridade").textContent = p.raridade;
  document.getElementById("modal-forca").textContent = p.forca;
  document.getElementById("modal-desc").textContent = p.desc;
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// --- Filtro ---
function filtrarPokemons() {
  const termo = document.getElementById("busca").value.toLowerCase();
  const filtrados = pokemons.filter(p => p.nome.toLowerCase().includes(termo));
  renderizarPokemons(filtrados);
}

window.onload = () => renderizarPokemons(pokemons);
