function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">TIME • STYLE • PRECISION</p>
        <h1>VELORA</h1>
        <h2>Time, Redefined.</h2>
        <p className="hero-copy">A new generation of timeless watches designed for those who value every moment.</p>
        <a className="primary-btn" href="#watches">Explore Watches <span>→</span></a>
        <div className="hero-stats">
          <span><b>01</b> Premium Quality</span>
          <span><b>02</b> Timeless Design</span>
          <span><b>03</b> Built To Last</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-glow" />
        <img src="/Watch.png" alt="VELORA luxury watch" />
      </div>
    </section>
  );
}
export default Hero;
