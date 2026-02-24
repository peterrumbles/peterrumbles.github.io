import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <section className="hero">
        <h1>F3 Puget Sound</h1>
        <p className="tagline">Leave no man behind, but leave no man where you find him.</p>
      </section>
      <main className="main">
        <h2 className="section-title">What We Do</h2>
        <div className="prose">
          <p>
            The mission of F3 is to plant, grow, and serve small workout groups for men for the invigoration of Male Community Leadership.
            Our workouts are called <Link to="/lexicon#beatdown">beatdowns</Link>. They are boot camp-style workout sessions tailored each day by the workout lead – <Link to="/lexicon#q">The Q</Link>. A key facet of the workouts is to push yourself. In the end it comes down to <strong>You vs. You</strong>.
          </p>
          <p>
            With over 50+ workouts across the greater Puget Sound Region, <Link to="/find-a-workout">pick one that fits your schedule and show up</Link>.
          </p>
        </div>

        <div className="stat" style={{ marginTop: "2rem" }}>
          <span className="stat-value">1791+</span>
          <span className="stat-label">Active <Link to="/lexicon#pax">PAX</Link> in the Puget Sound <Link to="/lexicon#super-region">Super Region</Link>.</span>
        </div>

        <h2 className="section-title">The F3 Credo</h2>
        <p className="prose">Leave no man behind, but leave no man where you find him.</p>

        <p style={{ marginTop: "2rem" }}>
          <Link to="/find-a-workout" className="btn">Find a workout</Link>
          {" "}
          <Link to="/about" className="btn btn-secondary">About</Link>
        </p>
      </main>
    </>
  );
}
