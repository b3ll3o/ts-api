import { Router, Request, Response } from 'express';
import { CreateNewProductDto } from '../../applications/dtos/products/CreateNewProductDto';
import { ProductApplicationService } from '../../applications/services/ProductsApplicationService';

const router = Router();

const _productApplicationService = new ProductApplicationService();

router.post('/', (req: Request, res: Response) => {
    const { name } = req.body;
    const producDto = new CreateNewProductDto(name);
    const newProduct = _productApplicationService.saveNewProduct(producDto);
    res.json(newProduct);
});

router.get('/', (req: Request, res: Response) => {
    const products = _productApplicationService.findAll();
    res.json(products);
});

export  default router;