
// Buatlah fungsi sebagai berikut :
// int : 4, maka outputnya adalah : empat
// int : 20, maka outputnya adalah : dua puluh
// int : 39, maka outputnya adalah : tiga puluh sembilan
// int : 104, maka outputnya adalah : silahkan masukkan bilangan 1-100

function cek(angka) {
    // console.log(angka)
    for (let i = 1; i <= 100; i++) {
        // console.log(i)
        if (i > 100) {
            console.log('silakan masukan bilangan 1-100')
        }
    }
}

// console.log(cek(101))