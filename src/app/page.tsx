import { client } from "@/sanity/lib/client";
import BlogCard from "./components/blogCard";

type Posts = {
  title: string,
  image: string
  slug: string
  description: string
}

export const revalidate = 5;

export default async function Home() {
  const query = `*[_type == "post"] | order(_createdAt asc) {
  summary, title, image, description,
    "slug": slug.current
}`
  const posts:Posts[] = await client.fetch(query)
  return (
    <main>
      <section className="grid grid-col-1 gap-12">
        {
          posts.map((post: Posts) => (
            <BlogCard posts={post} key={post.slug}/>
          ))
        }
      </section>
    </main>
  );
}
