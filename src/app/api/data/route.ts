import { NextResponse } from 'next/server';


export const GET = async (req:Request,res:Response) => {
  try{
    const hostAPIUrl :string = "https://"+process.env.VERCEL_URL+"/" || "http://localhost:3000/"
    return NextResponse.json({url:hostAPIUrl,...process.env},{status:200});
  }catch(err){
    console.log("error while fetching ",err);
  }
};