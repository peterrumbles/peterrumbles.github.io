const REGIONS: { name: string; aos: string[] }[] = [
  { name: "F3 Seattle", aos: ["Alki", "Bonsai", "Flash", "Hiawatha", "Mohai", "Gas Works", "Rat City", "Ravenna PB&J", "The Combine", "The Links", "The Pit", "The Needle", "The Zoo", "Valhalla", "Volunteer Park"] },
  { name: "F3 Kirkland", aos: ["City Hall PB&J", "Google PB&J / Mon", "Google PB&J / Thur", "Heritage Park", "Juanita Speed", "KIMs", "Pre Burn", "Ruck Mountain", "Sasquatch", "Speakeasy", "Thunderdome", "Torque", "VHS"] },
  { name: "F3 Redmond", aos: ["Bobcat", "Grasslawn", "Heavy Metal", "Mother Rucker", "Redmond Ridge"] },
  { name: "F3 Cascades", aos: ["Alpines", "Hurricane Ridge", "Moon Valley", "Perestroika", "Phoenix", "Purple Haze", "Robinswood", "Stray Balls"] },
  { name: "F3 Tundra", aos: ["Angmar", "Doom / Wed", "Doom / Sat", "Doom PB&J", "Log Boom", "Soft Trot Run", "Timber", "The Forge", "Tundra", "Tundra Speed"] },
  { name: "F3 North Sea", aos: ["Baseline", "Hawks Nest", "Kilimanjaro", "The Ranch"] },
  { name: "Virtual Workouts", aos: ["F3 Flow", "Virtual Bootcamp", "Q-source Matrix", "Active Book Club"] },
];

export default function Locations() {
  return (
    <main className="main">
      <h1 className="page-title">Locations</h1>
      <p className="prose">
        Workouts (AOs) by region. For times and map, use <a href="/find-a-workout">Find a workout</a> and <a href="https://map.f3nation.com/?lat=47.68&lon=-122.2&zoom=12" target="_blank" rel="noreferrer">the F3 map</a> or <a href="https://f3near.me/" target="_blank" rel="noreferrer">f3near.me</a>.
      </p>
      {REGIONS.map((region) => (
        <div key={region.name} className="region">
          <h3>{region.name}</h3>
          <ul className="ao-list">
            {region.aos.map((ao) => (
              <li key={ao}>{ao}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
