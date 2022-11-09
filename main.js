//////////////////////////////////////////////////////////////
// Listed Items
//////////////////////////////////////////////////////////////

// Listed Items Container
let listContainer = document.getElementById("listContainer");


//////////////////////////////////////////////////////////////
// Input Box
//////////////////////////////////////////////////////////////
let inputBox = document.querySelector('#itemBox');


//////////////////////////////////////////////////////////////
// Buttons
//////////////////////////////////////////////////////////////

// Add
let add = document.querySelector('.add');
add.style.backgroundColor = "#9ef416";
add.addEventListener('click', function(){
    //creates new list item 
    let newItem = document.createElement("p");
    newItem.innerHTML = inputBox.value;
    newItem.className = "listItem"
    newItem.addEventListener('click',function(){
        if(newItem.style.textDecoration !== 'line-through'){
            newItem.style.textDecoration = 'line-through';
        }
        else{
            newItem.style.textDecoration = '';
        }
        
    })

    //appends item to parent
    listContainer.appendChild(newItem);
    inputBox.value = '';
    console.log(`Added Item: ${newItem.innerHTML}`)
})

// Remove Completed Tasks
let removeCompleted = document.querySelector('.removeCompleted');
removeCompleted.style.backgroundColor = "yellow"
removeCompleted.addEventListener('click', function(){
    let completedItems = document.querySelectorAll('#listContainer .listItem')
    for(let i = 0; i < completedItems.length; i++){
        if(completedItems[i].style.textDecoration === 'line-through'){
            console.log(`Completed Item: ${completedItems[i].innerHTML}`);
            completedItems[i].remove();
        }
    }
})

// Remove All 
let removeAll = document.querySelector('.removeAll');
removeAll.style.backgroundColor = "#f74a5f";
removeAll.addEventListener('click', function(){
    let listItems = document.querySelectorAll('#listContainer .listItem')
    for(let i = 0; i < listItems.length; i++){
        console.log(`Removed Item: ${listItems[i].innerHTML}`);
        listItems[i].remove();
    }
})

