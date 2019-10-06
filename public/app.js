let modal=document.querySelector('.modal')
let modalButton=document.querySelector('.modal-button');
function modalGone(){
    modal.style.display="none";
}


modalButton.addEventListener('click',modalGone)



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



//Previous Button Listens
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






