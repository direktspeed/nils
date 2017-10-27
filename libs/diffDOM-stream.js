// Alternativ use jquery or what ever you like
const str2DOMElement = require('./str2DOMElement')


//Takes a array with 2 doms and then returns diff with apply function
//also supports undo :)
//[shadowDOM,browser]
module.exports = function(domArray) {
  let shadowDOM = domArray[0]
  let browserDOM = domArray[1]

  if (typeof shadowDOM === 'string') {
    shadowDOM = str2DOMElement(dom)
  }
  return str2DOMElement(shadowDOM,browserDOM)
}
