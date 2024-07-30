import { NextResponse } from "next/server";
import executeQuery from "../lib/db";


export async function GET(req){
    try {

        const createTables = "CREATE TABLE IF NOT EXISTS memberReg (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,fullName VARCHAR(45), email VARCHAR(45) UNIQUE, contactNumber VARCHAR(20),designation VARCHAR(45), password VARCHAR(100), isApproved BOOLEAN DEFAULT FALSE); CREATE TABLE IF NOT EXISTS replies (replyId INT PRIMARY KEY AUTO_INCREMENT,fullName VARCHAR(45),email VARCHAR(45),contactNumber VARCHAR(20),address VARCHAR(200),message VARCHAR(300));"

        const result = await executeQuery({
            query: createTables
        })
       
        return NextResponse.json({result: result})

    } catch (err) {
        console.log(err);
    }

} 

