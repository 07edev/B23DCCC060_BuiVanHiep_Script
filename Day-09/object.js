// 2 cách khai báo object
// object liternal
const objectLiternal ={}
// object conStructor
const objectConstructor = new Object()
const studen  ={
    name :'07edev',
    age: 18,
    male:true,
    "last-name":'hiep',
    helo:function(){
        console.log("helo bvh")
    },
}
// cách gọi
console.log(studen.name)// cách gọi cho những trường hợp bình thường
console.log(studen['last-name'])// gọi cho cả đặc biệt lần thường

// cách thay đổi giá trị
studen.age=19
console.log(studen)
studen.id ='B23DCCC060'// thêm giá trị mới
console.log(studen)
delete studen.age /// cách xóa giá trị


// for in
for(let key in studen){
    console.log(`${key}:${studen[key]}`)
}

//Object.keys(): trả về một mảng chứa các key của object
const keys=Object.keys(studen)
console.log(keys)

// Object.value(): trả về một mảng chứa tất cả các giá trị của object
const values=Object.values(studen)
console.log(values)

//Object.entries: trả về một mảng là các cặp key và values dưới hình thức[['name','07edev'],['age',19]]
const all=Object.entries(studen)
console.log(all)

// Object.assign: gộp 2 object lại với nhau
const a={
    lastName:'hiep'
}
const b={
    firsName:"Bui"
}
const assign=Object.assign(a,b)
console.log(assign)
const c={...a,...b}// cách gộp khác 
console.log(c,assign)

//Object.freeze: ngăn chặn không cho thay đổi các giá trị của object
const car ={
    name :"mec"
}
const blockCar= Object.freeze(car)
blockCar.cost =2450
console.log(blockCar)


//Object.seal: cho  phép thay đổi các giá trị nhưng ko được thêm mới
const fullname={
    first :"hiep"
}
const  change =Object.seal(fullname)
change.first="07edev"
change.last='bui'
console.log(change)

// cách clone object
const color={
    one:'blue'
}
const clone={...color}// khi ta clone như này thì ta thay đổi giá trị ở clone sẽ không ảnh hưởng tới object ban đầu là color
const clone2=Object.assign({},color)// cách clone khác
console.log(clone2)
clone.one ="red"
console.log(color,clone)

// cách để clone một object phức tạp
const hardObject={
    user :"hiep",
    location :{
        contry:"viet Nam",
        city :{
            tinh:"hưng Yên",
            huyen:"Khoái Châu"
        }
    }
}
const newObject = JSON.parse(JSON.stringify(hardObject))
console.log(hardObject)
newObject.location.contry="Việt Nam"
console.log(newObject)

// this cơ bản cho người mới
const helo={
    fullname:{
        tên:"Bùi Văn Hiệp"
    },
    name:"hiep",
    age:19,
    hello:function(){
        console.log(`my name is ${this.name} . i am ${this.age} years old`)// truy cập vào object và lấy cách giá trị của các key
    }
}
helo.hello()

//Optional chaining
console.log(helo.fullname?.tên)// kiểm tra xem fullname có tồn tại tron helo ko nếu có truy suất tiếp vào tên rồi in ra
