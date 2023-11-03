
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.to(".nlink", {
    stagger: .1,
    y: 10,
    duration:2,
    ease:Power3,
    opacity: 0,
})