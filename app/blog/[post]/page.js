import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import { PortableText } from "@portabletext/react";
import BlogPostHeader from "@/app/components/BlogPostHeader";
import Container from "@/app/components/Container";
import Image from "next/image";

const portableTextComponents = {
    types: {
      image: ImageComponent,
    },
  };

export default async function Page({ params }) {
    const post = await getBlogPost(params.post);
  
    return (
      <Container>
        <div className="mx-auto max-w-prose space-y-8 py-8">
          <BlogPostHeader post={post[0]} />
          <hr className="border-primary-200" />
          <Image width={1920} height={1080} src={urlForImage(post[0].image).url()} />
          <article className="prose md:prose-md prose-primary mx-auto">
            <PortableText value={post.content} components={portableTextComponents} />
          </article>
        </div>
      </Container>
    );
  }

async function getBlogPost(slug) {
  const query = `*[_type == "blogPost" && slug.current == $slug] {
    title,
    description,
    date,
    "slug":slug.current,
    image,
    content
  }`;

  const post = await client.fetch(query, { slug });
  return post;
}

function ImageComponent({ value }) {
    const { width, height } = tryGetImageDimensions(value);
  
    return (
      <Image
        src={urlForImage(value).fit("max").auto("format").url()}
        width={width}
        height={height}
        loading="lazy"
        className="mx-auto md:max-w-prose rounded-lg"
        style={{
          aspectRatio: width / height,
        }}
      />
    );
}