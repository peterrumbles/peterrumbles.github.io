import { Link } from "@remix-run/react";

export default function About() {
  return (
    <main className="main">
      <h1 className="page-title">About</h1>

      <div className="prose">
        <p>
          F3 was established on January 1, 2011 in Charlotte, North Carolina, by Dave Redding (“Dredd”) and Tim Whitmire (“OBT”). It was created to address the isolating nature of modern life by providing men with opportunities to connect, grow, and lead through structured workout groups that emphasize physical fitness, camaraderie, and personal growth.
        </p>
        <p>
          The Puget Sound region embraced F3 on March 12, 2016. Since its inception, it has expanded significantly, offering weekly workouts at various locations throughout the greater Puget Sound area. (<a href="https://map.f3nation.com/?lat=47.68&lon=-122.2&zoom=12" target="_blank" rel="noreferrer">See map</a>). Around 2021, F3 expanded beyond Puget Sound with the creation of our neighbors <a href="https://f3northwa.com/" target="_blank" rel="noreferrer">F3 North WA</a> and <a href="https://f3southsound.com/" target="_blank" rel="noreferrer">F3 South Sound</a>.
        </p>
        <p>Currently, the Puget Sound Super Region is made up of 5 Regions: Seattle, Redmond, Kirkland, Cascades & Tundra.</p>
      </div>

      <h2 className="section-title">What does F3 stand for?</h2>
      <p className="prose">F3 — our three Fs stand for <strong>Fitness</strong>, <strong>Fellowship</strong> and <strong>Faith</strong>.</p>

      <h3 className="section-title" style={{ fontSize: "1.25rem" }}>1st F – Fitness</h3>
      <p className="prose">First and foremost, it’s about the grind. Push yourself, embrace the shared struggle of a beatdown, and flex those leadership muscles as a workout Q. It’s not just a workout; it’s about you vs you.</p>

      <h3 className="section-title" style={{ fontSize: "1.25rem" }}>2nd F – Fellowship</h3>
      <p className="prose">We’re dedicated to fostering a strong sense of community and camaraderie through fitness. Our members often participate in marathons, Spartan races, mountaineering, sports teams and other challenging events. We emphasize personal growth and leadership development in all areas of life.</p>

      <h3 className="section-title" style={{ fontSize: "1.25rem" }}>3rd F – Faith</h3>
      <p className="prose">We are inclusive and welcome everyone. We are not a religious group; we encourage members to think beyond themselves and act for a greater cause. This is reflected in our commitment to community service, volunteering, and fostering respect for others.</p>

      <h2 className="section-title">5 Core Principles</h2>
      <ul className="prose">
        <li>Free of charge.</li>
        <li>Held outdoors, rain or shine, heat or cold.</li>
        <li>Open to all men.</li>
        <li>Peer led (rotating leadership).</li>
        <li>End with a Circle of Trust.</li>
      </ul>

      <h2 className="section-title">How Do I Start?</h2>
      <p className="prose">
        First, <Link to="/find-a-workout">pick a workout location</Link>, then choose a time/day that works for you. We recommend Saturdays for your first workout; we go for coffee afterwards. Questions? <a href="mailto:f3pugetsound@gmail.com">Email us</a>.
      </p>

      <h2 className="section-title">How Do I Prepare?</h2>
      <p className="prose">
        Come as you are regardless of your fitness level. Wear weather-appropriate workout clothes you don’t mind getting dirty, a good pair of shoes, and work gloves. In winter when it’s dark, a headlamp helps. Stay hydrated.
      </p>

      <h2 className="section-title">What’s an F3 Workout Like?</h2>
      <p className="prose">
        Plan to arrive a few minutes early to introduce yourself. Bootcamp-style workouts last 45–60 minutes: warmup, then the main workout, and we always finish with a <Link to="/lexicon#circle-of-trust-cot">Circle of Trust (CoT)</Link>.
      </p>

      <h2 className="section-title">Am I Fit Enough?</h2>
      <p className="prose">
        Our workouts aren’t about proving how strong you are. They’re about competing against yourself. You’re encouraged to modify exercises if needed. If you have a desire to get in shape and a willingness to push yourself, you’re ready.
      </p>

      <h2 className="section-title">How Much Does It Cost?</h2>
      <p className="prose">Nothing. F3 workouts are free. Show up for yourself.</p>
    </main>
  );
}
