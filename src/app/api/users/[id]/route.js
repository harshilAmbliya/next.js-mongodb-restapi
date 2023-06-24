import connectdb from "../../../../../config/db";
import { NextResponse } from "next/server";
import User from "../../../../../models/users";

export async function PUT(request, { params }) {

    const { id } = params;
    const { newName: name, newEmail: email, newPassword: password } = await request.json();
    await connectdb();
    await User.findByIdAndUpdate(id, { name, email, password })
    return NextResponse.json({ message: "user updated..." }, { status: 200 })
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectdb();
    const user = await User.findOne({_id:id})
    return NextResponse.json({user},{message:"user get sucessfully.."},{status:200})
}