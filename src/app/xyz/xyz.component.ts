import { Component } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent {
}
declare global {
  var parseXml:(xmlStr:string)=>{}
}