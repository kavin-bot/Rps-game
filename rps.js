var winscore;
var losescore;
var user=1;
var com=1;
var count=0;

function win(){
                  var userscore=user++;
                  var win=document.getElementById('user-choice_span');
                   winscore= win.innerHTML=userscore;
                   if(winscore<10){
                      document.getElementById('result').style.color="blue";
                   }
                   if(winscore===10){
                     winner();
                     resetting();
                   }
                   
                   
               }
   function winner(){
                     
                     {
                        document.getElementById('result').style.fontSize="300%";
                        document.getElementById('result').style.color="red";
                        document.getElementById('result').innerHTML="You won the game";

                     }

                     }               
function lose(){
                  var computerscore=com++;
                  var lose=document.getElementById('computer-choice_span');
                   losescore=lose.innerHTML=computerscore;
                   if(losescore<10)
                     {
                        document.getElementById('result').style.color="purple";
                     }
                  if(losescore===10)
                     {
                        losser();
                        resetting();
                     }  
               }
   function losser(){
                        document.getElementById('result').style.fontSize="300%";
                        document.getElementById('result').style.color="yellow";
                        document.getElementById('result').innerHTML="Computer won the game";
                     }
  
function Rps(value)
{   // getting random value
         var i=Math.floor(Math.random()*3);
         var choices=['rock','paper','scissor']
         var computerchoice= choices[i];
         var userchoice=value;
         var userscore=0;
         
         if(computerchoice===userchoice)
            {
               document.getElementById('result').style.color="white";
               document.getElementById('result').innerHTML="Draw";
            }
         else if(computerchoice==="rock" && userchoice==="paper"||computerchoice==="scissor" && userchoice==="rock"||computerchoice==="paper" && userchoice==="scissor")
            {   
               var x=document.getElementById('result').innerHTML="Userwin";
               win();
            }
         else if(computerchoice==="paper"&& userchoice==="rock"||computerchoice==="rock" && userchoice==="scissor"||computerchoice==="scissor" && userchoice==="paper")
            {
               document.getElementById('result').innerHTML="You lose";
               lose();
            }
 
}

function reset()
   {
      user=1;
      com=1;
      document.getElementById('result').innerHTML="Lets see";
      document.getElementById('result').style.color="black";
      document.getElementById('user-choice_span').innerHTML=count;
      document.getElementById('computer-choice_span').innerHTML=count;
   }
function  resetting()
      {
         user=1;
         com=1;
         document.getElementById('user-choice_span').innerHTML=count;
         document.getElementById('computer-choice_span').innerHTML=count;
      }


    
     

