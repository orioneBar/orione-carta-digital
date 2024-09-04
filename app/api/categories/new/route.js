import { connectDB } from "@/app/lib/mongodb";
import Category from '../../../lib/mongoose/categoryModel';



export async function POST(request) {

    await connectDB()
  
    const { name } = await request.json();
  console.log('ok',name)
    try {
        
        const newCategory = new Category({ name: name });
        await newCategory.save();

        return new Response('Categoría creado con éxito!', {
            status: 201,
        })

    } catch(err) {
        
        return new Response(`Error submitting data: ${err}`, {
            status: 500,
        })

    }
    
}