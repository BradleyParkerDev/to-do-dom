//////////////////////////////////////////////////////////////
// Listed Items
//////////////////////////////////////////////////////////////

// Listed Items
let listContainer = document.getElementByID("listedItems");
// Line-through listed items
// for(let i = 0; i < listedItems.length; i++){
//     listedItems[i].addEventListener('click', function(){
//         listedItems[i].style.textDecoration = "line-through"
//         console.log(`Completed: ${listedItems[i].innerHTML}`);


//     })
// }



//////////////////////////////////////////////////////////////
// Input Box
//////////////////////////////////////////////////////////////
let inputBox = document.querySelector('#itemBox');




//////////////////////////////////////////////////////////////
// Buttons
//////////////////////////////////////////////////////////////
// Add
let add = document.querySelector('.add');
add.addEventListener('click', function(){
    let newItem = document.createElement("p");
    newItem.innerHTML = inputBox.value;
    listedItems.appendChild(newItem);

})

// Remove Completed Tasks

let removeCompleted = document.querySelector('.removeCompleted');
removeCompleted.addEventListener('click', function(){
    listedItems.pop()
})

// Remove All 
let removeAll = document.querySelector('.removeAll');
removeAll.addEventListener('click', function(){
})

