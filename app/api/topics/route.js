import connectMongoDB from "@/lib/mongodb";
import { TaskTopic } from "@/models/topic";
import { NextResponse } from "next/server";
import { User } from "@/models/topic";

export async function POST(request) {
  const { title, description , github } = await request.json();
  await connectMongoDB();
  await TaskTopic.create({ title, description, github });
  return NextResponse.json({ message: "Task Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await TaskTopic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await TaskTopic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Task deleted" }, { status: 200 });
}
