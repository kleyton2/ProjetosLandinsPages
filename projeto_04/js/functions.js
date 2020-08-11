$(function(){

	abrirJanela();
	verificarCliqueFechar();

			function abrirJanela(){
				$('.btn').click(function(e){
				e.stopPropagation();
				$('.bg').fadeIn();
				});
				}

			function verificarCliqueFechar(){
				var el = $('.closeBtn');

				el.click(function(){
				$('.bg').fadeOut();
				})

				$('.form').click(function(e){
				e.stopPropagation();
				})
				}



			$('input[type=text]').focus(function(){
				resetarCampoInvalido($(this));
				})	


			$('form#form1').submit(function(e){
					
				var nome = $('input[name=nome]').val();
				var telefone = $('input[name=telefone]').val();
				var email = $('input[name=email]').val();

				if(verificarNome(nome) == false){
					aplicarCampoInvalido($('input[name=nome]'));
					return false
				}else if(verificarTelefone(telefone) == false){
					aplicarCampoInvalido($('input[name=telefone]'));
					return false
				}else if(verificarEmail(email) == false){
					aplicarCampoInvalido($('input[name=email]'));
					return false
				}else{
					alert("formulario enviado!");
				}
				

			
				})



			function aplicarCampoInvalido(el){
				el.css('border','1px solid #EE0000');
				el.css('color','red');
				el.val('campo invalido!');
				}

			function resetarCampoInvalido(el){
				el.css('border','1px solid #ccc');
				el.css('color','#aaa');
				el.val('');
				}


			function verificarNome(nome){
				if(nome == ''){
					return false;
				}
				var amount = nome.split(' ').length;
				var splitStr = nome.split(' ');

				if(amount >= 2){
					for(var i = 0; i < amount; i++){
				if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
															
				}else{
				return false;
				}
						
				}
				}else{
					return false;
				}
				}

			function verificarTelefone(telefone){
				if(telefone == ''){
					return false;
				}

				if(telefone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null){
					return false;
				}
				}


			function verificarEmail(email){
				if(email == '')
					return false

				if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
					return false;
				}
				}

				});


	



