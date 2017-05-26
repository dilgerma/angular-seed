import {
    Component, AfterViewInit, OnInit, Inject, Output, NgZone
} from "@angular/core";
import {HttpModule, Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Component({
    selector: 'app',
    templateUrl: 'src/main/typescript/components/app-component.html',
})
export class AppComponent implements OnInit, AfterViewInit {

    constructor(private ngZone: NgZone) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

}
