import {Action} from "@ngrx/store"

export function counterReducer(state: number = 0, action: Action) {
    console.log("received state " + state)
    switch (action.type) {
        case "increment":
            return ++state;
        case "decrement":
            return --state;
        case "reset":
            return 0;
    }

}
