import { Component } from "@angular/core";
@Component({
    selector:"child",
    templateUrl:"./child.component.html"
})
export class childComponent{
    public var_one:string = "Message From Child Component...!";
    public var_two:string = "Marquee Text From Child Component...!";
};