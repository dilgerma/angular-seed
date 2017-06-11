"use strict";

import * as $ from "jquery";
(<any>global)['jQuery'] = $;

import "es6-shim";
import "rxjs/Rx";
import "reflect-metadata";
import "zone.js";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./components/app-component";
import {DescriptionComponent} from "./components/description/descriptionComponent";
import {FormsModule} from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import {counterReducer} from "./app/reducer/CounterReducer";
import {CounterComponent} from "./components/counter/CounterComponent";
import {AppState} from "./app/state/AppState";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



var jQuery = require('jquery');
require('bootstrap-sass');
jQuery.noConflict(true);

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, StoreModule.provideStore({counter:counterReducer}),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
          maxAge: 5
        })],
    declarations: [AppComponent, DescriptionComponent, CounterComponent],
    bootstrap: [AppComponent],
    providers: [{provide: 'Window', useValue: window}],
})
class AppModule {
}

document.addEventListener('DOMContentLoaded', function () {
    platformBrowserDynamic()
        .bootstrapModule(AppModule);
});
