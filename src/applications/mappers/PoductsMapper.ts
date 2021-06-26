import { Product } from "../../entities/models/Product";
import { CreateNewProductDto } from "../dtos/products/CreateNewProductDto";

export class ProductsMapper{

    mapToModel(dto: CreateNewProductDto){
        return new Product(dto.name);
    }

    mapToDto(model: Product){
        return new CreateNewProductDto(model.name);
    }
}