# The Origin Of Suffering
## Info
These are the files used for The Origin Of Suffering expo, held on 2019-02-16 at De Basis, Brugge, Belgium. The expo's goal was to show the origin of suffering and also how to prevent it.

## Expo setup
The expo consisted of an installation using two projectors, each showing a different slideshow. The left side showed negative attachment and the right side showed 'positive' attachment. In the middle of the installation was a lotus flower which symbolized the enlightened mind which is not attached to either positive or negative feelings.

Each slideshow consists of 6 parts. Each part is based on one of our senses (sight, smell, taste, hearing and touch), including a sixth 'intellect'-sense (according to Buddhist literature). A part has 1 image slide followed by 6 text slides. There are 42 slides in total, unintentionally consisting with Douglas Adams' "answer to life, the universe and everything" (from The Hitchhiker's Guide to the Galaxy).

## Slideshow shortcuts
The slideshow viewer has following shortcuts:
- Escape: resets the slideshow to the beginning slide and starts playing immediately
- Spacebar: pauses or resumes the slideshow
- Left/right arrow keys: go back and forth between slides

## Implementation
The slideshows are coded in JavaScript, with a bit of jQuery to handle the slide changes. The files do not require a web server or network connection and can be run from localhost.

During the expo, the slideshows were ran by a duo of Raspberry Pis (a kind of mini computers). The Pis each had a bootscript which ran whenever a Pi had finished starting up. This script launched a Chromium browser window in fullscreen to display the slideshows. Wireless keyboards were used to synchronize the slideshows manually, pressing the Escape key on both at the same time.

Originally, a WebSocket master/slave system was envisioned, where one of the Pis could act as a master to sync the other (slaves). This feature was left out due to time constraints.
