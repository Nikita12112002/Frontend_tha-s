
const inner3 = document.getElementById("inner3");

var i;

      fetch("https://jsonplaceholder.typicode.com/photos?_limit=48")
        .then((apidata) => {
          return apidata.json();
        })
        .then((jsondata) => {
          jsondata.map((val) => {
            key = val.id;
            let img3 = document.createElement("img");
           img3.src = `https://picsum.photos/150/200?random=${val.id}`;
           inner3.appendChild(img3);
          console.log(val.url);
          });
        });