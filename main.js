import data from './data.json' assert{type: 'json'};

let bgColor =[
'hsl(15, 100%, 70%)',
'hsl(195, 74%, 62%)',
'hsl(348, 100%, 68%)',
'hsl(145, 58%, 55%)',
'hsl(264, 64%, 52%)',
'hsl(43, 84%, 65%)'
];



let dailyBtn = document.querySelector("#daily");
let weeklyBtn = document.querySelector("#weekly");
let monthlyBtn = document.querySelector("#monthly");

let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);
let secondSection = document.querySelector('.second-section');

drawElements(dailyArray, 'Previous');


dailyBtn.addEventListener('click', ()=>{  drawElements(dailyArray, 'Previous')});
weeklyBtn.addEventListener('click', ()=>{drawElements(weeklyArray, 'Last Week')});
monthlyBtn.addEventListener('click', ()=>{ drawElements(monthlyArray, 'Last Month')});


function drawElements(array, text){
    //console.log('se hizo click en daily');
    secondSection.innerHTML =``;
    array.forEach((element, index)=>{
      let titlesImage = data[index].title;
      let lctitlesImage = titlesImage.toLocaleLowerCase()

      if(lctitlesImage == "self care"){
        lctitlesImage = "self-care"
      }
        secondSection.innerHTML +=`
        <div class="card" style= "background-color: ${bgColor[index]}">
        <div class="card__background">
          <img class="card__image" src="./images/icon-${lctitlesImage}.svg" alt="">
        </div>
        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${data[index].title}</p>
            <img src="./images/icon-ellipsis.svg" alt="tree dots">
          </div>
          <div class="card__time">
            <p class="card__hours">${element.current}  hrs</p>
            <p class="card__previous">  ${text} - ${element.previous} hrs </p>
          </div>
        </div>
      </div>
        `;
    })
}



