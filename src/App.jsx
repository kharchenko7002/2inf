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
        <svg className="chevron" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      <div className="acc-panel" id={`sect-${i}`} role="region" aria-labelledby={`acc-${i}`}>
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

        <div className="profile">
          <img className="avatar" src="src\1.jpg" alt="Kostiantyn portrett" />
          <p className="profile-text">
            Hei! Jeg er Kostiantyn. Jeg liker å lære litt hver dag og holde ting enkelt:
            små oppgaver, korte notater og jevn fremdrift. Det hjelper meg å beholde
            fokus og komme videre uten stress.
          </p>
        </div>

        <div className="accordion">
          <AccordionItem i={1} title="Om meg" open={openId === 1} onToggle={() => toggle(1)}>
            <p>
              Jeg heter <strong>Kostiantyn</strong> og går nå på <strong>2INF</strong>.
              På fritiden liker jeg å <span className="highlight">jobbe</span>,
              men mest av alt er jeg interessert i programmering.
            </p>
            <p>
              Jeg prøver å dele opp alt i små steg og fullføre det jeg begynner på. Slik ser jeg
              raskt fremgang og lærer hva som fungerer best for meg.
            </p>
            <div className="note">Kort og jevnt – det er måten jeg liker å jobbe og lære på.</div>
          </AccordionItem>

          <AccordionItem i={2} title="Forventninger til skoleåret" open={openId === 2} onToggle={() => toggle(2)}>
            <p>
              Vi har bare programmering i år – en fin mulighet til å fordype meg i koding uten
              andre distraksjoner.
            </p>
            <p>
              Først vil jeg friske opp grunnlaget (JS/HTML/CSS), deretter mer praksis med{" "}
              <strong>React</strong> og <strong>Next.js</strong>. Målet er jevn rytme og små,
              tydelige delmål.
            </p>
          </AccordionItem>

          <AccordionItem i={3} title="Fremtidsplaner og praksis" open={openId === 3} onToggle={() => toggle(3)}>
            <p>
              Praksis i bedrift mer sannsynlig skal være hos Crayon. Jeg vil gjerne se hvordan arbeidet
              fungerer i et team: prioriteringer, kodegjennomgang og små forbedringer fra dag til dag.
            </p>
            <p>
              Videre vurderer jeg enten lærlingløp eller påbygg for videre studier, for eksempel
              ingeniørfag.
            </p>
          </AccordionItem>
        </div>
      </main>
    </div>
  );
}
