import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {OtherComponent} from './other/other.component';
import {AnotherComponent} from './other/another.component';
import {PropertyBindingComponent} from './other/property-binding.component';
import {DatabindingComponent} from './databinding/databinding.component';
import {EventBindingComponent} from './databinding/event-binding.component';
import {TwoBindingComponent} from './databinding/two-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    PropertyBindingComponent,
    DatabindingComponent,
    EventBindingComponent,
    TwoBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
