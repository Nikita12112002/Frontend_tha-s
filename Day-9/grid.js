

var s = document.querySelectorAll('.grid-item');

var booked = 0;
var rem = 30;

s.forEach(item=>
 {
    item.addEventListener("click",function()
    {
       
       
      if(item.classList.contains("clicked"))
      {
       item.classList.remove("clicked");

       booked--;
       rem++;
      
       console.log("unclicked");
      }

      else{

        item.classList.add("clicked");

        booked++;
        rem--;
      
        console.log("clicked");
      }

      console.log("Booked:"+ booked);
      console.log("Remaining:" + rem);

     
    })

    
 }
 )


