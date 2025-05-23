import { client } from "@/sanity/lib/client";
import Container from "@/app/components/Container";
import BlogPostCard from "@/app/components/BlogPost";

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
}
async function getBlogPosts() {
  const query = `*[_type == "blogPost"] | order(date desc) {
      title,
      description,
      date,
      "slug":slug.current,
      image,
      content
    }`;
  
    // const posts = await client.fetch(query, { next: {revalidate:84600 } });
    const posts = await client.fetch(query);
    return posts;
  }