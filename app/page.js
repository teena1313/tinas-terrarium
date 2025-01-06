import Image from "next/image";
import {FilledButton} from "./components/Buttons";
import Card from "./components/Card";
import pfp from '@/app/public/profile.jpg';
import placeholder from '@/app/public/placeholder.jpg';

export default function Home() {
  const facts = [
    {
      blurb: "Languages",
      description: "I'm bilingual in English and Mandarin, and I'm currently learning French for fun!",
      photo: placeholder,
      alt: "a photo",

    },
    {
      blurb: "Cultural Identity",
      description: "I was born in Taiwan and moved to the US when I was 10 years old. " +
                    "I've lived in the US for almost as long as I have lived in Taiwan now, after my birthday this year " +
                    "I will have lived in the US longer than I had lived in Taiwan :O",
      photo: placeholder,
      alt: "a photo",
    },
    {
      blurb: "Hobby",
      description: "I prefer reading over watching movies and TV series. I read a lot of manga but I've barely watched any anime." +
                    "Some of my favorites include Chainsaw Man, Saint Young Man, Kindergarten Wars, and many more... ",
      photo: placeholder,
      alt: "a photo",
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-darkgreen flex items-center justify-center">
        <div className="bg-nature flex flex-row sm: flex-col md:flex-row gap-8 md:gap-24 p-6 sm:p-10 py-16 sm:py-20 w-screen">
            <div className="flex flex-col sm: flex-row gap-8 md:gap-15 py-20" >
              <h1 className="text-white text-5xl sm:text-6xl text-center md:text-start font-extrabold">
                Tina's{" "}
                <span className="text-secondary-300">Terrarium</span>
              </h1>
              <div className="text-center md:text-start">
                <p className="text-white text-lg mb-12 max-w-screen-md px-1">
                Hi there! My name is Ting-Syuan 廷瑄 Lai, or just Tina for short.
                I’m a third-year undergraduate student who finds purpose in connecting with my community through
                working campus jobs and volunteering. I’ve mainly been growing my technical background through classes 
                and personal projects. I’m looking for internships, research, or other new experiences to further expand my knowledge!
                </p>
                <FilledButton href="https://www.google.com" className="">
                  Visit my LinkedIn
                </FilledButton>
              </div>
            </div>
          <Image className="left-10" src={pfp} width={360} height={450} alt="Photo of the author"/>
        </div>
      </header>

      {/* Fun Facts */}
      <div className="mx-auto flex flex-col gap-8 md:gap-12 p-6 sm:p-10 py-12 sm:py-16 text-center">
        <h2 className="text-5xl font-extrabold">Some Fun Facts</h2>
        <div className="flex flex-col md:flex-row items-center mx-0 md:mx-8 gap-8">
          {facts.map((fact, index) => (
            <Card key={index}>
              <h3 className="text-2xl font-bold mb-3">{fact.blurb}</h3>
              <p className="text-grayAlt opacity-60">{fact.description}</p>
              {/* <Image src={fact.photo} width = {400} height = {200} alt={fact.alt}/> */}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}