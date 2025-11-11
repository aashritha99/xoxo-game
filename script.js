console.log("hello");
let boxes=document.querySelectorAll(".box");
let reset =document.querySelector(".reset");
let turn=true;

let winning_patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
//event listener
boxes.forEach((box) => {
box.addEventListener("click", ()=> {
   if(turn === true){
    box.innerText="o"; 
    turn=false;
   }
   else{
     box.innerText="x"; 
     turn=true;
   }
   box.disabled =true;
   checkWinner();
})
})

