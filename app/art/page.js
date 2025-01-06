import Image from 'next/image';
import mountains from '@/app/photos/mountain.jpg';

export default function Page() {
  return (
    <Image
      alt="Mountains"
      width={600}
      src={mountains}
      placeholder="blur"
    />
  )
}

