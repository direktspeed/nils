// a Webworker that executes Promises :)
onmessage = function(e) {
  e.then(postMessage);
};
