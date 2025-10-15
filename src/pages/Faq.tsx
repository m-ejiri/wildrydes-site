import { useEffect } from "react";

export default function Faq() {
  useEffect(() => {
    document.body.classList.add("page-faq");
    return () => document.body.classList.remove("page-faq");
  }, []);

  return (
    <div className="faq-page">
      {/* ヒーロー（背景レインボー＋左にユニコーン） */}
      <section className="faq-hero" aria-label="FAQ hero">
        <div className="container">
          <img className="faq-logo" src="/images/logo.png" alt="Wild Rydes" />
          <h1 className="faq-title">
            FREQUENTLY ASKED
            <br />
            QUESTIONS
          </h1>
        </div>
      </section>

      {/* 本文（Q/A のDL） */}
      <section className="faq-list">
        <div className="container narrow">
          <dl className="qa">
            <dt>Q: Why should I use this app?</dt>
            <dd>
              A: Unicorns are faster, safer, and more reliable. In recent times,
              their numbers have grown significantly, reaching a scale that
              makes it finally possible to harness them for mass transportation
              at an affordable cost.
            </dd>

            <dt>
              Q: How do you recruit the unicorns? How can I know that my unicorn
              is trustworthy?
            </dt>
            <dd>
              A: Our unicorns are recruited from only the most humane and
              highest standard unicorn farms. Our unicorns are grassfed, free
              range creatures raised on vegan, non-GMO diets. These unicorns are
              also completely safe because unicorns have infallible morality and
              judgment.
            </dd>

            <dt>Q: How do I request a unicorn?</dt>
            <dd>
              A: Simply download our app, then tap a button to begin. Your
              unicorn will arrive shortly.
            </dd>

            <dt>Q: How much does it cost?</dt>
            <dd>
              A: Since Wild Rydes is a marketplace for flight-based
              transportation, the price you pay is based on distance and unicorn
              availability. You set a max price and we match you with a unicorn
              willing to accept.
            </dd>

            <dt>Q: How does it work?</dt>
            <dd>
              A: Our product matches idle unicorns with ryders based on
              proximity and shortest time-to-destination. It runs on a
              serverless architecture so we scale reliably as our user base
              grows.
            </dd>

            <dt>Q: What if I have a complaint about my unicorn?</dt>
            <dd>
              A: Our customer team (and friendly chatbots) are available 24/7 to
              help.
            </dd>

            <dt>Q: How do I cancel my ride?</dt>
            <dd>A: Tap the “Cancel Ryde” button in the app.</dd>

            <dt>Q: Can I use Wild Rydes internationally?</dt>
            <dd>A: Yes, in most countries except those restricted by OFAC.</dd>

            <dt>Q: How do I pay for my ryde?</dt>
            <dd>
              A: Add a payment method (credit/debit/Bitcoin/Vespene gas). After
              your ryde, the fare is charged automatically.
            </dd>

            <dt>Q: How many passengers can my unicorn take?</dt>
            <dd>
              A: Most unicorns carry 1 passenger; large size can take 2. Sleigh
              version up to 4.
            </dd>

            <dt>Q: What if I lose an item during my ryde?</dt>
            <dd>
              A: It’s unlikely we can retrieve items that fall off during
              flight.
            </dd>

            <dt>Q: How do I share my route?</dt>
            <dd>A: Use “Share Route” in the app to share ETA/status.</dd>

            <dt>Q: How do I rate my unicorn?</dt>
            <dd>
              A: After your ryde completes, rate in the app. We strive for 5
              stars!
            </dd>

            <dt>Q: What if my unicorn doesn’t match the photo?</dt>
            <dd>A: Do not board and report the imposter immediately.</dd>

            <dt>Q: Can I use Concur with Wild Rydes?</dt>
            <dd>
              A: Yes, connect your Concur profile to track business trips.
            </dd>

            <dt>Q: Can I request a specific unicorn?</dt>
            <dd>
              A: While we do not allow requesting specific unicorns, you can
              choose the type and size of unicorn using the app.
            </dd>

            <dt>Q: Why do you charge a service fee?</dt>
            <dd>
              A: The service fee is a fixed charge added to every ryde. This
              helps us pay for our on-going maintenance and operating costs
              required to run the service and tend to our unicorn herd.
            </dd>
          </dl>
        </div>
      </section>
    </div>
  );
}
