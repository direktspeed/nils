const express = require('express')
const ssr = express()
const Nils = require('.')
// here you can pass require lines that get automaticly added to your nils lib
// usefull if you want to reuse stuff when express is used you can use
// Nils directly it has a noNew Decorator ;)
const nils = new Nils()

ssr.use(req,res,next=>{
  next(nils.stream.of(req),res,next)
})

ssr.use(reqStream,res,next=>{
  reqStream.map(req=>{
    switch (req.url.path) {
      case '/':
        view = '<h2>Transaction Successful!</h2>'
        [break;]
      default:
        view = '<h2>Error</h2> <p>Invalid state - {{state}}</p>'
        [break;]
    }
  })
})

function shadowDOM(streamOfHTMLElements = most.emty()) {
  nils.stream.fromEvent('DOMContentLoaded',document)
  return streamOfHTMLElements
    //Inital building html from components
    .map((component)=>{

    },[
      //weather widged updates it self via its bindings if it emits a new value
      // a component uses domDiffing of its tag for updating it self no matter where its placed
      // so the component defines where to bind to
      nils.stream.of({ view: '<p>hi</p>' }), //Component gets removed if empty html string is returned
      nils.stream.of({ view: '<p>hi2</p' }),
      nils.stream.combine({ view: '<p>hi2</p' }), // returns each value of each stream when it arrives allows complexest flows
    ])
    .loop(lastSetValue,setValue=>{
      // Add Elements in stream order each component has a end event when its fully rendered!
      // Each component returns a html root road that gets processed
      // a tag indiciates what to update in the dom
      nils.stream.of({ view: '<p>hi</p>', tag: 'my-component1' }).map((element)=>cheerio.load(component.view).replace(''))
    },{ view: '<html>'})
    .map((component)=>component.view+'</html>')

}
