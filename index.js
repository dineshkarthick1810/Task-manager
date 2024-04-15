

    


//  datas.forEach((val,index)=>{


   
//     const row=document.createElement('tr');
//     const indexval=index%2==0?row.style.backgroundColor="pink":row.style.backgroundColor="yellow";
//     row.innerHTML=`<td>${val.task}</td>
//     <td>${val.description}</td>
//     <td>${val.duration}</td>`
//     tbody.appendChild(row)

//  })

    



const datas=[];


//for getting input values from users

const task=document.getElementById("task");
const description=document.getElementById("description");
const duration=document.getElementById("duration")
const button=document.getElementById("btn");
const tbody=document.getElementById("body");
const selected=document.querySelector(" .form-select ");
console.log(selected)
// const options=document.querySelectorAll(".meeting");




    
        
    
    

    

    //for adding in the table

   
button.addEventListener("click",()=>{
  const data={
    task:task.value,
     description:description.value,
     duration:duration.value

}
datas.push(data);
    
   
    
    console.log(datas)
    task.value="";
    description.value="";
    duration.value="";
    const row=document.createElement('tr');
    
    datas.forEach((data)=>{
      
        row.innerHTML=`<td>${data.task}</td>
    <td>${data.description}</td>
    <td>${data.duration}</td>
    <td>
    <button type="button" onClick="foredit(this)" class="btn bg-warning text-white ms-3 btn-sm" >Edit</button>
    <button type="button" onClick="fordelete(this)" class="btn bg-danger text-white btn-sm ms-2">Delete</button>
    <button type="button" onClick="forsave(this)" class="btn bg-primary text-white btn-sm ms-2">Save</button></td>`
    tbody.appendChild(row)

    })
    
    const options=document.createElement("option");
    options.innerText=`${datas[datas.length-1].task}`
    selected.appendChild(options)
    console.log(tbody)
//     const foredit=document.querySelector(".foredit");
// const fordel=document.querySelector(".fordel");

// foredit.style.border="2px solid black"
// foredit.style.marginLeft="20px"
// foredit.style.color="black"
// foredit.style.fontWeight="bold"
// foredit.style.backgroundColor="yellow"
// foredit.style.borderRadius="5px"
// foredit.style.height="30px"
// foredit.style.flexDirection="column"
// foredit.style.paddingBottom="2px"




// fordel.style.marginTop="10px"
// fordel.style.border="2px solid black"
// fordel.style.marginLeft="10px"
// fordel.style.color="black"
// fordel.style.fontWeight="bold"
// fordel.style.backgroundColor="red"
// fordel.style.borderRadius="5px"
// fordel.style.height="30px"
// fordel.style.marginTop="10px"
// fordel.style.paddingBottom="2px"
   
   
    
    
   

   
   

    



    

})




//foredit btn click
function foredit(){
  datas.forEach((ele)=>{
    task.value=ele.task;
    description.value=ele.description;
    duration.value=ele.duration
    
    
    

  })
  
}

//forsave btn click

  
  function forsave(button) {
    const row = button.closest("tr");
    console.log(row)
  
   
    row.cells[0].innerHTML = task.value;
    row.cells[1].innerHTML = description.value;
    row.cells[2].innerHTML = duration.value;
    task.value = "";
    description.value = "";
    duration.value = "";
  }
  
  

  
  

  
  

















             

function fordelete(delbtn){
  const deletebtn=delbtn.closest("tr");
  deletebtn.style.display="none"
  
   
}


    

console.log(datas)
    

// for filtering process
const btn=document.getElementById("forfilter");
btn.addEventListener("click",()=>{
    
        document.querySelectorAll("tbody tr").forEach((ele)=>{
            
        
        if(ele.cells[0].innerHTML==selected.value){
                ele.style.display=""
            }
       
        else{
            ele.style.display="none"
        }

    })
})
   
const forall=document.getElementById("meeting");
forall.addEventListener("click",()=>{
  document.querySelectorAll("tbody tr").forEach((el)=>{
    el.style.display=""

  })

})
    
  
//fortimer

const  forhours=document.getElementById("forhours");
const forminutes=document.getElementById("forminutes");
const forseconds=document.getElementById("forseconds");
const startbtn=document.getElementById("startbtn");
const stopbtn=document.getElementById("stopbtn");
const resetbtn=document.getElementById("resetbtn");
let timer;
let timerRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  if (!timerRunning) {
    timer = setInterval(updateTimer, 1000);
    timerRunning = true;
  }
  document.getElementById("timer").style.border="5px solid green"

}

function stopTimer() {
  clearInterval(timer);
  timerRunning = false;
  duration.value=`${forhours.innerText}:${forminutes.innerHTML}:${forseconds.innerHTML}`
  console.log(duration.value)
  document.getElementById("timer").style.border="5px solid red"
}

function resetTimer() {
  clearInterval(timer);
  timerRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTimer();
  document.getElementById("timer").style.border="5px solid yellow"
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  displayTimer();
}

function displayTimer() {
  const formattedhours = `${formatTime(hours)}`;
  const formatedminutes=`${formatTime(minutes)}`;
  const formatedseconds=`${formatTime(seconds)}`;
  forhours.innerHTML=formattedhours;
  forminutes.innerHTML=formatedminutes;
  forseconds.innerHTML=formatedseconds;

}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

document.getElementById("startbtn").addEventListener("click", startTimer);
document.getElementById("stopbtn").addEventListener("click", stopTimer);
document.getElementById("resetbtn").addEventListener("click", resetTimer);


    
    









    




