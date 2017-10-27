const Nils = require('../../')
const defineMap = require('can-define/map/map')
const component = require('can-component')
const view = require('index.stache')

const app = new Nils()

const MAP = defineMap.extend({sealed: false},{})

// Takes objects mergs into Object
const VM = new MAP()
  // Update can-map that updates the domView
const element = component.extend({
  viewModel,
  tag,
  view
})


/*
  - Is Shadow Dome if it builds dome elements and diffs them against existing
  - Is ViewModel Representation
  - Supports 1-way 2-way bindings and taking values via any method
 */
// Init ViewModel
// could be also a defineMap->Stream
app.stream.of({
  data: ''
})
// Observe DOM Elements
// return { update, assign }
.combineArray((observed)=>observed,[
  fromInput(document.querySelector('input.x'))
  .map((val)=>{

  }),
  fromInput(document.querySelector('input.x'))
  .map((val)=>{
    Model.data = val
    return viewModel
  })
])
// Returns the ViewModel
.map(function applyVM(vm){

  // Modify the DOM
  //vm.updateDeep(vm)
  // Rerender Element complet
  // Render to shadow DOM diff viewDOM
})
// Acticvate the Stream All gets executed as sideEffect
.drain()





/*

 */
