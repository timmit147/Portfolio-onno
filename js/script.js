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
    $(".sketch-1").style.transform = `rotateZ(${360/100*this.value}deg)`;
    }
    const slider2 = $("#myRange2");
    const output2 = $("#demo2");
    output2.innerHTML = slider2.value;
    slider2.oninput = function() {
    output2.innerHTML = this.value;
    $(".sketch-1").style.transform = `rotateX(${360/100*this.value}deg)`;
    }
}

Sketchbook()    