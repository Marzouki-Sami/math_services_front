import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ServicesService} from "../services/services.service";

@Component({
  selector: 'app-cos',
  templateUrl: './cos.component.html',
  styleUrls: ['./cos.component.css']
})
export class CosComponent implements OnInit {

  result:string = "";
  cosForm:any
  start:any
  end:any
  response:any

  constructor(private math:ServicesService, private builder:FormBuilder) {
    this.cosForm = this.builder.group({
      x: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  calcul(){
    this.math.cos(this.cosForm.value.x).subscribe(response => {
      this.response = response.toString();
      this.start = this.response.indexOf("<tns:cosResult");
      this.end = this.response.indexOf("</tns:cosResult");
      this.result = this.response.substring(this.start+15, this.end)
    })
  }

}
