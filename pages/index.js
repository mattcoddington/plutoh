import Head from "next/head";

import Header from "../components/Header";

const Home = () => (
  <React.Fragment>
    <Head>
      <title>Plutoh Web Services</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/css/reset.css" />
      <link rel="stylesheet" href="/css/style.css" />
    </Head>
    <Header />

    <main className="home">
      <div className="banner">
        <h1>Creating beautiful, responsive websites is kind of our thing</h1>
        <a className="button" href="contact-us.php">
          Lets do this!
        </a>
        <img src="/images/home-banner-image.png" width="1212" height="492" />
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
              that doesn’t cost a ton of cash and is super easy to maintain. So
              we created Website in a Box. It's easy - just select your website
              design (or theme), give us your logo colors and typeface, and
              we'll do the rest!
            </p>
            <a className="button" href="contact-us.php">
              Get started
            </a>
          </div>
        </div>
      </div>
      <div className="secondary-banner">
        <img
          src="/images/home-secondary-banner.jpg"
          width="100%"
          height="451"
        />
      </div>
      <div className="feature complete-partner">
        <div className="content">
          <div className="position">
            <h2>Your complete web partner</h2>
            <p>
              We work hand in hand with every customer to make sure their web
              presence is meeting their business needs. From the initial
              consultation through implementation and beyond, we work
              dilligently to make sure{" "}
              <i>
                <em>your investment is working</em>
              </i>
              .
            </p>
            <hr />
          </div>
        </div>
        <div
          className="image"
          style={{ backgroundImage: "url('/images/home-feature-2.jpg')" }}
        ></div>
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

export default Home;
