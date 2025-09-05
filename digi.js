var home=document.querySelector(".hnum")
var guest=document.querySelector(".gnum")
var hb1=document.getElementById("h1")
var hb2=document.getElementById("h2")
var hb3=document.getElementById("h3")
var gb1=document.getElementById("g1")
var gb2=document.getElementById("g2")
var gb3=document.getElementById("g3")
if(Number(home.textContent)>12)
{
     home.textContent=0
}
if(Number(guest.textContent)>59)
{
     guest.textContent=0
}


hb1.addEventListener("click",function(){
    home.textContent=Number(home.textContent)+1
    if(Number(home.textContent)>12)
{
     home.textContent=0
}



})
hb2.addEventListener("click",function(){
    home.textContent=Number(home.textContent)+2
   if(Number(home.textContent)>12)
{
     home.textContent=0
}


})
hb3.addEventListener("click",function(){
    home.textContent=Number(home.textContent)+3
    if(Number(home.textContent)>12)
{
     home.textContent=0
}



})
gb1.addEventListener("click",function(){
    guest.textContent=Number(guest.textContent)+1
    if(Number(guest.textContent)>59)
{
     guest.textContent=0
      home.textContent=Number(home.textContent)+1
}
if(Number(home.textContent)>12)
{
     home.textContent=0
}

})
gb2.addEventListener("click",function(){
    guest.textContent=Number(guest.textContent)+2
    if(Number(guest.textContent)>59)
{
     guest.textContent=0
      home.textContent=Number(home.textContent)+1
}
if(Number(home.textContent)>12)
{
     home.textContent=0
}

})
gb3.addEventListener("click",function(){
    guest.textContent=Number(guest.textContent)+3
    if(Number(guest.textContent)>59)
{
     guest.textContent=0
     home.textContent=Number(home.textContent)+1
}
if(Number(home.textContent)>12)
{
     home.textContent=0
}
})
