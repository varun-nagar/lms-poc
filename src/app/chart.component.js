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
var ChartOptions_1 = require("./interface/ChartOptions");
var ChartComponent = (function () {
    function ChartComponent() {
    }
    return ChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", ChartOptions_1.ChartOptions)
], ChartComponent.prototype, "options", void 0);
ChartComponent = __decorate([
    core_1.Component({
        selector: 'chart',
        template: "{{options.type}}",
        styles: ["\n     .chart rect {\n        fill: steelblue;\n     }\n    .chart text {\n        fill: white;\n        font: 10px sans-serif;\n        text-anchor: middle;\n    }\n"]
    }),
    __metadata("design:paramtypes", [])
], ChartComponent);
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map