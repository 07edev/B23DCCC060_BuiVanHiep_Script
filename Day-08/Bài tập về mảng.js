//ví dụ một mảng cơ bản
const array =[145,3,4,4,5,'fjdf']
// cách xem đọ dài của mảng
const b=array.length
// length tính từ 1 còn indext sẽ lấy từ 0
console.log(b)
console.log(array[5])// fjdf
console.log(array[0]) //145
console.log(array[b-1])//fjdf

// phương thức hay dùng trong mảng
// length >> trả về độ dài của mảng
// reverse đảo ngược các vị trí trong hàm
console.log(array.reverse())// thảy đổi giá trị luôn các câu lệnh dưới sẽ vẫn bị ảnh hưởng
// join nối các phần tử trong mảng thhanhf một chuỗi
console.log(array.join())// các phần tử chia cách nhau bằng dấu phẩy
console.log(array.join(''))// các phần tử dính liền với nhau
//indexOf trả về là kết quả vị trí xuất hiện đầu tiên cuẢ PHẦN TỬ ĐÓ
console.log(array.indexOf(4))// >>2
//lastIndexOf
console.log(array.lastIndexOf(4))// ví trí xuất hiện cuối cùng của nó ở đây kết quả là 3
//puss thêm một phần tử vào cuối mảng
console.log(array.push('thêm vào'))
console.log(array)
//unshift thêm một phần tử vào đầu mảng
console.log(array.unshift('đầu'))
console.log(array)
//includes kiểm tra xem có giá trị đấy trong mẩng khống trả về kết quả là true or flase
console.log(array.includes("đầu")) //>> true
//pop lấy  phần tử cuối trong mảng
console.log(array.pop())
console.log(array)
//shift lấy đi phần tuwd dầu tiên trong mảng
array.shift()
console.log(array)

//Phương thức slice
const abc=[1,2,3,5,3,4,1]
const lấy =abc.slice()// Lấy hết cả mảng
const lấy_đàu_và_cuối_trừ_đi_một=abc.slice(0,6)
console.log(lấy_đàu_và_cuối_trừ_đi_một)
console.log(abc.slice(-3))// lấy 3 phần tử cuối

// Phương thức splice: chú ý khi dùng hàm này nó sẽ ảnh hưởng trực tiếp lên mảng nên sau khi dùng một lần thì lần sau nó sẽ ấp dụng cho mảng mới
const bd=['ab','tiger','dog','cat']
//console.log(bd.splice(0))// nhớ phải điền số , với 0 cho ra mảng ban đầu
//bd.splice(0,3)// bắt đầu từ vị trí 0 và xóa đi 3 phần tử
bd.splice(1,3,'thêm vào')// bắt đâu từ vị trí 1 và xóa đi 3 phần tử sau đó thêm vào từ "thêm vào"
console.log(bd)

// hàm sort
const random =[2,3,5,4,19,1]
const random2=random.sort(function(a,b) {
    if(a>b) return 1 // Sắp xếp theo tăng dần
    if(a<b) return -1 // sắp xếp theo thứ tự giảm dần
})
console.log(random2)

//phương thức find
const numbers=[1,3,4,4,7,1]
const findYourNumbers=numbers.find((element)=>element>5)// tìm phần tử dầu tiên có giá trị lớn hơn 5
console.log(findYourNumbers)

// phương thức findIdext
const findYourIdext =numbers.findIndex((element)=>element>0)// trả về kết quả là vị trí.Ở đây trả về vị trí có gia trị lớn hơn 0
// nếu không có giá trí nào thỏa mãn nó sẽ trả về kết quẩ là trừ 1
console.log(findYourIdext)

//hàm map :duyệt qua từng phần tử trong mảng và trả một mảng mới mà không thay đổi mảng ban đầu
const listNumber =[1,2,4,5,7,8,'hu']
const listNumberDouble =listNumber.map((value,indext)=>value*value)// trả về một mảng mới mà các(giá trí)mũ 2
console.log(listNumberDouble)


// phương thức filter: dùng để sàn lọc các giá trị thỏa mãn điều kiện
const valueThan3=listNumber.filter((value,)=>value>3)// loại bỏ các giá trị nhỏ hơn 3
console.log(valueThan3)// in ra hàm có tửng giá trị lơn hơn 3

// phương thức some : trả về kết quả là true khi chỉ cần một giá trị thỏa mãn một điều kiện, trả về false khi không giá trị nào thỏa mãn điều kiện 
const check=[2,3,4,5,1,8]
const one=check.some((value)=>value>7)
console.log(one)
// phương thức every :trả về true khi tất cả thỏa mãn , false khi 1 một trong số đó không thỏa mãn
const many=check.every((value)=>value>2)
console.log(many)

//phương thức reduce : gom tất cả các phần tử trong mảng thành 1 
const all =[12,5,6,4,6,7]
const total=all.reduce((x,y)=>x+y,0)// 0 ở dây là giá trị ban đầu,0 sẽ cộng vs 12 sau đó giá trị sau khi cộng đó sẽ cộng lân lượt 
console.log(total)


//By value và by references
const num1=1
const num2=1
console.log(num1===num2)//trả về kết quả là true bởi đây là so sánh giá trị
const arr1=[1,2]
const arr2=[1,2]
console.log(arr1===arr2)// trả false bởi đây là so sánh vị trí lưu trong bộ nhớ
// để so sánh 2 mảng mà trả về giá trị true
const arrtStr=JSON.stringify(arr1)
const arrStr2=JSON.stringify(arr2)
console.log(arrStr2===arrtStr)// true


// 2 cách để clone mảng
const cloned=[1,2,3,4,1,2]
console.log(cloned.slice())// dùng slice
console.log([...cloned])// dùng spread operator

// cách để gộp 2 mảng lại với nhau vd: [1,2,3],[4,5,6]==>[1,2,3,4,5,6]
const mang1=[1,2,3]
const mang2=[1,4,5,6]
const mang3=[2,1]
const gộp=mang1.concat(mang2,mang3)
const gopoj2=[...mang1,...mang2,...mang3]
console.log(gopoj2)
console.log(gộp)

//Destructuring: lấy các phần tử trong mảng
const toy=[1,4,5,6]
const[x,y,z]=toy
console.log(x,y,z)// 1 4 5
