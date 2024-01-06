import { Users } from '@/app/api/db/db';
import { NextResponse } from 'next/server';

export const GET = async ( _, response ) => {

    const { id } = await response.params

    const user = Users.filter( user => user.id == id );

    return NextResponse.json(
        {
            user
        }
    )

}

export const POST = async ( request, response ) => {

    const { name, email, password } = await request.json()

    const { id } = response.params;

    const { name: uName, email: uEmail, password: uPassword } = Users.find( user => user.id == id );

    if ( uName === name && uEmail === email && uPassword === password ) {
        return NextResponse.json(
            {
                message: "Logged In Successfully",
                ok: true
            },
            {
                status: 200
            }
        )
    }
    else if ( !name || !email || !password ) {
        return NextResponse.json(
            {
                message: "Fields are required",
                ok: false
            },
            {
                status: 400
            }
        )
    }
    else {
        return NextResponse.json(
            {
                message: "Wrong Credentials",
                ok: false
            },
            {
                status: 400
            }
        )
    }

}