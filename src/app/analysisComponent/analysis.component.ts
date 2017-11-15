import { Component, OnInit } from '@angular/core';
import { HttpService } from '../httpService/http.service';

declare const Datamap: any;
declare const d3: any;

@Component({
    selector: 'analysis',
    templateUrl: `app/analysisComponent/analysis.component.html`,
    styleUrls:['/node_modules/bootstrap/dist/css/bootstrap.min.css'],
    providers: [HttpService]
})

export class AnalysisComponent implements OnInit {

    constructor(private _httpservice: HttpService) { }

    ngOnInit() {
    
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
                popupOnHover : false,
                highlightFillColor: '#87ceeb',
                highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
                highlightBorderWidth: 1,
            },


        });
}
}

