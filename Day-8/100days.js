 
document.write("<table>");
for(i=0 ;i<17 ;i++)
{
    fun();
    
}

 function fun()
 {

 var row ="<tr>";
 var col = "<td>";
 
 
for(i=0 ;i<17 ;i++)
{
   document.write(row);
   console.log(row);
    
    for(j=0 ;j<61;j++)
    {
       document.write(col);
       console.log(col);
    }

}
 }

 document.write("</table>");

 //................................................................


 var s = document.querySelectorAll('td');

  s.forEach(item=>
   {
      item.addEventListener("click",function()
      {
         item.classList.toggle("white");
      })
   }
   )

 