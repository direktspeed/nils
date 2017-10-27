/*
<div class="screen-glass">

{{#switch state}}
    {{#case "readingCard"}}
        <h2>Reading Card</h2>
    {{/case}}

    {{#case "readingPin"}}
        <h2>Reading Pin</h2>
    {{/case}}

    {{#case "choosingTransaction"}}
        <h2>Choose Transaction</h2>
    {{/case}}

    {{#case  "pickingAccount"}}
        <h2>Pick Account</h2>
    {{/case}}

    {{#case "depositInfo"}}
        <h2>Deposit</h2>
    {{/case}}

    {{#case "withdrawalInfo"}}
        <h2>Withdraw</h2>
    {{/case}}

    {{#case "successfulTransaction"}}
        <h2>Transaction Successful!</h2>
    {{/case}}

    {{#case  "printingReceipt"}}
        <h2>Printing Receipt</h2>
    {{/case}}

    {{#default}}
        <h2>Error</h2>
        <p>Invalid state - {{state}}</p>
    {{/default}}

{{/switch}}
</div>
becomes
*/

// takes component returning stream
// view == HTML String of the Element or domRepresentation
nils.stream.of({ view, viewModel })
.map(component=>{
  switch (viewModel.state) {
    case "readingCard":
      view = '<h2>Reading Card</h2>'
      [break;]
    case "withdrawalInfo":
        view = '<h2>Withdraw</h2>'
      [break;]
    case "successfulTransaction":
        view = '<h2>Transaction Successful!</h2>'
      [break;]
    default:
      view = '<h2>Error</h2> <p>Invalid state - {{state}}</p>'
      [break;]
  }
  view = Mustache.render(view)
})
.map(nils.domDiffRender)
// now we have
// component === { view, viewModel, diff }
// view === the resulting realtime live binded html fragment
// that automaticly gets synced with the dom
