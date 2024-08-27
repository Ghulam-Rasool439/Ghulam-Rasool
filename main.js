// import './style.css'

const btn = document.querySelectorAll('.sign-1');
const pur = document.querySelector('.signup-container');
const clo = document.querySelector('.close');
const btn1 = document.querySelectorAll('.sign-2');
const pur1 = document.getElementById('min-box');
const clo1 = document.querySelector('.closes');

btn.forEach((g) => {
    g.addEventListener("click", () => {
        pur.style.display = "flex"
    })
});
clo.addEventListener("click", () => {
    pur.style.display = "none"
})

btn1.forEach((h) => {
    h.addEventListener("click", () => {
        pur1.style.display = "flex"
    })
});
clo1.addEventListener("click", () => {
    pur1.style.display = "none"
})


// decreasevalue.forEach(dec) => {
//     dec.addEventListener("click", () => {
//         value--
//         decreasevalue.textContent = value;
//     })
// };


// increasevalue.addEventListener("click", () =>{
//     value++
//     valueElement.textContent = value;
//     topb.textContent= value;
// })

// decreasevalue.forEach((dec) => {
//     dec.addEventListener("click", () =>{
//         value--
//         valueElement.textContent= value;
//     })
// });

const boxContainer = document.querySelectorAll(".quantity")
const addtocart =document.getElementById("add");
let totalProducts = 0;

boxContainer.forEach((t1) => {
    const decreasevalue = t1.querySelector('.counter-button');
    const valueElement = t1.querySelector('.value');
    const increasevalue = t1.querySelector('.counter-button-2');
    // const topb = document.getElementById("add");
    let value = 0;

    decreasevalue.addEventListener("click", () => {
        if (value > 0) {
            value--
            valueElement.textContent = value;
            // topb.textContent = value;
            totalProducts--;
            addtocart.textContent = totalProducts;    
        }

    })
    increasevalue.addEventListener("click", () =>{
        value++
        valueElement.textContent= value;
        totalProducts++
        addtocart.textContent= totalProducts;
    })
});