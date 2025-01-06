import Image from 'next/image';

export default function Page() {
  return (
    <Image
      alt="Mountains"
      width={500}
      height={300}
      src="/mountain.jpg"
    />
  )
}

