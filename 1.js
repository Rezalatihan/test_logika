// Buatlah fungsi sebagai berikut :
// 	Apabila terdapat int = 4, maka outputnya 24 (prosesnya : 4*3*2*1)
// 	Apabila terdapat int = 8, maka outputnya 40320 (prosesnya : 8*7*6*5*4*3*2*1)

function perkalian(kali) {
    let hasil = 0
    for (let i = kali; i > 0; i--) {
        let sum = i * i - i
        hasil += sum
        console.log(hasil * + ' ' + sum)
    }
}

console.log(perkalian(4))