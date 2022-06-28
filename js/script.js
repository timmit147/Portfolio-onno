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
    const slider = $("#myRange");
    const output = $("#demo");
    output.innerHTML = slider.value;
    let zRotate = 0;
    let xRotate = 0;
    slider.oninput = function() {
    output.innerHTML = this.value;
    zRotate=this.value
    $(".sketch").style.transform = `rotateZ(${360/100*zRotate}deg)rotateX(${360/100*xRotate}deg)`;

    }
    const slider2 = $("#myRange2");
    const output2 = $("#demo2");
    output2.innerHTML = slider2.value;
    slider2.oninput = function() {
    output2.innerHTML = this.value;
    xRotate=this.value
    $(".sketch").style.transform = `rotateZ(${360/100*zRotate}deg)rotateX(${360/100*xRotate}deg)`;
    }

    i = 1;
    $(".next").onclick = function(){
        if(i < 3){
            i++;
        }
        console.log("test");
        $(".sketch").style.backgroundImage = `url('img/sketch-${i}.jpg')`;
    };
    $(".previous").onclick = function(){
        if(i > 1){
            i--;
        }
        $(".sketch").style.backgroundImage = `url('img/sketch-${i}.jpg')`;
    };


    // zoom
    let zoom = 80;
    let zoomTimes = 1;
    $(".zoom-in").onclick = function(){
        zoomTimes = zoomTimes*1.2;
        $(".sketch").style.backgroundSize = `${zoom*zoomTimes}%`;
    };
    $(".zoom-out").onclick = function(){
        zoomTimes = zoomTimes/1.2;
        $(".sketch").style.backgroundSize = `${zoom*zoomTimes}%`;
    };

    let isDrawing = false;
    let x = 0;
    let y = 0;
    let xStart = 0;
    let yStart = 0;
    let xNew = 0;
    let yNew = 0;

    $(".sketch").addEventListener('mousedown', e => {
        xStart = e.offsetX;
        yStart = e.offsetY;
        isDrawing = true;
      });
      
      $(".sketch").addEventListener('mousemove', e => {
        if (isDrawing === true) {
            x = e.offsetX;
            y = e.offsetY;
            $(".sketch").style.backgroundPositionX = `${(x-xStart)+xNew}px`;
            $(".sketch").style.backgroundPositionY = `${(y-yStart)+yNew}px`;
        }
      });
      
      window.addEventListener('mouseup', e => {
        xNew = xNew-(xStart-x);
        yNew = yNew-(yStart-y);
        xStart= xStart+x;
          isDrawing = false;
      });
}

Sketchbook()    