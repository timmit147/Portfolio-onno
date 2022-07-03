// Hamburger menu
function menu(){
    const $ = document.querySelector.bind(document)

    $(".hamburger-menu").onclick = function(){
        $("header").classList.toggle("menu-active");
    };

    let nav = document.querySelectorAll('header nav a');
    let i = 1;
    for (const a of nav) {
        const item = i;
        a.onmouseenter = function(){
            $("header").classList.add(`active-${item}`);
        };
        
        a.onmouseleave = function(){
            $("header").classList.remove(`active-${item}`);
        };
        i++;
      }
}

menu()


// Sketchbook

function Sketchbook(){
    const $ = document.querySelector.bind(document)
    let zRotate = 0;
    let xRotate = 0;
    let isDrawing = false;
    let x = 0;
    let y = 0;
    let xStart = 0;
    let yStart = 0;


    i = -1;
    $(".next").onclick = function(){
        if(i == -1){
            $(`.next`).style.border = "unset";
            console.log("test");
        }
        if(i < 6){
            i=i+2;
            if($(`.page-${i}`)){
        $(`.page-${i}`).classList.add("rotate");
       
        }
    }

    };
    $(".previous").onclick = function(){
        if(i > 0){
        if($(`.page-${i}`)){
        $(`.page-${i}`).classList.remove("rotate");
        }
        i=i-2;
    }
    };

    $(".sketchbook").addEventListener('mousedown', e => {
        xStart = e.offsetX;
        yStart = e.offsetY;
        isDrawing = true;
      });
      
      $(".sketchbook").addEventListener('mousemove', e => {
        if(isDrawing == true){
            x = e.offsetX;
            y = e.offsetY;
            
            console.log(xRotate);
            xRotate =  ((yStart - y)/5) + xRotate;

            if(xRotate < 0 ){
                xRotate = 0;
            }
            if(xRotate > 90){
                xRotate = 90;
            }


            zRotate = ((xStart - x)/5) + zRotate;
            
            if(zRotate < 0){
                zRotate = 0;
            }
            if(zRotate > 90){
                zRotate = 90;
            }



            $(".sketch").style.transform = `rotateZ(${zRotate}deg)rotateX(${xRotate}deg)`;
        }
        
      });
      
      window.addEventListener('mouseup', e => {
        isDrawing = false;
      });

}

Sketchbook() ;

// header color

function MouseCircle(){
    const $ = document.querySelector.bind(document)  
    let circle = $('.circle');
    $('header').addEventListener('mousemove', function(e) {
        left = e.offsetX;
        top = e.offsetY;
        circle.style.left = e.pageX + 'px';
        circle.style.top = e.pageY + 'px';
    });
    window.addEventListener('scroll', function(e) {
        if(window.scrollY > 200){
            circle.classList.add("hide");
        }
        else{
            circle.classList.remove("hide");
        }
      });

}

MouseCircle() ;
