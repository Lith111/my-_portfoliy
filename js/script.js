window.onload = ()=>{
 document.body.style.cssText = `    display: block; `
};
document.body.style.cssText = `display: none; `;
let about = document.querySelector(".about");
 let spans = document.querySelectorAll(".spans")
 let nums = document.querySelectorAll(".data");
 let started = false;
window.onscroll =()=>{
  if(  window.scrollY >= about.scrollHeight - 300 ){
     setTimeout(()=>{
     spans.forEach((span)=>{
     span.style.width = span.dataset.width;});
   },100)   
   if (!started) {
       nums.forEach((num)=>{
      let index =0;
          let indexset = setInterval(()=>{
        num.innerHTML = `${index++}%`;
        if(index > num.dataset.number){
           clearInterval(indexset);
        }
     },1000 / +num.dataset.number );
     });
     started = true;
   }
  
   }
  
  }
  


let modeDark = document.getElementById("mode-dark");
console.log(modeDark);
function modDark(){
      modeDark.innerText = "dark";
      modeDark.classList.remove("btn-light");
      modeDark.classList.add("bg-dark");
      modeDark.classList.add("text-light");
      document.querySelector(".navbear-js").classList.remove("bg-dark");
      document.querySelectorAll(".nav-link").forEach((ele)=>{
      ele.classList.remove("text-light");});
      document.body.classList.remove("dark-theme");
   }

   function modLight(){
      modeDark.classList.remove("btn-dark");
      modeDark.classList.add("btn-light");
      document.querySelector(".navbear-js").classList.add("bg-dark");
     document.querySelectorAll(".nav-link").forEach((ele)=>{
    ele.classList.add("text-light");});
    document.body.classList.add("dark-theme");
    modeDark.innerText = "light";
   }
   function mode (){
     
     if(modeDark.classList.contains("btn-dark")){
        modLight();
      }
     else{
        modDark();
   }
  };
  /* img of Portfolio */
for (let index = 0; index < 9; index++) {
let cardPro = `<div class=" col-12 col-md-6 col-lg-4 card-pro  "> 
<div class="overit">project title</div>
<img src="images/img${index+1}.jpg" alt="" class="img" > 
</div>`;
   document.querySelector(".por-row").innerHTML += cardPro;
}
/* blog */

 let rowBlog = document.querySelector("#rowBlog");
 console.log(rowBlog);
for (let index = 0; index < 6; index++) {
let cardBlog =`<div class=" card card-blog">
<img src="images/blog${index+1}.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">card blog titly</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;
   rowBlog.innerHTML += cardBlog;
}
