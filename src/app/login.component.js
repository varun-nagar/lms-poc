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
var core_1 = require("@angular/core");
var User_1 = require("./User");
var auth_service_1 = require("./auth.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.err = '';
        this.user = new User_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isSessionActive()) {
            this.router.navigate(['dashboard']);
        }
    };
    LoginComponent.prototype.validateUser = function (event) {
        var _this = this;
        event.preventDefault();
        if ((this.user.email !== undefined && this.user.email !== '') && (this.user.password !== undefined && this.user.password !== '')) {
            this.authService.isValidUser(this.user).then(function (validated) {
                if (validated) {
                    // navigate to welcome dashboard.
                    _this.authService.createUserSession(_this.user);
                    _this.router.navigate(['dashboard']);
                }
                else {
                    // show error message.
                    _this.showError('not a valid user.');
                }
            });
        }
        else {
            // show error message.            
            this.showError('please provide user credentials.');
        }
    };
    LoginComponent.prototype.showError = function (msg) {
        this.err = msg;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        templateUrl: "./login.component.html",
    }),
    __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map