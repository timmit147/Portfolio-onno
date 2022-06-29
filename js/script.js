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
    // const slider = $("#myRange");
    // const output = $("#demo");
    let zRotate = 0;
    let xRotate = 0;
    // slider.oninput = function() {
    // zRotate=this.value
    // $(".sketch").style.transform = `rotateZ(${zRotate}deg)rotateX(${xRotate}deg)`;

    // }
    // const slider2 = $("#myRange2");
    // const output2 = $("#demo2");
    // slider2.oninput = function() {
    // xRotate=this.value
    // $(".sketch").style.transform = `rotateZ(${zRotate}deg)rotateX(${xRotate}deg)`;
    // }

    i = 1;
    changePage = "true";
    $(".next").onclick = function(){
        if(changePage == "true"){
            changePage = "false";
        if(i < 6){
        $(`.page-${i}`).classList.add("rotate");
        setTimeout(function () {
        $(`.page-${i+1}`).classList.add("rotate");
        i=i+2;
       }, 0.001);
        }
        setTimeout(function () {
            changePage = "true";
           }, 2000);
    }

    };
    $(".previous").onclick = function(){
        if(changePage == "true"){
            changePage = "false";
        i=i-2;
        $(`.page-${i+1}`).classList.remove("rotate");
            setTimeout(function () {
                $(`.page-${i}`).classList.remove("rotate");
           }, 0.001);
           setTimeout(function () {
            changePage = "true";
           }, 2000);
    }

    };


    // // zoom
    // let zoom = 80;
    // let zoomTimes = 1;
    // $(".zoom-in").onclick = function(){
    //     zoomTimes = zoomTimes*1.2;
    //     $(".sketch").style.backgroundSize = `${zoom*zoomTimes}%`;
    // };
    // $(".zoom-out").onclick = function(){
    //     zoomTimes = zoomTimes/1.2;
    //     $(".sketch").style.backgroundSize = `${zoom*zoomTimes}%`;
    // };

    // let isDrawing = false;
    // let x = 0;
    // let y = 0;
    // let xStart = 0;
    // let yStart = 0;
    // let xNew = 0;
    // let yNew = 0;

    // $(".sketch").addEventListener('mousedown', e => {
    //     xStart = e.offsetX;
    //     yStart = e.offsetY;
    //     isDrawing = true;
    //   });
      
    //   $(".sketch").addEventListener('mousemove', e => {
    //     if (isDrawing === true) {
    //         x = e.offsetX;
    //         y = e.offsetY;
    //         $(".sketch").style.backgroundPositionX = `${(x-xStart)+xNew}px`;
    //         $(".sketch").style.backgroundPositionY = `${(y-yStart)+yNew}px`;
    //     }
    //   });
      
    //   window.addEventListener('mouseup', e => {
    //     xNew = xNew-(xStart-x);
    //     yNew = yNew-(yStart-y);
    //     xStart= xStart+x;
    //       isDrawing = false;
    //   });

}

Sketchbook()    