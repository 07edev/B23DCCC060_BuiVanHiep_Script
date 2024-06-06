//Hãy tạo 1 mảng số nguyên ngẫu nhiên sau đó viết 2 hàm:
    //Hàm sắp xếp theo thứ tự tăng dần
    //Hàm loại bỏ các phần tử trùng nhau, sao cho mỗi phần tử chỉ xuất hiện 1 lần


// sắp xếp theo thứ tự tăng dần
const myarray =[1,12,7,2,3,4,5,4,5,6,3,5,7]
const arrange =myarray.sort(function (a,b) {
    if (a>b){
        return 1
    }if (a<b) {
        return -1
    }
})
console.log(`Mang sau khi được sắp xếp theo thứ tự tăng dần là :[${arrange}]`)

// loại bỏ các phần tử trùng nhau, sao cho mỗi phần tử chỉ xuất hiện 1 lần
function loaiBo() {
    const loai = myarray.filter((value,index,array)=>{
        return array.indexOf(value)===index
   })
   console.log(`Mang sau khi được loại bỏ các phần tử trùng nhau là:[${loai}]`)
}
loaiBo(myarray)
