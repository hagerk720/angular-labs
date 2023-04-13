import { Component } from "@angular/core";

@Component({
    selector: "app-first",
    templateUrl : "./first.component.html",
    styleUrls : ["./first.component.css"]
})
export class FirstComponent {
    words = "" ;
    getValue(e :any){
        this.words = e.target.value;
    }
    reset(){
        this.words = "" ;
    }
}