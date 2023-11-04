
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
	palavra001 = {
		nome: "HIDDEN",
		categoria:"TIPOS DE INPUT"
	},

	palavra002 = {
		nome: "IMAGE",
		categoria:"TIPOS DE INPUT"
	},

	palavra003 = {
		nome : "MONTH",
		categoria : "TIPOS DE INPUT"
	},

	palavra004 = {
		nome : "NUMBER",
		categoria : "TIPOS DE INPUT"
	},

	palavra005 = {
		nome : "CHECKBOX",
		categoria : "TIPOS DE INPUT"
	},

	palavra006 = {
		nome : "BUTTON",
		categoria : "TIPOS DE INPUT"
	},

	palavra007 = {
		nome : "EMAIL",
		categoria : "TIPOS DE INPUT"
	},

	palavra008 = {
		nome : "PASSWORD",
		categoria : "TIPOS DE INPUT"
	},

	palavra009 = {
		nome : "SUBMIT",
		categoria : "TIPOS DE INPUT"
	},

	palavra010 = {
		nome : "URL",
		categoria : "TIPOS DE INPUT"
	},

	palavra011 = {
		nome : "MACACO",
		categoria : "ANIMAIS"
	},

	palavra012 = {
		nome : "TIGRE",
		categoria : "ANIMAIS"
	},

	palavra013 = {
		nome : "ARANHA",
		categoria : "ANIMAIS"
	},

	palavra014 = {
		nome : "MORCEGO",
		categoria : "ANIMAIS"
	},

	palavra015 = {
		nome : "LEOPARDO",
		categoria : "ANIMAIS"
	},

	palavra016 = {
		nome : "CACHORRO",
		categoria : "ANIMAIS"
	},

	palavra017 = {
		nome : "GATO",
		categoria : "ANIMAIS"
	},

	palavra018 = {
		nome : "PATO",
		categoria : "ANIMAIS"
	},

	palavra019 = {
		nome : "URSO",
		categoria : "ANIMAIS"
	},

	palavra020 = {
		nome : "LAGARTIXA",
		categoria : "ANIMAIS"
	},

	palavra021 = {
		nome : "DOCTYPE",
		categoria : "TAGS HTML"
	},

	palavra022 = {
		nome : "HEAD",
		categoria : "TAGS HTML"
	},

	palavra023 = {
		nome : "TITLE",
		categoria : "TAGS HTML"
	},

	palavra024 = {
		nome : "BODY",
		categoria : "TAGS HTML"
	},

	palavra025 = {
		nome : "FOOTER",
		categoria : "TAGS HTML"
	},

	palavra026 = {
		nome : "SECTION",
		categoria : "TAGS HTML"
	},

	palavra027 = {
		nome : "HEADER",
		categoria : "TAGS HTML"
	},

	palavra028 = {
		nome : "SCRIPT",
		categoria : "TAGS HTML"
	},

	palavra029 = {
		nome : "BUTTON",
		categoria : "TAGS HTML"
	},

	palavra030 = {
		nome : "ORELHA",
		categoria : "CORPO"
	},

	palavra031 = {
		nome : "OLHO",
		categoria : "CORPO"
	},

	palavra032 = {
		nome : "DEDO",
		categoria : "CORPO"
	},

	palavra033 = {
		nome : "PERNA",
		categoria : "CORPO"
	},

	palavra034 = {
		nome : "CABELO",
		categoria : "CORPO"
	},

	palavra035 = {
		nome :"OSSO",
		categoria : "CORPO"
	},

	palavra036 = {
		nome : "DENTE",
		categoria : "CORPO"
	},

	palavra037 = {
		nome : "BOCA",
		categoria : "CORPO"
	},

	palavra038 = {
		nome : "UNHA",
		categoria : "CORPO"
	},

	palavra039 = {
		nome : "PELE",
		categoria : "CORPO"
	},

	palavra040 = {
		nome : "GENGIVA",
		categoria : "CORPO"
	},

	palavra041 = {
		nome : "TERRA",
		categoria : "SISTEMA SOLAR"
	},

	palavra042 = {
		nome : "MARTE",
		categoria : "SISTEMA SOLAR"
	},

	palavra043 = {
		nome : "VENUS",
		categoria : "SISTEMA SOLAR"
	},

	palavra044 = {
		nome : "MERCURIO",
		categoria : "SISTEMA SOLAR"
	},

	palavra045 = {
		nome : "SATURNO",
		categoria : "SISTEMA SOLAR"
	},

	palavra046 = {
		nome : "JUPITER",
		categoria : "SISTEMA SOLAR"
	},

	palavra047 = {
		nome : "URANO",
		categoria : "SISTEMA SOLAR"
	},

	palavra048 = {
		nome : "NETUNO",
		categoria : "SISTEMA SOLAR"
	},

	palavra049 = {
		nome : "LUA",
		categoria : "SISTEMA SOLAR"
	},

	palavra050 = {
		nome : "SOL",
		categoria : "SISTEMA SOLAR"
	},

	palavra051 = {
		nome: "COGUMELO",
		categoria : "LEGUME"
	},

	palavra052 = {
		nome: "BETERRABA",
		categoria : "LEGUME"
	},

	palavra053 = {
		nome: "CENOURA",
		categoria : "LEGUME"
	},

	palavra054 = {
		nome: "PEPINO",
		categoria : "LEGUME"
	},

	palavra055 = {
		nome: "RABANETE",
		categoria : "LEGUME"
	},

	palavra056 = {
		nome: "ABOBRINHA",
		categoria : "LEGUME"
	},

	palavra057 = {
		nome: "ERVILHA",
		categoria : "LEGUME"
	},

	palavra058 = {
		nome: "BASQUETE",
		categoria : "ESPORTE"
	},

	palavra059 = {
		nome: "FUTEBOL",
		categoria : "ESPORTE"
	},

	palavra060 = {
		nome: "GOLFE",
		categoria : "ESPORTE"
	},

	palavra060 = {
		nome: "VOLEI",
		categoria : "ESPORTE"
	},

	palavra060 = {
		nome: "BOXE",
		categoria : "ESPORTE"
	},

	palavra061 = {
		nome: "SKATE",
		categoria : "ESPORTE"
	},

	palavra062 = {
		nome: "NATACAO",
		categoria : "ESPORTE"
	},

	palavra063 = {
		nome: "TENIS",
		categoria : "ESPORTE"
	},

	palavra064 = {
		nome: "ATLETISMO",
		categoria : "ESPORTE"
	},

	palavra065 = {
		nome: "ESGRIMA",
		categoria : "ESPORTE"
	},

	palavra066 = {
		nome: "CICLISMO",
		categoria : "ESPORTE"
	},

	palavra066 = {
		nome: "CANOAGEM",
		categoria : "ESPORTE"
	},

	palavra067 = {
		nome: "KARATE",
		categoria : "ESPORTE"
	},

	palavra068 = {
		nome: "JUDO",
		categoria : "ESPORTE"
	},

	palavra069 = {
		nome: "REMO",
		categoria : "ESPORTE"
	},

	palavra070 = {
		nome: "ESCALADA",
		categoria : "ESPORTE"
	},
	
	palavra070 = {
		nome: "ANGOLA",
		categoria : "PAÍS"
	},

	palavra071 = {
		nome: "CONGO",
		categoria : "PAÍS"
	},

	palavra072 = {
		nome: "GANA",
		categoria : "PAÍS"
	},

	palavra073 = {
		nome: "MARROCOS",
		categoria : "PAÍS"
	},

	palavra074 = {
		nome: "SENEGAL",
		categoria : "PAÍS"
	},

	palavra075 = {
		nome: "ARGENTINA",
		categoria : "PAÍS"
	},

	palavra076 = {
		nome: "CUBA",
		categoria : "PAÍS"
	},

	palavra077 = {
		nome: "URUGUAI",
		categoria : "PAÍS"
	},

	palavra078 = {
		nome: "PERU",
		categoria : "PAÍS"
	},

	palavra079 = {
		nome: "CANADA",
		categoria : "PAÍS"
	},

	palavra080 = {
		nome: "CHINA",
		categoria : "PAÍS"
	},

	palavra081 = {
		nome: "IRAQUE",
		categoria : "PAÍS"
	},

	palavra082 = {
		nome: "JAPAO",
		categoria : "PAÍS"
	},

	palavra083 = {
		nome: "TURQUIA",
		categoria : "PAÍS"
	},

	palavra084 = {
		nome: "ISRAEL",
		categoria : "PAÍS"
	},

	palavra085 = {
		nome: "ALEMANHA",
		categoria : "PAÍS"
	},

	palavra086 = {
		nome: "GRECIA",
		categoria : "PAÍS"
	},

	palavra087 = {
		nome: "PORTUGAL",
		categoria : "PAÍS"
	},

	palavra088 = {
		nome: "RUSSIA",
		categoria : "PAÍS"
	},

	palavra089 = {
		nome: "UCRANIA",
		categoria : "PAÍS"
	},

	palavra090 = {
		nome: "MONACO",
		categoria : "PAÍS"
	},

	palavra091 = {
		nome: "AUSTRALIA",
		categoria : "PAÍS"
	},

	palavra092 = {
		nome: "AMARELO",
		categoria : "COR"
	},

	palavra093 = {
		nome: "AZUL",
		categoria : "COR"
	},

	palavra094 = {
		nome: "VERDE",
		categoria : "COR"
	},

	palavra095 = {
		nome: "VERMELHO",
		categoria : "COR"
	},

	palavra096 = {
		nome: "BEGE",
		categoria : "COR"
	},

	palavra097 = {
		nome: "CIANO",
		categoria : "COR"
	},
	
	palavra098 = {
		nome: "CINZA",
		categoria : "COR"
	},

	palavra099 = {
		nome: "LARANJA",
		categoria : "COR"
	},

	palavra0100 = {
		nome: "PRETO",
		categoria : "COR"
	},

	palavra0101 = {
		nome: "ROSA",
		categoria : "COR"
	},

	palavra0102 = {
		nome: "ROXO",
		categoria : "COR"
	},

	palavra0103 = {
		nome: "VIOLETA",
		categoria : "COR"
	},
	
	palavra0104 = {
		nome: "BRANCO",
		categoria : "COR"
	},

	palavra0105 = {
		nome: "FACA",
		categoria : "ITENS DE COZINHA"
	},

	palavra0106 = {
		nome: "GARFO",
		categoria : "ITENS DE COZINHA"
	},

	palavra0107 = {
		nome: "COLHER",
		categoria : "ITENS DE COZINHA"
	},

	palavra0108 = {
		nome: "PRATO",
		categoria : "ITENS DE COZINHA"
	},

	palavra0109 = {
		nome: "PANELA",
		categoria : "ITENS DE COZINHA"
	},

	palavra0110 = {
		nome: "VASILHA",
		categoria : "ITENS DE COZINHA"
	},

	palavra0111 = {
		nome: "ESCORREDOR",
		categoria : "ITENS DE COZINHA"
	},

	palavra0112 = {
		nome: "COPO",
		categoria : "ITENS DE COZINHA"
	},

	palavra0113 = {
		nome: "CANECA",
		categoria : "ITENS DE COZINHA"
	},

	palavra0114 = {
		nome: "RALADOR",
		categoria : "ITENS DE COZINHA"
	},

	palavra0115 = {
		nome: "GELADEIRA",
		categoria : "ITENS DE COZINHA"
	},

	palavra0116 = {
		nome: "FORNO",
		categoria : "ITENS DE COZINHA"
	},

	palavra0117= {
		nome: "BULE",
		categoria : "ITENS DE COZINHA"
	},

	palavra0118= {
		nome: "XICARA",
		categoria : "ITENS DE COZINHA"
	},

	palavra0119= {
		nome: "CUTELO",
		categoria : "ITENS DE COZINHA"
	},

	palavra0120= {
		nome: "TORRADEIRA",
		categoria : "ITENS DE COZINHA"
	},

	palavra0121= {
		nome: "MICROONDAS",
		categoria : "ITENS DE COZINHA"
	},

	palavra0122= {
		nome: "ABRIDOR",
		categoria : "ITENS DE COZINHA"
	},

	palavra0123= {
		nome: "ESPONJA",
		categoria : "ITENS DE COZINHA"
	},

	palavra0124= {
		nome: "FILTRO",
		categoria : "ITENS DE COZINHA"
	},

	palavra0125= {
		nome: "PIREX",
		categoria : "ITENS DE COZINHA"
	},

	palavra0126= {
		nome: "COADOR",
		categoria : "ITENS DE COZINHA"
	},

	palavra0127= {
		nome: "BATEDEIRA",
		categoria : "ITENS DE COZINHA"
	},

	palavra0128= {
		nome: "TABUA",
		categoria : "ITENS DE COZINHA"
	},

	palavra0129= {
		nome: "LIXEIRA",
		categoria : "ITENS DE COZINHA"
	},

	palavra0130= {
		nome: "CAFETEIRA",
		categoria : "ITENS DE COZINHA"
	},

	palavra0131= {
		nome: "ABEL",
		categoria : "NOMES"
	},

	palavra0132= {
		nome: "ARIEL",
		categoria : "NOMES"
	},

	palavra0133= {
		nome: "BARTOLOMEU",
		categoria : "NOMES"
	},

	palavra0134= {
		nome: "BETANIA",
		categoria : "NOMES"
	},

	palavra0135= {
		nome: "CLARISSE",
		categoria : "NOMES"
	},

	palavra0136= {
		nome: "CESARIO",
		categoria : "NOMES"
	},

	palavra0137= {
		nome: "DIONISIO",
		categoria : "NOMES"
	},

	palavra0138= {
		nome: "DAMARES",
		categoria : "NOMES"
	},

	palavra0139= {
		nome: "ELOA",
		categoria : "NOMES"
	},

	palavra0140= {
		nome: "EZEQUIEL",
		categoria : "NOMES"
	},

	palavra0141= {
		nome: "URSULA",
		categoria : "NOMES"
	},

	palavra0142= {
		nome: "ULISSES",
		categoria : "NOMES"
	},

	palavra0143= {
		nome: "VIRGEM",
		categoria : "SIGNOS"
	},

	palavra0144= {
		nome: "CAPRICORNIO",
		categoria : "SIGNOS"
	},

	palavra0145= {
		nome: "LEAO",
		categoria : "SIGNOS"
	},

	palavra0146= {
		nome: "GEMEOS",
		categoria : "SIGNOS"
	},

	palavra0147= {
		nome: "PEIXES",
		categoria : "SIGNOS"
	},

	palavra0148= {
		nome: "LIBRA",
		categoria : "SIGNOS"
	},

	palavra0149= {
		nome: "AQUARIO",
		categoria : "SIGNOS"
	},

	palavra0150= {
		nome: "CANCER",
		categoria : "SIGNOS"
	},

	palavra0151= {
		nome: "ESCORPIAO",
		categoria : "SIGNOS"
	},

	palavra0152= {
		nome: "SAGITARIO",
		categoria : "SIGNOS"
	},

	palavra0153= {
		nome: "TOURO",
		categoria : "SIGNOS"
	},

	palavra0153= {
		nome: "ARIES",
		categoria : "SIGNOS"
	},

];

criarPalavraSecreta();
function criarPalavraSecreta() {
	const indexPalavra = parseInt(Math.random() * palavras.length)

	palavraSecretaSorteada = palavras[indexPalavra].nome;
	palavraSecretaCategoria = palavras[indexPalavra].categoria;
	console.log(palavraSecretaSorteada)
	console.log(palavraSecretaCategoria)
}


montarPalavraNaTela();
function montarPalavraNaTela() {
	const categoria = document.getElementById("categoria");
	categoria.innerHTML = palavraSecretaCategoria;

	const palavraTela = document.getElementById("palavra-secreta");
	palavraTela.innerHTML = "";

	console.log(montarPalavraNaTela);

	for(i = 0; i < palavraSecretaSorteada.length; i++) {
		if(listaDinamica[i] == undefined){
			listaDinamica[i] = "&nbsp;"
			palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
		}
		else{
			palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
		}
	}

}

function verificaLetraEscolhida(letra) {
	document.getElementById("tecla-" + letra).disabled = true;

	if(tentativas > 0){
		MudarStyleLetra("tecla-" + letra);
		comparaListas(letra);
		montarPalavraNaTela();
	}
	
}

function MudarStyleLetra(tecla) {
	document.getElementById(tecla).style.background = "#b3e3a9";
	document.getElementById(tecla).style.color = "#284123";
}

function comparaListas(letra) {
	const posicao = palavraSecretaSorteada.indexOf(letra)
	if(posicao < 0) {
		tentativas--
		carregaImagemForca();

		if(tentativas ==0){
			abreModal("VOCÊ PERDEU....", "A resposta era " + palavraSecretaSorteada);
		}
		
		//verificar se ainda tem tentativas //msg na tela
	}
	else{
		for(i = 0; i < palavraSecretaSorteada.length; i++){
			if(palavraSecretaSorteada[i] == letra){
				listaDinamica[i] = letra;
			}
		}
	}
	let vitoria = true;
	for(i = 0; i < palavraSecretaSorteada.length; i++){
		if(palavraSecretaSorteada[i] != listaDinamica[i]){
			vitoria = false;
		}
	}
	if(vitoria == true){
		abreModal("MUITO BEM!!!", "VOCÊ ACERTOU");
		//mensagem na tela
		tentativas = 0;
	}
}

function carregaImagemForca() {
	switch(tentativas){
		case 5:
			document.getElementById("imagem").style.background = "url('img/forca_cbc.png";
			break;
		case 4:
			document.getElementById("imagem").style.background = "url('img/forca_crp.png";
			break;
		case 3:
			document.getElementById("imagem").style.background = "url('img/forca_bc1.png";
			break;
		case 2:
			document.getElementById("imagem").style.background = "url('img/forca_bc2.png";
			break;
		case 1:
			document.getElementById("imagem").style.background = "url('img/forca_p1.png";
			break;
		case 0:
			document.getElementById("imagem").style.background = "url('img/forca_p2.png";
			break;
		default:document.getElementById("imagem").style.background = "url('img/forca01x.png";
			break;
	}
}

function abreModal(titulo, mensagem){
	let modalTitulo = document.getElementById("exampleModalLabel");
	modalTitulo.innerText = titulo;

	let modalBody = document.getElementById("modalBody");
	modalBody.innerHTML = mensagem;

	$("#myModal").modal({
		show: true
	});
}

let btnReiniciar = document.querySelector("#btnReiniciar");
btnReiniciar.addEventListener("click", function(){
	location.reload();
});

function novoJogo(){
	location.reload();
};

