/*
    - ViewChild is the Decorator
    - ViewChild decorator used to get the Reference of One Component to
      Another Component

    - ElementRef is the Predefined Class
    - ElementRef class used to manipulate the DOM

    - ViewChild() Decorator have the capability to Manipulate the DOM

    - if we have more than one Child Occurance only first occurance Reflected
      by ViewChild() Decorator

    - in order to overcome above limitation we will choose ViewChildren() 
*/

import { Component,ViewChild, ElementRef } from "@angular/core";
import { childComponent } from "./child.component";
@Component({
    selector:"parent",
    templateUrl:"./parent.component.html"
})
export class parentComponent{
    @ViewChild(childComponent)
    private _child:childComponent;

    @ViewChild("fname")
    private fname:ElementRef;
  
    @ViewChild("lname")
    private lname:ElementRef;


    public clickMe():any{
        this._child.var_one = "Message From Parent Component...!";
        this._child.var_two = "Marquee Text From Parent Component...!";
        
        this.fname.nativeElement.style.backgroundColor="green";
        this.fname.nativeElement.style.color="red";


        this.lname.nativeElement.style.backgroundColor = "red";
        this.lname.nativeElement.style.color="green"
    };
};