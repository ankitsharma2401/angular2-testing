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
var contact_service_1 = require('./contact.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var NewContactComponent = (function () {
    function NewContactComponent(contactService, router, routeParams, formBuilder) {
        this.contactService = contactService;
        this.router = router;
        this.routeParams = routeParams;
        this.formBuilder = formBuilder;
    }
    // onAddCreate(firstName,lastName,phone,email){
    //     let contact={firstName:firstName,lastName:lastName,contactNo:phone,email:email};
    //     this.contactService.insertContact(contact);
    //     this.router.navigate(['Contacts']);
    // }
    NewContactComponent.prototype.onSubmit = function (value) {
        this.contactService.insertContact(value);
        this.router.navigate(['Contacts']);
    };
    NewContactComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            firstName: ['', common_1.Validators.required],
            lastName: [this.routeParams.get('lastName'), common_1.Validators.required],
            contactNo: ['', common_1.Validators.required],
            email: ['', common_1.Validators.required]
        });
    };
    NewContactComponent = __decorate([
        core_1.Component({
            template: "\n           <form  [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n            <div>\n                <label for=\"first-name\">First Name:</label>\n                <input type=\"text\" id=\"first-name\"\n                [ngFormControl]=\"myForm.controls['firstName']\"\n                #firstName=\"ngForm\"\n                />\n                <span *ngIf=\"!firstName.valid\">Not valid</span>\n            </div>\n            \n             <div>\n                <label for=\"last-name\">Last Name:</label>\n                <input  type=\"text\" id=\"last-name\"\n                [ngFormControl]=\"myForm.controls['lastName']\"\n                />\n            </div>\n            <div>\n                <label for=\"phone\">Contact No:</label>\n                <input  type=\"text\" id=\"phone\"\n                [ngFormControl]=\"myForm.controls['contactNo']\"\n                />\n            </div>\n            <div>\n                <label for=\"email\">EmailId:</label>\n                <input  type=\"text\" id=\"email\"\n                [ngFormControl]=\"myForm.controls['email']\"\n                />\n            </div>           \n            <button type=\"submit\" [disabled]=\"!myForm.valid\">Create New Contact</button>\n   </form>\n    ",
            providers: [contact_service_1.ContactService],
            styles: ["\n        label{\n            display:inline-block;\n            width:140px;\n        }\n        input{\n            width:250px;\n        }\n        .ng-invalid{\n            border:1px solid red;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService, router_deprecated_1.Router, router_deprecated_1.RouteParams, common_1.FormBuilder])
    ], NewContactComponent);
    return NewContactComponent;
}());
exports.NewContactComponent = NewContactComponent;
//# sourceMappingURL=new-contact.component.js.map