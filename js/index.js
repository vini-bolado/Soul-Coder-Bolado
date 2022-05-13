

function tringulo(x, y, z) {

    if (x == y == z) {

        console.log(`isso é um triangulo equilatero`);
    } else if (x != y != z) {

        console.log('isso é um tringulo Escaleno');

    } else if (x == y || x == z || z == y) {
        console.log('isso é um tringulo Isoceles');
    }
}

tringulo(1, 1, 1,);




function maior(x, y, z) {

    if (x > y && x > z) {
        console.log((x));

    } else if (y > x && y > z) {
        console.log((y));
    } else if (z > x && z > y) {
        console.log((z));
    }

}

maior(3, 7, 3);

function inverte(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

    var aux = num1;

    num1=num2;
    num2=aux;

    alert("Antes:\n"+
       "numero1="+document.getElementById("numero1").value+"\n"+
       "numero2="+document.getElementById("numero2").value+"\n\n"+
       "Invertido:\n"+
       "numero1="+num1+"\n"+
       "numero2="+num2+"\n\n");
   }