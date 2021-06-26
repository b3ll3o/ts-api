import { CreateNewProductDto } from "../dtos/products/CreateNewProductDto";


export class ProductApplicationService {

    private products: any[] = [];

    saveNewProduct(product: CreateNewProductDto){
        this.products.length > 0
            ? this.products = [ ...this.products, product ]
            : this.products = [ product ];
        return product;
    }

    findAll(){
        return this.products;
    }
}