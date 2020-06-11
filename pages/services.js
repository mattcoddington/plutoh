import Head from "next/head";

import Header from "../components/Header";

const Contact = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Plutoh | Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <Header />
      <main className="what-we-do">
        <div className="informative-banner">
          <img src="/images/bulb-icon.png" />
          <h1>
            <span>what we do</span>
            Plutoh is a full service web studio providing design, development,
            and marketing
          </h1>
        </div>
        <div className="feature design">
          <div className="content">
            <div className="position">
              <h2>Design</h2>
              <p>
                First impressions matter. An attractive, functional, and
                easy-to-use design is the quickest and most effective way to
                establish trust and develop your brand in the eyes of your
                customers.
                <br />
                <br />
                Whether you’re looking for a simple static website or a complex
                software solution, we'll work with you to
                <i>
                  <em>design the perfect website</em>
                </i>{" "}
                for your business.
              </p>
              <hr />
            </div>
          </div>
          <div
            className="image"
            style={{
              backgroundImage: "url('/images/what-we-do-feature-1.jpg')",
            }}
          ></div>
        </div>
        <div className="feature development">
          <div
            className="image"
            style={{
              backgroundImage: "url('/images/what-we-do-feature-2.jpg')",
            }}
          ></div>
          <div className="content">
            <div className="position">
              <h2>Development</h2>
              <p>
                More than ever, a well-coded website has a direct impact on your
                bottom line. Building trust through semantic code is imperative
                since modern browsers will identify and alert users to poor
                code.
                <br />
                <br />
                Search engine rankings are also closely tied to your code.
                Performance, security, and compliance will make or break your
                organic rankings in a way that
                <i>
                  <em>you can't afford to ignore</em>
                </i>
                .
              </p>
              <hr />
            </div>
          </div>
        </div>
        <div className="feature marketing">
          <div className="content">
            <div className="position">
              <h2>Marketing</h2>
              <p>
                Having an attractive and functional website is only half the
                battle - you have to get people to visit it to grow your
                business. Internet marketing can be one of the most powerful
                tools in a small business's arsenal when it comes to building
                business affordably.
                <br />
                <br />
                We've managed campaigns focusing on organic search engine
                rankings, Google Adwords, Facebook ads, Linkedin ads, Twitter
                ads, and even Pinterest ads.
                <em>
                  <i>
                    If there is a way to connect with a potential customer
                    online, we will find it for you
                  </i>
                </em>
                .
              </p>
              <hr />
            </div>
          </div>
          <div
            className="image"
            style={{
              backgroundImage: "url('/images/what-we-do-feature-3.jpg')",
            }}
          ></div>
        </div>
        <div className="feature website-box">
          <div
            className="image"
            style={{ backgroundImage: "url('/images/home-feature-1.jpg')" }}
          ></div>
          <div className="content">
            <div className="position">
              <h2>Website in a Box</h2>
              <p>
                Many of our customers just want a
                <i>
                  <em>
                    fast, simple way to establish a trustworthy web presence
                  </em>
                </i>
                that doesn’t cost a ton of cash and is super easy to maintain.
                So we created Website in a Box. It’s easy - just select your
                website design (or theme), give us your logo colors and
                typeface, and we do the rest!
              </p>
              <hr />
            </div>
          </div>
        </div>

        <div className="bottom-cta">
          <h2>Ready to finally have a website that rocks?</h2>
          <p>Let's work together to make your web presence amazing!</p>
          <a className="button" href="contact-us.php">
            Contact us to Get Started!
          </a>
        </div>
      </main>

      <footer>
        <div className="legal clear">
          <div className="left">
            <a href="https://www.thumbtack.com/profile/services/$hh2Lr8apB1X7g/">
              Find us on Thumbtack
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="right">
            <span>&copy; 2017 Plutoh LLC - 1-864-735-0667</span>
          </div>
        </div>
        <div className="social">
          <span>Connect with us:</span>
          <a href="https://twitter.com/plutohdotcom">
            <img src="/images/twitter-iconm.png" width="20" height="16" />
          </a>
          <a href="https://www.facebook.com/plutohdotcom/">
            <img src="/images/facebook-icon.png" width="20" height="20" />
          </a>
          <a href="#">
            <img src="/images/google-icon.png" width="32" height="20" />
          </a>
          <a href="https://www.instagram.com/plutohdotcom/">
            <img src="/images/instagram-icon.png" width="20" height="20" />
          </a>
          <a href="http://www.plutoh.com/pinterest.com/plutohdotcom/">
            <img src="/images/pinterest-icon.png" width="15" height="20" />
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Contact;
