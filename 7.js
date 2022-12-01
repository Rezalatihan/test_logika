// Dari soal nomor 6, buatlah juga untuk menghasilkan output total ada berapa angka yg termasuk dari bagian low dan high
// array data =  [1,4,7,9,12], 
// int low = 2,
// int high = 15,
// maka akan menghasilkan ouput = 4
let data = [1, 4, 7, 1, 9, 12, 20, 16, 15, 14]
let temp = []

for (let i = 1; i < data.length; i++) {
    if (data[i] >= 2 && data[i] <= 15) {
        temp.push(data[i])
    }
}

let hasil = 0
// let dataArray = []
temp.forEach((a, b) => {
    // dataArray.push(a)
    hasil = b + 1
})

// console.log(dataArray)
console.log(hasil)
