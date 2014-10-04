'use strict';

try {
  // Check if current runtime supports generators.
  console.log('Checking to see if your browser supports generators...')
  eval('(function *() {})();');
  console.log('Congratulations! Generators are supported!');
} catch (e) {
  if (e.message !=='Unexpected token *') throw e;
  console.log('Your current browser doesn\'t support generators yet. You can still view the slides, but trying out exercises in this console won\'t work. Try Firefox 31 or higher, if it\'s available on your system.');
}

