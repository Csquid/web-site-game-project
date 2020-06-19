window.onload = function(){
                
    anime({targets:"#titleImage",opacity:1,top:"30%",delay:1000,duration:500})

    anime({
        targets:"#blind",
        delay:2000,
        opacity:0,
        easing: 'easeInOutSine',
        duration:500
    })

    let input = document.querySelector("#startBtn");
    let blind = document.querySelector("#blind");

    function startFunc() {
        return new Promise((resolve, reject) => {
            anime({
                targets: '.title',
                keyframes:[
                    {opacity:1,top:"40%",delay:3000,duration:1000},
                    {top:"25%",delay:1000,duration:1000}
                ]
            });
            setTimeout(resolve, 4000);
        });
    };
    startFunc().then(function() {
        blind.style.display = "none";
        input.style.display = "block";
    });

}