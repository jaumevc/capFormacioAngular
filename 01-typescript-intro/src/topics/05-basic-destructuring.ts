interface AudioPlayer{
    audioVolume: number;
    songDuration:number;
    second: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;   
}

const audioPlayer: AudioPlayer={    
    audioVolume: 90,
    songDuration: 360,
    second: 120,
    song: 'My way',
    details:{
        author: 'Jaume',
        year: 2020
    }
};
//const{ song, songDuration, audioVolume, details:{author}}= audioPlayer;

// console.log('Destructuring: la canço actual es: '+song);
// console.log('Destructuring: la durada de la canço es: '+songDuration);
// console.log('Destructuring: el volum de la canço es: '+audioVolume);
// console.log('Destructuring: l\'autor de la canço es: '+author); 

//console.log('l\'any de la canço es: '+year);
//console.log('l\'any de la canço es: '+details.year);
//DONA ERROR XQ year NO ESTÀ DEFINIT EN AQUEST ÀMBIT. Per això cal desestructurar details primer.   
//const{ details:{year}}= audioPlayer;

// la desestructuracio equivaldria a:
// const song= audioPlayer.song;
// const songDuration= audioPlayer.songDuration;
// const audioVolume= audioPlayer.audioVolume;
// const author= audioPlayer.details.author;

//o també a:
//console.log('NO DESTRUCTURING like: audioPlayer.song)-> la canço actual es: '+audioPlayer.song); //etc...

//Reanomenar variables per evitar conflictes en desentructuracio d'objecte:
// const song = 'Another song name';
// console.log(`Declaro variable com a song: ${song}`)
// const {song:mysong}= audioPlayer;
// console.log('Destructuring with rename mySong: la canço actual es: '+mysong);

//o també:
// console.log('ó també:')
// const{ song: mySong, songDuration: mySongDuration}= audioPlayer;
// console.log('Destructuring with rename: la canço actual es: '+mySong);
// console.log('Destructuring with rename: la durada de la canço es: '+mySongDuration);

//Desestructuracio de classes aniuades:
//const{ song, songDuration, audioVolume, details:{author}}= audioPlayer;
//console.log('Destructuring classes aniuades opcio 1: l\'autor de la canço es: '+author);
// const{ song, songDuration, audioVolume, details}= audioPlayer;
// const {author}= details; 
// console.log('Destructuring classes aniuades opcio 2: l\'autor de la canço es: '+author);

//DESESTRUCTURACIO D'ARRAYS (capitol: 3.18):
console.log('Destructuring array, CAPITOL 3.18:');
const dbz: string[]=['Goku', 'Vegeta', 'Trunks'];
console.log('En la posicio 3 (dbz[2]) del Array dbz: '+dbz[2]);
//O també ho puc fer:
const [ , , p3]= dbz;
console.log('Destructuring array (const [ , , p3]= dbz;): el 3er personatge es: '+p3); 

console.log('En la posicio 4 (dbz[3]) del Array dbz: '+dbz[3]); //undefined xq no hi ha posicio 4

console.log('En la posicio 4 (dbz[3]) del Array dbz: '+(dbz[3] || 'No hi ha 4rt personatge')); //utilitzant operador OR per defecte

//També puc fer:
const trunks = dbz[3] || 'Posició sense personatge';
console.log('Utilitzant operador OR per defecte: '+trunks);

//Valor per defecte en desestructuracio d'array:
const [p1a, p2a, p3a, p4a='Bulma']= dbz;
console.log('Destructuring array amb valor per defecte (const [p1a, p2a, p3a, p4a="Bulma"]= dbz;): el 1er personatge es: '+p1a); 
console.log('Destructuring array amb valor per defecte (const [p1a, p2a, p3a, p4a="Bulma"]= dbz;): el 4rt personatge es: '+p4a);

// const [p1, , p3b]= dbz;
// console.log('Destructuring array (const [p1, , p3b]= dbz;): el 1er personatge es: '+p1); 
// console.log('Destructuring array (const [p1, , p3b]= dbz;): el 3er personatge es: '+p3b);   
//export {};

