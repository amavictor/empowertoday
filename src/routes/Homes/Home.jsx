
import "./Home.scss"
import { Button } from '@mui/material';
import MoneyGif from "../../assets/gifs/money-bag.gif"
import Community from "../../assets/gifs/social-care.gif"
import Peace from "../../assets/gifs/handshake.gif"
import Logo from "../../assets/logo.png"

import Gallery from "react-photo-gallery";
import { photos } from "../../photos";
import { Link } from "react-router-dom";
import { Footer } from "../../components/footer/footer";




export const Home = () => {
  return (
    <>
      <main>
        <header>
          <section className='header'>
            <h1>Empowering Lives, Transforming Communities</h1>
            <div>
              <h2>Unleashing Compassion, Igniting Change: A Journey Towards a Better World.</h2>
              <h2>Catalyzing Positive Impact through Education, Advocacy, and Opportunity</h2>
            </div>
            <Button variant='contained'>Learn more</Button>
          </section>
        </header>

        <section className='main-section'>
          <div className='purpose-card'>
            <div className='purpose-items'>
              <img
                src={MoneyGif}
                alt="Empowerment"
              />
              <h5>Empowerment </h5>
            </div>
            <div className='purpose-items'>
              <img
                src={Community}
                alt="Empowerment"
              />
              <h5>Community </h5>
            </div>
            <div className='purpose-items'>
              <img
                src={Peace}
                alt="Empowerment"
              />
              <h5>Peace</h5>
            </div>
          </div>


          <section className="believe-inspire">
            <div className="what-we-do-container">
              <div>
                <h5>What we can do</h5>
                <h3>We believe that we can save more lives with you</h3>
              </div>
              <div>
                <p>We believe that together, we can make a greater
                  impact and save more lives. Join us in our mission
                  to create positive change and improve the well-being
                  of communities around the world.
                </p>
              </div>
            </div>

            <div className="active-steps">
              <div className="card-container">
                <img
                  src="https://demo.themefisher.com/wishfund/images/about/image-1.jpg"
                  alt="Boy with water on face"
                />
                <h6>Get inspired</h6>
                <p>Be driven by compassion, Fueled by a loving heart.</p>
              </div>
              <div className="card-container">
                <img
                  src="https://demo.themefisher.com/wishfund/images/about/image-2.jpg"
                  alt="Girl drinking from tap"
                />
                <h6>Get inspired</h6>
                <p>Be driven by compassion, Fueled by a loving heart.</p>
              </div>
              <div className="card-container">
                <img
                  src="https://demo.themefisher.com/wishfund/images/about/image-3.jpg"
                  alt="Boy with water"
                />
                <h6>Get inspired</h6>
                <p>Be driven by compassion, Fueled by a loving heart.</p>
              </div>
              <div className="card-container">
                <img
                  src="https://www.africasvoices.org/wp-content/uploads/2019/01/roman-nguyen-lPPkJ4NfQtQ-unsplash.jpg"
                  alt="Happy children"
                />
                <h6>Get inspired</h6>
                <p>Be driven by compassion, Fueled by a loving heart.</p>
              </div>
            </div>
          </section>

          <section className="make-a-difference">
            <div className="blue-container" />
            <div className="video-container">
              <h3>We Make a Difference in Their Lives</h3>
              <aside>
                <img
                  src="https://www.africasvoices.org/wp-content/uploads/2019/01/roman-nguyen-lPPkJ4NfQtQ-unsplash.jpg"
                />
              </aside>
              <div>
                <div className="stats-container">
                  <h6>5</h6>
                  <p>Years of Experience</p>
                </div>
                <div className="stats-container">
                  <h6>25</h6>
                  <p>Volunteers</p>
                </div>
                <div className="stats-container">
                  <h6>2</h6>
                  <p>Countries</p>
                </div>
                <div className="stats-container">
                  <h6>50K+</h6>
                  <p>people helped</p>
                </div>
              </div>
            </div>
          </section>

          <section className="gallery-preview">
            <h4>Our Gallery</h4>
            <h3>We connect with people across different sectors.
              We take risks and we always keep learning.
            </h3>
            <Link>View Our Gallery</Link>
            <Gallery photos={photos} />
          </section>

          <hr />

          <section className="events">
            <div className="events-header">
              <h4>Latest Events</h4>
              <h3>Our recent courses to serve better.</h3>
              <p>We provide services in the area of IFRS and management reporting,
                helping companies to reach their highest level.</p>
            </div>

            <div className="causes-display">
              <div className="causes-box">
                <img
                  src="https://demo.themefisher.com/wishfund/images/about/image-1.jpg"
                />
                <div className="details-container">
                  <h5>Save Poor Childrens</h5>
                  <hr />

                  <div className="stats">
                    <p>Goal: <span>N 1.5M</span></p>
                    <p>Raised:  <span>N 200k </span></p>
                  </div>

                  <hr />
                  <p>Save poor child by supporting text below as a natural
                    lead-in to additional content.
                  </p>

                  <Button variant="contained">Donate now</Button>
                </div>

              </div>


              <div className="causes-box">
                <img
                  src="https://demo.themefisher.com/wishfund/images/about/image-1.jpg"
                />
                <div className="details-container">
                  <h5>Save Poor Childrens</h5>
                  <hr />

                  <div className="stats">
                    <p>Goal: <span>N 1.5M</span></p>
                    <p>Raised:  <span>N 200k </span></p>
                  </div>

                  <hr />
                  <p>Save poor child by supporting text below as a natural
                    lead-in to additional content.
                  </p>

                  <Button variant="contained">Donate now</Button>
                </div>

              </div>


              <div className="causes-box">
                <img
                  src="https://demo.themefisher.com/wishfund/images/about/image-1.jpg"
                />
                <div className="details-container">
                  <h5>Save Poor Childrens</h5>
                  <hr />

                  <div className="stats">
                    <p>Goal: <span>N 1.5M</span></p>
                    <p>Raised:  <span>N 200k </span></p>
                  </div>

                  <hr />
                  <p>Save poor child by supporting text below as a natural
                    lead-in to additional content.
                  </p>

                  <Button variant="contained">Donate now</Button>
                </div>
              </div>

            </div>
          </section>

          <section className="donation-section">
            <div>
              <img
                src={Logo}
              />
              <h3>We can’t help everyone, but everyone can help someone</h3>
              <Button>Donate</Button>
            </div>

          </section>
        </section>

      </main>
      <Footer />
    </>


  )
}
