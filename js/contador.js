// JavaScript Document

// Contador //
var vizualizado = 0;
		
		function myLoop(inicio, fim, identificador, velocidade){
			if (vizualizado === 0) {
				var ml = setInterval(function () {
					$(identificador).html(inicio);
					inicio++;
					if (inicio <= fim) {
						myLoop();
					}else{
						clearInterval(ml);
						vizualizado++;
					}
				}, velocidade)
				
			}
		}

var vizualizado2 = 0;
		
		function myLoop2(inicio, fim, identificador, velocidade){
			if (vizualizado2 === 0) {
				var ml = setInterval(function () {
					$(identificador).html(inicio);
					inicio++;
					if (inicio <= fim) {
						myLoop2();
					}else{
						clearInterval(ml);
						vizualizado2++;
					}
				}, velocidade)
				
			}
		}

function myLoop3(inicio, fim, identificador, velocidade, marcador){
				var ml = setInterval(function () {
					$(identificador).html(inicio);
					inicio++;
					if (inicio <= fim) {
						myLoop2();
					}else{
						$(identificador).html(marcador);
						clearInterval(ml);
					}
				}, velocidade)

		}

function gente(){
	myLoop3(0, 33, '#g-h', 40, '33.4');
	myLoop3(0, 66, '#g-m', 40, '66.6');
	myLoop3(0, 57, '#aproveitamento', 40, '57.14');
	myLoop3(0, 54, '#posicoes', 40, '54.63');
}

function empreendimento(){
	myLoop3(600, 8184, '#e-empregos', 10, '8.184');
	myLoop3(0, 68, '#e-indice', 50, '68');
	myLoop3(4000, 6485, '#e-empregos-f', 10, '6.485');
	myLoop3(0, 3, '#e-cidades', 50, '3');
	myLoop3(32, 100, '#e-fornededores', 50, '100');
	myLoop3(0, 76, '#e-valor', 50, '76');
}

function meioAmbiente(){
	myLoop3(200, 579, '#m-a-litros', 5, '579');
	myLoop3(200, 579, '#m-a-agua', 5, '579');
	myLoop3(200, 579, '#m-a-consumo', 5, '579');
	myLoop3(200, 579, '#m-a-reducao', 5, '579');
	myLoop3(200, 579, '#m-a-volume', 5, '579');
	myLoop3(200, 579, '#m-a-resiuos', 5, '579');
	myLoop3(200, 579, '#m-a-toneladas', 5, '579');
}

myLoop(200, 579, '#lojas-brasil-hering', 5);
myLoop(1, 19, '#lojas-exterior-hering', 100);
myLoop(5400, 6319, '#colaboradores', 5);
myLoop2(100, 243, '#franquias', 50);
myLoop2(0, 10, '#m-marcas', 300);
myLoop2(100, 277, '#r-comerciais', 20);
myLoop2(1900, 2900, '#fornecedores', 10);
myLoop2(0, 103, '#lojas-brasil-hering-kids', 20);
myLoop2(100, 230, '#receita-hering-kids', 20);
myLoop2(0, 46, '#lojas-brasil-puc', 100);
myLoop2(0, 105, '#receita-puc', 100);
myLoop2(0, 2, '#lojas-brasil-dzarm', 1000);
myLoop2(0, 73, '#receita-dzarm', 100);





