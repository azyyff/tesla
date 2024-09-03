var tes = gsap.timeline()

tes.from("#tes" , {

    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,


})

var types = gsap.timeline()

types.from("h6",{

    y:-20,
    opacity:0,
    duration:1,
    stagger: 0.3,
    
})

var icon = gsap.timeline()

icon.from("#icon",{

    y:-50,
    opacity:0,
    duration:1,
    stagger: 0.3,
    
})


gsap.from("#bantext h1",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#bantext h1",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
        
        

    }

})

gsap.from("#bantext h3",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#bantext h3",
        scroller:"body",
        start:"top 50%"

    }

})


gsap.from("#bantext h5",{
    opacity:0,
    duration:2,
    
    y:500,
    scrollTrigger:{
        trigger:"bantext h5",
        scroller:"body",
        start:"top 50%",
        

    }

})



function breakText() {
    var h1  = document.querySelector("h1")
    var text = h1.textContent

    var splittedText = text.split("")
    var halfValue = splittedText.length/2

    var clutter = ""

    splittedText.forEach(function (tes,not) {
        if (not<halfValue) {
            clutter += `<span class="a">${tes}</span>`
            
        }else{

            clutter += `<span class="b">${tes}</span>`

        }
        
    })
    h1.innerHTML = clutter


    
}

breakText()

gsap.from("#riss h1",{
    y:80,
    duration:0.6,
    delay:0.2,
    stagger:0.15,
    opacity:0,
    scrollTrigger:{
        trigger:"#riss h1",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        
        

    }


})


gsap.from("#riss h3",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0,
    scrollTrigger:{
        trigger:"#riss h3",
        scroller:"body",
        start:"top 70%",
        
    }
    

})


gsap.from("#riss h5",{
    y:80,
    duration:0.6,
    delay:0.3,
    stagger:-0.15,
    opacity:0,
    scrollTrigger:{
        trigger:"#riss h5",
        scroller:"body",
        start:"top 30%",
        
    }
    

})


gsap.from("#eee h1",{
    x:-80,
    duration:0.6,
    delay:0.3,
    stagger:-0.15,
    opacity:0,
    scrollTrigger:{
        trigger:"#eee",
        scroller:"body",
        start:"top 70%",
        
    }
    

})

gsap.from("#eee h3",{
    x:-80,
    duration:0.6,
    delay:0.5,
    stagger:-0.10,
    opacity:0,
    scrollTrigger:{
        trigger:"#eee",
        scroller:"body",
        start:"top 30%",
        
        
    }
    

})


gsap.from("#eee h5",{
    x:-80,
    duration:0.6,
    delay:0.2,
    stagger:-0.15,
    opacity:0,
    scrollTrigger:{
        trigger:"#eee",
        scroller:"body",
        start:"top 30%",
        
    }
    

})


gsap.from("#www h1",{
    y:-90,
    duration:0.6,
    delay:0.4,
    stagger:-0.45,
    opacity:0,
    scrollTrigger:{
        trigger:"#www",
        scroller:"body",
        start:"top 30%",
        
    }
    

})

gsap.from("#www h5",{
    y:90,
    duration:0.6,
    delay:0.4,
    stagger:-0.45,
    opacity:0,
    scrollTrigger:{
        trigger:"#www",
        scroller:"body",
        start:"top 30%",
        
    }
    

})





var sec = gsap.timeline()

item.from(" #sec li",{

    y:-20,
    opacity:0,
    duration:1,
    stagger: 0.3,
    scrollTrigger:{
        trigger:"#sec",
        scroller:"body",
        start:"top 30%",
        end:"top 30%"
        
    }
    
})

