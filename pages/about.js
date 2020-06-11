import Head from "next/head";

import Header from "../components/Header";

const About = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Plutoh | About</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <Header />
      <main className="about-us">
        <div className="informative-banner">
          <h1>
            <span>about us</span>
            Just some nerds creating & marketing websites
          </h1>
        </div>
        <div className="content-container">
          <div className="content">
            <h1>Over 10 years of web design experience</h1>
            <img
              style={{ float: "right", margin: "0px 15px 15px 0px" }}
              src="/images/my-face.jpg"
              width="175"
            />
            <p>
              Hey, my name's Matt (that's my face over there), owner & lead
              designer of Plutoh. I've been doing ux/ui design for well over 10
              years now - I've worked on hundreds of projects from simple small
              business sites to massive enterprise applications. Over the years,
              I've pretty much seen it all - every hiccup, challenge, and
              success that can come from tackling a challenging ux problem.
              You'd be hard-pressed to find a web partner as experienced and
              committed as I am to helping your business grow.
            </p>

            <h2>So why us over a large agency?</h2>
            <p>
              With Plutoh you get the benefit of working with designs and
              developers that are focused enough to give your project the
              attention it deserves. Would you really trust your business to one
              of those large agencies who are just going to offload your project
              to some intern? I didn't think so.
            </p>
            <p>
              Our agile approach means we can compete on price. So not only will
              you have more experienced dudes working on your project, but
              you're going to pay less too. Not "some guy on Craigslist" less,
              but pretty damn affordable for the quality of service you're going
              to get.
            </p>
            <h2>Sold (or not)? Drop us a line - we'll get back to you asap</h2>
            <p>
              Whether you're sold and want us to start working on your project
              immediately or you have some more questions - please
              <a href="contact-us.php">contact us today</a> and lets see what we
              can do for your business.
            </p>
            <hr />
          </div>
          <div className="sidebar">
            {/* <div className="news-letter">
              <h2>Plutoh Newsletter</h2>
              <p>
                Get our newsletter sent directly to your inbox, and start
                growing your business!
              </p>
            </div> */}
            <div className="links">
              <h2>Other ways to contact us</h2>
              <ul>
                <li className="email">
                  <a href="#">hello@plutoh.com</a>
                </li>
                <li className="phone">
                  <a href="#">1-864-735-0667</a>
                </li>
                <li className="address">
                  <span>
                    PO BOX 26353
                    <br />
                    Greenville, SC
                    <br />
                    29616
                  </span>
                </li>
              </ul>
              <h2>We're suuuuuuper social</h2>
              <ul>
                <li className="twitter">
                  <a href="https://twitter.com/plutohdotcom">@plutohdotcom</a>
                </li>
                <li className="facebook">
                  <a href="https://www.facebook.com/plutohdotcom/">
                    /plutohdotcom
                  </a>
                </li>
                <li className="google">
                  <a href="#">/plutohdotcom</a>
                </li>
                <li className="instagram">
                  <a href="https://www.instagram.com/plutohdotcom/">
                    /plutohdotcom
                  </a>
                </li>
                <li className="pinterest">
                  <a href="pinterest.com/plutohdotcom/">/plutohdotcom</a>
                </li>
              </ul>
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

export default About;
