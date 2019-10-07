window.onload=function(){

let modal=document.querySelector('.modal')
let modalButton=document.querySelector('.modal-button');
function modalGone(){
    modal.style.display="none";
}

if(modalButton){
    modalButton.addEventListener('click',modalGone,false)

}


////Nav Modal

let hamburger=document.querySelector('.hamburger');
let navModal=document.querySelector('.nav-modal');

function navAppear(){
    navModal.style.display="block";
}


if(hamburger){
    hamburger.addEventListener('click',navAppear,false);


}












//// Carosel

//Next BUtton
let next=document.querySelector('.next');

//Previous Button
let prev=document.querySelector('.prev')

//Current cheer Index
let currentcheerIndex=0;

//Previous cheer Index
let previouscheerIndex=0;

//All of our cheer in an array
const cheer=document.querySelectorAll('.cheer-text-box')


//Next Button Listens

if(next){




next.addEventListener('click',()=>{
    previouscheerIndex=currentcheerIndex;
    currentcheerIndex++;

    //prevent code from breaking at the end and sets the slide to start over at 0
    if (currentcheerIndex>=cheer.length){
        currentcheerIndex=0;
    }


    //Hide image thats currently showing
    cheer[previouscheerIndex].style.display="none";

    //Show next image
    cheer[currentcheerIndex].style.display="block";

})

}

//Previous Button Listens
if(prev){
prev.addEventListener('click',()=>{

    previouscheerIndex=currentcheerIndex;
    currentcheerIndex--;



    //Fix when code breaks if no cheer index before
    if(currentcheerIndex<0){
        currentcheerIndex=cheer.length-1;

    }




    //Hide cheer thats currently showing
    cheer[previouscheerIndex].style.display="none";

    //Show next cheer
    cheer[currentcheerIndex].style.display="block";




})





}

}