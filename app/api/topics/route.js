import connectMongoDB from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { TaskTopic } from "@/models/topic";
import { NextResponse } from "next/server";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
  const { title, description , github } = await request.json();
  await connectMongoDB();
  // const userid = authOptions;
  // console.log(userid)
  const session = await getServerSession(authOptions);
  console.log(session['user']['email']);
  const email = session['user']['email'];

  await TaskTopic.create({ title, description, github, email  });
  return NextResponse.json({ message: "Task Created" }, { status: 201 });
}

export async function GET(request) {
  await connectMongoDB();
  const session = await getServerSession(authOptions);
  console.log("hiiiiiiiiiiiiiii");
  console.log(session);
  // const email = session['user']['email'];
  const topics = await TaskTopic.find();
  return NextResponse.json({ topics });
}

// export async function GET(request) {
//   await connectMongoDB();

//   // Check if the user is logged in and if they are an admin
//   const isAdmin = request.locals.session?.admin;

//   // If user is an admin, fetch all task topics
//   if (isAdmin) {
//     const topics = await TaskTopic.find();
//     return NextResponse.json({ topics });
//   }

//   // If user is not an admin, fetch only the task topics created by the logged-in user
//   const userId = request.locals.session?.userId; // Assuming userId is stored in session
//   const topics = await TaskTopic.find({ creator: userId });
//   return NextResponse.json({ topics });
// } 

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await TaskTopic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Task deleted" }, { status: 200 });
}
