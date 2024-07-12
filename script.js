var tl = gsap.timeline()

tl.from("#logo", {
    y:-20,
    duration: 0.33,
    opacity:0,
    delay:1,
})



tl.from(".links h4", {
    y:-20,
    duration: 0.33,
    opacity:0,
    delay:1,
    stagger:0.4
})