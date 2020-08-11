//Una función es definida para ejecutar una tarea específica y devuelven un valor.
//Engloba tu lógica en una parte muy pequeña del código.
//Nota: Recuerda que las variables que definas dentro de tu funcion tendrán un scope local y las que esten fuera tendrán un scope global y si se tiene alguna duda una buena práctica es hacer:
//console.log(VARIABLE_QUE_TIENEN_DUDA); Hacer inspect a tu navegador para ver lo que sale :) <3
console.log("Hola soy Sabi !! si ves esto en tu consola dale seguir a mis redes <3");
console.log("https://linktr.ee/sumaqkuyay");
/*Antes: 
function suma(){

}
*/
export const suma = (a,b) => {
    const c = a + b;
    return c;
};
  
export const resta = (a,b) =>{
    const c = a - b;
    return c;
};
  