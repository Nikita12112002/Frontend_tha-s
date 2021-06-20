
document.write("output on console");
const a={
     name:"hello",
}

const b  = {
    name:"hello everyone",
}



function fun( s, p)
{
   console.log(this);
   console.log(s+p);
   
}

 fun.call( a ,1 ,2);

 fun.apply(a,[1,2]);
 fun.apply(b,[1,2]);

 const q= fun.bind(a,1,2);

 console.log(q);
