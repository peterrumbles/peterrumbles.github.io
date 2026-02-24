const LEXICON: { term: string; id: string; def: string }[] = [
  { id: "ao", term: "AO", def: "Area of Operation. A location where we meet to work out. You may hear someone say “I post at the Combine AO.”" },
  { id: "aye", term: "AYE", def: "I agree." },
  { id: "backblast", term: "Backblast", def: "After a workout, the Q posts a summary in Slack: when, who was there, what the workout was, and any announcements. These are used to generate stats." },
  { id: "beatdown", term: "Beatdown", def: "Another name for a workout. Most last 45 min to 1 hour." },
  { id: "beerteria", term: "Beerteria", def: "Staying around after a workout to hang out, often at a brewery. Usually 15–30 minutes." },
  { id: "black-ops", term: "Black Ops / EC (Extra Credit)", def: "An unofficial workout not listed as an AO—informal or last-minute, or a group not yet committed as an official AO." },
  { id: "coffeeteria", term: "Coffeeteria", def: "Staying around after a morning workout to hang out, often at a coffee shop. Usually 15–30 minutes." },
  { id: "cadence", term: "Cadence", def: "The count used in most exercises. The Q calls out “1, 2, 3.”" },
  { id: "csaup", term: "CSAUP", def: "Completely Stupid And Utterly Pointless." },
  { id: "circle-of-trust-cot", term: "Circle of Trust (COT)", def: "Every F3 workout ends with a Circle of Trust: count of men, FNG names, announcements, shout outs and words of wisdom." },
  { id: "comms-q", term: "Comms Q", def: "The leader responsible for internal and external communication." },
  { id: "coupon", term: "Coupon", def: "A weighted object used in the workout (e.g. cinderblock)." },
  { id: "downrange", term: "Downrange", def: "Working out with an F3 group outside your home region (e.g. Puget Sound PAX doing a workout in Austin)." },
  { id: "eh", term: "EH", def: "Emotional Headlock. The process of talking with a guy and getting him to come to an F3 workout." },
  { id: "fartsack", term: "Fartsack", def: "Bed." },
  { id: "fartsacking", term: "Fartsacking", def: "Staying in bed instead of posting." },
  { id: "first-f-q", term: "First F-Q", def: "The leader responsible for overseeing fitness-related activities and workouts." },
  { id: "fng", term: "FNG (Friendly New Guy)", def: "Someone at their first workout. You get your F3 nickname at the end of your first workout; until then you’re the FNG." },
  { id: "gloom", term: "Gloom", def: "Pre-dawn. “See you in the Gloom” is a common tagline." },
  { id: "hc", term: "HC", def: "Hard Commit. Committing to showing up to a workout, often by responding to a pre-blast with the HC emoji." },
  { id: "ice", term: "ICE", def: "In Case of Emergency." },
  { id: "him", term: "HIM", def: "High Impact Man. A leader embracing F3 pillars and making a positive impact, or a disrupter committed to strong effect." },
  { id: "mumber-chatter", term: "Mumber Chatter", def: "Everyday chatter; or talking during the workout to encourage the Q, other PAX, or connect with FNGs." },
  { id: "nantan", term: "Nantan", def: "The overall leader of the Region, akin to a Regional President." },
  { id: "otb", term: "OTB", def: "Off The Books." },
  { id: "pbj", term: "PB&J", def: "Park, Beer and Jam. Afternoon workouts: workout in the park, then beer and jam." },
  { id: "pax", term: "PAX", def: "An F3 participant. The term has military roots. Anyone with an F3 name (excluding FNGs)." },
  { id: "penalty-burpees", term: "Penalty Burpees", def: "When you’re late for a beatdown you pay in burpees." },
  { id: "post", term: "Post", def: "Verb. Posting to an AO means showing up for a workout. “I posted at The Needle last week.”" },
  { id: "preblast", term: "Preblast", def: "The Slack post (#pb) that confirms the next day’s workout at each AO. Check before bed for any changes." },
  { id: "proud-papa", term: "Proud Papa", def: "The person who first brought you to F3 and your first workout." },
  { id: "q", term: "Q", def: "The person leading the workout. Creates the workout, ensures no one is left behind, and ends on time." },
  { id: "q-school", term: "Q School", def: "Rules and lessons to become a workout leader. When you’re ready, you become The Q." },
  { id: "respect", term: "Respect", def: "A PAX who has reached his 50th birthday." },
  { id: "region", term: "Region", def: "Puget Sound has 5 Regions: Seattle, Kirkland, Redmond, Cascades, Tundra. Each region supports multiple AOs." },
  { id: "ruck", term: "Ruck", def: "A workout where you carry a weighted backpack or other weight." },
  { id: "second-f-q", term: "Second F-Q", def: "The leader responsible for fostering community and fellowship." },
  { id: "site-q", term: "Site Q", def: "The leader responsible for a specific workout location." },
  { id: "shield-lock", term: "Shield Lock", def: "A team of two or more men formed to perform a specific mission for the benefit of a community or organization." },
  { id: "slack", term: "Slack", def: "The app F3 Puget Sound uses to communicate, post announcements and backblasts." },
  { id: "starsky", term: "Starsky", def: "Fartsacking the workout but still showing up for Coffeeteria." },
  { id: "super-region", term: "Super Region", def: "Puget Sound F3 as a whole: Seattle, Kirkland, Tundra, Cascades & Redmond." },
  { id: "full-starsky", term: "Full Starsky", def: "Fartsacking the workout but still posting for Coffeeteria in full workout attire." },
  { id: "t-claps", term: "T-CLAPS", def: "Triple Claps. Like a “thumbs up”—three short claps in admiration." },
  { id: "third-f-q", term: "Third F-Q", def: "The leader responsible for volunteer and service activities." },
  { id: "weasel-shaker", term: "Weasel Shaker", def: "Operational manager, often the COO." },
  { id: "virgin-q", term: "VIRGIN-Q (VQ)", def: "A PAX’s first time leading an F3 workout." },
  { id: "yhc", term: "YHC", def: "Your Humble Correspondent. The author of a Slack post or backblast." },
];

export default function Lexicon() {
  return (
    <main className="main">
      <h1 className="page-title">Lexicon</h1>
      <p className="prose">
        F3 has its own lexicon. Here are common terms from the Puget Sound region (from <a href="https://f3pugetsound.com/lexicon/" target="_blank" rel="noreferrer">F3 Puget Sound</a>).
      </p>
      <ul className="lexicon-list">
        {LEXICON.map(({ id, term, def }) => (
          <li key={id} className="lexicon-item" id={id}>
            <span className="lexicon-term">{term}</span>
            <p className="lexicon-def">{def}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
