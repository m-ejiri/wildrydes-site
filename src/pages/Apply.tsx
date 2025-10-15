import { useEffect } from "react";

export default function Apply() {
  useEffect(() => {
    document.body.classList.add("page-apply");
    return () => document.body.classList.remove("page-apply");
  }, []);

  return (
    <div className="apply-page">
      {/* ヒーロー：レインボー背景＋牛＆樹木の前景を重ねる */}
      <section className="apply-hero" aria-label="Apply hero">
        <div className="container">
          <img className="apply-logo" src="/images/logo.png" alt="Wild Rydes" />
          <h1 className="apply-title">APPLY TODAY</h1>
        </div>
      </section>

      {/* 本文 */}
      <section className="apply-content">
        <div className="container prose">
          <p>
            Wild Rydes is on the hunt for the most mythical creature of all:
            talented software engineers! We’re seeking a technical dream team
            who will help us build a future where every person has a unicorn to
            ryde.
          </p>
          <p>
            From a technical standpoint, Wild Rydes believes in a future where
            there are no servers to provision, manage, or scale! Interested
            candidates can begin following the Serverless Way by exploring the
            following options:
          </p>
          <ul>
            <li>
              Enter our{" "}
              <a
                href="http://awschatbot.devpost.com"
                target="_blank"
                rel="noreferrer"
              >
                hackathon
              </a>
            </li>
            <li>Train in the art of serverless</li>
          </ul>

          <h2>THE SERVERLESS MANIFESTO:</h2>
          <p>Functions are the unit of deployment and scaling.</p>
          <p>
            No machines, VMs, or containers visible in the programming model.
          </p>
          <p>Permanent storage lives elsewhere.</p>
          <p>
            Scales per request. Users cannot over- or under-provision capacity.
          </p>
          <p>Never pay for idle (no cold servers/containers or their costs).</p>
          <p>Implicitly fault tolerant because functions can run anywhere.</p>
          <p>BYOC - Bring your own code.</p>
          <p>Metrics and logging are a universal right.</p>
        </div>
      </section>
    </div>
  );
}
