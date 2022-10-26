import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  cos(x:number){

    const header = new  HttpHeaders({'content-Type' : 'application/xml'});
    const str = `<x:Envelope
    xmlns:x="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:mat="math.isg.tn">
    <x:Header/>
    <x:Body>
        <mat:cos>
            <mat:a>${x}</mat:a>
        </mat:cos>
    </x:Body>
</x:Envelope>`;

    return this.http.post('http://127.0.0.1:8000/maths/?wsdl',str,{headers: header, responseType: "text"});
  }

  sin(x:number){

    const header = new  HttpHeaders({'content-Type' : 'application/xml'});
    const str = `<x:Envelope
    xmlns:x="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:mat="math.isg.tn">
    <x:Header/>
    <x:Body>
        <mat:sin>
            <mat:a>${x}</mat:a>
        </mat:sin>
    </x:Body>
</x:Envelope>`;

    return this.http.post('http://127.0.0.1:8000/maths/?wsdl',str,{headers: header, responseType: "text"});
  }

  min(x:number, y:number){

    const header = new  HttpHeaders({'content-Type' : 'application/xml'});
    const str = `<x:Envelope
    xmlns:x="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:mat="math.isg.tn">
    <x:Header/>
    <x:Body>
        <mat:min>
            <mat:a>${x}</mat:a>
            <mat:b>${y}</mat:b>
        </mat:min>
    </x:Body>
</x:Envelope>`;

    return this.http.post('http://127.0.0.1:8000/maths/?wsdl',str,{headers: header, responseType: "text"});
  }

  max(x:number, y:number){

    const header = new  HttpHeaders({'content-Type' : 'application/xml'});
    const str = `<x:Envelope
    xmlns:x="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:mat="math.isg.tn">
    <x:Header/>
    <x:Body>
        <mat:max>
            <mat:a>${x}</mat:a>
            <mat:b>${y}</mat:b>
        </mat:max>
    </x:Body>
</x:Envelope>`;

    return this.http.post('http://127.0.0.1:8000/maths/?wsdl',str,{headers: header, responseType: "text"});
  }
}
