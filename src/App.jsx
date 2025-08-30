import { useState } from "react";

function AccordionItem({ i, title, open, onToggle, children }) {
  return (
    <div className={`acc-item ${open ? "open" : ""}`}>
      <button
        className="acc-trigger"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`sect-${i}`}
        id={`acc-${i}`}
        type="button"
      >
        <span className="badge">{i}</span>
        <span className="acc-title">{title}</span>
        <svg
          className="chevron"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      <div
        className="acc-panel"
        id={`sect-${i}`}
        role="region"
        aria-labelledby={`acc-${i}`}
      >
        <div className="acc-inner">{children}</div>
      </div>
    </div>
  );
}

export default function App() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="container">
      <main className="card">
        <h1 className="title">Om meg og mine forventninger</h1>
        <p className="subtitle">Et lite sammendrag av mål, planer og interesser</p>

        <div className="accordion">
          <AccordionItem
            i={1}
            title="Om meg"
            open={openId === 1}
            onToggle={() => toggle(1)}
          >
            <p>
              Jeg heter <strong>kostiantyn</strong> og går nå på <strong>2INF</strong>.
              På fritiden liker jeg å <span className="highlight">[skriv inn hobbyer]</span>,
              men mest av alt er jeg interessert i programmering.
            </p>
            <div className="note">
              Tips: erstatt teksten i klammer med dine faktiske interesser.
            </div>
          </AccordionItem>

          <AccordionItem
            i={2}
            title="Forventninger til skoleåret"
            open={openId === 2}
            onToggle={() => toggle(2)}
          >
            <p>
              Vi har bare programmering i år – flott mulighet til å fokusere på
              koding uten distraksjoner.
            </p>
            <p>
              Etter en travel sommer vil jeg friske opp det jeg kunne fra før og
              bygge videre.
            </p>
            <p>
              Fokus: <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, samt{" "}
              <strong>Next.js</strong> og <strong>React</strong>. Vurderer også{" "}
              <strong>C</strong>/<strong>C++</strong>.
            </p>
          </AccordionItem>

          <AccordionItem
            i={3}
            title="Fremtidsplaner og praksis"
            open={openId === 3}
            onToggle={() => toggle(3)}
          >
            <p>
              Praksis i bedrift er svært sannsynlig (ca. 90 %) – fin mulighet til å
              lære hvordan programmering brukes i praksis.
            </p>
            <p>
              Videre kan jeg gå som lærling eller ta påbygg for ingeniørstudier.
            </p>
          </AccordionItem>
        </div>
      </main>
    </div>
  );
}
