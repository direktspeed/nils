# Nils (nikolaos framework) - PreAlpha!

## TODO: Create Badges

Nils lets you build encapsulated, reusable elements that work just like standard HTML elements, to use in building web applications.

## Nils is an Early Preview! it can be seen as Google Polymer 4.x Branch

This is based on a preview branch of Polymer 3.0, a very early version of Polymer that uses JavaScript modules instead of HTML Imports. It will only work in browsers with module support, like Safari 10.1 and Chrome 61, or via a compiler like Babel, TypeScript or Closure.
but when you load the Pollyfills it should work also as we supply Steal (es6) and webcomponentsjs (webcomponent standart)

The API is mostly the same as Polymer 2.0, but the documentation has not been updated.

## Features
- Incremental Build Process
- Incremental Loading of The Whole Application including Design and Logic Indipendent
- Hot Module Swapping
- MVC + MVVM Pattern
- Works with any Framework based on JavaScript
- Works with any registry npm, yarn, jspm
- Web Worker Support
- Web Service Worker Support
- es7 Support
- Tree Shaking Support
- SSR Support
- pre processor support
- partial paradigm for preprocessors
- Automation - nils is a toolkit that helps you automate painful or time-consuming tasks in your development workflow.
Platform-agnostic - Integrations are built into all major IDEs and people are using gulp with PHP, .NET, Node.js, Java, and other platforms.
- Strong Ecosystem - Use npm/jspm modules to do anything you want + over 2000 curated plugins for streaming file transformations
- Simple - By providing only a minimal API surface, nils is easy to learn and simple to use
- nils can create auto diffing html elements from streams with any template engine
it can also be used with pure html
- Polymer 100% 4.x Compatible can be seen as polymer@4.x+



## Use
To try Nils, use `yarn` to install from `npm`:

```sh
> yarn add @nikolaos/nils --flat
```



Launch the Polymer devserver in npm mode:
 - DEPRECATES soon with steal-server
```sh
> polymer serve --npm
```

Then load Polymer into your element:

```js
import { Element as PolymerElement } from '../@polymer/polymer/polymer-element.js';
export class MyElement extends PolymerElement {
    static get template() {
      return `
      <h1>Hello World!</h1>
    `;
  }
}
customElements.define('my-element', MyElement);
```

And use it in a page:
```html
<script type="module" src="./my-element.js"></script>
<my-element></my-element>
 ```


## Overview

Nils is a lightweight library built on top of the web standards-based [Web Components](http://webcomponents.org/) APIs, and makes it easier to build your very own custom HTML elements. Creating reusable custom elements - and using elements built by others - can make building complex web applications easier and more efficient. By being based on the Web Components API's built in the browser (or [polyfilled](https://github.com/webcomponents/webcomponentsjs) where needed), Nils elements are interoperable at the browser level, and can be used with other frameworks or libraries that work with modern browsers.

Among many ways to leverage custom elements, they can be particularly useful for building reusable UI components. Instead of continually re-building a specific navigation bar or button in different frameworks and for different projects, you can define this element once using Nils, and then reuse it throughout your project or in any future project.

Nils provides a declarative syntax to easily create your own custom elements, using all standard web technologies - define the structure of the element with HTML, style it with CSS, and add interactions to the element with JavaScript.

Nils also provides optional two-way data-binding, meaning:

1. When properties in the model for an element get updated, the element can update itself in response.
2. When the element is updated internally, the changes can be propagated back to the model.

Nils is designed to be flexible, lightweight, and close to the web platform - the library doesn't invent complex new abstractions and magic, but uses the best features of the web platform in straightforward ways to simply sugar the creation of custom elements.

In addition to the Nils library for building your own custom elements, the Polymer project includes a collection of [pre-built elements](https://elements.polymer-project.org) that you can  drop on a page and use immediately, or use as starting points for your own custom elements.

## WebComponents in 1 Minute

Polymer adds convenient features to make it easy to build complex elements:

**Basic custom element without Polymer:**

```js
// Standard custom element that Extends HTMLElement
class MyElement extends HTMLElement {
  constructor() {
    super();
    console.log('my-element was created!');
  }
}

// Register custom element class with browser
customElements.define('my-element', MyElement);
```

```html
<!-- use the element -->
<my-element></my-element>
```

**Custom element using Polymer**

```html
<!-- Define template that your element will use -->
<dom-module id="my-simple-namecard">
  <template>
    <div>
      Hi! My name is <span>Jane</span>
    </div>
  </template>
</dom-module>
```

```js
// Custom element that extends Polymer base class
class MySimpleNamecard extends Polymer.Element {

  // Stamp template from this dom-module into element's shadow DOM:
  static get is() { return 'my-simple-namecard'; }

}

// Register custom element class with browser
customElements.define(MySimpleNamecard.is, MySimpleNamecard);
```

**Configure properties on your element...**

```js
// Create an element that takes a property
class MyPropertyNamecard extends Polymer.Element {

  static get is() { return 'my-property-namecard'; }

  // Define property/attribute API:
  static get properties() {
    return {
      myName: {
        type: String,
        observer: 'myNameChanged'
      }
    };
  }

  myNameChanged(myName) {
    this.textContent = 'Hi! My name is ' + myName;
  }

}

customElements.define(MyPropertyNamecard.is, MyPropertyNamecard);
```

**...and have them set using declarative attributes**

```html
<!-- using the element -->
<my-property-namecard my-name="Jim"></my-property-namecard>
```

> Hi! My name is Jim

**Bind data into your element using the familiar mustache-syntax**

```html
<!-- Define template with bindings -->
<dom-module id="my-bound-namecard">
  <template>
    <div>
      Hi! My name is <span>[[myName]]</span>
    </div>
  </template>
</dom-module>
```
```js
class MyBoundNamecard extends Polymer.Element {

  static get is() { return 'my-bound-namecard'; }

  static get properties() {
    return {
      myName: String
    };
  }

}

customElements.define(MyBoundNamecard.is, MyBoundNamecard);
```

```html
<!-- using the element -->
<my-bound-namecard my-name="Josh"></my-bound-namecard>
```

> Hi! My name is Josh

**Style the internals of your element, without the style leaking out**

```html
<!-- Add style to your element -->
<dom-module id="my-styled-namecard">
  <template>
    <style>
      /* This would be crazy without webcomponents, but with shadow DOM */
      /* it only applies to this element's private "shadow DOM" */
      span {
        font-weight: bold;
      }
    </style>

    <div>
      Hi! My name is <span>{{myName}}</span>
    </div>
  </template>
</dom-module>
```
```js
class MyStyledNamecard extends Polymer.Element {

  static get is() { return 'my-styled-namecard'; }

  static get properties() {
    return {
      myName: String
    };
  }

}

customElements.define(MyStyledNamecard.is, MyStyledNamecard);
```
```html
<!-- using the element -->
<my-styled-namecard my-name="Jesse"></my-styled-namecard>
```

> Hi! My name is **Jesse**

**and so much more!**

Web components are an incredibly powerful new set of primitives baked into the web platform, and open up a whole new world of possibility when it comes to componentizing front-end code and easily creating powerful, immersive, app-like experiences on the web.

By being based on Web Components, elements built with Polymer are:

* Built from the platform up
* Self-contained
* Don't require an overarching framework - are interoperable across frameworks
* Re-usable

## Contributing

The Nils team loves contributions from the community! Take a look at our [contributing guide](CONTRIBUTING.md) for more information on how to contribute.

## Communicating with the Nils team

Beyond Github, we try to have a variety of different lines of communication available:

* [Blog](https://dspeed.eu/)


# License

The Nils library uses a Apache-2.0 license that is available [here](./LICENSE.txt)

-----------

## Goals of Nils

1. **Take advantage of native "v1" Web Components implementations across browsers.**

   The primary goal of the Nils is to take advantage of native, cross-browser support for Web Components.

   Polymer 1.x is built on top of the so-called "v0" Web Components specs, which are supported natively only in Google Chrome; using Polymer in other browsers has always required the use of polyfills.

   Beginning this fall, multiple browsers will be shipping native implementations of the new "v1" specs for Shadow DOM and Custom Elements, yielding better web components performance and reducing the need for polyfills.

   Polymer 2.0 features full support for the v1 specs, taking advantage of native browser implementations where they are available and depending on updated v1 polyfills from [webcomponentsjs](https://github.com/webcomponents/webcomponentsjs) where necessary.

   Polymer 2.0 also embraces the new ES-class-based mechanism for defining custom elements, bringing idiomatic Polymer style closer to "vanilla" custom element authoring.

1. **Provide a smooth migration path from Polymer 1.x.**

   Our second major goal is to provide as easy a transition as possible for developers who have built elements and apps with Polymer, React, DoneJS, CanJS, Vue so Nils is a sturdy bridge to the future.

   To upgrade, you will need to make some changes to your elements and apps. These changes are necessitated by both the v0-to-v1 spec transition and a handful of key improvements in Polymer itself (see our remaining goals, below).

   However, we've taken care to limit the number of changes that are strictly required and to ease the process of upgrading:

   * Before releasing Nils, we'll also provide an upgrade tool to automate as many of the changes (both required and recommended) as possible.

   * Finally, we're working on guidelines for building and testing "hybrid" elements that will run in both the original frameworks and nils. We plan to ship hybrid versions of all of the elements that we provide, easing the transition for developers who use them. Third-party element providers may also choose to ship hybrid elements.

   * If you have an especially large app or constraints that don't allow for an all-at-once upgrade, you can also use hybrid elements to migrate your app in piecewise fashion: update your elements to hybrid form, individually or in batches, while running against the old framework then cut over to Nils when all of your elements have been updated.

1. **Eliminate leaky abstractions.**

   Seamless interoperability is one of Web Components' major selling points. Generally speaking, web components "just work" anywhere you use HTML elements. To use them, you need only be aware of their public attributes, properties, methods and events; you don't need to know anything about their inner workings. This means you can easily mix standard HTML elements, third-party elements and elements you've defined yourself.

   In Nils we've found ways to eliminate these leaky abstractions without unduly compromising performance, which means that your nils-based elements will be indistinguishable from "vanilla" elements from a consumer's point of view (unless you leak implementation details of your own).


```html
<!-- Load the Polymer.Element base class -->
<link rel="import" href="bower_components/polymer/polymer-element.html">
```

```js
// Extend Polymer.Element base class
class MyElement extends Polymer.Element {
  static get is() { return 'my-element'; }
  static get properties() { return { /* properties metadata */ } }
  static get observers() { return [ /* observer descriptors */ ] }
  constructor() {
    super();
    ...
  }
  connectedCallback() {
    super.connectedCallback();
    ...
  }
  ...
}

// Register custom element definition using standard platform API
customElements.define(MyElement.is, MyElement);
```

Users can then leverage native subclassing support provided by ES6 to extend and customize existing elements defined using ES6 syntax:

```js
// Subclass existing element
class MyElementSubclass extends MyElement {
  static get is() { return 'my-element-subclass'; }
  static get properties() { return { /* properties metadata */ } }
  static get observers() { return [ /* observer descriptors */ ] }
  constructor() {
    super();
    ...
  }
  ...
}

// Register custom element definition using standard platform API
customElements.define(MyElementSubclass.is, MyElementSubclass);
```
