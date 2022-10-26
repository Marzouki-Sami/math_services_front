import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../services/services.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-sin',
  templateUrl: './sin.component.html',
  styleUrls: ['./sin.component.css']
})
export class SinComponent implements OnInit {

  result:string = "";
  sinForm:any
  start:any
  end:any
  response:any
  constructor(private math:ServicesService, private builder:FormBuilder) {
    this.sinForm = this.builder.group({
      x: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  calcul(){
    this.math.sin(this.sinForm.value.x).subscribe(response => {
      this.response = response.toString();
      this.start = this.response.indexOf("result");
      this.end = this.response.indexOf("</tns:result");
      this.result = this.response.substring(this.start+8, this.end);
    });
  }
}
