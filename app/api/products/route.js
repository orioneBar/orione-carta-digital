import { connectDB } from "@/app/lib/mongodb";
import Product from "@/app/lib/mongoose/productModel";
import Category from '../../lib/mongoose/categoryModel';


export async function POST(request) {

    await connectDB()
  
    const { name, description, price, categoryId } = await request.json();
  
    try {
        
        const newProduct = new Product({ name, description, price, category: categoryId });
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



export async function GET(request) {
  
    await connectDB()

    try {

        const products = await Product.find();

        return new Response(JSON.stringify(products), { status: 200 });
      
        // return new Response('Producto creado con exito!', {
        //     status: 200,
        // })

    } catch(err) {

        return new Response(`Error submitting data: ${err}`, {
            status: 500,
        })

    }
    
}



export async function PUT(request) {
    
  await connectDB();

  const { productId, name, description, price, isActive } = await request.json();
  
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



