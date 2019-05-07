import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;

  
  private _listFilter : string;
  public get listFilter() : string {
    return this._listFilter;
  }
  public set listFilter(v : string) {
    this._listFilter = v;
    this.filteredProducts = this.listFilter ? this.perfomFilter(this.listFilter) : this.products;
  }
  
  filteredProducts: IProduct[];
  products: IProduct[] = [];

  constructor(private productService :  ProductService) {
  }

  onRatingClicked(message: string) : void {
    this.pageTitle = 'Produc List' + message;
  }

  perfomFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product : IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
      this.products = this.productService.getProducts();
      this.filteredProducts = this.products;
  }
}
