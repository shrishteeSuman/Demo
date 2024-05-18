import React from 'react';
import Image from "next/image";

function Header(props:any) {
    return (
        <header>
            <div className="website-header">
                <div className="logo-title-wrapper">
                    <Image
                        src="/blogLogo.png"
                        alt="Website Logo"
                        className='logo'
                        width={100}
                        height={1}
                        priority
                    />
                </div>
                <h1 className="website-name font-extrabold text-4xl">DevIQ Hub</h1>
            </div>
        </header>
    );
}

export default Header;
