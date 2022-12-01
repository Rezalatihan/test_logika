// Buatlah fungsi sebagai berikut :
// 	Apabila terdapat int = 4, maka outputnya 24 (prosesnya : 4*3*2*1)
// 	Apabila terdapat int = 8, maka outputnya 40320 (prosesnya : 8*7*6*5*4*3*2*1)

function perkalian(kali) {
    let sum = []
    for (let i = kali; i > 0; i--) {
        sum.push(i)
    }
    let hasil = sum.reduce((a, b) => {
        return a * b
    })
    console.log(hasil)
}
console.log(perkalian(8))