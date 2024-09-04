import { connectDB } from "@/app/lib/mongodb";
import Product from "../../../lib/mongoose/productModel";




export async function PUT(request) {
    
    await connectDB();
  
    const { productId, name, description, price, isActive } = await request.json();
    console.log(productId, name, description, price, isActive)
    try {
        
      const productToUpdate = await Product.findByIdAndUpdate(productId, {
        name,
        description,
        price,
        isActive
      }, { new: true });
  
      if (!productToUpdate) {
        return new Response('Product not found!', { status: 404 });
      }
  
      return new Response(JSON.stringify(productToUpdate), {
        status: 200,
      });
  
    } catch (err) {
  
      console.error(err);
      return new Response('Error updating product!', { status: 500 });
  
    }
  
  }