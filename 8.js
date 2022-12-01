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


let data = 15

for (let i = 1; i <= data; i++) {
    console.log(i)
    if (i % 5 == 0 && i % 3 == 0) {
        console.log('eduwork')
    } else if (i % 3 == 0) {
        console.log('edu')
    } else if (i % 5 == 0) {
        console.log('work')
    }
}









// let angka = 15
// let hasil = []
// for (let i = 0; i < angka; i++) {
//     // console.log(String(angka))
//     let temp = String(angka)
//     let eduwork = ''
//     let edu = ''
//     let work = ''
//     for (let j = 0; j <= temp.length; j++) {
//         if (j % 5 == 0 && j % 3 == 0) {
//             eduwork += j + 'eduwork'
//         } else if (j % 3 == 0) {
//             // console.log(j + 'edu')
//             edu += j + 'edu'
//         } else if (j % 5 == 0) {
//             // console.log(j + 'work')
//             work += j + 'work'
//         }
//         console.log(j)

//     }
//     // console.log(eduwork, edu, work)

// }