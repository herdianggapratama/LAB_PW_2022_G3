var operasi = prompt('Pilih Operasi Matematika. PENJUMLAHAN || PENGURANGAN || PERKALIAN || PEMBAGIAN'),
    banyak,
    hasil,
    operasiPilihan,
    total = 0;

operasi = operasi.toUpperCase();
while (operasi != 'PENJUMLAHAN' && operasi != 'PENGURANGAN' && operasi != 'PERKALIAN' && operasi != 'PEMBAGIAN') {
    console.log(`${operasiPilihan} bukan angka`);
    operasi = prompt('PENJUMLAHAN || PENGURANGAN || PERKALIAN || PEMBAGIAN');
    operasi = operasi.toUpperCase();
}

if (operasi == 'PENJUMLAHAN') {
    var operasiPilihan = prompt('Penjumlahan berapa?');
    while (isNaN(operasiPilihan)) {
        console.log(`${operasiPilihan} bukan angka`);
        operasiPilihan = prompt('Penjumlahan berapa?');
    }
    banyak = prompt('Mau dijumlahkan sampai berapa?');
    for (i = 1; i <= banyak; i++) {
        hasil = i + parseInt(operasiPilihan);
        console.log(`${i} + ${operasiPilihan} = ${hasil}`);

        total += hasil;
    }
    if (total % 2 == 0) {
        console.log(`Total seluruh ${operasi.toLowerCase()} = ${total}, dan bilangan tersebut adalah bilangan genap`);
    } else {
        console.log(`Total seluruh ${operasi.toLowerCase()} = ${total}, dan bilangan tersebut adalah bilangan ganjil`);
    }
} else if (operasi == 'PENGURANGAN') {
    var operasiPilihan = prompt('Pengurangan berapa?');
    while (isNaN(operasiPilihan)) {
        console.log(`${operasiPilihan} bukan angka`);
        operasiPilihan = prompt('Penjumlahan berapa?');
    }
    banyak = prompt('Mau dijumlahkan sampai berapa?');
    for (i = 1; i <= banyak; i++) {
        hasil = i - parseInt(operasiPilihan);
        console.log(`${i} - ${operasiPilihan} = ${hasil}`);

        total += hasil;
    }
    if (total % 2 == 0) {
        console.log(`Total seluruh ${operasi.toLowerCase()} = ${total}, dan bilangan tersebut adalah bilangan genap`);
    } else {
        console.log(`Total seluruh ${operasi.toLowerCase()} = ${total}, dan bilangan tersebut adalah bilangan ganjil`);
    }
} else if (operasi == 'PERKALIAN') {
    var operasiPilihan = prompt('Perkalian berapa?');
    while (isNaN(operasiPilihan)) {
        console.log(`${operasiPilihan} bukan angka`);
        operasiPilihan = prompt('Penjumlahan berapa?');
    }
    banyak = prompt('Mau dikalikan sampai berapa?');
    for (i = 1; i <= banyak; i++) {
        hasil = i * parseInt(operasiPilihan);
        console.log(`${i} x ${operasiPilihan} = ${hasil}`);

        total += hasil;
    }
    if (total % 2 == 0) {
        console.log(`Total seluruh ${operasi.toLowerCase()} = ${total}, dan bilangan tersebut adalah bilangan genap`);
    } else {
        console.log(`Total seluruh ${operasi.toLowerCase()} = ${total}, dan bilangan tersebut adalah bilangan ganjil`);
    }
} else if (operasi == 'PEMBAGIAN') {
    var operasiPilihan = prompt('Pembagian berapa?');
    while (isNaN(operasiPilihan)) {
        console.log(`${operasiPilihan} bukan angka`);
        operasiPilihan = prompt('Penjumlahan berapa?');
    }
    banyak = prompt('Mau dijumlahkan sampai berapa?');
    for (i = 1; i <= banyak; i++) {
        hasil = i / parseInt(operasiPilihan);
        console.log(`${i} / ${operasiPilihan} = ${hasil}`);

        total += hasil;
    }
    if (total % 2 == 0) {
        console.log(`Total seluruh ${operasi.toLowerCase()} = ${total}, dan bilangan tersebut adalah bilangan genap`);
    } else {
        console.log(`Total seluruh ${operasi.toLowerCase()} = ${total}, dan bilangan tersebut adalah bilangan ganjil`);
    }
}
