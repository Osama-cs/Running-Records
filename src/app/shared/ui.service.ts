import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class UIService{
    loadingStateChanged = new Subject<boolean>();

    constructor(private snackbar: MatSnackBar) {}

    showSnackbar(sbMessage, sbAction, sbDuration){
        this.snackbar.open(sbMessage, sbAction, {
            duration: sbDuration
        })
    }
}