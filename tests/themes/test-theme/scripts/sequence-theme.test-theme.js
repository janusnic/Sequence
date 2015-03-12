/*!
 * Theme Name: Test Theme
 * Version: 0.1.0
 * Theme URL:
 *
 * Used for Testing Sequence
 *
 * Powered by Sequence.js - The open-source CSS animation framework.
 *
 * Author: Ian Lunn
 * Author URL: https://ianlunn.co.uk/
 *
 * Test Theme Sequence Theme Copyright (c) Ian Lunn 2014
 * License: MIT http://opensource.org/licenses/MIT
 *
 * Sequence.js and its dependencies are copyright (c) Ian Lunn 2014 unless otherwise stated.
 */

// Get the Sequence element
var sequenceElement = document.getElementById("sequence");

// Place your Sequence options here to override defaults
// See: https://github.com/IanLunn/Sequence/blob/v2/DOCUMENTATION.md
var options = {
  animateCanvas: true,
  autoPlay: true,
  // autoPlayDirection: -1,
  autoPlayDelay: 1000,
  phaseThreshold: false,
  preloader: true,
  // startingStepId: 1,
  keyNavigation: true,
  startingStepAnimatesIn: true
}

var mySequence,
    initButton = document.getElementById("init"),
    destroyButton = document.getElementById("destroy");

// Launch Sequence on the element, and with the options we specified above
function init() {
  mySequence = sequence(sequenceElement, options);

  mySequence.started = function(sequence) {
    sequence.$autoPlay[0].innerHTML = "Stop Autoplay";
  };

  mySequence.stopped = function(sequence) {
    sequence.$autoPlay[0].innerHTML = "Start Autoplay";
  };
}

init();

mySequence.utils.addEvent(initButton, "click", function() {
  init();
});

mySequence.utils.addEvent(destroyButton, "click", function() {
  if (mySequence !== undefined) {
    mySequence.destroy();
    mySequence = undefined;
  }
});