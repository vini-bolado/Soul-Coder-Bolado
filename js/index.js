


function tringulo(x, y, z) {

    if (x == y == z) {

        console.log(`isso é um triangulo equilatero`);
    } else if (x != y != z) {

        console.log('isso é um tringulo Escaleno');

    } else if(x == y || x == z || z == y){
        console.log('isso é um tringulo Isoceles');
    }
}

tringulo(1, 2, 1,);

//! roda no node ta funcionando normal! 