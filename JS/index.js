// toogle menu
let tooglebuttom = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links");

tooglebuttom.onclick = function(e){
    //stop propagation
    e.stopPropagation();
    // toggle class " manu-active" on button
    this.classList.toggle("menu-active");
    // toggle class "open" on links
    tlinks.classList.toggle("open");
}

// click any wher out side the menu and toggle button
document.addEventListener("click" , (e) => {
    if(e.target !== tooglebuttom && e.target !== tlinks){
        //check if menu is open
        if(tlinks.classList.contains("open")){
            tooglebuttom.classList.toggle("menu-active");
            tlinks.classList.toggle("open");
        }
    }
});

//create popup with classes
let ourClases = document.querySelectorAll(".class img");
ourClases.forEach(img =>{
    img.addEventListener('click' , (e)=>{
        let overlayy = document.createElement("div");
        overlayy.className='popup-overlayy' ;
        document.body.appendChild(overlayy);
        let popupbox = document.createElement("div");
        popupbox.className = 'popup-boxx' ;
        let popupimagee = document.createElement("img");
        popupimagee.src = img.src;
        popupbox.appendChild(popupimagee);
        document.body.appendChild(popupbox);
        let closebuttonn = document.createElement("span");
        let closeButtonTextt = document.createTextNode("X");
        closebuttonn.appendChild(closeButtonTextt);
        closebuttonn.className = 'closebuttonn';
        popupbox.appendChild(closebuttonn);

    })
})
//close poppup
document.addEventListener("click" , function (e){

    if(e.target.className == 'closebuttonn'){
        e.target.parentNode.remove();
        document.querySelector(".popup-overlayy").remove();
    }
});

//create popup with two image

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click' , (e) => {

        //create overlay element
        let overlay = document.createElement("div");

        //add class tpo ovelay
        overlay.className = 'popup-overlay';

        //append overlay to  body
        document.body.appendChild(overlay);

        //create  the popup
        let popupBox = document.createElement("div");

        //add class to the popup Box
        popupBox.className = 'popup-box' ;

        
        if(img.alt !== null){

            //create heading
            let imageHeading = document.createElement("h3");

            //create text for heading
            let imageText = document.createTextNode(img.alt);

            //append the text to the heading
            imageHeading.appendChild(imageText);

            //append image heading to the popup box
            popupBox.appendChild(imageHeading);

        }

        //create the image
        let popupimage = document.createElement("img");

        //set image source
        popupimage.src = img.src;

        // add image to popup box
        popupBox.appendChild(popupimage);

        //append popup box yo body
        document.body.appendChild(popupBox);

        //create the close span
        let closebutton = document.createElement("span");
        
        //create the close Button Test
        let closeButtonText = document.createTextNode("X");

        //append Test to closebutton
        closebutton.appendChild(closeButtonText);

        //add class to close button
        closebutton.className = 'closebutton';

        //add close button to thr popup box
        popupBox.appendChild(closebutton);
        

    })

});
//close poppup
document.addEventListener("click" , function (e){

    if(e.target.className == 'closebutton'){

        //REMOVE the current popup
        e.target.parentNode.remove();

        //remove overlay
        document.querySelector(".popup-overlay").remove();
    }
});



//select all links
const alllinks = document.querySelectorAll(".link a");
function scrollsomewhere (elements){
    elements.forEach(ele => {
        ele.addEventListener("click" , (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth' 
            });
        });
    });
}
scrollsomewhere(alllinks);

//random background
let landpadge = document.querySelector(".land-page") ;
let imagesarr = ["ff.jpg" , "9.jpg " , "8.jpg" , "7.jpg"] ;

setInterval(() => {
    let randomnum = Math.floor(Math.random() * imagesarr.length);
    landpadge.style.backgroundImage = 'url("images/' + imagesarr[randomnum] + '")' ;
},1000);




// bmi calculator

let btn = document.getElementById('calculate');

btn.addEventListener('click' , function(){

    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    if(height === '' || weight ===''){
        alert('Please fill out inpput fields!');
        return;
    }

    height = height / 100

    let  BMI = (weight / (height * height));

    BMI = BMI.toFixed(2);

    document.getElementById('result').innerHTML = BMI ;

     let status = '';

     if(BMI < 18.5){
        status = "UnderWeight" ;
     }
     else if(BMI >= 18.5 && BMI < 25){
        status = "Healthy";
     }
     else if(BMI >= 25 && BMI < 30){
        status = "OverWieght";
     }
     else if(BMI >= 30){
        status = "Obese";
     }


   document.getElementById('comment').innerHTML = status;

})


