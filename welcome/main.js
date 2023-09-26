// let cnop = document.querySelector(".slider");
// cnop.addEventListener("click",function(){
//     document.body.
// })


// let myBtn = document.querySelector(".slider");

// myBtn.addEventListener("click",function(){
//     document.querySelector("body").classList.toggle(".slider")
//     document.querySelector("body").style.backgroundColor = "black"
//     if(myBtn.document.querySelector("body").style.backgroundColor = "black"){
//         myBtn.document.querySelector("body").style.backgroundColor = "white"
//     }
// })


let myBtn = document.querySelector(".slider")
let myBtnBackgroundBody = false

myBtn.addEventListener("click",function(){
    document.querySelector("body").classList.toggle("tun")
    if (myBtnBackgroundBody === false){
            myBtnBackgroundBody = true;
            document.querySelector("body").style.backgroundColor = "rgb(3, 15, 79)";
            document.querySelector(".box2").style.color = "white"
     }else{
       myBtnBackgroundBody = false;
            document.querySelector("body").style.backgroundColor = "white";
            document.querySelector(".box2").style.color = "black"
    }
    
})