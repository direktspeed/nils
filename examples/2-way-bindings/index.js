const Nils = require('../../')


const app = new Nils()

// Takes objects mergs into Object
function createVM(val){
  return val
}
// use can assign or deep merge to merge lastSetVal into setVal
// Modify the DOM


// Init ViewModel
app.stream.of({
  data: ''
})
// Observe DOM Elements
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
})
