//DOM :Document object model

//document.querySelector : trả về một node nếu tồn tại selector đó, trả về null nếu node đó ko tồn tại
const singleNode =document.querySelector('.container')// truy suất class
const singleNode2=document.querySelector("p")// truy suất thẻ
const singleNode3=document.querySelector("#lettor")// truy suất id
console.log(singleNode3)

// document.querySelectorAll : trả về nodelist chứa danh dách các node, nếu khong có trả về empty
// có thể dùng loop:for,forEach nhưng ko thể dùng cách thuộc tính khác của mảng như push , shift ,push,...
const multiNodes=document.querySelectorAll("#item")
console.log(multiNodes)

//document.getElementsByClassName:trả về HTMLCollection chứa danh sách các node , nếu ko có thì trả về empty
const classNodes=document.getElementsByClassName("itemclass")//chỉ truyền vào tên class
console.log(classNodes)

//document.getElementsByTagName:trả về HTMLCollection chứa danh sách các node  là các tag truyền vào, nếu ko có thì trả về empty
const tagNode =document.getElementsByTagName("li")// các tag ở đây vd như:ul,li tr td,img,...
console.log(tagNode)

//document.getElementById: trả về 1 node nếu ko có thì là null
const idNode=document.getElementById("lettor")
console.log(idNode)

//selector.getAttribute
// selector:1 cái
// Attribute: các thuộc tính như:href,src,class,id,...
const link =document.querySelector("a")
console.log(link.getAttribute('href'))
const li =document.querySelectorAll('#item')
li.forEach((item)=>{
    console.log(item.getAttribute("id"))
})

//selector.setAttribute("attribute","value") :set giá trị cho attribute nào đó của selector
link.setAttribute("target","_blank")
const allLink=document.querySelectorAll('a.link')
allLink.forEach((item)=>item.setAttribute("target","_blank"))

// selector.removeAttribute("attribute")
const p=document.querySelectorAll("p")
p.forEach((item)=>item.removeAttribute("style"))

//Thuộc tính textContent:lấy phần nội dung bên trong các thẻ
const text =document.querySelector('.container')
text.textContent ='thay đổi'// cách thay đổi nội dung
console.log(text.textContent)