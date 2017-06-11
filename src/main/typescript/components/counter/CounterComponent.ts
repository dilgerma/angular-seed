import {ChangeDetectionStrategy, Component} from "@angular/core";
import {Store} from '@ngrx/store';
import {AppState} from "../../app/state/AppState";
import {Observable} from "rxjs";

@Component({
    templateUrl: "src/main/typescript/components/counter/CounterComponent.html",
    selector: "counter"
})
export class CounterComponent {

    counter$: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.counter$ = store.select('counter');
    }

    increment() {
        this.store.dispatch({type: "increment"});
    }

    decrement() {
        this.store.dispatch({type: "decrement"});
    }

    reset() {
        this.store.dispatch({type: "reset"});
    }

}