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
var http_service_1 = require("../http.service");
var router_1 = require("@angular/router");
var DanceComponent = (function () {
    function DanceComponent(httpService, activatedRoute) {
        this.httpService = httpService;
        this.activatedRoute = activatedRoute;
        this.id = activatedRoute.snapshot.params['id'];
        this.item = { 'fullurl': 'url', 'start_date': 'date' };
    }
    DanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getDance(this.id).subscribe(function (data) { console.log(data.result); _this.item = data.result; });
    };
    DanceComponent.prototype.sendComment = function (text) {
    };
    return DanceComponent;
}());
DanceComponent = __decorate([
    core_1.Component({
        selector: 'dance',
        templateUrl: "app/dance/dance.component.html",
        styleUrls: ["app/style/main.css"],
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute])
], DanceComponent);
exports.DanceComponent = DanceComponent;
//# sourceMappingURL=dance.component.js.map