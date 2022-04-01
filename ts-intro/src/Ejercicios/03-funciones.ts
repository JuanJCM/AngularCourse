
/*
    ===== Código de TypeScript =====
*/
function sumar(a:number, b:number):number{
    return (a + b);
}

const sumarFlecha = (a:number,b:number):number =>{
    return a+b;
}

function multiplicar(numero: number, otroNumero?:number, base:number = 2): number{
    return numero * base;
}
//const res = sumar(10, 10);

//console.log(res);
interface Character{
    nombre : string;
    pv: number;
    mostrarHp:()=> void
}

function curar(personaje:Character, cantidad: number): void{
    personaje.pv += cantidad;

}

const newCharacter: Character= {
    nombre: 'Thanos',
    pv: 100,
    mostrarHp(){
        console.log('Puntos de Vida:', this.pv);
    }
}

curar(newCharacter, 50);

newCharacter.mostrarHp();