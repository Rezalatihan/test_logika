// Buatlah fungsi untuk menampilkan jumlah digit angka tergantung dimana posisi atau tempat dari angka dalam sebuah string “9.86-A5.321”! 
// Contoh: printDigitValue(‘9.86-A5.321’);
// Hasil :
// 9865321
// 9000000
// 800000
// 60000
// 5000
// 300
// 20
// 1

function angka(digit) {
    let hasil = ''

    for (let i = 0; i <= digit.length; i++) {
        let cekNumb = +digit[i] || digit[i] == '0'
        if (cekNumb != false) {
            let kosong = {}
            if (digit[i] != digit[i][i]) {
                // kosong = +digit[i]
                kosong = 0
            }
            //else {
            //     kosong = +digit[i]
            // }
            console.log(kosong)
        }
    }
    // return hasil
}

console.log(angka('9.86-A5.321'))