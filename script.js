var wrapperEle = document.body.querySelector(".wrapper");
var numberEle = document.body.querySelector(".number");
var fireattackEle = document.body.querySelector(".fireattack");
var iceattackEle = document.body.querySelector(".iceattack");
var number=0;
numberEle.innerHTML=number;
var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    color: "red",
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false,
    color: "red"
  }
];  
for (var i = 0; i < warriors.length; i++) {
  var ele = document.createElement("div");
  ele.innerHTML = warriors[i].name + " " + warriors[i].health;
    ele.style.color = warriors[i].color;
 
  
  if(warriors[i].health< 10){
     ele.style.color= "White";
  } else if (warriors[i].damage< 2){
    ele.style.color= "White";
  }
  
  if(warriors[i].warrior == false) {
    ele.style.color= "White";
  }
 wrapperEle.appendChild(ele); 
}

function attack(num, color){
  number=number+num;
}
fireattackEle.addEventListener("click", function(){
  decrease(1);
})
iceattackEle.addEventListener("click", function(){
  increase(1)
})