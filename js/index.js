

function tringulo(x, y, z) {

    if (x == y == z) {

        console.log(`isso é um triangulo equilatero`);
    } else if (x != y != z) {

        console.log('isso é um tringulo Escaleno');

    } else if(x == y || x == z || z == y){
        console.log('isso é um tringulo Isoceles');
    }
}

//tringulo(1, 2, 1,);

//! roda no node ta funcionando normal! 


function maior(x,y,z){
    if(x > y && x > z){
        console.log('o maior é o x!'(x));
        
    }else if(y > x && y > z){
        console.log('o maior é o y!'(y));
    }else if(z > x && z > y){
        console.log('o maior é o z!'(z));
    }

}

    maior(3,7,9);
