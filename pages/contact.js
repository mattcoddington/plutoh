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
      <main className="contact-us">
        <div className="informative-banner">
          <img src="/images/big-email-icon.png" />
          <h1>
            <span>contact us</span>
            Contact us so we get started on your project asap!
          </h1>
        </div>
        <div className="content-container">
          <div className="content">
            <h1>Fill out the form below to holler at us</h1>
            <p>
              <div id="contact-area">
                <form method="post" action="contactengine.php">
                  <label for="Name">Name:</label>
                  <br />
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    className="textfield"
                  />
                  <br />

                  <label for="Email">Email:</label>
                  <br />
                  <input
                    type="text"
                    name="Email"
                    id="Email"
                    className="textfield"
                  />
                  <br />

                  <label for="Message">Message:</label>
                  <br />
                  <textarea
                    name="Message"
                    rows="30"
                    cols="40"
                    id="Message"
                  ></textarea>
                  <br />

                  <input
                    type="submit"
                    name="submit"
                    value="Submit"
                    className="button"
                  />
                </form>

                <div style={{ clear: "both" }} />
              </div>
            </p>
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

export default Contact;
