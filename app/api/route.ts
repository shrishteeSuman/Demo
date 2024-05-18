
export async function GET(request: Request) {
    const res = await fetch('https://dummyapi.online/api/blogposts');
    const data = await res.json();

    return Response.json({ data });
}

