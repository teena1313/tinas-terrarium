import Image from "next/image";
import DogFact from "../components/Dogfact";
import Container from "../components/Container";
// export default function Page() {
//     return (
//         <>
//             <Image
//                 src="/mountain.jpg"
//                 width={500}
//                 height={500}
//                 alt="Picture of a mountain"
//             />
//             <p>photos :D</p>
//         </>
//     )
// }

export default async function Photos() {
    const dogs = await getDogs();
    //const persons = await getPersons();
  
    return (
      <Container>
        <DogFact />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dogs.map((dog) => (
            <DogCard key={dog.name} dog={dog} />
          ))}
          {/* {persons.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))} */}
        </ul>
      </Container>
    );
  }

async function getDogs() {
    const res = await fetch("https://md.rtsh.space/sample.json");
  
    if (!res.ok) {
      throw new Error("Failed to fetch dogs");
    }
  
    return res.json();
}


// async function getPersons() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  
//     if (!res.ok) {
//       throw new Error("Failed to fetch people");
//     }
  
//     return res.json();
// }

function DogCard({ dog }) {
    return (
      <li className="border md:hover:scale-95 transition-transform border-primary-200 bg-gradient-to-bl from-secondary-100 to-white via-white rounded-xl p-4 flex items-start justify-start space-x-4">
        <img
          src={dog.pic}
          alt={dog.name}
          className="w-40 h-40 rounded-lg border object-cover border-primary-200"
        />
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-medium">{dog.name}</h3>
            <p className="uppercase text-xs font-medium text-primary-600">
              {dog.age} year{dog.age === 1 ? "" : "s"} old
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Favorite Toys</h4>
            <ul className="flex flex-wrap gap-2">
              {dog.favorite_toys.map((toy) => (
                <li
                  key={toy}
                  className="text-xs text-secondary-800 rounded-full px-2 py-0.5 bg-secondary-100"
                >
                  {toy}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    );
}

// function PersonCard({ person }) {
//     return (
//         <div className="max-w-sm border border-primary-200 rounded-xl px-4 pb-4 pt-6 bg-gradient-to-bl from-secondary-100 to-white via-white md:hover:shadow-xl md:hover:scale-105 transition-all space-y-4">
//             <div className="space-y-2">
//             <h3 className="font-medium text-xl">{person.name}</h3>
//             <p className="flex items-center justify-start space-x-2 text-xs font-medium uppercase text-primary-600">
//                 {person.age} years old & ???
//             </p>
//             <p className="text-sm text-primary-500 underline">
//                 {person.street} {person.city} {person.state} {person.zip}
//             </p>
//             </div>
//             <div className="space-y-1">
//             <h4 className="font-medium">Colors</h4>
//             <ul className="flex flex-wrap gap-2 text-sm text-secondary-800">
//                 <li className="bg-secondary-100 px-2 py-0.5 rounded-full">Color 1</li>
//                 <li className="bg-secondary-100 px-2 py-0.5 rounded-full">Color 2</li>
//                 <li className="bg-secondary-100 px-2 py-0.5 rounded-full">Color 3</li>
//             </ul>
//             </div>
//             <div className="space-y-1">
//             <h4 className="font-medium">Owner Contact</h4>
//             <ul className="font-mono text-sm">
//                 <li>{person.contact.email}</li>
//                 <li>{person.contact.phone}</li>
//             </ul>
//             </div>
//         </div>
//     );
// }