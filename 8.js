// Apabila terdapat int = 15, maka akan mencetak output berikut :
// 1
// 2
// Edu
// 4
// Work
// Edu
// 7
// 8
// Edu
// Work
// 11
// Edu
// 13
// 14
// EduWork
// keterangan : string edu untuk kelipatan 3, string work untuk kelipatan 5, string eduwork untuk kelipatan 3 dan 5
let angka = 15
let strAnka = String(angka)
let hasil
for (let i = 0; i < angka; i++) {
    // console.log(String(angka))
    let temp = String(angka)
    for (let j = temp; j > 0; j--) {
        // console.log(j)
        if (j % 3 == 0) {
            console.log('edu')
        } else if (j % 5 == 0) {
            console.log('work')

        } else if (j % 5 == 0 && j % 3 == 0) {
            console.log('eduwork')
        }
    }
}