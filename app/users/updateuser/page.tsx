'use client'
import { UserTypes } from '@/type/types'
import React, { useState } from 'react'

const UpdateUser = ( ) => {

    const [ values, setValues ] = useState<UserTypes>(
        {
            name: "",
            email: ""
        }
    )

    const controlledInputs = ( e: React.ChangeEvent<HTMLInputElement> ) => {

        const name = e.target.name;
        const value = e.target.value;

        setValues( ( prev ) => ( { ...prev, [ name ]: value } ));

    }

    const addUserHandler = async () => {

        try {
            
            const request = await fetch('/api/users', {
                method: "POST",
                body: JSON.stringify(values)
            });

            const response = await request.json();

            if ( response.ok ) {



            } else {



            }

        } catch (error) {
            
            console.log( error );

        }

    }

  return (
    <div className="wrapper">
       <form>
            <div className="title"> Update User </div>
            <input type="text" name='name' onChange={ controlledInputs } value={ values?.name } placeholder='Name...' />
            <input type="text" name='email' onChange={ controlledInputs } value={ values?.email } placeholder='Email...' />
            <button type='button' onClick={ addUserHandler }> Update User </button>
        </form> 
    </div>
  )
}

export default UpdateUser