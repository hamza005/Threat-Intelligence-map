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
var QueryComponent = (function () {
    function QueryComponent(_httpservice) {
        this._httpservice = _httpservice;
        this.rules_basic = {
            condition: 'AND',
            rules: [{
                    id: 'price',
                    operator: 'less',
                    value: 10.25
                }]
        };
    }
    QueryComponent.prototype.getData = function () {
        var _this = this;
        this._httpservice.getdata()
            .subscribe(function (responseData) { return _this.mydata = responseData.hits.hits; }, function (error) { return alert(error); }, function () {
            console.log("Finsished");
            console.log(_this.mydata);
        });
        var arr = [];
        for (var item in this.mydata) {
            arr.push([item, this.mydata[item]]);
        }
        for (var i = 0; i <= arr.length; i++) {
            console.log(arr[i]);
        }
    };
    QueryComponent.prototype.ngAfterViewInit = function () {
        this.getQueryBuilder();
    };
    QueryComponent.prototype.getQueryBuilder = function () {
        $('#builder').queryBuilder({
            plugins: ['bt-tooltip-errors'],
            filters: [{
                    id: 'attackType',
                    label: 'Attack Type',
                    type: 'string'
                }, {
                    id: 'service',
                    label: 'Service',
                    type: 'integer',
                    input: 'select',
                    values: {
                        1: 'SSH',
                        2: 'HTTP',
                        3: 'FTP',
                        4: 'SIP',
                        5: 'SMB',
                        6: 'Telnet'
                    },
                    operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null']
                }, {
                    id: 'in_stock',
                    label: 'In stock',
                    type: 'integer',
                    input: 'radio',
                    values: {
                        1: 'Yes',
                        0: 'No'
                    },
                    operators: ['equal']
                }, {
                    id: 'price',
                    label: 'Price',
                    type: 'double',
                    validation: {
                        min: 0,
                        step: 0.01
                    }
                }, {
                    id: 'id',
                    label: 'Identifier',
                    type: 'string',
                    placeholder: '____-____-____',
                    operators: ['equal', 'not_equal'],
                    validation: {
                        format: /^.{4}-.{4}-.{4}$/
                    }
                }],
            rules: this.rules_basic
        });
        /****************************************************************
                                Triggers and Changers QueryBuilder
     *****************************************************************/
        $('#btn-get').on('click', function () {
            var result = $('#builder').queryBuilder('getRules');
            if (!$.isEmptyObject(result)) {
                alert(JSON.stringify(result, null, 2));
            }
            else {
                console.log("invalid object :");
            }
            console.log(result);
            console.log(JSON.parse(result));
        });
        $('#btn-reset').on('click', function () {
            $('#builder').queryBuilder('reset');
        });
        $('#btn-set').on('click', function () {
            //$('#builder').queryBuilder('setRules', rules_basic);
            var result = $('#builder').queryBuilder('getRules');
            if (!$.isEmptyObject(result)) {
                this.rules_basic = result;
            }
        });
        //When rules changed :
        $('#builder').on('getRules.queryBuilder.filter', function (e) {
            //$log.info(e.value);
        });
    };
    QueryComponent = __decorate([
        core_1.Component({
            selector: 'query',
            templateUrl: "app/QueryComponent/query.component.html",
            styleUrls: ['/node_modules/bootstrap/dist/css/bootstrap.min.css'],
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], QueryComponent);
    return QueryComponent;
}());
exports.QueryComponent = QueryComponent;
//# sourceMappingURL=query.component.js.map