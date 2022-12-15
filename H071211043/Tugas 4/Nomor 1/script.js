var nama = prompt('Masukkan nama Anda');

while (nama == '') {
    console.log('Jangan kosongkan nama anda');
    nama = prompt('Tolong, masukkan nama anda!');
}
var tugasPraktikum = prompt('Sudah mengumpulkan Tugas Praktikum? YES atau NO');

tugasPraktikum = tugasPraktikum.toUpperCase();
while (tugasPraktikum != 'YES' && tugasPraktikum != 'NO') {
    console.log('Masukkan input yang benar!');
    tugasPraktikum = prompt('Sudah mengumpulkan Tugas Praktikum belum? YES atau NO');
    tugasPraktikum = tugasPraktikum.toUpperCase();
}
if (tugasPraktikum == 'YES') {
    var asistensi = prompt('Sudah ikut asistensi ga? YES atau NO');

    asistensi = asistensi.toUpperCase();
    while (asistensi != 'YES' && asistensi != 'NO') {
        console.log('Masukkan input yang benar!');
        asistensi = prompt('Sudah ikut asistensi ga? YES atau NO');
        asistensi = asistensi.toUpperCase();
    }
    if (asistensi == 'YES') {
        asistensiX = prompt('Sudah berapa kali asisten? 1 atau 2');
        while (asistensiX != '1' && asistensiX != '2') {
            console.log('Masukkan input yang benar!');
            asistensiX = prompt('Sudah berapa kali asistensi? 1 atau 2');
        }

        if (asistensiX == '1') {
            console.log(`Asistensi sekali lagi ya ${nama}`);
        } else {
            console.log(`Mantul ${nama}`);
        }
    }
} else {
    console.log(`Jangan malas ya ${nama}`);
}
