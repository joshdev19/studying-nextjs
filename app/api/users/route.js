import { Users } from '@/app/api/db/db';
import { NextResponse } from 'next/server';
import fs from 'fs';

export const GET = async () => {

    const data = Users;

    return NextResponse.json(
        {
            data
        }
    )

}

export const POST = async ( request, response ) => {

    const { name, username, email, password } = await request.json()

    if ( !name || !username || !email || !password ) return NextResponse.json(
        {
            message: "Fields are required",
            ok: false
        },
        {
            status: 400
        }
    )

    const usersLength = Users.length

    const usernameIsTaken = Users.find( u => u?.username == username );
    const emailIsTaken = Users.find( u => u?.email == email );

    if ( usernameIsTaken ) return NextResponse.json(
        {
            message: "Username is already taken",
            ok: false
        },
        {
            status: 409
        }
    )

    if ( emailIsTaken ) return NextResponse.json(
        {
            message: "Email is already taken",
            ok: false
        },
        {
            status: 409
        }
    )

    const newUsersValue = {
        id: usersLength + 1,
        name,
        username,
        email,
        password
    }

    Users.push( newUsersValue );

    const updatedFakeUsers = Users;

    fs.writeFileSync('./app/api/db/db.js', `export const Users = ${JSON.stringify(updatedFakeUsers, null, 2)}`, 'utf8');

    return NextResponse.json(
        {
            message: "Created Successfully",
            ok: true
        },
        {
            status: 201
        }
    )

}

export const PUT = async ( request, response ) => {

    // const { name, email, }

}