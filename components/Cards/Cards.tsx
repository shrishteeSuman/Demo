'use client'
import React,{useState,useEffect} from 'react';
import Button from "@/components/Button/Button";
import {BlogPost} from "@/constants/interfaces";
import Image from "next/image";
import {GET} from "@/app/api/route";

export const Cards = (props:any) => {

    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

    // useEffect(() => {
    //    fetch('https://localhost:3000/api').then((response)=>{
    //        console.log(response, '====response====')
    //    })
    // }, []);

    const fetchBlogPosts = async () => {
        try {
            const response: any = await fetch('https://dummyapi.online/api/blogposts')
            const data = await response.json()
            console.log(data, '===data===')
            setBlogPosts(data);
            // const response: any =  fetch('https://dummyapi.online/api/blogposts').then((result)=>{
            //     return result.json()
            // }).then((newData)=>{
            //     console.log(newData, '====blogPosts22====', )
            //
            // })
            // console.log(response, '====blogPosts11====', response.json())
            // if (response.ok) {
            //     setBlogPosts(await response.json());
            // }
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBlogPosts();
    }, []);


    console.log(blogPosts, '====blogPosts====');

    return (
            <ul className='blog-card-wrapper owl-carousel owl-theme'>
                {blogPosts && blogPosts.map((data: BlogPost, index:number)=>{
                    return(
                        <li className='blog-card' key={index}>
                            <Image
                                src="/blogLogo.png"
                                alt="Website Logo"
                                className='blog-logo'
                                width={100}
                                height={1}
                                priority
                            />
                            <h3 className='text-2xl blog-title font-bold'>{data?.title}</h3>
                            <p className='blog-author-date '><span className={'font-semibold'}>{`${data?.author} | `}</span>{data?.date_published}</p>
                            <p className='blog-card-content'>{data?.content}</p>
                            <Button text={'Read More'} source={'moreBtn'} selectedContent={data}/>
                        </li>
                    )
                })}
            </ul>

    );
}


