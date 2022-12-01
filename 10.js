// Buatlah fungsi untuk mengecek tahun kabisat
// input : 2021
// output : 2021 bukan tahun kabisat

// input : 2024
// output : 2024 adalah tahun kabisat



// Jika angka tahun itu habis dibagi 400, maka tahun itu sudah pasti tahun kabisat.
// Jika angka tahun itu tidak habis dibagi 400 tetapi habis dibagi 100, maka tahun itu sudah pasti bukan merupakan tahun kabisat.
// Jika angka tahun itu tidak habis dibagi 400, tidak habis dibagi 100 akan tetapi habis dibagi 4, maka tahun itu merupakan tahun kabisat.
// Jika angka tahun tidak habis dibagi 400, tidak habis dibagi 100, dan tidak habis dibagi 4, maka tahun tersebut bukan merupakan tahun kabisat.

function tahunKabisat(tahun) {
    let reponstKabisat = 'adalah tahun kabisat'
    let responstNonKabisat = 'bukan tahun kabisat'
    if (tahun % 4 === 0) {
        if (tahun % 100 !== 0) {
            console.log(tahun, reponstKabisat)
        } else if (tahun % 400 === 0) {
            console.log(tahun, reponstKabisat)
        } else {
            console.log(tahun, responstNonKabisat)
        }
    } else {
        console.log(tahun, responstNonKabisat)
    }
}
console.log(tahunKabisat(2024))
