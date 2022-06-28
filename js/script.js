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