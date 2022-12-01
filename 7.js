// Dari soal nomor 6, buatlah juga untuk menghasilkan output total ada berapa angka yg termasuk dari bagian low dan high
// array data =  [1,4,7,9,12], 
// int low = 2,
// int high = 15,
// maka akan menghasilkan ouput = 4
let data = [1, 4, 7, 1, 9, 12, 20, 16, 15]
let ouput = []
for (let i = 1; i < data.length; i++) {
    let temp = []
    if (data[i] >= 2 && data[i] <= 15) {
        temp += data[i]
        console.log(temp.sum())
    }
    // console.log(temp)
}

// console.log(ouput)