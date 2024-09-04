import { connectDB } from "@/app/lib/mongodb";
import Category from '../../lib/mongoose/categoryModel';
import Product from "@/app/lib/mongoose/productModel";
import { NextResponse } from "next/server";


export async function POST(request) {

    await connectDB()
  
    const { name } = await request.json();
    
    try {

        const newCategory = new Category({ name });
        await newCategory.save();

        return new Response('Categoria creada con exito!', {
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

        const categories = await Category.find().populate('products');
        
        return NextResponse.json(categories)

    } catch(err) {

        return new Response(`Error submitting data: ${err}`, {
            status: 500,
        })

    }
    
}