//Khởi tạo 1 mảng các số nguyên và viết các hàm sau:
//  >>Hàm tìm số nguyên lớn nhất trong mảng
//  >>Hàm tìm các số chính phương trong mảng
//  >>Hàm tìm các số lớn hơn trung bình cộng của mảng
//  >>Hàm tính trung bình cộng của các số không âm của mảng


// tìm số lớn nhất
const myArray =[-1,-2,4,1,5,7,3,9,55,8,25,100,21]
function max() {
    const find = Math.max(...myArray)
    return find
}
console.log(`So lớn nhất trong mảng là: ${max(myArray)}`)

// tìm số chính phương 

const duong=myArray.filter(function(value){
    return value>=1
})
const can2=duong.map(function(value){
    return Math.sqrt(value)
})

function chinhPhuong(){
    let tim=can2.filter((value)=>{
        return Number.isInteger(value)
    })
    const ab =tim.map((value)=>{
       return value*value
    })
    console.log(`Cac số chính phương trong mảng là:[${ab}]`)
}
chinhPhuong(can2)

// tính trung bình cộng của các số không âm
const range =duong.length

function sumArray(arr) {
    return arr.reduce((total, current) => (total + current), 0);
}
let arr = duong;
let total = sumArray(arr);
console.log(`Trung bình cộng của các số không âm là: ${total/range}`); 


//Hàm tìm các số lớn hơn trung bình cộng của mảng
function timSo() {
    const ab=myArray.reduce((x,y)=>{
        return x+y
    },0)
    const tbc=ab/(myArray.length)
    const so =myArray.filter((value)=>{
        return value>tbc
    })
    console.log(`cac số lớn hơn tbc của mảng là: ${so}.`)
}
timSo(myArray)