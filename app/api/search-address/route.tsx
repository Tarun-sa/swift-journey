import { NextResponse } from "next/server";

const BASE_URL='https://api.mapbox.com/search/searchbox/v1/suggest';

// Function to generate a UUID
export function generateUUID() {
    return crypto.randomUUID();
}

export async function GET(request:any) {

    const {searchParams}= new URL(request.url);
    const searchText=searchParams.get('q')
    const sessionToken = generateUUID(); 

    const response = await fetch(
        `${BASE_URL}?q=${searchText}&language=en&limit=6&session_token=${sessionToken}&country=IN&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`,{
            headers:{
                'Content-Type':'application/json'
            }
        }
    );

    const data=await response.json()

    return NextResponse.json(data)
    
}