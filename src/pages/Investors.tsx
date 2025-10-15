import { useEffect } from "react";

export default function Investors() {
  useEffect(() => {
    document.body.classList.add("page-investors");
    return () => document.body.classList.remove("page-investors");
  }, []);

  return (
    <div className="investors-page">
      {/* 上部レインボー背景＋タイトル */}
      <section className="inv-hero">
        <div className="container">
          <img className="inv-logo" src="/images/logo.png" alt="Wild Rydes" />
          <h1 className="inv-title">
            BACKED BY TOP
            <br />
            DECILE INVESTORS
          </h1>
          <p className="inv-sub">
            We would not be anywhere without our trusted investors. We thank
            each of them for where we are today.
          </p>
        </div>
      </section>

      {/* 3社の紹介（牛の背景の上に3カラム） */}
      <section className="inv-list">
        <div className="container">
          <div className="inv-grid">
            <article className="investor">
              <h2 className="title pcp">
                Penglai Communications and Post New Century Technology
                Corporation Ltd
              </h2>
              <div className="subtitle">Global Communications Provider</div>
              <p className="content">
                PCPNCTC was formed in 2008 to hold the telecommunications
                services, media, and IT businesses of Penglai Communications and
                Post LTD, a multinational mass media and telecommunications
                company. PCPL provides broadband subscription television
                services, fixed telephone, and mobile telephone across 20
                countries and 3 continents.
              </p>
            </article>

            <article className="investor">
              <h2 className="title awesome">Tenderloin Capital</h2>
              <div className="subtitle">Venture Capital Firm</div>
              <p className="content">
                What makes us awesome sauce and not your typical venture firm?
                Backed by over three decades of experience and partnering
                successfully with entrepreneurs, Tenderloin Capital was founded
                to serve the needs of early-stage founders…
              </p>
            </article>

            <article className="investor">
              <h2 className="title barn">The Barn</h2>
              <div className="subtitle">Accelerator</div>
              <p className="content">
                The Barn is an institution for primarily incubating chicken eggs
                as well as the next revolutions in precision agriculture
                technology… We look forward to working with you.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="board">
        <div className="container">
          <div className="board-grid">
            <div className="card photo-1">
              <h3 className="name">DR. TIM WAGNER</h3>
              <p className="role">
                Chairman of the Board, Grand Master of the Serverless Rite
              </p>
            </div>

            <div className="card intro">
              <h2 className="intro-title">
                OUR BOARD
                <br />
                OF
                <br />
                DIRECTORS
              </h2>
              <p className="intro-text">
                Wild Rydes has a talented Board of Directors which advises the
                company on strategy and enabling business success… decision
                making techniques.
              </p>
            </div>

            <div className="card photo-2">
              <h3 className="name">VAUGHN R. NICHOLSON</h3>
              <p className="role">EIR at Awesome Sauce Capital</p>
            </div>

            <div className="card photo-3">
              <h3 className="name">CONWAY BULLE</h3>
              <p className="role">Partner at The Barn</p>
            </div>

            <div className="card photo-4">
              <h3 className="name">
                DR. SAMANTHA
                <br />
                WALLEFORD, PHD
              </h3>
              <p className="role">Managing Partner at Tenderloin Capital</p>
            </div>

            <div className="card photo-5">
              <h3 className="name">QILIN FEI</h3>
              <p className="role">
                Chairman of the Central Committee for Planning at PENGLAI
                COMMUNICATIONS AND POST NEW CENTURY TECHNOLOGY CORPORATION LTD
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
