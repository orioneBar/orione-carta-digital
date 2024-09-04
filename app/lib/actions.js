'use server'

import { revalidateTag } from "next/cache";
import { connectDB } from "./mongodb";
import Category from './mongoose/categoryModel';



export async function createProduct(categoryId) {

    try {

        const res = await fetch(`${process.env.URL}/api/products/new`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ categoryId: categoryId}),
        });

        revalidateTag('categories')

    } catch(err) {

        console.log(err)

    }

}


export async function updateProduct(product) {
    
    const objectData = Object.fromEntries(product.entries());
    
    
    try {

        const res = await fetch(`${process.env.URL}/api/products`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ 
                name: objectData.name, 
                description: objectData.description, 
                price: objectData.price, 
                isActive: objectData.isActive, 
                productId: objectData.id, 
            }),
        });

        revalidateTag('categories')

    } catch(err) {

        console.log(err)

    }

}


export async function deleteProduct(productId) {
    
    try {

        const res = await fetch(`${process.env.URL}/api/products/${productId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json', 
            },
        });

        revalidateTag('categories')

    } catch(err) {

        console.log(err)

    }

}


export async function updateActiveProduct(product) {
        
        try {
    
            const res = await fetch(`${process.env.URL}/api/products/active`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json', 
                },
                body: JSON.stringify({ 
                    name: product.name, 
                    description: product.description, 
                    price: product.price, 
                    isActive: product.isActive, 
                    productId: product.productId, 
                }),
            });
    
            revalidateTag('categories')
    
        } catch(err) {
    
            console.log(err)
    
        }
    
    }


export async function createCategory(formData) {

    const name = formData.get('name');
    
    try {

        const res = await fetch(`${process.env.URL}/api/categories/new`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ name: name}),
        });

        revalidateTag('categories')

    } catch(err) {

        console.log(err)

    }

}


export async function getCategories() {

    await connectDB()
    
    try {

        const categories = await Category.find().populate('products');

        const response = { categories };
        
        return response

    } catch(err) {

        return console.log(err)

    }

}