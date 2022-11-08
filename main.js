//////////////////////////////////////////////////////////////
// Listed Items
//////////////////////////////////////////////////////////////

// Listed Items
let listContainer = document.getElementById("listContainer");

// Line-through Listed Items
let listItems = document.querySelectorAll('#listContainer .listItem')
// for(let i = 0; i < listItems.length; i++){
//     listItems[i].addEventListener('click',function(){
//         listItems[i].style.textDecoration = 'line-through';
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
    newItem.className = "listItem"
    newItem.addEventListener('click',function(){
        newItem.style.textDecoration = 'line-through';
    })
    listContainer.appendChild(newItem);
    inputBox.value = '';
    console.log(`Added Item: ${newItem.innerHTML}`)
})

// Remove Completed Tasks

let removeCompleted = document.querySelector('.removeCompleted');
removeCompleted.addEventListener('click', function(){
})

// Remove All 
let removeAll = document.querySelector('.removeAll');
removeAll.addEventListener('click', function(){
    for(let i = 0; i < listItems.length; i++){
        listItems[i].style.height = '0px';
    }
})

