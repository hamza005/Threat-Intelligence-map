import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AppRoutingModule} from './routing module/routing.module';
import { routingComponent} from './routing module/routing.module'; 
@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule ],
  declarations: [ AppComponent, routingComponent],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
