'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = ( ) => {

    const path = usePathname();

    return (
        <nav>
            
            <Link href={'/'}> LOGO  </Link>

            {
                path === '/' ? (
                    <ul>
                        <li> <Link href={'/users/addusers'}> Add Users </Link> </li>
                        <li> <Link href={'/'}> About </Link> </li>
                    </ul>
                ) : (
                    <ul>
                        <li> <Link href={'/'}> Home </Link> </li>
                        <li> <Link href={'/users/addusers'}> Add Users </Link> </li>
                        <li> <Link href={'/'}> About </Link> </li>
                    </ul>
                )
            }

        </nav>
    )

}

export default Navbar