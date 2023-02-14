
function getElementValueById (elementId){  
    return window.document.getElementById(elementId).value;
}


console.log(getElementValueById("btn-bold"));






// make bold 

window.document.getElementById("btn-bold").addEventListener("click", function() {

        const val =  document.getElementById("input-aria").style.fontWeight = "bold";
        
    })

    // make italic 

    window.document.getElementById("btn-italic").addEventListener("click", function() {
    
        const val =  document.getElementById("input-aria").style.fontStyle = "italic";
        
    })

     // make underlined  

     window.document.getElementById("btn-underline").addEventListener("click", function() {
    
        const val =  document.getElementById("input-aria").style.textDecoration = "underline";
        
    })


      // align-left 

      window.document.getElementById("align-left").addEventListener("click", function() {
    
        const val =  document.getElementById("input-aria").style.textAlign = "left";
        
    })

     // align-center 

     window.document.getElementById("align-center").addEventListener("click", function() {
    
        const val =  document.getElementById("input-aria").style.textAlign = "center";
        
    })

    // align-right

    window.document.getElementById("align-right").addEventListener("click", function() {
    
        const val =  document.getElementById("input-aria").style.textAlign = "right";
        
    })

    // align-justify
    window.document.getElementById("align-justify").addEventListener("click", function() {
    
     document.getElementById("input-aria").style.textAlign = "justify";
        
    })


    // btn-size

    window.document.getElementById("btn-size").addEventListener("input", function() {
        
        let size =  document.getElementById("btn-size").value;
       
        document.getElementById("input-aria").style.fontSize = size + "px";

    })


     // btn-color

