import React from 'react';

function BlogDetailLayout({children}: { children: React.ReactNode }) {
    return (
        <div className= 'blog-detail-card-wrapper flex flex-col'>
            <div className= 'blog-detail-card-wrapper blog-detail-card-wrapper-child'>
                {children}
            </div>
        </div>
    );
}

export default BlogDetailLayout;
