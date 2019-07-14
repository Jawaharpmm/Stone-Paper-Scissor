console.log("asd");
let userscore=0;
let compscore=0;
const userscorespan=document.getElementById("user-score");
const compscorespan=document.getElementById("comp-score");
const boxshowdiv=document.querySelector(".box");
const resp=document.querySelector(".result > p");
const rockdiv=document.getElementById("r");
const paperdiv=document.getElementById("p");
const scissordiv=document.getElementById("s");

main();


function main()
{
rockdiv.addEventListener('click',function() {
	                                       console.log("you fucker");
										   game("r");
                                              });
paperdiv.addEventListener('click',function() {
	                                          console.log("you fucked again");
											  game("p");
                                             });
scissordiv.addEventListener('click',function() {
	                                              console.log("asshole");
												  game("s");
                                               });
}										   
                                    
function game(userchoice)
{
	         console.log("& & &"+userchoice);
			 const compchoi = getcomputerchoice();
			 console.log(compchoi);
			 switch(userchoice + compchoi)
			 {
				   case "rs":
				   case "pr":
				   case "sp":
				              console.log("user wins");
							  win(userchoice,compchoi);
							  break;
				   case "sr":
				   case "rp":
				   case "ps":
				              console.log("I win");
							  lose(userchoice,compchoi);
							  break;			
                   case "rr":
				   case "pp":
				   case "ss":
				              console.log("Draw");
							  draw(userchoice,compchoi);
							  break;						  
			 }
			
}	
function getcomputerchoice()
{
	     const choices=['r','p','s'];
		 const rand=Math.floor(Math.random()*3);
		 return choices[rand];
}

function win(user,computer)
{
	     console.log("sds");
		 userscore++;
		 console.log("wew"+userscore);
		 userscorespan.innerHTML = userscore;
		 alert("YOU WIN");
		 resp.innerHTML =  convert(user)    +   "wins ."     +     convert(computer)     +    "loses ."; 
		 document.getElementById(user).classList.add('green-glow');
		 setTimeout(function(){document.getElementById(user).classList.remove('green-glow');} , 1000);
}
function lose(user,computer)
{
	     console.log("ssds");
		 compscore++;
		 compscorespan.innerHTML = compscore;
		 alert("I WIN");
	     resp.innerHTML =  convert(user)    +   "loses ."     +     convert(computer)     +    "wins ."; 
		 document.getElementById(user).classList.add('red-glow');
		 setTimeout(function() { document.getElementById(user).classList.remove('red-glow'); },1000);
}
function draw(user,computer)
{
	     console.log("sdds");
		 alert("DRAWN");
	     resp.innerHTML =  convert(user)    +   "equals "     +     convert(computer)     +    " ."; 
		 document.getElementById(user).classList.add('grey-glow');
		 setTimeout(function() { document.getElementById(user).classList.remove('grey-glow'); },1000);
}
function convert(letter)
{
	      if(letter == "r")
			     return "rock";
		  else if(letter == "p")
                 return "paper";
          else 
                 return "scissor";			  
}
