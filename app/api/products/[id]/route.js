import { connectDB } from "@/app/lib/mongodb";
import Product from "../../../lib/mongoose/productModel";
import Category from '../../../lib/mongoose/categoryModel';



export async function DELETE(request, { params }) {
  
    await connectDB();
  
    
    const productId = params.id;
  
    try {
      
      const productToDelete = await Product.findByIdAndDelete(productId);
  
      if (!productToDelete) {
        return new Response('Product not found!', { status: 404 });
      }
  
      await Category.findByIdAndUpdate(productToDelete.category, {
        $pull: { products: productToDelete._id }, 
      });
  
      return new Response('Producto eliminado con exito!', {
        status: 200,
      });
  
    } catch (err) {
  
      console.error(err);
      return new Response(`Error deleting product: ${err}`, { status: 500 });
  
    }
  }