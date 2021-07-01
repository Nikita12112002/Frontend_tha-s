const innerdiv = document.getElementById("innerdiv");


var i;

      fetch("https://jsonplaceholder.typicode.com/photos?_limit=48")
        .then((apidata) => {
          return apidata.json();
        })
        .then((jsondata) => {
          jsondata.map((val) => {
            key = val.id;
            let img = document.createElement("img");
           img.src = `https://picsum.photos/460/300?random=${val.id}`;
           innerdiv.appendChild(img);
          console.log(val.url);
          });
        });