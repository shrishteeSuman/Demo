'use client'

import React from 'react';
import Link from "next/link";
import navigationRoutes from "@/constants/navigationRoutes";
import {ITEM} from "@/constants/interfaces";
import {usePathname} from "next/navigation";
import Button from "@/components/Button/Button";


function Navigation(props:any) {

    const pathname = usePathname().toLowerCase()


    return (
        <nav className='navigation-wrapper'>
            <ul className='navigation-wrapper-list'>
                {navigationRoutes?.map((item:ITEM, index:number) => (
                    <li key={index} className='navigation-wrapper-list-item'>
                        <Link href={item.route} className={`${pathname.includes(item.label.toLowerCase()) ? 'text-blue-700' : 'text-white'}  text-xl`}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
