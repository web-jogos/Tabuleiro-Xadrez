var canvas = document.getElementById("canvas");
var NUM_COLUNAS = 8;
var COR_BRANCA = "rgb(255,255,255)";
var COR_PRETA = "rgb(0,0,0)";
var LARGURA_CANVAS = canvas.width;
var ALTURA_CANVAS = canvas.height;
var ctx = canvas.getContext("2d");
var lado = LARGURA_CANVAS / 8;
var TAMANHO_TABULEIRO = lado * 8;

function quadsPretos() {
	for(var y =0; y <= NUM_COLUNAS; y += 1){
			for(var i = 0; i < TAMANHO_TABULEIRO; i += 2 * lado){
				ctx.beginPath();
				if(y % 2 == 0){
          ctx.rect(i+lado,y*lado,lado,lado);
        }
				else{
          ctx.rect(i,y*lado,lado,lado);
        }
				ctx.fillStyle = COR_PRETA;
				ctx.fill();
			}
	}
}

//Background
ctx.beginPath();
ctx.fillStyle = COR_BRANCA;
ctx.fillRect(0, 0, LARGURA_CANVAS, ALTURA_CANVAS);
ctx.stroke();

quadsPretos();
