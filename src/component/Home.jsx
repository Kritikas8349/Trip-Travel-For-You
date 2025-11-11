import React, { useRef, useEffect, useState } from "react";
import "./Home.css";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";


export default function Home() {
  const videoRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  const slides = [
    {
      id: 1,
      img: "/travel1.jpg",
      title: "Stress? Not on Our Watch!",
      desc: "Say goodbye to trip-planning headaches. We take care of every little detail—from finding the best flights to curating the ultimate travel experiences.",
    },
    {
      id: 2,
      img: "/t1.jpg",
      title: "Adventure Awaits",
      desc: "From mountain trails to crystal-clear beaches, we bring you the most unforgettable experiences.",
    },
    {
      id: 3,
      img: "/germany.jpg",
      title: "Luxury Escapes",
      desc: "Indulge in the finest stays, curated for comfort and elegance.",
    },
    {
      id: 4,
      img: "/travel2.jpg",
      title: "Memories for a Lifetime",
      desc: "Let us plan your next getaway and turn your travel dreams into reality.",
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };


  const faqs = [
    {
      question: "What’s included in the package?",
      answer:
        "Each package includes accommodation, guided tours, and meals. Custom add-ons are also available for a personal experience.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can cancel or reschedule up to 48 hours before your trip without any charges.",
      img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
    },
    {
      question: "Are meals included in the tours?",
      answer:
        "Breakfast is included in most packages. You can upgrade to include lunch and dinner for a small additional cost.",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    },
    {
      question: "Is transportation provided?",
      answer:
        "Yes, all local transfers between activities and hotels are included in our package pricing.",
      img: "/transport.jpg",
    },
    {
      question: "Are your trips safe for solo travelers?",
      answer:
        "Absolutely. We ensure secure accommodations and offer small group tours to keep you safe while exploring.",
      img: "/solo.jpg",
    },
    {
      question: "Do you offer group discounts?",
      answer:
        "Yes, we offer discounts for groups of 5 or more travelers. Reach out to our support team for details.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
  ];


  const testimonials = [
    {
      name: "Emily Carter",
      location: "Bali, Indonesia",
      review:
        "The Bali retreat was beyond magical! From serene beaches to cultural wonders, everything was perfectly organized. I came back relaxed and full of unforgettable memories!",
    },
    {
      name: "James Wilson",
      location: "Swiss Alps, Switzerland",
      review:
        "Skiing through the Alps was a lifelong dream come true. The accommodations were cozy, and the views—absolutely breathtaking. Thank you for making it seamless and special.",
    },
    {
      name: "David Brown",
      location: "Kyoto, Japan",
      review:
        "The cherry blossoms, tea ceremonies, and temples were unforgettable. Your team made exploring Japan so easy and enjoyable. I can’t wait to book my next adventure!",
    },
    {
      name: "Isabella Torres",
      location: "Patagonia, Chile",
      review:
        "Patagonia’s raw beauty left me in awe. The guided hikes and attention to detail made this trip stress-free and truly one for the books!",
    },
  ];




  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero-container" id="home">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="home.mp4" type="video/mp4" />
        </video>

        {/* Navbar */}
        <nav className="navbar">
        <div className="logo">
  <span className="logo-text">Trip Travel For You</span>
</div>


          {/* Hamburger Icon (Mobile) */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes color="white" size={22} />
            ) : (
              <FaBars color="white" size={22} />
            )}
          </div>

          {/* Nav Links */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
            <li><a href="#packages" onClick={() => setMenuOpen(false)}>Packages</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
          </ul>

          {/* Right Side */}
          <div className="nav-right">
          <button
                  className="contact-btn"
                  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                >
                  Contact Us
                </button>

                <button
                  className="contact-btn"
                  onClick={() => document.getElementById("packages").scrollIntoView({ behavior: "smooth" })}
                >
                  Book Now
                </button>


          </div>
        </nav>

        {/* Hero Content */}
        <div className="hero-content">
          <h1>
            Pack Your Bags, Let’s Go
            <br />
            Somewhere Amazing
          </h1>
          <p>
            Whether you’re chasing adventure, relaxation or something in
            between, your next incredible journey starts here. Let’s make it
            happen!
          </p>
        </div>

        <button className="explore-btn">
          Explore More <FaArrowDown className="down-icon" />
        </button>
      </div>

      {/* TRAVEL SECTION */}
      <section className="travel-section" id="services">
        {/* Left Section */}
        <div className="travel-left">
          <div className="service-tag">Our Service</div>
          <h2>
            Travel Made Simple,
            <br /> Adventures Made Amazing
          </h2>
          <p>
            Whether it’s a relaxing getaway or an adrenaline-filled adventure,
            we make every moment unforgettable.
          </p>

          <div className="travel-gallery">
            <div className="gallery-item">
              <img src="/t1.jpg" alt="Destination 1" />
              <span>#01</span>
            </div>
            <div className="gallery-item">
              <img src="/t2.jpg" alt="Destination 2" />
              <span>#02</span>
            </div>
            <div className="gallery-item">
              <img src="/t3.jpg" alt="Destination 3" />
              <span>#03</span>
            </div>
            <div className="gallery-item">
              <img src="/t4.jpg" alt="Destination 3" />
              <span>#04</span>
            </div>
            <div className="gallery-item">
              <img src="/place1.jpg" alt="Destination 3" />
              <span>#05</span>
            </div>
          </div>
        </div>

        
        <div className="travel-right">
          <img
            src={slides[currentSlide].img}
            alt={slides[currentSlide].title}
            className="main-image"
          />

          <div className="info-box">
            <h3>{slides[currentSlide].title}</h3>
            <p>{slides[currentSlide].desc}</p>

            <div className="slide-controls">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`arrow-btn ${
                  currentSlide === 0 ? "disabled" : ""
                }`}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className={`arrow-btn ${
                  currentSlide === slides.length - 1 ? "disabled" : ""
                }`}
              >
                <ChevronRight size={18} />
              </button>

              <span className="slide-count">
                {currentSlide + 1}/{slides.length}
              </span>
            </div>
          </div>
        </div>
      </section>



      <section className="features-section" id="features">
      {/* ---- LEFT: Image Collage ---- */}
      <div className="features-left">
        <div className="features-grid">
          <img src="/apan.jpg" alt="Feature 1" className="grid-img top-left" />
          <img src="/mountain.jpg" alt="Feature 2" className="grid-img top-right" />
          <img src="/tower.jpg" alt="Feature 3" className="grid-img bottom-left" />
          <img src="/germany.jpg" alt="Feature 4" className="grid-img bottom-right" />
        </div>
      </div>

      {/* ---- RIGHT: Text Section ---- */}
      <div className="features-right">
        <div className="highlight">What We Give</div>
        <h2>Best Features For You</h2>
        <p>
        We bring the world closer to you with carefully curated travel experiences. Enjoy the best flight deals, comfortable stays, guided tours, and round-the-clock support for a journey you’ll never forget.
        </p>

        <div className="feature-points">
          <div className="feature-item">
            <CheckCircle className="icon" />
            <div>
              <h4>Best Tour Guide</h4>
              <p>Our tour guides are professionals with deep knowledge and experience.</p>
            </div>
          </div>

          <div className="feature-item">
            <CheckCircle className="icon" />
            <div>
              <h4>Reliable Tour</h4>
              <p>We ensure your journey is safe, smooth, and full of wonderful memories.</p>
            </div>
          </div>

          <div className="feature-item">
            <CheckCircle className="icon" />
            <div>
              <h4>Friendly Price</h4>
              <p>Enjoy top destinations at prices that fit your budget and expectations.</p>
            </div>
          </div>
        </div>

        <button
            className="feature-explore-btn"
            onClick={() => document.getElementById("packages").scrollIntoView({ behavior: "smooth" })}
          >
            Explore Now
          </button>

      </div>
    </section>


    <section className="package-section" id="packages">
      <div className="package-header">
        <button className="package-btn">Our Package</button>
        <div className="package-heading">
          <h1>Vacations You’ll Never Stop Talking About</h1>
          <p>
            Why settle for ordinary when extraordinary is just a booking away?
            Adventure, joy, and memories are waiting for you.
          </p>
        </div>
        <button
        className="booking-btn"
        onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
      >
        Booking Vacation →
      </button>

      </div>

      <div className="package-cards">
        <div className="package-card">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Canadian Rockies Lake Escape"
          />
          <div className="card-content">
            <h3>Canadian Rockies Lake Escape</h3>
            <p>
              Surround yourself with the serene beauty of crystal-clear lakes and
              towering peaks.
            </p>
            <div className="tags">
              <span>Adventure</span>
              <span>Nature</span>
              <span>Relaxation</span>
            </div>
          </div>
        </div>

        <div className="package-card">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
            alt="Maldives Overwater Escape"
          />
          <div className="card-content">
            <h3>Maldives Overwater Escape</h3>
            <p>
              Stay in luxury overwater villas surrounded by turquoise lagoons.
            </p>
            <div className="tags">
              <span>Luxury</span>
              <span>Sea</span>
              <span>Relaxation</span>
            </div>
          </div>
        </div>

        <div className="package-card">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
            alt="Parisian Romance Getaway"
          />
          <div className="card-content">
            <h3>Parisian Romance Getaway</h3>
            <p>
              Stroll the romantic streets of Paris and enjoy its timeless charm.
            </p>
            <div className="tags">
              <span>Romance</span>
              <span>Cultural</span>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="flip-faq" id="faq">
      <div className="faq-header">
        <div className="faq-tag">Our FAQ</div>
        <h1>Everything You Need to Know, All in One Place</h1>
        <p>
          We know planning a trip comes with plenty of questions. That’s why
          we’ve put together clear answers to the most common ones, so you can
          book with confidence and focus on the fun.
        </p>
      </div>

      <div className="flip-faq-grid">
        {faqs.map((faq, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-inner">
              <div
                className="flip-front"
                style={{
                  backgroundImage: `url('${faq.img}')`,
                }}
              >
                <div className="blur-layer"></div>
                <h3>{faq.question}</h3>
              </div>
              <div className="flip-back">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>



    <section className="picture">
      {/* Background image tag */}
      <img src="/sea.jpg" alt="Background" className="picture-bg" />

      {/* Overlay content */}
      <div className="picture-content">
        <h1>Why Wait for Tomorrow?<br />Book Today!</h1>
        <p>
          Your dream vacation is waiting for you, and there’s no time like now to experience it!
          Let’s get your trip booked and the excitement rolling!
        </p>
      </div>
    </section>



    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-header">
        <div className="testimonial-tag">Our Testimonial</div>
        <h1>What Our Travelers Love About Us</h1>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-text">
              <h3>{t.name}</h3>
              <p className="location">{t.location}</p>
              <p className="review">“{t.review}”</p>
            </div>
          </div>
        ))}
      </div>
    </section>



    <footer id="contact" className="footer">
        <h1 className="footer-logo">Trip Travel For You</h1>

        <div className="footer-top">
  <div className="footer-text">
    <h2>Ready to pack your bags?</h2>
    <p>We've got the best deals for you.</p>
  </div>
</div>


        <hr />

        <div className="footer-middle">
        <ul className="footer-links secondary">
            <li onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>
              HOME
            </li>
            <li onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}>
              SERVICES
            </li>
            <li onClick={() => document.getElementById("packages").scrollIntoView({ behavior: "smooth" })}>
              PACKAGES
            </li>
            <li onClick={() => document.getElementById("faq").scrollIntoView({ behavior: "smooth" })}>
              FAQ
            </li>
            <li onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
              CONTACT
            </li>
            <li onClick={() => document.getElementById("testimonials").scrollIntoView({ behavior: "smooth" })}>
              TESTIMONIALS
            </li>
          </ul>

        </div>

        {/* === Bottom Section === */}
        <div className="footer-bottom-container">
          <div className="footer-contact">
            <p> <a href="mailto:Support@Triptravelforyou.com">Support@Triptravelforyou.com</a></p>
            <p> <a href="tel:+44 7782284338">+44 7782284338</a></p>
          </div>

          <div className="footer-bottom">
            <p>
              <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
            </p>
            <p>© {new Date().getFullYear()} Trip Travel for you. All rights reserved.</p>
          </div>
        </div>
      </footer>



    </div>
  );
}
