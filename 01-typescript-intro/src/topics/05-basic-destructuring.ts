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
const{ song, songDuration, audioVolume, details:{author}}= audioPlayer;

console.log('Destructuring: la canço actual es: '+song);
console.log('Destructuring: la durada de la canço es: '+songDuration);
console.log('Destructuring: el volum de la canço es: '+audioVolume);
console.log('Destructuring: l\'autor de la canço es: '+author); 

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
console.log('NO DESTRUCTURING: la canço actual es: '+audioPlayer.song); //etc...
//export {};

