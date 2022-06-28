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
    slider.oninput = function() {
    output.innerHTML = this.value;
    $(".sketch").style.transform = `rotateZ(${360/100*this.value}deg)`;
    }
    const slider2 = $("#myRange2");
    const output2 = $("#demo2");
    output2.innerHTML = slider2.value;
    slider2.oninput = function() {
    output2.innerHTML = this.value;
    $(".sketch").style.transform = `rotateX(${360/100*this.value}deg)`;
    }

    i = 1;
    $(".next").onclick = function(){
        if(i < 2){
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
    $(".zoom-in").onclick = function(){
        zoom = zoom+10;
        $(".sketch").style.backgroundSize = `${zoom}%`;
    };
    $(".zoom-out").onclick = function(){
        zoom = zoom-10;
        $(".sketch").style.backgroundSize = `${zoom}%`;
    };


    // drag
    // $(".sketch").onclick = function clickEvent(e) {
    //     // e = Mouse click event.
    //     var rect = e.target.getBoundingClientRect();
    //     var x = e.clientX - rect.left; //x position within the element.
    //     var y = e.clientY - rect.top;  //y position within the element.
    //     console.log("Left? : " + x + " ; Top? : " + y + ".");
    //   }

    //   $(".sketch").on('mousemove', function(e) {
    //     var element = $('.sketch');
    //     console.log( element.offset() );
    // });
    let isDrawing = false;
    let x = 0;
    let y = 0;
    let xStart = 0;
    let yStart = 0;

    $(".sketch").addEventListener('mousedown', e => {
        xStart = e.offsetX;
        yStart = e.offsetY;
        isDrawing = true;
      });
      
      $(".sketch").addEventListener('mousemove', e => {
        if (isDrawing === true) {
            x = e.offsetX;
            y = e.offsetY;
            console.log($(".sketch").offsetWidth);
            if(xStart-x > 0){
                $(".sketch").style.backgroundPositionX = `-${Math.abs((xStart-x))}px`;
            }
            else{
                $(".sketch").style.backgroundPositionX = `${Math.abs(xStart-x)}px`;
            }
            // if(yStart-y > 0){
            //     $(".sketch").style.backgroundPositionY = `-${Math.abs(xStart-y)}px`;
            // }
            // else{
            //     $(".sketch").style.backgroundPositionY = `${Math.abs(xStart-y)}px`;
            // }
        }
      });
      
      window.addEventListener('mouseup', e => {
          isDrawing = false;
      });
}

Sketchbook()    