# Directive

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Application link:

http://abhisheksaini.eu/projects/directive/

## 2 types:

1. Attribute: They look like a normal HTML attribute (possibly with data binding or event binding). They only affect/change the property of the element they are added on. Example: [ngClass], [ngStyle].

2. Structural: They look like a normal HTML attribute but have a leading * (for desugaring). They affect the whole area in the DOM (elements get added/or removed). Example: *ngFor, *ngIf.

## *ngFor:

It’s point is to repeat a given HTML template once for each value in an array, each time passing it the array value as context for string interpolation or binding.

The syntax is *ngFor="let <value> of <collection>".

<value> is a variable name of your choosing, <collection> is a property on your component which holds a collection, usually an array but anything that can be iterated over in a for-of loop.

Sometimes we also want to get the index of the item in the array we are iterating over.

We can do this by adding another variable to our *ngFor expression and making it equal to index, like this:
<li *ngFor="let number of evenNumber; let i = index">
    {{ i + 1 }} - {{ number }}
</li>

## *ngIf:

This directive is used when you want to display or remove an element based on a condition. If the condition is false the element the directive is attached to will be removed from the DOM.

We define the condition by passing an expression to the directive which is evaluated in the context of it’s host component.

The syntax is: *ngIf="<condition>"

## Note:

We can’t have two structural directives, directives starting with a *, attached on the same element.

## [ngStyle]

It lets us set a given DOM elements style properties.

The syntax is: [ngStyle]="{'color':'blue'}"

This sets the element color to blue.

## [ngClass]

It allows us to set the CSS class dynamically for a DOM element.

## Creating Basic Attribute directive

In this, we have created the attribute directive manually. We are getting the access of the element by using "ElementRef" on which it is placed and overwriting the style of that element.

## Renderer2

It is an abstraction provided by Angular in the form of a service that allows to manipulate elements of our app without having to touch the DOM directly. This is the recommended approach because it then makes it easier to develop apps that can be rendered in environments that don’t have DOM access, like on the server, in a web worker or on native mobile.

More about Renderer2: https://angular.io/api/core/Renderer2

## OppositeNgifDirectiveDirective

"@Input()" is used for getting the condition as input. "set" is used to implement as method. "TemplateRef" is to get the access of the template. "ViewContainerRef" is to where it is placed.

## [ngSwitch]

This directive allows us to render different elements depending on a given condition. With NgIf we can conditionally add or remove an element from the DOM. If we are faced with multiple conditions a cleaner alternative to multiple nested NgIf statements is the NgSwitch series of directives.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
