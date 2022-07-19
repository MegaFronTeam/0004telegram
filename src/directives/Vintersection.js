export default {
  mounted (el, binding) {
    const topMenuHeight = 80
    const links = document.querySelectorAll('.sCatalog-nav__link')
    function setActive () {
      const fromTop = window.scrollY + topMenuHeight
      const elTop = el.offsetTop
      if (fromTop > elTop) {
        for (const link of links) {
          if (link.classList.contains('active')) {
            link.classList.remove('active')
          }
        }
        document.querySelector(`[href="#${el.id}"]`).classList.add('active')
      }
    }
    setActive()
    window.addEventListener('scroll', () => {
      setActive()
    }, { passive: true })
  },
  name: 'intersection'
}
