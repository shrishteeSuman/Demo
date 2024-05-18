'use client'
import React from 'react';
import {useRouter} from 'next/navigation';
import {ButtonProps} from '@/constants/interfaces';


function Button({source, text, selectedContent}: ButtonProps) {
    const router = useRouter()

    console.log(selectedContent, '====selectedContent====');
    const btnClickHandler = () => {
        if(source === 'backBtn'){
            router.back();
        }
        else{
            localStorage.setItem('selectedBlog', JSON.stringify(selectedContent))
            router.push(`/blog/${selectedContent?.id}`)
        }
    }

    return (
        <button onClick={()=>btnClickHandler()}>{text}</button>
    );
}

export default Button;
