import express from "express";
import {getAllProducts,getProductById,updateProduct,deleteProduct,createProduct} from "../controllers/Product.js";

const router = express.Router();

router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.post('/create',createProduct);
router.put('/upd/:id',updateProduct);
router.delete('/del/:id',deleteProduct);

export default router;