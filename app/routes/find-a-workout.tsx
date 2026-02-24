export default function FindAWorkout() {
  return (
    <main className="main">
      <h1 className="page-title">Find a Workout</h1>

      <div className="prose">
        <p>
          F3 Puget Sound hosts different workouts every week. A workout (flag on the map) is called an <a href="/lexicon#ao">AO (Area of Operation)</a>; it repeats once a week at the same time and place. Workout styles include Bootcamp, Running, and Rucking.
        </p>
      </div>

      <h2 className="section-title">Map</h2>
      <p className="prose">
        <a href="https://map.f3nation.com/?lat=47.68&lon=-122.2&zoom=12" target="_blank" rel="noreferrer">View F3 Nation map (Puget Sound)</a> — use the map to find an AO near you.
      </p>

      <h2 className="section-title">Find the Closest Workout</h2>
      <p className="prose">
        Use <a href="https://f3near.me/" target="_blank" rel="noreferrer">f3near.me</a> to find the closest workout to your location.
      </p>

      <h2 className="section-title">Workout List by Region</h2>
      <p className="prose">
        See our <a href="/locations">Locations</a> page for a full list of regions and AOs (workout names).
      </p>

      <h2 className="section-title">Virtual Workouts</h2>
      <p className="prose">
        Can’t make an AO? Check out <a href="https://f3pugetsound.com/virtual-bootcamp/" target="_blank" rel="noreferrer">virtual workouts you can do anywhere</a> on the main F3 Puget Sound site.
      </p>
    </main>
  );
}
