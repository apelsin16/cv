'use strict';
(function(){
    const progressBar = document.querySelectorAll('.progress__line');
    const progressBarArr = Array.from(progressBar);
    
    progressBarArr.forEach( item => {
        const skill = item.getAttribute("data-skill");
        const elem = document.getElementsByClassName(item.className
                            .split(' ')
                            .slice(- 1)
                            .join(''));
        animateLine(elem, skill);
    })

    function animateLine (elem, skill)  {
        let width = 0;
        const iteration = () => {
            width++;
            elem[0].style.width = width + '%';
            if (width == skill) {
                clearInterval(move);
            }
        }
        const move = setInterval(iteration, 10);
     }
 })();