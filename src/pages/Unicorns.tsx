// src/pages/Unicorns.tsx
import { useEffect } from "react";

export default function Unicorns() {
  useEffect(() => {
    document.body.classList.add("page-unicorns");
    return () => document.body.classList.remove("page-unicorns");
  }, []);

  return (
    <div className="unicorns">
      {/* ヒーロー：背景レインボー＋タイトル */}
      <section className="unic-hero">
        <div className="container">
          <img className="unic-logo" src="/images/logo.png" alt="Wild Rydes" />
          <h1 className="unic-title">UNICORNS ARE OUR FRIENDS</h1>
        </div>
      </section>

      {/* 説明文 */}
      <section className="unic-intro">
        <div className="container prose">
          <p>
            Wild Rydes has a dedicated staff that recruits, trains, and tends to
            our herd of unicorns. We take great pride in the quality of unicorns
            and rydes that we provide to our customers, and our staff exercises
            the utmost care in vetting the unicorns that join our herd.
          </p>
          <p>
            Every unicorn goes through a rigorous due diligence process where we
            perform background checks, flying exams, and several rounds of
            interviews. Unicorns accepted to Wild Rydes are then treated to the
            best care and maintenance possible. We provide them excellent
            benefits, health care, and employee perks. This is part of our
            company philosophy in which happy unicorns lead to happy customers.
          </p>
          <p>Meet a few of the unicorns that are part of our family.</p>
        </div>
      </section>

      {/* リスト */}
      <section className="unicorns-list">
        {/* 1 */}
        <div className="unic-row">
          <div className="unic-figure left">
            <img src="/images/wr-unicorn-one.png" alt="Bucephalus" />
          </div>
          <div className="unic-copy right">
            <h2 className="unic-name pink">BUCEPHALUS</h2>
            <div className="unic-breed">Golden Swiss</div>
            <p>
              Bucephalus joined Wild Rydes in February 2016 and has been giving
              rydes almost daily. He says he most enjoys getting to know each of
              his ryders, which makes the job more interesting for him. In his
              spare time, Bucephalus enjoys watching sunsets and playing Pokemon
              Go.
            </p>
          </div>
        </div>

        {/* 2 交互レイアウト */}
        <div className="unic-row alt">
          <div className="unic-figure right">
            <img src="/images/wr-unicorn-two.png" alt="Shadowfox" />
          </div>
          <div className="unic-copy left">
            <h2 className="unic-name cyan">SHADOWFOX</h2>
            <div className="unic-breed">Brown Jersey</div>
            <p>
              Shadowfox joined Wild Rydes after completing a distinguished
              career in the military, where he toured the world in many critical
              missions. Shadowfox enjoys impressing his ryders with magic tricks
              that he learned from his previous owner.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="unic-row">
          <div className="unic-figure left">
            <img src="/images/wr-unicorn-three.png" alt="Rocinante" />
          </div>
          <div className="unic-copy right">
            <h2 className="unic-name amber">ROCINANTE</h2>
            <div className="unic-breed">Baby Flying Yellowback</div>
            <p>
              Rocinante recently joined the Wild Rydes team in Madrid, Spain.
              She was instrumental in forming Wild Rydes’ Spanish operations
              after a long, distinguished acting career in windmill
              shadow-jousting.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
