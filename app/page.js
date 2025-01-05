import Container from "./components/Container";
import { Big_Shoulders_Inline_Display } from 'next/font/google'

const display = Big_Shoulders_Inline_Display({ subsets: ["latin"]});

export default function Home() {
  return (
    <>
      <Container>
        <p className={display.className}>Hello</p>
        <h1 className="m-[10vw] text-violet-600 text-xl">Welcome!</h1>
        <h4 className="m-[10vw] text-violet-600 text-lg">Thanks for visiting my website!</h4>
      </Container>
    </>

  );
}
