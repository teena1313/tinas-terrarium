import Image from 'next/image';
import mountains from '@/app/photos/mountain.jpg';
import Carousel from "react-multi-carousel";

export default function Page() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      {/* Photo carousel */}
      <div className="mx-auto p-4 sm:p-8 py-12 sm:py-16 text-center">
        <h2 className="text-5xl font-extrabold mb-10">Photos</h2>

        <Carousel
          autoPlay
          autoPlaySpeed={3000}
          infinite
          responsive={responsive}
        >
          <div className="flex-[0_0_33%]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              alt="University of Washington Campus"
              className="w-full h-80"
              src={
                "https://cdn.geekwire.com/wp-content/uploads/2014/10/8618592346_e4bf2f2028_z-620x378.jpg"
              }
            />
          </div>
          <div className="flex-[0_0_33%]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-80"
              alt="University of Washington Campus"
              src={
                "https://apru.org/wp-content/uploads/2021/12/University-of-Washington-1.jpeg"
              }
            />
          </div>
          <div className="flex-[0_0_33%]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-80"
              alt="University of Washington Campus"
              src={
                "https://cdn.geekwire.com/wp-content/uploads/2014/10/8618592346_e4bf2f2028_z-620x378.jpg"
              }
            />
          </div>
          <div className="flex-[0_0_33%]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-80"
              alt="University of Washington Campus"
              src={
                "https://apru.org/wp-content/uploads/2021/12/University-of-Washington-1.jpeg"
              }
            />
          </div>
        </Carousel>
      </div>
      <Image
      alt="Mountains"
      width={600}
      src={mountains}
      placeholder="blur"
    />
    </div>
  )
}

