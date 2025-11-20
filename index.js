// person = {
//     name: "Alice",
//     age: 30,
//     city: "New York"
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);
// person.isAdult = true;
// console.log(person.isAdult);

// const user = {
//   name: "Maria",
//   job: "Developer",
//   age: 31
// };
// for (let key in user) {
//     console.log(key + ": " + user[key]);
// }

// const product = {
//   title: "Phone",
//   price: 500,
//   details: {
//     color: "black",
//     memory: "128GB"
//   }
// };
// console.log(product.details.color);
// console.log(product.details.memory);
// console.log(product.price)

// const cat = {
//   name: "Luna",
//   meow() {
//     console.log(`${this.name} says meow!`)
//   }
// }
// cat.meow();

// const nazva = document.getElementById("text")

// console.log(nazva);

// nazva.textContent = "Hi, Maria!";
// nazva.style.color = "blue";
// nazva.style.fontWeight = "bold";

// clickButton = document.getElementById("btn");
// clickButton.onclick = function() {
//     const para = document.getElementById("out");
//     para.textContent = "Button clicked!";
// } 

//Або так:
//clickButton.addEventListener("click", function() {
//    const para = document.getElementById("out");
//    para.textContent = "Button clicked!";
//})

const congratulate = document.getElementById("hello");
congratulate.textContent = "Hello for everyone"
congratulate.style.color = "red";
congratulate.style.fontSize = "24px";

const dissapear = document.getElementById("hide");
dissapear.style.display = "none";
dissapear.style.display = "block";

const box = document.getElementById("box");
box.textContent = "Bold text";
box.style.fontWeight = "bold"

const clickButton = document.getElementById("btn");
clickButton.addEventListener("click", function() {
   clickButton.textContent = "Clicked!";
})

const colorText = document.getElementById("p");
const colorButton = document.getElementById("colorBtn");
colorButton.addEventListener("click", function() {
colorText.style.color = "green";
})

const boxBtn = document.getElementById("hideBtn");
const boxDiv = document.getElementById("box2");
boxBtn.addEventListener("click", function() {
    boxDiv.style.display = "none";
})

const newText = document.getElementById("newtext");
const newBtn = document.getElementById("newbtn");
newBtn.addEventListener("click", function() {
    newText.classList.toggle("red");
})

const nameInput = document.getElementById("name");
const outPara = document.getElementById("out");
nameInput.addEventListener("input", function() {
    outPara.textContent = `${nameInput.value} (довжина: ${nameInput.value.length})`;

if (nameInput.value.length === 0) {    
    nameInput.style.borderColor = "red";
} else {
    nameInput.style.borderColor = "green";
}
})

const myImage = document.getElementById("myImage");
const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", function() {
    if (myImage.src.includes("image1.png")) {
        myImage.src = "/image2.jpg";
    } else {
        myImage.src = "/image1.png";
    }
})

//const image = document.getElementById("myImage");
// const changeBtn = document.getElementById("changeBtn");
// const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
// let currentIndex = 0;

// changeBtn.addEventListener("click", function() {
//     currentIndex = (currentIndex + 1) % images.length;
//     image.src = images[currentIndex];
// });

const createNewElementBtn = document.getElementById("add-button");
const myList = document.getElementById("my-list");
let counter = 3;

createNewElementBtn.addEventListener("click", function() {
    const newLi = document.createElement("li");
    newLi.textContent = `New element ${counter}`;
    myList.appendChild(newLi);
    counter++;
}   );

const removeNewElementBtn = document.getElementById("remove-button");
removeNewElementBtn.addEventListener("click", function() {
    const items = myList.getElementsByTagName("li");    
    if (items.length > 0) {
        myList.removeChild(items[items.length - 1]);
    }
}   );



