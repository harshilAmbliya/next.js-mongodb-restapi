import { NextResponse } from 'next/server';
import connectdb from '../../../../config/db'
import User from '../../../../models/users';


export async function POST(request) {
    const { name, email, password } = await request.json();
    await connectdb();
    await User.create({ name, email, password });
    return NextResponse.json({ message: "user created" }, { status: 201 })
}


export async function GET() {
    await connectdb();
    const users = await User.find();
    return NextResponse.json({ users }, { message: "get all user sucessfully..." }, { status: 200 })
}

export async function DELETE(request) {
    
    const id = request.nextUrl.searchParams.get("id");
    await connectdb();
    await User.findByIdAndDelete(id)
    return NextResponse.json( { message: "user deleted..." }, { status: 200 })
}
