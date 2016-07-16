var Memokey= function (juego_id) {
    var game_id=juego_id
	document.getElementById('answer').focus()
    var oneMinutes = 60 * 1.5,
    display = document.querySelector('#time');
    var juego=new Juego();
    juego.timer(oneMinutes, display);
    juego.show();
    //juego.timeOut();

};

var Juego = function(){
    var longitud=0;
}
/*Funcion para el timer, contador a cero*/
Juego.prototype.timer = function(duration, display) {
	var timer = duration, minutes, seconds;
    
    var countDown=setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countDown);
        }
        
    }, 1000);
};
/*Funcion para mostrar la palabra*/
Juego.prototype.show = function() {
    letra();
    longitud=text.length-1;
    $("#text").html(text.charAt(longitud));
    $("#text").show();
};

Juego.prototype.hideText = function() {
    $("#text").hide();
};

Juego.prototype.timeOut = function() {
    setTimeout(this.hideText,700)
};

Juego.prototype.evaluate = setInterval(function () {
    input=$("#answer").val();
    word=$("#text").html();

    if (input.length > text.length) {
         return timer=0;
    } else if (input.length == text.length && input==text) {
        score += 1;
        $("#score").html(score);
        // Vuelva a jugar
        Juego.prototype.show.call();
        $("#answer").val("");
    }

},1000);
var text = "";
var score=0;
/*Metodo para generar letras aleatorias*/
var letra =function ()
{
    /*Variable que guarda los posibles caracteres para una palabra*/
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}