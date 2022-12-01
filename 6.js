// Apabila terdapat sebuah data : 
// array data  
// int low = 2,
// int high = 15,
// maka akan menghasilkan ouput [4,7,9,12]

let data = [1, 4, 7, 1, 9, 12, 20, 16, 15]
let ouput = []
for (let i = 1; i < data.length; i++) {
    if (data[i] >= 2 && data[i] <= 15) {
        ouput.push(data[i])

    }
}

console.log(ouput)