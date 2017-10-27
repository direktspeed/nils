const Nils = require('../../')
const defineMap = require('can-define/map/map')
const component = require('can-component')
const view = require('index.stache')

const Component = new Nils()

/*
  - Is Shadow Dome if it builds dome elements and diffs them against existing
  - Is ViewModel Representation
  - Supports 1-way 2-way bindings and taking values via any method
 */
// Init ViewModel
// could be also a defineMap->Stream
Component.stream.of({
  data: ''
})
// Observe DOM Elements
// return { update, assign }
.combineArray((observed)=>observed,[
  Component.fromInput(document.querySelector('input.x'))
  .map((val)=>{

  }),
  Component.fromInput(document.querySelector('input.x'))
  .map((val)=>{
    Model.data = val
    return viewModel
  })
])
.map(function renderShadowDOM(view) {
  let RenderedHTML = most.of(Mustache.render("{{title}} spends {{calc}} <subTemplate>", view));
  //subTemplates replace a tag inside template with rendered data
  return RenderedHTML
    .map((html)=>html.replace('<subTemplates>',Mustache.render("{{title}} spended sub this {{calc}} <subTemplate>", view)))
})
// Returns the shadowDOMasHTML
// if in browser match that agains current dom else return to render
.map(function ComponentlyVM(shadowDOM) {
  // if document exist
  // we need to make sure that RenderedHTML matches dom view of our tag else replace update that
  document.body
  // Autorendering if not exists
  document.body.append('<my-Tag>')
  // Modify the DOM
  //vm.updateDeep(vm)
  // Rerender Element complet
  // Render to shadow DOM diff viewDOM
  return shadowDOM
})
// Acticvate the Stream All gets executed as sideEffect
.drain()





/*
Working with forms
*/
// Init ViewModel
// could be also a defineMap->Stream
Component.stream.of({
  viewModel: {
    name: 'frank',
    data: 'any'
  }
})
.map((component)=>{
  db.getList()
})
.loop((lastSetValue, setValue) => {
  // deep merge lastSetValue setValue
 	return { seed: values, value: setValue };
}, {}) // Starts with a empty Object for init
/*
  Here you can Choose how to Render this Obervable Map (Stream) aka viewModel VM
*/
.map(function renderWithMustache(viewModel) {
  let view = most.of(Mustache.render("{{title}} spends {{calc}} <subTemplate>", viewModel))
              .map((html)=>html.replace('<subTemplates>',Mustache.render("{{title}} spended sub this {{calc}} <subTemplate>", viewModel)))

 //subTemplates replace a tag inside template with rendered data
 return { view, viewModel }
})
// Returns the shadowDOMasHTML
// if in browser match that agains current dom else return to render
.map(function domDiffing(component) {
 // if document exist
 // we need to make sure that RenderedHTML matches dom view of our tag else replace update that
 document.body
 // Autorendering if not exists
 document.body.Componentend(component.view)
 // Modify the DOM
 //vm.updateDeep(vm)
 // Rerender Element complet
 // Render to shadow DOM diff viewDOM
// Observe DOM Elements
return Component.of(component).combineArray((observed)=>observed,[
    Component.fromInput(document.querySelector('input.x'))
    .map((val)=>{
      return { data: val }
    }),
    Component.fromInput(document.querySelector('input.x'))
    .map((val)=>{
      return { name: val }
    })
  ]).loop((lastSetValue, setValue) => {
    // deep merge lastSetValue setValue
   	return { seed: values, value: setValue };
  }, {}) // Returns Data From inputs

})




// Acticvate the Stream All gets executed as sideEffect
