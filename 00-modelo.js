/* 
JavaScript / jQuery
web o pagina:
autor:
fecha:
resumen:
*/

function clickCounter(){
  if(typeof(Storage) !== "undefined") {
	  
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.setItem("clickcount",1);
    }
$("#nVeces").text('Has visitado '+sessionStorage.clickcount+' veces esta página');
	}
}