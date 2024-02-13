import "./App.css";
import "./hero.css";
import main from "../src/assets/hero.svg";
import cardimg from "../src/assets/qayd.png";
import cardimg2 from "../src/assets/location-icon.svg";
import cardimg3 from "../src/assets/images.jpg";
import img1 from "../src/assets/Image 01.svg";
import img2 from "../src/assets/Image 02.svg";
import img3 from "../src/assets/Image 03.svg";
import img4 from "../src/assets/image (6).svg";
// Hero section
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__left">
          <h2>
            Just <span className="healthy">Eat healthy</span> food to live a
            healthier life
          </h2>
          <p>
            Enjoy a healthy life by eating healthy foods that have extraordinary
            flavors that make your life healthier for today and in the future
          </p>
          <button className="order">Order Now</button>
        </div>
        <div>
          <img src={main} alt="main-photo" className="main__photo" />
        </div>
      </div>
      <div>
        <h1>Why Choose Us?</h1>
        <p className="choosetitle">
          Organic food is grown without the use of synthetic chemicals
        </p>
      </div>
      <div className="cards">
        <div className="card">
          <img src={cardimg} alt="qayd" width={180} height={180} />
          <h3>Easy to order</h3>
          <p>foods include fresh produce, meats as well as processed</p>
        </div>
        <div className="card">
          <img src={cardimg2} alt="qayd" width={180} height={180} />
          <h3>Live Order</h3>
          <p>Place your online Order easily and get the food instantly</p>
        </div>
        <div className="card">
          <img src={cardimg3} alt="qayd" width={180} height={180} />
          <h3>100% Organic</h3>
          <p>Organic food is grown without the use of synthetic chemicals</p>
        </div>
      </div>
      <div className="numbers">
        <div>
          <h1>40+</h1>
          <p>Food Partners</p>
        </div>
        <div>
          <h1>459+</h1>
          <p>Trusted Clients</p>
        </div>
        <div>
          <h1>12k+</h1>
          <p>Order Online</p>
        </div>
      </div>
      <div className="information">
        <div className="info__left">
          <h1>About Us</h1>
          <p>
            Organic food is grown without the use of synthetic chemicals, such
            as human-made pesticides and fertilizers, and does not contain
            genetically modified organisms (GMOs). Organic foods include fresh
            produce, meats, and dairy products as well as processed foods such
            as crackers, drinks, and frozen meals.
          </p>
          <button className="order">Learn More</button>
        </div>
        <div className="info__centre">
          <img src={img1} alt="img" width={250} height={600} />
          <img src={img2} alt="img" width={250} height={600} />
        </div>
        <div className="info__right">
          <img src={img3} alt="img" width={260} height={100} />
        </div>
      </div>
      <div className="information">
        <div className="info__right">
          <img src={img4} alt="img" height={600} width={600} />
        </div>
        <div className="info__left">
          <h1>Fresh Vegetables Every Day</h1>
          <p>
            Healthy life as informed declared we enjoy the margaret. Joy
            horrible moreover man feelings own shy. Request norland neither
            mistake for yet. Between the for morning assured country believe.
          </p>
          <button className="order">Learn More</button>
        </div>
      </div>
    </>
  );
}
export default Hero;
