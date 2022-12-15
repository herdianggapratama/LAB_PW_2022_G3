var kalimat = prompt('Masukkan Kalimat'),
    char = kalimat.split(''),
    huruf = {};

console.log(kalimat);

for (let i = 0; i < char.length; i++) {
    if (char[i] == ' ') {
        char[i] = char[i].replace(' ', 'Spasi');
    }
    console.log(huruf[char[i]]);
    if (huruf[char[i]] == undefined) {
        huruf[char[i]] = 0;
    }
    huruf[char[i]]++;
}

for (let i in huruf) {
    console.log(`${i} = ${huruf[i]}`);
}
