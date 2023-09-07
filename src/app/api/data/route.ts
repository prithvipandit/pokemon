import { NextResponse } from 'next/server';


export const GET = async (req:Request,res:Response) => {
  try{
    console.log("#process.env.VERCEL_URL : ",process.env.VERCEL_URL);
    for (let key in process.env) {
      console.log(`${key}: ${process.env[key]}`);
    }

    const hostAPIUrl :string = "https://"+process.env.VERCEL_URL+"/" || "http://localhost:3000/"
    return NextResponse.json({url:hostAPIUrl},{status:200});
  }catch(err){
    console.log("error while fetching ",err);
  }
};