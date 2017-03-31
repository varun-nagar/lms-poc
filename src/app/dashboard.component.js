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
var auth_service_1 = require("./auth.service");
var router_1 = require("@angular/router");
var DashboardComponent = (function () {
    function DashboardComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = 'Welcome To LMS Dashboard';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (!this.authService.isSessionActive()) {
            this.router.navigate(['login']);
        }
    };
    DashboardComponent.prototype.signOut = function () {
        this.authService.removeUserSession();
        this.router.navigate(['login']);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        template: "\n    <div class=\"col-lg-6 col-lg-offset-3\">\n        <h1>\n            {{title}}\n        </h1>\n        <div class=\"btn btn-primary\" (click)=\"signOut()\" >sign out</div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map