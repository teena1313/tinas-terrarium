import Container from "./components/Container";
import Image from 'next/image';
import pfp from '@/app/photos/profile.jpg';

// import { Big_Shoulders_Inline_Display } from 'next/font/google'
// const display = Big_Shoulders_Inline_Display({ subsets: ["latin"]});

export default function Home() {
  return (
    <>        
      <Container>
        <h1 className="m-[10vw] text-darkgreen-600 text-2xl">Welcome!</h1>
        <h4 className="m-[10vw] text-darkgreen-600 text-lg">Thanks for visiting my website!</h4>
        <Image src={pfp} alt="Photo of the author"/>
      </Container>
    </>

  );
}
