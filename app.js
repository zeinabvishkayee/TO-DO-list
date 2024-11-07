document.addEventListener('DOMContentLoaded', () => {  
    const text = "Hi dear friend, let's start a beautiful day by having a plan.";  
    const typingText = document.querySelector('.typing-text');  
    
    let index = 0;  
    
    const type = () => {  
        if (index < text.length) {  
            typingText.innerHTML += text.charAt(index);  
            index++;  
            setTimeout(type, 100); 
        }  
    };  

    type();
});

let addBtn = document.querySelector('button');  
let tasklist = document.querySelector('ul');  
let input = document.querySelector('input');  

addBtn.addEventListener('click', () => {  
    let text = input.value;  
    if (text.trim() !== "") { // Check for empty input  
        let task = createTask(text);  
        tasklist.appendChild(task);  
        input.value = ""; // Clear the input field after adding a task  
    }  
});  

function createTask(text) {  
    let li = document.createElement('li'); 
    li.className = 'done';  // Add a class to the `li` for styling purposes 
    li.textContent = text;  

    // Create the close button span  
    const closeBtn = document.createElement('span');  
    closeBtn.className = 'closeBtn';  
    closeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';  
    
    li.appendChild(closeBtn); // Append close button to the `li`  

    return li;  
}  

tasklist.addEventListener('click', (e)=>{
if (e.target.nodeName=== 'I'){
e.target.parentElement.parentElement.style= 'display:none';
}
if (e.target.nodeName=== 'LI'){
    e.target.style= `background-color:#888;
    color: #fff;
    text-decoration: line-through` ; 
}
});



