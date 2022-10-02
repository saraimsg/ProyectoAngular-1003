import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  //Variables
  num1:number=0;
  tablaR:string[]=[];


  constructor() { }

  ngOnInit(): void {
  }
  
  //Metodo 
  tablaM():void{
    for(let i=1; i<11; ++i){
     this.tablaR[i]=`${this.num1} x ${i} = ${i*this.num1}`+"\n";

   }
  }
}