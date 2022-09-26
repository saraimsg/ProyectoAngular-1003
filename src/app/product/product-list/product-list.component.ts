import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //Ancho y Alto de la imagen que se va a mostrar
  imageWidth:number=80;
  imageMarge:number=2;
  muestraImg:boolean=false;
  listFilter:string='';

  constructor() { }
  muestraImagen():void{
    this.muestraImg=!this.muestraImg;
  }
  products:Producto[]=[
    {
      "product1":1,
      "productName":'Lamborgini',
      "description":'auto familiar',
      'listFilter':'',
      "createDate":"Septiembre 22, 2022",
      "price": 50000,
      "rating":5.2,
      "imgURL":"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/motorsport/cars/sc20/s/sc20_s_01_m.jpg"
    },
    {
      "product1":1,
      "productName":'Lamborgini',
      "description":'auto familiar',
      'listFilter':'',
      "createDate":"Septiembre 22, 2022",
      "price": 50000,
      "rating":5.2,
      "imgURL":"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/motorsport/cars/sc20/s/sc20_s_01_m.jpg"
    }
  ]
  ngOnInit(): void {
  }

}