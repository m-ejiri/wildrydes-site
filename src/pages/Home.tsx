import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("page-home");
    return () => document.body.classList.remove("page-home");
  }, []);
  return (
    <div className="home">
      <section className="home-hero" aria-label="Hero">
        <div className="overlay" />
        <div className="hero-inner container">
          <h1 className="title">Wild Rydes</h1>
          <a className="home-button" href="/auth">
            Giddy Up!
          </a>
        </div>
      </section>

      {/* How it works */}
      <section id="about" className="home-about">
        <div className="container">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 className="section-title">HOW DOES THIS WORK?</h2>
            <p className="content">
              In today’s fast paced world, you’ve got places you need to be but
              not enough time in your jam packed schedule. Wouldn’t it be nice
              if there were a transportation service that changed the way you
              get around daily? Introducing Wild Rydes, an innovative
              transportation service that helps people get to their destination
              faster and hassle-free. Getting started is as easy as tapping a
              button in our app.
            </p>
          </div>

          <div className="home-about-grid">
            <div className="home-about-block">
              <h3 className="title icon-download">Download The App</h3>
              <p className="content">
                Head over to the app store and download the Wild Rydes app.
                You’re just a few taps away from getting your ryde.
              </p>
            </div>
            <div className="home-about-block">
              <h3 className="title icon-unicorn">Request A Unicorn</h3>
              <p className="content">
                We can get you there. Simply request a ryde on the app and we'll
                connect you with a unicorn immediately.
              </p>
            </div>
            <div className="home-about-block">
              <h3 className="title icon-price">Pick A Price</h3>
              <p className="content">
                Pick the valuation you're willing to pay and your ryde is set
                up. The only surge is the acceleration you get when taking off.
              </p>
            </div>
            <div className="home-about-block">
              <h3 className="title icon-success">Ride Off To Success!</h3>
              <p className="content">
                After matching with your unicorn and agreeing to its terms,
                you’ll be all set. Your unicorn will arrive shortly to pick you
                up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="home-story">
        <div className="container">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 className="section-title">OUR STORY</h2>
            <p className="content">
              Wild Rydes was started by a former hedge fund analyst and a
              software developer. The two long-time friends happened upon the
              Wild Rydes idea after attending a silent yoga retreat in Nevada.
              After gazing upon the majestic herds of unicorns prancing across a
              surreal Nevada sunset, they witnessed firsthand the poverty and
              unemployment endemic to that once proud race. Whether it was
              modern society’s reliance on science over magic or not, we’ll
              never know the cause of their Ozymandian downfall and fade to
              obscurity. Moved by empathy, romance, and free enterprise, they
              saw an opportunity to marry society’s demand for faster, more
              flexible transportation to underutilized beasts of labor through
              an on-demand market making transportation app. Using the founders’
              respective expertise in animal husbandry and software engineering,
              Wild Rydes was formed and has since raised untold amounts of
              venture capital. Today, Wild Rydes has thousands of unicorns in
              its network fulfilling hundreds of rydes each day.
            </p>
          </div>
        </div>
      </section>

      {/* Sign Up */}
      <section id="signup" className="home-sign-up">
        <div className="container" style={{ textAlign: "center" }}>
          <img className="icon-w" src="/images/wr-home-W.png" alt="W icon" />
          <form onSubmit={(e) => e.preventDefault()} aria-label="Sign up form">
            <input type="email" placeholder="Enter your email address" />
            <button type="button">SUBMIT</button>
          </form>
          <h2 className="section-title" style={{ marginTop: "24px" }}>
            SIGN UP
          </h2>
          <p className="content">
            Wild Rydes is coming soon! Enter your email to enter the limited
            private beta
          </p>

          <div className="apps">
            <a className="app-icon" href="#">
              <img src="/images/wr-home-apple.png" alt="Apple" />
            </a>
            <a className="app-icon" href="#">
              <img src="/images/wr-home-google.png" alt="Google" />
            </a>
            <a className="app-icon" href="#">
              <img src="/images/wr-home-blackberry.png" alt="BlackBerry" />
            </a>
            <a className="app-icon" href="#">
              <img src="/images/wr-home-Xiaomi.png" alt="Xiaomi" />
            </a>
          </div>

          <div className="social" aria-label="Social links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Wechat</a>
            <a href="#">Weibo</a>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="home-quote">
        <div className="container">
          <div className="quote-wrap">
            <div className="quote">
              “I was almost late to my ultimate frisbee tournament in DOLORES
              park. But Wild Rydes got me there from the marina in under five
              minutes.”
            </div>
            <div className="quoter">- Satisfied Wild Rydes User</div>
          </div>
        </div>
      </section>

      {/* Kraken Callout */}
      <section className="kraken-callout">
        <div className="container">
          <div className="row">
            <div>
              <img src="/public/images/wr-home-kraken.png" alt="Kraken" />
            </div>
            <div>
              <h4 className="title">Coming Soon</h4>
              <p className="content">
                Kraken 3xplorer and Dragon Flyght. We’re looking to provide you
                a full service package from air, land, and to sea.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
