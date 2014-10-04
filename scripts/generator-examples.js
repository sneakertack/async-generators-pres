'use strict';

/**
 * Example 1: Simple infinite generator.
 * In the movie Pacific Rim, the scientist asserts that the time between subsequent monster appearances keeps on halving.
 */
window.kaijuPredictor = function *kaijuPredictor() {
  var interval = 169; // Days between first and second occurence.
  while (true) {
    console.log('The next Kaiju will appear in %d days.', interval);
    yield null;
    interval /= 2;
  }
}

/**
 * Example 2: Finite generator that accepts consumer input.
 * This is a generator pretending to be a voicemail machine.
 */
window.voicemail = function *voicemail() {
  var messages = loadTheMessages(); // Returns an array of strings. Assume it's synchronous.

  var index = 0, response = 0;
  while (index < messages.length) {
    console.log('Press 0 to repeat. Press 1 to go to next message.');
    response = yield messages[index]; // <-- THE IMPORTANT LINE.
    if (response === 1) index++;
  }
}

function loadTheMessages() {
  return ['Bob: are we going for beer?', 'Mum: Please remember to switch off the stove.', 'Alice: () {:;}; echo /etc/passwd hey there just wanted to catch up how are you doing? '];
}
window.loadTheMessages = loadTheMessages;

function goSwitchOffTheStove() {
  setTimeout(function () {
    console.log('Switched off the stove.');
  }, 1500);
  return 'Switching off the stove...';
}
window.goSwitchOffTheStove = goSwitchOffTheStove;
