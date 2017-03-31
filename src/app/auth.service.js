"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.isValidUser = function (user) {
        var flag = false;
        if (user.email === 'varunsingh.nagar@globallogic.com' && user.password === '1234') {
            flag = true;
        }
        return Promise.resolve(flag);
    };
    AuthService.prototype.isSessionActive = function () {
        return (localStorage.getItem('token')) ? true : false;
    };
    AuthService.prototype.createUserSession = function (user) {
        localStorage.setItem('token', 'varunsingh.nagar@globallogic.com1234');
    };
    AuthService.prototype.removeUserSession = function () {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map