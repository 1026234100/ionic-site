---
layout: v2_fluid/docs_base
id: faq
category: faq
title: Ionic Frequently Asked Questions
---

<h1 id="Troubleshooting">Troubleshooting Your Ionic App</h1>

Can't find a solution on this page? Check out the [Ionic Forums](http://forum.ionicframework.com), where the friendly Ions of the community will help you!

<h3 id="Blank_app">Help! My app is blank and there are no errors</h3>

- Make sure your @App has a `template` or `templateUrl`
- Make sure your @App template has an `<ion-nav></ion-nav>` with a `root` property:
```
  <ion-nav [root]="firstPage"></ion-nav>
```

<h3 id="Directive_not_working">My component/directive isn't loading!</h3>

If your custom component or directive isn't working, there are a few things you can check. Make sure:

- you include it in the `directives` array of any components whose templates contain your component or directive
- your selector doesn't have any misspellings
- you're using the selector correctly, as an attribute, element or class
- your selector has the [proper syntax](http://learnangular2.com/components/):
  - `[attr]` if it's an attribute selector
  - `element` if it's an element selector
  - `.class` if it's a class selector

```ts
@Directive({
  selector: '[my-dir]' // <-- [my-dir] because it's an attribute
})                     // Could be my-dir, [my-dir], .my-dir
class MyDir {
  constructor(){ console.log("I'm alive!"); }
}

@Page({
  template: `<div my-dir>Hello World</div>`

  // Or, depending on your directive's type
  //template: `<my-dir>Hello World</my-dir>`
  //template: `<div class="my-dir">Hello World</div>`

  directives: [MyDir] // <-- Don't forget me!
})
class MyPage {}
```

<h3 id="Angular_component">An Ionic component is not working inside my custom Angular 2 component!</h3>

To include an Ionic component in your custom Angular 2 component you must import `IONIC_DIRECTIVES` and inject those into your component by placing them in the `directives` array. You will then be able to include Ionic components in your Angular 2 component.

```ts
@Component({
  selector: 'custom-component',
  template: `
    <h1>My awesome custom component</h1>
    <ion-list>
      <ion-item>
        I am an awesome ionic component.
      </ion-item>
    </ion-list>
  `,
  directives: [IONIC_DIRECTIVES]
})
class MyComponent {

}
```

<h3 id="Angular_component">I added a click method to my div and there is a click delay on my ios device!</h3>

In general, we always recommend to only add `(click)` to elements that are normally clickable such as buttons, inputs etc, but there are times when you may need to add a `(click)` to an element that is not normally clickable such as a div. When you do this you may experience a 300ms click delay on your ios device from when you tap the element to when your click event actually fires. To fix this issue you can add the `tappable` attribute to your element. This will mark this element as clickable to Ionic so that we can remove the 300ms delay on that element just like ionic does on buttons and inputs.

```
 <div tappable (click)="doAwesome()">I am clickable!</div>
```


<h3 id="Common_mistakes">Common mistakes:</h3>

- Forgetting `()` after an annotation: `@Injectable()`, `@Optional()`, etc.

```ts
@Directive({
  selector: 'my-dir'
})
class MyDirective {
  // Wrong, should be @Optional()
  // @Optional does nothing here, so MyDirective will error if parent is undefined
  constructor(@Optional parent: ParentComponent) {}
}
```

- Adding providers to every component when you mean to have the same provider instance injected to each component (services for example).  For a class to be injectable it only needs to be in the `providers` array of that component or any parent component (for example `@App`), but not both.  Putting it in both the component that has that provider injected in addition to a parent or ancestor will create two separate provider instances. The following example illustrates the issue:

```ts
let id = 0;
class MyService {
  constructor(){ this.id = id++; }
}

@Component({
  selector: 'my-component',
  template: 'Hello World',
  providers: [MyService] // <-- Creates a new instance of MyService :(
})                       // Unnecessary because MyService is in App's providers
class MyComp {
  // id is 1, s is a different MyService instance than MyApp
  constructor(s: MyService) { console.log("MyService id is: " + s.id); }
}

@App({
  template: '<my-component></my-component>',
  providers: [MyService], // MyService only needs to be here
  directives: [MyComp]
})
class MyApp {
  // id is 0
  constructor(s: MyService) { console.log("MyService id is: " + s.id); }
}
```
Plunker: http://plnkr.co/edit/QzgR5H0r8FijHeVtv2dd

<h3 id="Common_JS_errors">Common JS errors:</h3>

`Cannot resolve all parameters for YourClass(?). Make sure they all have valid type or annotations.`

May also be preceded by `Error during instantiation of Token(Promise<ComponentRef>)` if it's on your `@App` component.

This means that Angular is confused about one or more of the parameters for YourClass's constructor.  In order to do dependency injection (DI) Angular needs to know what kind of thing it's supposed to inject.  You let Angular know by specifying the class (the type) of the parameter. Make sure:

- you are importing the parameter's class
- you have properly annotated the parameter or specified its type

```ts
import {MyService} from 'myservice'; //Don't forget to import me!

@Page({
  template: `Hello World`
})
export class MyClass {
  constructor(service: MyService){}
    /* Or if not using typescriptPackage */
  constructor(@Inject(MyService) service){}
}
```

Sometimes circular references within your code can cause this error.  Circular references mean that two objects depend on each other, and so there is no way to declare both of them before each other.  To get around this, we can use the [`forwardRef`]() function built in to Angular 2.

```ts
import {forwardRef} from 'angular2/core';

@Component({
  selector: 'my-button'
  template: `<div>
               <icon></icon>
               <input type="button" />
             </div>`
  directives: [forwardRef(() => MyIcon)] // MyIcon has not been defined yet
})                                       // forwardRef resolves as MyIcon when MyIcon is needed

@Directive({
  selector: 'icon'  
})
class MyIcon {
  constructor(containerButton: MyButton) {} // MyButton has been defined
}
```

-------

`No provider for ParamType! (MyClass -> ParamType)`

This means Angular knows what type of thing it is supposed to inject, but it doesn't know how to inject it. Make sure:

- if the parameter is a service, you have added the specified class to the list of providers available to your app


```ts
import {MyService} from 'myservice';

@App({
  templateUrl: 'app/app.html',
  providers: [MyService] // Don't forget me!
})
class MyApp {
```

If the parameter is another component or directive (for example, a parent component), adding it to your list of providers will make the error go away, but this will have the same effect as #4 of the [Common Mistakes](#Common_mistakes) above.  That is, you'll be creating a new instance of the component class (you can kind of think of it as service-ifying your component), but you aren't actually getting a reference to the component instance you want (the one from angular compiling your app).  Instead, make sure that the directive or component you expect to be injected is available to your component (e.g. that it is actually a parent if you are expecting it to be a parent). This is probably easiest understood with an example:

```ts
@Component({
  selector: 'my-comp'
  template: '<div my-dir></div>',
  directives: [forwardRef(() => MyDir)]
})
class MyComp {
  constructor(){ this.name = "My Component"; }
}

@Directive({
  selector: '[my-dir]'
})
class MyDir {
  constructor(c: MyComp) { <-- This is the line of interest

    // Errors when directive is on regular div because there is no MyComp in the
    // component tree so there is no MyComp to inject
    console.log("Host component's name: " + c.name);
  }
}

@App({
  template: "<my-comp></my-comp>" + // No error in MyDir constructor, MyComp is parent of MyDir
            "<my-comp my-dir></my-comp>" + // No error in MyDir constructor, MyComp is host of MyDir
            "<div my-dir></div>", // Errors in MyDir constructor
  directives: [MyComp, MyDir]
})
class MyApp {}
```

Here's a diagram illustrating what injectors are available:

```
                 +-------+                                         
                 |  App  |                                         
                 +---+---+                                         
                     |                                                        
       +-------------+------------+                                       
       |                          |                                       
+------+------+          +--------+--------+                      
| Div (MyDir) |          | MyComp (MyDir)  |  <- MyComp can be injected                    
+-------------+          +--------+--------+                      
       ^                          |                                       
No MyComp to inject        +------+------+
                           | Div (MyDir) | <- MyComp can be injected from parent
                           +-------------+
```


To expand on the previous example, you can use the Angular 2 `@Optional` annotation if you don't always expect a component/directive reference:

```ts
@Directive({
  selector: '[my-dir]'
})
class MyDir {
  constructor(@Optional() c: MyComp) {
    // No longer errors if c is undefined
    if (c) {
      console.log("Host component's name: " + c.name);
    }
  }
}
```

--------

`Can't bind to 'propertyName' since it isn't a known property of the 'elementName' element and there are no matching`
`directives with a corresponding property`

This one is pretty self explanatory, it happens when you try and bind a property on an element that doesn't have that property.  If the element is a component or has one or more directives on it, neither the component nor the directives have that property either.

```html
<!-- div doesn't have a 'foo' property -->
<div [foo]="bar"></div>
```
--------

`EXCEPTION: No provider for ControlContainer! (NgControlName -> ControlContainer)`

This error is a more specific version of the `No provider` error above.  It happens when you use a form control like [NgControlName](https://angular.io/docs/js/latest/api/core/NgControlName-class.html) without specifying a parent [NgForm](https://angular.io/docs/js/latest/api/core/NgForm-class.html) or [NgFormModel](https://angular.io/docs/js/latest/api/core/NgFormModel-class.html).  In most cases, this can be resolved by making sure your form control is within an actual form element.  NgForm uses `form` as a selector so this will instantiate a new NgForm:

```ts
@Page({
  template:
    '<form>' +
      '<input ng-control='login'>' +
    '</form>'
})
```
