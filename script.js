const a = document.getElementById('text-main')
console.log(a)
const b = () =>{
    a.style.color = "white"
}
const c =() =>{
    a.style.color = "green"
}

const about=document.getElementsByClassName("about");
console.log(about);


function tagLine(){
const tag=document.getElementsByClassName("tagline");
console.log(tag);
tag[0].classList.add('d-none');
about[0].classList.remove('d-none');
about[1].classList.remove('d-none');
}
function superLine(){
    const super1=document.getElementsByClassName("superline");
    console.log(super1);
    super1[0].classList.add('d-none');
    about[0].classList.remove('d-none');
    about[1].classList.remove('d-none'); 
    
}