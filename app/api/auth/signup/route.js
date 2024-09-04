import { NextResponse } from "next/server";
import User from '../../../lib/mongoose/userModel';
import bcrypt from 'bcryptjs';
import { connectDB } from "@/app/lib/mongodb";



export async function POST(request) {

    const { email, password } = await request.json();

    if (!password || password < 6) {
        return NextResponse.json({
            message: 'La password debe contener por lo menos 6 caracteres'
        }, {
            status: 400
        })
    }

    try {

        await connectDB()

        const userFound = await User.findOne({email})

        if (userFound) {
            return NextResponse.json({
                message: 'El correo ya existe'
            }, {
                status: 400
            })
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({
            email: email,
            password: hashedPassword
        });

        const savedUser = user.save();

        return NextResponse.json(savedUser);

    } catch(err) {

        console.log(err)

        return NextResponse.json({
            message: err.message
        }, {
            status: 400
        })

    }

    

}