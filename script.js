const scroll = new LocomotiveScroll({
    el: document.querySelector('#page-main'),
    smooth: true
});
function customcsr(){
    window.addEventListener('mousemove', function(details){
        gsap.to('#customcrsr',{
            x : details.x,
            y: details.y,
            ease: "expoScale(0.5,7,none)"
        })
    })
}
customcsr()

var mtl = gsap.timeline()

function firstpageanimation(){
    var tl = gsap.timeline()
    
    tl.from('nav span',{
        y:50,
        opacity:0,
    
    })
    tl.from('#main span h3',{
        y:50,
        opacity : 0,
    })
    tl.from('#tor h6',{
        y:-50,
        opacity:0
    })
    tl.from('.available div h5',{
        y:-50,
    })
    tl.from('.available div h6',{
        y:-50,
    })
    tl.from('#page-1 .foot',{
        opacity:0
    })
    
}

firstpageanimation();

function secondpageanimation(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:'#page-2',
            scroller:'body',
            start: "top 50%",
            end: "top -60%",
            scrub:3
        }
    })
    document.querySelectorAll('.elem').forEach(function(element){
        tl.from(element,{
            y:100,
            duration:0.8,
            opacity:0
        })
    })
    tl.from('#page-2 button',{
        y:100,
        opacity:0,
        duration:0.8
    })
}
secondpageanimation()

function thirdpageanimation(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:'#page-3',
            scroller:'body',
            start: "top 50%",
            end: "top -60%",
            scrub:3
        }
    })
    tl.from('#page-3 img',{
        y:100,
        opacity:0,
        duration:1
    })
    tl.from('#page-3 .about',{
        y:100,
        opacity:0,
        duration:1
    })
}
thirdpageanimation()

function showimage(){
    document.querySelectorAll('.elem').forEach(function(element){

        element.addEventListener('mousemove', function(details){
            gsap.to(element.querySelector('img'),{
                opacity:1,
                x:details.x-120,
            })
            gsap.to(".transparent",{
                x:details.x-120,
            })
        })
        element.addEventListener('mouseleave', function(details){
            gsap.to(element.querySelector('img'),{
                opacity:0
            })
        })
    
    })
}
showimage()

function time(){
    var now = new Date();
    var n = now.toLocaleString([],{
        hour:"2-digit",
        minute:'2-digit',
        second:'numeric'
    })

    var time = document.querySelector('.currenttime')
    time.innerHTML = n
}
setInterval(time,1000)
time()
