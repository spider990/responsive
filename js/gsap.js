gsap.registerPlugin(ScrollTrigger);




gsap.from('h2 , h1',{
  opacity: 0,
  duration: 3,
  x: '200px',
  stagger: 0.3,
})



gspa.from('.card1',{
    scrollTrigger: {
       trigger: '.card1',
       start: 'top 100px',
       end: 'top 100px',
       scrub: true,
       markers: true,
    },

})