// Buatlah fungsi untuk menentukan bilangan terkecil dan terbesar dari sebuah array
// Contoh : array [4,2,6,88,3,11]
// Maka outputnya adalah low : 2, high : 88
// dilarang menggunakan built in function
function minMax(array) {
    let maxElement = array[0];
    let minElement = array[0];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > maxElement) {
            // console.log('ini hasil :', array[i])
            maxElement = array[i]
        }
        if (array[i] < minElement) {
            // console.log('ini hasil :', array[i])
            minElement = array[i]
        }
    }
    console.log(`low : ${minElement} , high: ${maxElement}`)
}

console.log(minMax([4, 99, 6, 88, 1, 11]));