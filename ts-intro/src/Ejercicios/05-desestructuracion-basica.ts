
/*
    ===== Código de TypeScript =====
*/
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    year: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "hola",
    detalles: {
        autor: 'Ed Sheeran',
        year: 2015
    }
}

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;

console.log('el volumen actual de:', volumen);
console.log('el segundo actual de:', segundo);
console.log('la cancion actual de:', cancion);
console.log('el autor actual de:', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz;

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', dbz[2]);
