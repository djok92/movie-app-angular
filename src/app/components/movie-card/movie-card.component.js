"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var MovieCardComponent = /** @class */ (function () {
    function MovieCardComponent() {
    }
    MovieCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], MovieCardComponent.prototype, "img");
    __decorate([
        core_1.Input()
    ], MovieCardComponent.prototype, "title");
    __decorate([
        core_1.Input()
    ], MovieCardComponent.prototype, "desc");
    __decorate([
        core_1.Input()
    ], MovieCardComponent.prototype, "actors");
    __decorate([
        core_1.Input()
    ], MovieCardComponent.prototype, "director");
    __decorate([
        core_1.Input()
    ], MovieCardComponent.prototype, "rating");
    __decorate([
        core_1.Input()
    ], MovieCardComponent.prototype, "id");
    MovieCardComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-card',
            templateUrl: './movie-card.component.html',
            styleUrls: ['./movie-card.component.css']
        })
    ], MovieCardComponent);
    return MovieCardComponent;
}());
exports.MovieCardComponent = MovieCardComponent;
