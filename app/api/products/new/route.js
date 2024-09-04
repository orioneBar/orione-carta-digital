import { connectDB } from "@/app/lib/mongodb";
import Product from "@/app/lib/mongoose/productModel";
import Category from '../../../lib/mongoose/categoryModel';



export async function POST(request) {

    await connectDB()
  
    const { categoryId } = await request.json();
  
    try {
        
        const newProduct = new Product({ name: 'Nuevo Producto', category: categoryId });
        await newProduct.save();

        await Category.findByIdAndUpdate(
            categoryId,
            { $push: { products: newProduct._id } },
        );

        return new Response('Producto creado con exito!', {
            status: 201,
        })

    } catch(err) {
        
        return new Response(`Error submitting data: ${err}`, {
            status: 500,
        })

    }
    
}