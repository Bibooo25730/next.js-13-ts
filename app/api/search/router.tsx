import {NextResponse} from "next/server";

export async  function GET(req:Request){
    const { searchParams } = new URL(req.url)
    const quety = searchParams.get("query")
    if (quety){
        return NextResponse.json({error:"No query"},{status:400})
    }
    // const response = await fetch()
}