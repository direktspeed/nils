createComponent(component = most.empty()) {
  //bindings is stream of bindings to apply to this view
  //a component without bindings is in general a data Component
  return component.combine((newComponent)=>{
    //TODO: viewAppend
    return { view, viewModel, bindings }
  })
}
