let addTask=document.querySelector(".circle");
let lists=document.querySelector(".lists");
let input=document.querySelector(".text");
let reversebtn=document.querySelector('.buttondown');
let sortbtn=document.querySelector('.buttonup');

let array=[];
function addItem(){
    lists.innerHTML += `
        <div class="task">
           ${input.value}    
            <div class="button2">
            <img src="images/Group 56.png">
           
        </div>
        </div> 

    `;
    let removelist = document.querySelectorAll(".button2");
    for(let i=0; i<removelist.length; i++){
        removelist[i].onclick = function(){
            this.parentNode.remove();
        }
      }
}
addTask.onclick=function(){
    if(input.value.length==0){
        alert("Xana boş buraxıla bilməz")
    }
    else{
      addItem();
    }   
  }
input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        if(input.value.length==0){
            alert("Xana boş buraxıla bilməz")
        }
        else{
          addItem();
        } 
    }
});

    let boolean=true;
    sortbtn.addEventListener("click", (e) => {
     let taskSort = [...document.querySelectorAll(".lists .task")]
      .map((task) => task.innerHTML)
      .sort();
      
       
     
    if (boolean) {
    
    document.querySelectorAll(".lists > .task").forEach((item, i) => {
        item.innerHTML=taskSort[i];
        item.innerHTML+= ``;
    let removelist = document.querySelectorAll(".button2");
    for(let i=0; i<removelist.length; i++){
        removelist[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    });
}

    });
    reversebtn.addEventListener("click", (e) => {
        let taskSort = [...document.querySelectorAll(".lists .task")]
         .map((task) => task.innerHTML)
         .sort().reverse();
       if (boolean) {

       
       document.querySelectorAll(".lists > .task").forEach((item, i) => {
           item.innerHTML=taskSort[i];
           item.innerHTML+= ``;
    let removelist = document.querySelectorAll(".button2");
    for(let i=0; i<removelist.length; i++){
        removelist[i].onclick = function(){
            this.parentNode.remove();
        }
    }
        });
    }
   
});