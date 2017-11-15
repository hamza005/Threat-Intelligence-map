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
var router_1 = require('@angular/router');
var analysis_component_1 = require('../analysisComponent/analysis.component');
var query_component_1 = require('../QueryComponent/query.component');
var dashboard_component_1 = require('../dashboardComponent/dashboard.component');
var ipAttack_component_1 = require('../analysisComponent/ipAttacks/ipAttack.component');
var countryAttacks_component_1 = require('../analysisComponent/countryAttacks/countryAttacks.component');
var targetedCountry_component_1 = require('../analysisComponent/targetedCountry/targetedCountry.component');
var targetedService_component_1 = require('../analysisComponent/targetedService/targetedService.component');
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'analysis', component: analysis_component_1.AnalysisComponent },
    { path: 'query', component: query_component_1.QueryComponent },
    { path: 'ipAttack', component: ipAttack_component_1.ipAttackComponent },
    { path: 'countryAttack', component: countryAttacks_component_1.countryAttacksComponent },
    { path: 'targetedCountry', component: targetedCountry_component_1.targetedCountryComponent },
    { path: 'targetedService', component: targetedService_component_1.targetedServiceComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponent = [dashboard_component_1.DashboardComponent, analysis_component_1.AnalysisComponent, query_component_1.QueryComponent, ipAttack_component_1.ipAttackComponent, countryAttacks_component_1.countryAttacksComponent,
    targetedCountry_component_1.targetedCountryComponent, targetedService_component_1.targetedServiceComponent];
//# sourceMappingURL=routing.module.js.map