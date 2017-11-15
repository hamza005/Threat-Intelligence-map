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
var countryAttacksComponent = (function () {
    function countryAttacksComponent() {
    }
    countryAttacksComponent.prototype.ngOnInit = function () {
        var width = 1100, height = 580, pad = 20, left_pad = 100;
        var x = d3.scale.ordinal().rangeRoundBands([left_pad, 1050 - 50], 0.1);
        var y = d3.scale.linear().range([height - pad, 50]);
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .innerTickSize(-height)
            .outerTickSize(0)
            .tickPadding(10);
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");
        var svg = d3.select("svg")
            .attr("width", width)
            .attr("height", height);
        d3.json('histogram-hours.json', function (data) {
            data = d3.keys(data).map(function (key) {
                return {
                    bucket: Number(key),
                    N: data[key]
                };
            });
            x.domain(data.map(function (d) { return d.bucket; }));
            y.domain([0, d3.max(data, function (d) { return d.N; })]);
            svg.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(0, " + (height - pad) + ")")
                .call(xAxis);
            svg.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(" + (left_pad - pad) + ", 0)")
                .call(yAxis);
            svg.selectAll('rect')
                .data(data)
                .data(data.sort(function (a, b) { return b - a; }))
                .enter()
                .append('rect')
                .attr('class', 'bar')
                .attr('x', function (d) { return x(d.bucket); })
                .attr('width', x.rangeBand())
                .attr('y', height - pad)
                .transition()
                .delay(function (d) { return d.bucket * 20; })
                .duration(800)
                .attr('y', function (d) { return y(d.N); })
                .attr('height', function (d) { return height - pad - y(d.N); });
        });
    };
    countryAttacksComponent = __decorate([
        core_1.Component({
            selector: 'analysis',
            templateUrl: "app/analysisComponent/countryAttacks/countryAttacks.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], countryAttacksComponent);
    return countryAttacksComponent;
}());
exports.countryAttacksComponent = countryAttacksComponent;
//# sourceMappingURL=countryAttacks.component.js.map