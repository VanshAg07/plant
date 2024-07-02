gsap.from("#img1",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:60,
})

gsap.from("#img2",{
    delay:0.4,
    opacity:0,
    duration:1,
    x:60,
})

gsap.from("#img4",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:-60,
})

gsap.from(".pg-1 h1, .pg-1 h3",{
    delay:0.4,
    opacity:0,
    duration:1,
    
   
})

gsap.from(".page2 h5",{
    opacity:0,
    y:60,
    scrollTrigger:{
        trigger:".page2 h5",
        scroller:"body",
        // markers:true,
        start:"top 80%",

    }
})


gsap.from(".page2 h1",{
    opacity:0,
    y:60,
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:"body",
        // markers:true,
        start:"top 70%",

    }
})

gsap.from(".page2 #About-us",{
    opacity:0,
    y:60,
    scrollTrigger:{
        trigger:".page2 #About-us",
        scroller:"body",
        // markers:true,
        start:"top 65%",

    }
})

gsap.from(".page-3-left",{
    opacity:0,
    y:60,
    scrollTrigger:{
        trigger:".page-3-left",
        scroller: "body",
        // markers:true,
        start:"top 80%",

    }
})

gsap.from(".page-3-right h1",{
    opacity:0,
    y:60,
    scrollTrigger:{
        trigger:".page-3-left",
        scroller: "body",
        // markers:true,
        start:"top 60%",

    }
})

gsap.from(".page-3-right p",{
    opacity:0,
    y:60,
    scrollTrigger:{
        trigger:".page-3-left",
        scroller: "body",
        // markers:true,
        start:"top 50%",

    }
})


gsap.from(".page-3-right .page-3-div",{
    opacity:0,
    y:60,
    scrollTrigger:{
        trigger:".page-3-left",
        scroller: "body",
        // markers:true,
        start:"top 20%",

    }
})

gsap.from(".page-4 .page-4-text",{
    opacity:0,
    y:60,
    scrollTrigger:{
        trigger:".page-4",
        scroller: "body",
        // markers:true,
        start:"top 60%",

    }
})

gsap.from(".page-4 #page-4-img",{
    opacity:0,
   stagger:0.4,
   y:60,
    scrollTrigger:{
        trigger:".page-4",
        scroller: "body",
        // markers:true,
        start:"top 40%",

    }
})

gsap.from(".footer-main .footer-stagger ",{
    opacity:0,
   stagger:0.4,
   y:60,
    scrollTrigger:{
        trigger:".footer",
        scroller: "body",
        // markers:true,
        start:"top 60%",

    }
})





