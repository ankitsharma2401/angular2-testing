"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var contact_list_component_1 = require('./contacts/contact-list.component');
var new_contact_component_1 = require('./contacts/new-contact.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_test_component_1 = require('./http-test.component');
var child_component_1 = require('./child.component');
var component1_component_1 = require('./component1.component');
var component2_component_1 = require('./component2.component');
var jquery_component_1 = require('./jquery.component');
var AppComponent = (function () {
    function AppComponent() {
        this.date = new Date();
        this.randomData = new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve('Random data!'); }, 1000);
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>My First Angular 2 App</h1>\n  <header>\n    <nav>\n      <a [routerLink]=\"['Contacts']\">Contacts</a>\n      <a [routerLink]=\"['NewContact']\">New Contacts</a>\n    </nav>\n  </header>\n  \n  <div class=\"main\">\n    <router-outlet></router-outlet>\n    <http-test></http-test>\n    <div class=\"pipes\">\n      <h2>Date Pipes</h2>\n      <div>\n        {{date | date:'fullDate'}}\n      </div>\n      <h2>Number Pipes</h2>\n      <div>\n        {{4.566 | number:'1.4-4'}}\n      </div>\n      <h2>Currency Pipes</h2>\n      <div>\n        {{15.99 | currency:'USD':true:'1.4-4'}}\n      </div>\n      <h2>Stateful Pipes</h2>\n      <div>\n        {{randomData | async}}\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"parent\">\n    <h1>Parent</h1>\n    <p>Value entered in child component:{{childValue}}</p>\n    <input type=\"text\" #parentInput \n    (keyup)=\"0\"><br>\n    \n    <div class=\"child\">\n      <child [passedValue]=\"parentInput.value\"\n      (childChanged)=\"childValue=$event\"></child>\n    </div>\n  </div>\n  \n  <section class=\"component\">\n    <my-component-1></my-component-1>\n    \n  </section>\n  <section class=\"component\">\n    <my-component-2></my-component-2>\n   \n  </section><br>\n  <my-jquery></my-jquery>\n  \n  <div class=\"flex\">\n    <div id=\"set-user\" class=\"container\">\n      <h2>Set a user</h2>\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n        <div>\n          <label for=\"first-name\">First Name</label>\n          <input type=\"text\" ngControl=\"firstName\">\n        </div>\n        <div>\n          <label for=\"last-name\">Last Name</label>\n          <input type=\"text\" ngControl=\"lastName\">\n        </div>\n        <button type=\"submit\">Submit</button>\n      </form>\n    </div>\n    <div id=\"get-user\" class=\"container\">\n      <h2>Get User</h2>\n      <button (click)=\"onGetUser()\">Get User</button>\n    </div>\n  </div>\n  <div class=\"container\" id=\"response\">Response: {{response}}</div>\n  ",
            directives: [contact_list_component_1.ContactListComponent, http_test_component_1.HttpTestComponent,
                router_deprecated_1.ROUTER_DIRECTIVES, child_component_1.ChildComponent, component1_component_1.Component1Component,
                component2_component_1.Component2Component, jquery_component_1.jQueryComponent]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/contacts', name: 'Contacts', component: contact_list_component_1.ContactListComponent, useAsDefault: true },
            { path: '/newcontact', name: 'NewContact', component: new_contact_component_1.NewContactComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map