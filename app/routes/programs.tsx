import { Link } from "@remix-run/react";

export default function Programs() {
  return (
    <main className="main">
      <h1 className="page-title">Programs</h1>
      <p className="prose">
        F3 Puget Sound runs programs across the three Fs: Fitness (1st F), Fellowship (2nd F), and Faith (3rd F). Details and signups are on the main site and in Slack.
      </p>

      <h2 className="section-title">1st F – Fitness</h2>
      <p className="prose">CSAUP events, challenges, and running groups. Examples: Great Northern CSAUP, Iron Pax Challenge, Lost in the Woods, Sasquatch Flag, Running Groups, and more.</p>

      <h2 className="section-title">2nd F – Fellowship</h2>
      <p className="prose">Community and camaraderie beyond the beatdown: Softball League, PAX Retreat, Camping, Mountaineering, Go30, 2.0 Kids Workouts.</p>

      <h2 className="section-title">3rd F – Faith</h2>
      <p className="prose">Service and giving back: Freed 2 Bleed, Base 2 Space, Food Drives, Puget Sound Clean-up, and other charitable fundraising.</p>

      <p className="prose" style={{ marginTop: "2rem" }}>
        For the full list and how to get involved, see <a href="https://f3pugetsound.com/programs/" target="_blank" rel="noreferrer">F3 Puget Sound – Programs</a> and <Link to="/contact">Contact</Link> / Slack.
      </p>
    </main>
  );
}
