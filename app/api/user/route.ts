import { NextResponse } from "next/server";
import { db } from "@/app/api/db";
import { hash } from 'bcrypt';


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { username, password} = body;

        //checked if username already exists
        const existingUserByUsername = await db.databankUsers.findUnique({
            where: { username: username }
        });
        if (existingUserByUsername){
            return NextResponse.json({ user:null, message: "Username already exists!"}, { status: 409})
        }
        

        const hashedPassword = await hash(password, 10);
        const newUser = await db.databankUsers.create({
           data: {
            username,
            password: hashedPassword,
            admin: false,
            lastlogin: new Date()
           }
        })

        const { password: newUserPassword, ...rest } =newUser;

        return NextResponse.json( { user: rest, message: "User created successfully!"}, {status: 201});
    } catch(error) {
        return NextResponse.json( { message: "Something went wrong!"}, {status: 500});
    }
}