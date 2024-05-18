interface ITEM{
    route: string
    label: string
}

interface BlogPost{
    id: number
    title: string
    author: string
    date_published: string
    content: string
}

interface ButtonProps{
    text: string,
    source: string,
    selectedContent?: BlogPost
}


export type {ITEM, BlogPost, ButtonProps}
