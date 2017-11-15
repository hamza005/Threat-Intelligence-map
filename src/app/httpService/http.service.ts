import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class HttpService{
    constructor(private _http: Http){}
    getdata(){
        return this._http.get('http://localhost:9200/user/profile/_search')
        .map(res=> res.json())
        .catch(this._errorHandler);    
  }
  _errorHandler(error: Response){
      console.error(error);
return Observable.throw(error || "Server Error");
  }
}