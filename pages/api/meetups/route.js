import connectMongoDB from "@/libs/mongodb"
import Meetup from "@/models/meetup";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, image, address, description } = await request.json()

    await connectMongoDB();
    await Meetup.create({ title, image, address, description })

    return NextResponse({ message: 'Meetup Created' }, { status: 201 })
}