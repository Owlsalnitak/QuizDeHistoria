function verificarResposta(){
    var total = 5;
    var pontos = 0;

    var myform = document.forms["quizform"];
    var respostas = ["b","a","d","b","b"];

    for(var i = 1; i <= total; i++){
         if(myform["p" + i].value === null || myform["p" + i].value === ""){
            alert("Por favor responda a pergunta" + i);
            return false;
         }else{
             if(myform["p" + i].value === respostas[i - 1]){
                 ++pontos; 

             }
         }
    }
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h3>Você acertou <span>'+ pontos +'</span> de <span>'+ total + ' perguntas</span></h3>'
    resultado = window.scrollTo(0,0);
    return false;
}
