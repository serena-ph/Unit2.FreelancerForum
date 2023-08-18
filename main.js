const h1s = document.querySelector("h1");
h1s.textContent= "Freelancer Forum";


const h5s = document.querySelector("h5");
h5s.textContent= "The average starting price is";

const hs = document.querySelector("h");
hs.textContent= "Avaiable Freelancers";


// define array
const freelancers = [
    {name: "jack", occupation: "Plumber", price: 90},
    {name: "Nate", occupation: "Tutor", price: 40}, 
    {name: "Gina", occupation: "Writer", price: 30},
    {name: "Gabi", occupation: "Youtuber", price: 30}
    
]



// // prompt to add
// const newName =prompt ("Enter your name");
// const newOccupation =prompt("Enter your occupation");
// const newPrice =prompt("Enter your hourly rate");



// // add to list
// const add = new Object()
// add.name = newName;
// add.occupation=newOccupation;
// add.price=newPrice;
// freelancers.push(add)






function Freelancer(free){
    const ele = document.createElement("div");
    const nameEle = document.createElement("h2");
    const occupationEle = document.createElement("h3");
    const priceEle = document.createElement("h4");
    nameEle.innerHTML=free.name;
    occupationEle.innerHTML=free.occupation;
    priceEle=innerHTML="$"+free.price;
    ele.appendChild(nameEle)
    ele.appendChild(occupationEle)
    ele.appendChild(priceEle)

    ele.classList.add("Information");
    document.getElementsByClassName(".info").appendChild(ele);



}
document.getElementById("freelancerInfo").forEach((i)=>{
    Freelancer(i);
}

)