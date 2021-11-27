//write

const animtext = document.querySelector ('.autotext');

new Typewriter (animtext, {

    deleteSpeed : 60
    
})

.typeString ('< Valentin Dauvier ')
.pauseFor(100)
.typeString(', etudiant chez Digital Campus >')
.start()


const animtext2 = document.querySelector ('.autotext2');

new Typewriter (animtext2, {
    
    deleteSpeed : 60
})

.typeString ('< est à la recherche d\'un stage en tant que Développeur Front-End>')
.pauseFor(100)
.start()

//boutonremonter

let bouton = document.querySelector('.scroll-btn') ;

bouton.addEventListener ('click', () => {

document.querySelector('html').style.scrollBehavior
="smooth" ;

setTimeout(() => {
  document.querySelector('html').style.scrollBehavior
  ="unset" ;
  
  },1000)

})


//sliderparcours

const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            .setTween(tween)
            .addIndicators()
            .addTo(controller)

        }

    }

})



