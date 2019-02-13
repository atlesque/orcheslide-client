function loadSlide(slide) {
  if (slide.image != null) {
    $('.slide__image').attr('src', `${imageDirectory}/${slide.image}`)
    $('.slide__image').show()
    $('.slide__text').html('')
  } else {
    $('.slide__image').hide()
    $('.slide__text').html(slide.text)
  }
}

function startSlideshow () {
  loadSlide(allSlidesInOrder[currentSlideIndex])
  runningSlideshow = setInterval(() => {
    showNextSlide()
  }, 3000)
  slideshowIsRunning = true
  setStatus('Running')
}

function stopSlideshow () {
  clearInterval(runningSlideshow)
  slideshowIsRunning = false
  setStatus('Stopped')
}

function resetSlideshow () {
  stopSlideshow()
  currentSlideIndex = 0
  startSlideshow()
}

function showNextSlide () {
  currentSlideIndex = currentSlideIndex === allSlidesInOrder.length - 1 ? 0 : currentSlideIndex + 1
  loadSlide(allSlidesInOrder[currentSlideIndex])
}

function showPreviousSlide () {
  currentSlideIndex = currentSlideIndex === 0 ? allSlidesInOrder.length - 1 : currentSlideIndex - 1
  loadSlide(allSlidesInOrder[currentSlideIndex])
}

function setStatus (text) {
  $('.status').html(text).show().fadeOut(1000)
}

function bindHotkeys () {
  $(document).keyup(function(e) {
    if (e.key === " " || e.keyCode == 32) { // Spacebar
      slideshowIsRunning === true ? stopSlideshow() : startSlideshow()
    }
    if (e.key === 'ArrowLeft') {
      stopSlideshow ()
      showPreviousSlide()
    }
    if (e.key === 'ArrowRight') {
      stopSlideshow ()
      showNextSlide()
    }
    if (e.key === 'Escape') {
      resetSlideshow()
    }
  })
}

function initSlideshowSettings (settings) {
  applySlideshowStyles(settings)
}

function applySlideshowStyles (settings) {
  $('.slide__text').css('color', settings.defaultTextColour)
  $('.slide').css('background-color', settings.defaultBackgroundColour)
}
