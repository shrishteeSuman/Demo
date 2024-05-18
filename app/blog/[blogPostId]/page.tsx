'use client'
import React, {useState, useEffect} from 'react';
import Button from "@/components/Button/Button";
import {BlogPost} from "@/constants/interfaces";


function BlogPostDetail(props:any) {

    const storedBlogData = localStorage.getItem('selectedBlog');
    let parsedBlogData;

    if (storedBlogData) {
        parsedBlogData = JSON.parse(storedBlogData);
    }


    return (
            <div className='blog-detail-card flex flex-col'>
                <h3 className='text-2xl blog-title font-bold'>{parsedBlogData?.title}</h3>
                <p className='blog-detail-author-date '><span className={'font-semibold'}>{`${parsedBlogData?.author} |`}</span>{parsedBlogData?.date_published}</p>
                <p className='blog-detail-content'>{parsedBlogData?.content}</p>
                <Button text={'Back'} source={'backBtn'} />
            </div>
    );
}

export default BlogPostDetail;
