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
var sortedsession_service_1 = require('../session service/sortedsession.service');
var appdata_service_1 = require('../appData service/appdata.service');
var DashboardComponent = (function () {
    function DashboardComponent(eventService, sessionservice) {
        this.eventService = eventService;
        this.sessionservice = sessionservice;
    }
    DashboardComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEvents().then(function (abc) { return _this.events = abc; });
        console.log();
    };
    DashboardComponent.prototype.getsorts = function () {
        var _this = this;
        this.sessionservice.getsorts().then(function (sorted) { return _this.sorted = sorted; });
        console.log();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        new rotatingGlobe();
        var data;
        var name;
        var arcs = [];
        var arraydata = [];
        var count = 0;
        this.getEvents();
        this.getsorts();
        var exampleSocket = new WebSocket("ws:/115.186.176.139:8200/events/");
        exampleSocket.onopen = function () {
            exampleSocket.send("test");
        };
        exampleSocket.onmessage = function (event) {
            data = JSON.parse(event.data);
            counter(data);
            if (data.eventType === "Session" && data.status === "opened") {
                marshaling(data);
            }
            bubbles(data);
            bubble(data);
        };
        function counter(data) {
            for (var i = 0; i <= arraydata.length; i++) {
                count++;
            }
            d3.select("#total_attacks")
                .html("<strong>0</strong><span>" + count + "</span>");
            console.log(count);
            return count;
        }
        var election = new Datamap({
            scope: 'world',
            element: document.getElementById('container'),
            done: function (datamap) {
                //     datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
                //         name = geography.properties.name;
                //         alert(name);
                //         console.log(name);
                //     });
                // },
                //function (datamap) {
                datamap.svg.call(d3.behavior.zoom().on("zoom", redraw));
                function redraw() {
                    datamap.svg.selectAll("g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
                }
            },
            fills: { defaultFill: 'black', },
            filters: {
                'dropShadow': 'url(#dropShadow)',
                'bigShadow': 'url(#bigShadow)'
            },
            geographyConfig: {
                dataUrl: null,
                hideAntarctica: true,
                borderWidth: 1,
                responsive: true,
                borderColor: 'rgb(67, 147, 195)',
                borderOpacity: 5,
                popupOnHover: true,
                highlightOnHover: true,
                highlightFillColor: '#87ceeb',
                highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
                highlightBorderWidth: 1,
            },
            bubblesConfig: {
                borderWidth: 3,
                borderOpacity: 1,
                borderColor: '7FFF00',
                popupOnHover: true,
                fillOpacity: 1,
                exitDelay: 2000,
                animate: true,
                highlightOnHover: true,
                highlightFillColor: '#FC8D59',
                highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
                highlightBorderWidth: 2,
                highlightBorderOpacity: 1,
                highlightFillOpacity: 0.85,
            },
            arcConfig: {
                exitDelay: 2000,
                strokeColor: '#7FFF00',
                strokeWidth: 3,
                arcSharpness: 1,
                popupOnHover: true,
                animationSpeed: 1000,
            }
        });
        var marshaling = function (data) {
            arcs.push({
                origin: {
                    latitude: data.src.lat,
                    longitude: data.src.lng
                },
                destination: {
                    latitude: data.dst.lat,
                    longitude: data.dst.lng,
                },
            });
            election.arc(arcs);
        };
        var bubble = function (data) {
            //previous bubbles will wait 1000 ms before being removed
            election.bubbles([{
                    name: data.dst.country,
                    radius: 5,
                    latitude: data.dst.lat,
                    longitude: data.dst.lng
                }
            ]);
        };
        election.addPlugin('pins', function (layer, data, options) {
            var self = this, fillData = this.options.fills, svg = this.svg;
            if (!data || (data && !data.slice)) {
                throw "Datamaps Error - bubbles must be an array";
            }
            var bubbles = layer.selectAll('image.datamaps-pins').data(data, JSON.stringify);
            bubbles
                .enter()
                .append('image')
                .attr('class', 'datamaps-pin')
                .attr('xlink:href', 'https://2017.london.wordcamp.org/files/2017/01/KS-Logo-Yellow-300x300.png')
                .attr('height', 20)
                .attr('width', 20)
                .attr('x', function (datum) {
                var latLng;
                if (datumHasCoords(datum)) {
                    latLng = self.latLngToXY(datum.latitude, datum.longitude);
                }
                else if (datum.centered) {
                    latLng = self.path.centroid(svg.select('path.' + datum.centered).data()[0]);
                }
                if (latLng)
                    return latLng[0];
            })
                .attr('y', function (datum) {
                var latLng;
                if (datumHasCoords(datum)) {
                    latLng = self.latLngToXY(datum.latitude, datum.longitude);
                }
                else if (datum.centered) {
                    latLng = self.path.centroid(svg.select('path.' + datum.centered).data()[0]);
                }
                if (latLng)
                    return latLng[1];
                ;
            })
                .on('mouseover', function (datum) {
                var $this = d3.select(this);
                if (options.popupOnHover) {
                    self.updatePopup($this, datum, options, svg);
                }
            });
            bubbles.exit()
                .transition()
                .delay(options.exitDelay)
                .attr("height", 0)
                .remove();
            function datumHasCoords(datum) {
                return typeof datum !== 'undefined' && typeof datum.latitude !== 'undefined' && typeof datum.longitude !== 'undefined';
            }
        });
        var bubbles = function (data) {
            election.pins([
                { name: data.src.country, latitude: data.src.lat + 2.5, longitude: data.src.lng - 2.5, radius: 5 },
            ], {
                popupOnHover: true,
                popupTemplate: function (data) {
                    return "<div class='hoverinfo'>" + data.name + "</div>";
                }
            });
        };
    };
    DashboardComponent.prototype.refresh = function () {
        window.location.reload();
    };
    DashboardComponent.prototype.full = function () {
        new open();
    };
    DashboardComponent.prototype.closeNav = function () {
        new close();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: "app/dashboardComponent/dashboard.component.html",
            styleUrls: ['app/dashboardComponent/dashboard.component.css'],
            providers: [appdata_service_1.EventService, sortedsession_service_1.SessionService]
        }), 
        __metadata('design:paramtypes', [appdata_service_1.EventService, sortedsession_service_1.SessionService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map