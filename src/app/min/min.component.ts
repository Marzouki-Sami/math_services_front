import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ServicesService} from "../services/services.service";

@Component({
  selector: 'app-min',
  templateUrl: './min.component.html',
  styleUrls: ['./min.component.css']
})
export class MinComponent implements OnInit {

  minForm:any
  result:string = "";
  start:any
  end:any
  response:any
  constructor(private math:ServicesService, private  builder:FormBuilder) {
    this.minForm = this.builder.group({
      x:['',Validators.required],
      y:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  calcul(){
    this.math.min(this.minForm.value.x,this.minForm.value.y).subscribe(response=>{
      this.response = response.toString();
      this.start = this.response.indexOf("Result>");
      this.end = this.response.indexOf("</tns:maxResult");
      this.result = this.response.substring(this.start+8,this.end);
    });
  }
}
