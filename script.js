console.log("hello");
let boxes=document.querySelectorAll(".box");
let reset =document.querySelector(".reset");
let winner=document.querySelector(".winner");
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
});
});

const checkWinner= ()=>{
  for(let pattern of winning_patterns){
    let x= boxes[pattern[0]].innerText;
    let y= boxes[pattern[1]].innerText;
    let z= boxes[pattern[2]].innerText;
    
    if(x!=="" && y!=="" && z!==""){
        if(x=== y && y===z){
            if(x==="o"){
               
                winner.innerText="o is the winner";
            }
            else{
               winner.innerText="x is the winner";
        }

      }
      }
  } 
}

reset.addEventListener("click",()=>{
  boxes.forEach((box)=>{
    box.innerText="";
    box.disabled=false;
    winner.innerText="";
    turn=true;
  })
})


