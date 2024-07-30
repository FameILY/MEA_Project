import { NextResponse } from "next/server";
import executeQuery from "../../lib/db";
import bcrypt from 'bcrypt';

export async function POST(req) {
    try {
        const data = await req.formData()
        const body = {}
        data.forEach((value, key) => {
            body[key] = value
        })

        console.log(body)
        const { fullName, email, contactNumber, designation, password} = body

        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword)
        

        const result = await executeQuery({
            query: "INSERT INTO memberReg (fullName, email, contactNumber, designation, password) values(?,?,?,?,?)",
            values: [fullName, email, contactNumber, designation, hashedPassword]
        })


        return NextResponse.json({result})
    } catch (e) {
        console.log(e)
    }
}