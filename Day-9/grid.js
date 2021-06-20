

var s = document.querySelectorAll('.grid-item');

var booked = 0;
var rem = 30;
 document.getElementById("top").innerHTML= '' +booked;


 document.getElementById("top2").innerHTML= '' +rem;



s.forEach(item=>
 {
    item.addEventListener("click",function()
    {
       
       
      if(item.classList.contains("clicked"))
      {
       item.classList.remove("clicked");

       booked--;
       rem++;

       document.getElementById("top").innerHTML= '' +booked;
       document.getElementById("top2").innerHTML= '' +rem;
      
       console.log("unclicked");
      }

      else{

        item.classList.add("clicked");

        booked++;
        rem--;
        document.getElementById("top").innerHTML='' + booked;
        document.getElementById("top2").innerHTML= '' + rem;
        console.log("clicked");
      }

      console.log("Booked:"+ booked);
      console.log("Remaining:" + rem);

     
    })

    
 }
 )


