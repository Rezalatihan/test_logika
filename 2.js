// Buatlah fungsi untuk reverse sebuah string
// Apabila input = “abcde”, maka outputnya = “edcba”
// Dilarang menggunakan function reverse, buatlah logika sendiri

function reverse(str) {

    let hasil = ""
    for (let i = str.length - 1; i >= 0; i--) {
        hasil += str[i]
        // console.log(i + "  " + str[i])
    }
    return hasil
}
console.log(reverse('abcde'))