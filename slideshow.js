class Slideshow {
  constructor (settings) {
    this.settings = settings
    this.slides = settings.slides
    this.currentSlideIndex = settings.startIndex || 0
    this.runningSlideshow
    this.slideshowIsRunning = false
    $(document).ready(() => {
      this.bindHotkeys()
      this.initSlideshowSettings(slideshowSettings)
      // start()
    })
  }

  loadSlide(slide) {
    if (slide.image != null) {
      $('.slide__image').attr('src', `${this.settings.imageDirectory}/${slide.image}`)
      $('.slide__image').show()
      $('.slide__text').html('')
    } else {
      $('.slide__image').hide()
      $('.slide__text').html(slide.text)
    }
  }

  start () {
    this.loadSlide(this.slides[this.currentSlideIndex])
    this.runningSlideshow = setInterval(() => {
      this.showNextSlide()
    }, 3000)
    this.slideshowIsRunning = true
    this.setStatus('Running')
  }

  stop () {
    clearInterval(this.runningSlideshow)
    this.slideshowIsRunning = false
    this.setStatus('Stopped')
  }

  reset () {
    this.stop()
    this.currentSlideIndex = 0
    this.start()
  }

  showNextSlide () {
    this.currentSlideIndex = this.currentSlideIndex === this.slides.length - 1 ? 0 : this.currentSlideIndex + 1
    this.loadSlide(this.slides[this.currentSlideIndex])
  }

  showPreviousSlide () {
    this.currentSlideIndex = this.currentSlideIndex === 0 ? this.slides.length - 1 : this.currentSlideIndex - 1
    this.loadSlide(this.slides[this.currentSlideIndex])
  }

  setStatus (text) {
    $('.status').html(text).show().fadeOut(1000)
  }

  bindHotkeys () {
    const slideshow = this
    $(document).keyup(function(e) {
      if (e.key === " " || e.keyCode == 32) { // Spacebar
        slideshow.slideshowIsRunning === true ? slideshow.stop() : slideshow.start()
      }
      if (e.key === 'ArrowLeft') {
        slideshow.stop()
        slideshow.showPreviousSlide()
      }
      if (e.key === 'ArrowRight') {
        slideshow.stop()
        slideshow.showNextSlide()
      }
      if (e.key === 'Escape') {
        slideshow.reset()
      }
    })
  }

  initSlideshowSettings (settings) {
    this.applySlideshowStyles(this.settings)
  }

  applySlideshowStyles (settings) {
    $('.slide__text').css('color', settings.defaultTextColour)
    $('.slide').css('background-color', settings.defaultBackgroundColour)
  }
}