import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpService } from '../httpService/http.service';
declare var QueryBuilder: any;
declare const d3: any;
declare var $: any;
@Component({
  selector: 'query',
  templateUrl: `app/QueryComponent/query.component.html`,
  styleUrls: ['/node_modules/bootstrap/dist/css/bootstrap.min.css'],
  providers: [HttpService]
})

export class QueryComponent implements AfterViewInit {
  mydata: any;
  errorMsg: string;
  constructor(private _httpservice: HttpService) { }

  getData() {
    this._httpservice.getdata()
      .subscribe(
      responseData => this.mydata = responseData.hits.hits,
      error => alert(error),
      () => {
        console.log("Finsished");
        console.log(this.mydata);
      }
      );
    let arr = [];
    for(let item in this.mydata){
      arr.push([item, this.mydata[item]]);
    }
    for (let i=0; i<=arr.length; i++){
      console.log(arr[i]);
    }
  }
    
    



  protected rules_basic = {

    condition: 'AND',
    rules: [{
      id: 'price',
      operator: 'less',
      value: 10.25
    }]
  };

  ngAfterViewInit() {
    this.getQueryBuilder();
  }

  private getQueryBuilder() {

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

  }
}

