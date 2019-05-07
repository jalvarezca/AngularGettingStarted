import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable ( {
    providedIn:'root'
})

export class ProductService{
    getProducts() : IProduct[]{
        return  [
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Sunflower_Cart_Freshwater_CA.JPG/90px-Sunflower_Cart_Freshwater_CA.JPG"
              },
              {
                "productId": 5,
                "productName": "Hammer 2",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Hammer-vertical.jpg/57px-Hammer-vertical.jpg"
              },
              {
                "productId": 7,
                "productName": "MCB",
                "productCode": "MCB-180",
                "releaseDate": "Feb 15, 2018",
                "description": "Mercedez Benz C180 2018",
                "price": 23000,
                "starRating": 2.1,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/92/M%C3%BCnster%2C_Beresa%2C_Mercedes-Benz_C-Klasse_Cabrio_--_2018_--_1757.jpg"
              },
              {
                "productId": 8,
                "productName": "Saw",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2016",
                "description": "15-inch steel blade hand saw",
                "price": 11.55,
                "starRating": 3.7,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/64/Crosscut_saw.JPG"
              }
          ];
    }
}