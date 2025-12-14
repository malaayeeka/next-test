import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

// import '/about.css'
export default function AboutPage() {
  return (
    <>
   
      <Navbar />
      <section className="about-page">
        <h1>About Us</h1>

        <p>
          Welcome to <strong>MySite</strong>! We are passionate about building
          modern, fast, and user-friendly web applications using Next.js.
        </p>

        <p>
          Our goal is to create clean designs, responsive layouts, and smooth
          user experiences for all devices.
        </p>

        <div className="about-box">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>⚡ Fast & optimized websites</li>
            <li>📱 Mobile responsive design</li>
            <li>🎨 Clean and modern UI</li>
            <li>🚀 Built with Next.js</li>
          </ul>
        </div>

        <div className="about-box">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>⚡ Fast & optimized websites</li>
            <li>📱 Mobile responsive design</li>
            <li>🎨 Clean and modern UI</li>
            <li>🚀 Built with Next.js</li>
          </ul>
        </div>

        <div className="about-box">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>⚡ Fast & optimized websites</li>
            <li>📱 Mobile responsive design</li>
            <li>🎨 Clean and modern UI</li>
            <li>🚀 Built with Next.js</li>
          </ul>
        </div>

        <div className="about-box">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>⚡ Fast & optimized websites</li>
            <li>📱 Mobile responsive design</li>
            <li>🎨 Clean and modern UI</li>
            <li>🚀 Built with Next.js</li>
          </ul>
        </div>

        <div className="about-box">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>⚡ Fast & optimized websites</li>
            <li>📱 Mobile responsive design</li>
            <li>🎨 Clean and modern UI</li>
            <li>🚀 Built with Next.js</li>
          </ul>
        </div>
      </section>

      {/* fOOTER sECTION */}
      <Footer></Footer>
    </>
  );
}
