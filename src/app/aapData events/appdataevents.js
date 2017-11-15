"use strict";
exports.EVENTS = [];
exports.SORTEDARR = [];
var socket = new WebSocket("ws:/115.186.176.139:8200/events/");
socket.onopen = function () {
    console.log("conection successfull!");
    socket.send("test");
};
socket.onmessage = function (event) {
    var arrydata = JSON.parse(event.data);
    exports.EVENTS.unshift(arrydata);
    // if (EVENTS.length > 8){
    //    EVENTS = EVENTS.slice(0,8)
    // }
    var sorting = function (obj) {
        var arr = [];
        for (var item in obj) {
            arr.push([item, obj[item]]);
        }
        arr.sort(function (a, b) {
            return b[1] - a[1];
        });
        return arr;
    };
    var number = {};
    for (var i = 0; i < exports.EVENTS.length; i++) {
        var s = exports.EVENTS[i];
        if (number.hasOwnProperty(s['sessionId'])) {
            number[s['sessionId']] = number[s['sessionId']] + 1;
        }
        else {
            number[s['sessionId']] = 1;
        }
    }
    var sorted = sorting(number);
    exports.SORTEDARR.unshift(sorted);
};
//# sourceMappingURL=appdataevents.js.map