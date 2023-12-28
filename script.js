//accessing buttons
let body = document.querySelector("body");
let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#message");
let msgContainer= document.querySelector(".message-container");
let btn = document.querySelectorAll(".btn");
//printing all box text in console
// for(let box of boxes)
// {
//     console.log(box.innerText);
// }

//starting player 
let turnX = true;//playerO playerX
//stroring winning patterns to array
let winningPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];
//when the button will be clicked event will be fired
boxes.forEach(box => {
    box.addEventListener("click",() =>
    {
        // console.log(box);    
        // console.log("button was clicked");
        //box.innerHTML="O";
        if(turnX)
        {
            box.innerText="X";
            box.style.color ="#502cf0";
            turnX=false;
        }
        else
        {
            box.innerText="O";
            box.style.color ="#4cb0ea";
            turnX=true;
        }  
        box.disabled = true;     
        checkWinner();

    } );
1});
let disableboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
let enableboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerHTML="";
    }
}
let checkWinner = () =>
{
    for(let pattern of winningPattern)
    {
        let posn1 = boxes[pattern[0]].innerText;
        let posn2 = boxes[pattern[1]].innerText;
        let posn3 = boxes[pattern[2]].innerText;
        //winning condition
        if(posn1!="" && posn2!="" && posn3!="")
        {
            if( posn1 === posn2 && posn2 === posn3)
            {
                printWinner(posn1);//taking winner player
            }
        }
    }
};
//printing winner player
let printWinner = (winner) =>
{
    msg.innerHTML=`congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");//removing hide class for show the winner
    disableboxes(); 
};

//after clicking "newGame" / "reset" button 
for(let b of btn)
{
    b.addEventListener("click",() =>
    {
        turnX = true;
        enableboxes();
        msgContainer.classList.add("hide");
    });
}