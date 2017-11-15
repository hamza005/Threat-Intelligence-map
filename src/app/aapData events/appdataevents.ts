

import { Event } from '../events/events';
import { Sort } from '../session service/sorted';
export var EVENTS: Event[] = [];
export var SORTEDARR: Sort[] = [];

var socket = new WebSocket("ws:/115.186.176.139:8200/events/");
socket.onopen = function () {
    console.log("conection successfull!")
    socket.send("test")
}
socket.onmessage = function (event) {
        var arrydata = JSON.parse(event.data);
    EVENTS.unshift(arrydata);
    // if (EVENTS.length > 8){
    //    EVENTS = EVENTS.slice(0,8)
    // }
    
let sorting = function (obj: any) {
        let arr = [];
        for (let item in obj) {
            arr.push([item, obj[item]]);
        }
        arr.sort(function (a, b) {
            return b[1] - a[1];
        });
        return arr;

    }
    var number: any = {};

    for (let i = 0; i < EVENTS.length; i++) {
        let s = EVENTS[i];
        if (number.hasOwnProperty(s['sessionId'])) {
            number[s['sessionId']] = number[s['sessionId']] + 1;
        }
        else {
            number[s['sessionId']] = 1;
        }
    }
    
   let sorted = sorting(number)
     SORTEDARR.unshift(sorted);

}

 
  











