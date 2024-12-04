import Container from "@/app/components/Container";
import PopUp from "@/app/components/PopUp";
import { promises as fs } from 'fs';

export default async function DSOHome() {
  const file = await fs.readFile(process.cwd() + '/app/miniProj/deepSkyObjects/DSO.json', 'utf8');
  const dsos = JSON.parse(file);
  return (
    <Container>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dsos.map((dso) => (
          <DSOCard key={dso.name} dso={dso} />
        ))}
      </ul>
    </Container>
  );
}

function DSOCard({ dso }) {
  return (
    <li className="border md:hover:scale-105 transition-transform border-primary-200 bg-gradient-to-tr from-secondary-500 to-secondary-100 via-white rounded-xl p-4 flex items-start justify-start space-x-4">
      <img
        src={dso.pic}
        alt={dso.name}
        className="w-40 h-40 rounded-lg border object-cover border-primary-200"
      />
      <div className="space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg font-medium">{dso.name}</h3>
          <p className="text-xs font-medium text-primary-600">
            {dso.distance} lightyear{dso.distance === 1 ? "" : "s"} away.
          </p>
          <p className="text-xs font-medium text-primary-600">
            {dso.distance >= 100 ? " That's very far!" : ""}
          </p>
        </div>
        <PopUp key = {dso.name} dso={dso} />
      </div>
    </li>
  );
}


