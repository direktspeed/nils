import '../polymer/polymer.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';
import { NilsRouteBehavior } from './nils-route-behavior.js';

Polymer({
  _template: `
      <style>
        :host {
          display: block;
        }
        :host > ::slotted(:not(.nils-route-selected)) {
          display: none !important;
        }
      </style>
      <slot></slot>`,

  is: 'nils-route',

  behaviors: [
    NilsRouteBehavior
  ]

});
