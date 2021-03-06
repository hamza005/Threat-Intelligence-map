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
var http_service_1 = require('../httpService/http.service');
var AnalysisComponent = (function () {
    function AnalysisComponent(_httpservice) {
        this._httpservice = _httpservice;
    }
    AnalysisComponent.prototype.ngOnInit = function () {
        var election = new Datamap({
            scope: 'world',
            element: document.getElementById('map'),
            fills: { defaultFill: 'pink', },
            geographyConfig: {
                dataUrl: null,
                hideAntarctica: true,
                borderWidth: 1,
                responsive: true,
                borderColor: 'white',
                borderOpacity: 5,
                highlightOnHover: true,
                popupOnHover: false,
                highlightFillColor: '#87ceeb',
                highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
                highlightBorderWidth: 1,
            },
        });
    };
    AnalysisComponent = __decorate([
        core_1.Component({
            selector: 'analysis',
            templateUrl: "app/analysisComponent/analysis.component.html",
            styleUrls: ['/node_modules/bootstrap/dist/css/bootstrap.min.css'],
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], AnalysisComponent);
    return AnalysisComponent;
}());
exports.AnalysisComponent = AnalysisComponent;
//# sourceMappingURL=analysis.component.js.map