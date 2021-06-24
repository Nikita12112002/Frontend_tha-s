const data=[
    {
        question: "What are the common symptoms of COVID-19? ",
        a: "Cough",
        b: " Fever",
        c: "Tiredness",
        d :"All of the above",
        ans:"ans4",

    },

    {
        question: "The first case of novel corona virus was identified?",
        a: "Beijing",
        b: "Wuhan, Hubei",
        c: "Shanghai",
        d: "Tianjin",
        ans:"ans2",

    },


    {
        question: "Which of the following diseases are related to corona virus?",
        a: "MERS ",
        b: "SARS ",
        c: "Both A and B",
        d: "Neither A nor B ",
        ans:"ans3",

    },


    {
        question: "From where corona virus got its name?",
        a: "Due to their crown-like projections.",
        b: "Due to their leaf-like projections",
        c: "Due to their surface structure of bricks",
        d: "None of the above ",
        ans:"ans1",

    },

    {
        question: "When Janta Curfew was followed by all in India? ",
        a: "19 March 2020 (thrusday)",
        b: "20th March 2020 (friday)",
        c: "21st March 2020 (saturday)",
        d :"22nd March 2020 (Sunday)",
         ans:"ans4",

    }
]


const question = document.querySelector(".question");
const option1= document.querySelector("#option1");
const option2= document.querySelector("#option2");
const option3= document.querySelector("#option3");
const option4= document.querySelector("#option4");
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll(".answer");
const showScore=document.querySelector("#showScore");
const start=document.querySelector(".start");

var count=0;
var score=0;

const question_load = ()=> {

    question.innerHTML = data[count].question;
    option1.innerHTML = data[count].a;
    option2.innerHTML = data[count].b;
    option3.innerHTML = data[count].c;
    option4.innerHTML = data[count].d;

}
question_load();

const getCheckAnswer =()=>
{
   let answer;
   answers.forEach(item =>
   {
       if(item.checked)
       {
          answer = item.id;
       }

   });

   return answer;
}

const deselectAll =()=>
{
    answers.forEach(item =>{

        item.checked = false;

    })
}
submit.addEventListener('click' , ()=>{

    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer === data[count].ans)
    {
        score++;
    };

    count++;

    deselectAll();

    if(count < data.length)
    {
        question_load();
    }

    else{
          
         contain.classList.add("show");
         
         showScore.innerHTML=`<h3> You scored ${score} / ${data.length} </h3>
         <button  class="btn" onclick="location.reload()">Play again</button>`;
        }
})