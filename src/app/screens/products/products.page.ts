import { Component, OnInit } from '@angular/core';
import { error, log } from 'console';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
products:any[]=[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadAllData();
  }
  loadAllData(){
    this.productService.loadAll().subscribe(responseData=>{
      
      this.products=responseData.map(product=>(
        {
        id:product.payload.doc.id,
        ...product.payload.doc.data()
        }
      ))
    }, error=>{
      console.log(error);
      
    })
  }
}
