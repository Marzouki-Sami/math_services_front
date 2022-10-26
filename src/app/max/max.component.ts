import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ServicesService} from "../services/services.service";

@Component({
  selector: 'app-max',
  templateUrl: './max.component.html',
  styleUrls: ['./max.component.css']
})
export class MaxComponent implements OnInit {

  maxForm:any
  result:string = "";
  start:any
  end:any
  response:any

  constructor(private math:ServicesService, private  builder:FormBuilder) {
    this.maxForm = this.builder.group({
      x:['',Validators.required],
      y:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  calcul(){
    this.math.max(this.maxForm.value.x,this.maxForm.value.y).subscribe(response=>{
      this.response = response.toString();
      this.start = this.response.indexOf("Result>");
      this.end = this.response.indexOf("</tns:maxResult");
      this.result = this.response.substring(this.start+8,this.end);
    });
  }
}
