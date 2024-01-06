import Link from "next/link"
import { UserTypes } from '@/type/types'

const LinkComponent = ( { id, name, email }: UserTypes ) => {

    return (
        <Link href={`/users/updateuser/${id}`} className="users">
            <p className="name"> {name} </p>
            <p className="email"> {email} </p>
        </Link>
    )

}

export default LinkComponent