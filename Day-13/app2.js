const inner2 = document.getElementById("inner2");

var i;

      fetch("https://jsonplaceholder.typicode.com/photos?_limit=48")
        .then((apidata) => {
          return apidata.json();
        })
        .then((jsondata) => {
          jsondata.map((val) => {
            key = val.id;
            let img2 = document.createElement("img");
           img2.src = `https://picsum.photos/150/200?random=${val.id}`;
           inner2.appendChild(img2);
          console.log(val.url);
          });
        });