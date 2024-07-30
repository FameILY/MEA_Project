import { NextResponse } from "next/server";
import executeQuery from "../../lib/db";

export async function POST(req) {
    try {
        const data = await req.formData()
        const body = {}
        data.forEach((value, key) => {
            body[key] = value
        })

        console.log(body)
        const { fullName, email, contactNumber, address, message} = body

        const result = await executeQuery({
            query: "INSERT INTO replies (fullName, email, contactNumber, address, message) values(?,?,?,?,?)",
            values: [fullName, email, contactNumber, address, message]
        })


        return NextResponse.json({result})
    } catch (e) {
        console.log(e)
    }
}