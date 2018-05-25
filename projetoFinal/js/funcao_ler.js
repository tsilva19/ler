/**
 * função de validação de campo requerido
 */
function validaBusca(){
	//verificação de campo requerido
	if (document.querySelector('#q').value == ''){
		//troca a cor da background
		document.querySelector('#form-busca').style.background = 'red';
		//mensagem de erro
	alert("Campo não informado!!!");
	return false;
	}
}

//associando a validação ao evento de envio do formulário
document.querySelector('#form-busca').onsubmit = validaBusca;

/*animar banner*/
//atualização de banners
var banners = ["img/bannerler.jpg", "img/bannerler1.jpg", "img/bannerler2.jpg", "img/bannerler3.jpg", "img/bannerler4.jpg", "img/bannerler5.jpg"];

var bannerAtual = 0;
//função para troca de banners
function trocaBanner(){
	bannerAtual = (bannerAtual + 1)%6;
	//acesso ao componente <img> da classe.destaque
	document.querySelector('.destaque img').src = banners[bannerAtual];
	
}
//definição do intervalo de tempo
var timer = setInterval(trocaBanner, 900);
//pega o componente com a classe igual a .pause
var controle = document.querySelector('.pause');
//criação da função anônima para o evento onClick
controle.onclick = function(){
	if(controle.className == 'pause'){
		//pausa a troca de imagens
		clearInterval(timer);
		//troca o tipo de icone
		controle.className = 'play';
	}else{
		//reinicia a troca de imagens
		timer = setInterval(trocaBanner,900);
		//troca o tipo de ícone
		controle.className = 'pause';
	}
	return false;
};