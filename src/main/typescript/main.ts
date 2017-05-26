"use strict";

import * as $ from "jquery";
(<any>global)['jQuery'] = $;

import "es6-shim";
import "zone.js";
import "reflect-metadata";
import "rxjs/Rx";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./components/app-component";
import {DescriptionComponent} from "./components/description/descriptionComponent";
import {FormsModule} from "@angular/forms";

var jQuery = require('jquery');
require('bootstrap-sass');
jQuery.noConflict(true);

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent, DescriptionComponent],
    bootstrap: [AppComponent],
    providers: [{provide: 'Window', useValue: window}],
})
class AppModule {
}

document.addEventListener('DOMContentLoaded', function () {
    platformBrowserDynamic()
        .bootstrapModule(AppModule);
});
