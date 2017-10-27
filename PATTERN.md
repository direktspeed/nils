# How this works

we create viewModel view, diff, bindings

viewModel => view => diff => apply Diff to dom => apply bindings

This allows error handling at any state for example if viewModel is inconsistent
or view diff to high
or bindings could not be applyed but element got rendered

This gives you total freedom about how to
- create your viewModel === data
- create your view === html representation
- bindings on that representation
  - example bindings are input filds or any other 2 way bindings from the view === html fragment


Diffrence to CanJS Standart

the viewModel is still the authority of source so all 1 way bindings are in the
view creation already as we don't work with the dom directly in our pattern
Our functions are using the dom and we update only the dom to have our content

CanJS does return live bound dom elements
Nils does return HTML and binding functions that get applyed after rendering.

Nils algo with splitting view and binding is async streamd and ultra fast reactiv.


Conceptual Diffrence is
- CanJS generates something and trys to Stream that out
- Nils generates Compose able Streams of Streaming HTML Fragments + live bindings
