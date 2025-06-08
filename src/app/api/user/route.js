import { connectMongoDB } from "@/lib/mongodb"
import User from "@/models/user.model"

export async function POST (req){
  const {name, email,image} =await req.json()
  await connectMongoDB()

  await User.create({name, email})
  return NextResponse.json({message:
    REGISTERED  },{status:201})
}