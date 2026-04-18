'use client'

export default function Hero() {
  const scrollDown = () =>
    document.getElementById('hakkimizda')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-radial" />

      {/* Arabesque ornaments */}
      <svg className="hero-ornament hero-ornament-right" viewBox="0 0 300 300" fill="none">
        <circle cx="150" cy="150" r="130" stroke="#F0E6D8" strokeWidth="0.6" />
        <circle cx="150" cy="150" r="100" stroke="#F0E6D8" strokeWidth="0.6" />
        <circle cx="150" cy="150" r="70"  stroke="#F0E6D8" strokeWidth="0.6" />
        <circle cx="150" cy="150" r="40"  stroke="#F0E6D8" strokeWidth="0.6" />
        <path d="M20,150 Q90,30 150,150 Q210,270 280,150 Q210,30 150,150 Q90,270 20,150" stroke="#F0E6D8" strokeWidth="0.6" />
        <path d="M150,20 Q30,90 150,150 Q270,210 150,280 Q30,210 150,150 Q270,90 150,20" stroke="#F0E6D8" strokeWidth="0.6" />
      </svg>
      <svg className="hero-ornament hero-ornament-left" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="85" stroke="#F0E6D8" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" stroke="#F0E6D8" strokeWidth="0.5" />
        <path d="M15,100 Q58,20 100,100 Q142,180 185,100" stroke="#F0E6D8" strokeWidth="0.5" />
        <path d="M100,15 Q180,58 100,100 Q20,142 100,185" stroke="#F0E6D8" strokeWidth="0.5" />
      </svg>

      <div className="hero-content">
        <div className="hero-tagline">Gelenekten Geleceğe</div>
        <h1 className="hero-title">Türk Hat Sanatı</h1>
        <div className="hero-script-wrap">
          <div className="hero-script">Yolculuğu</div>
        </div>
        <div className="hero-line" />
        <div className="hero-sub-wrap">
          <p className="hero-subtitle">
            Asırların ruhuyla işlenmiş hat sanatını,<br />
            modern bir yolculukla sizinle buluşturuyoruz.
          </p>
        </div>
        <div className="hero-buttons">
          <a href="#galeri"     className="btn-primary">Galeriyi Keşfet</a>
          <a href="#hakkimizda" className="btn-secondary">Hikâyemiz</a>
        </div>
      </div>

      <button className="hero-scroll" onClick={scrollDown} aria-label="Aşağı kaydır">
        <div className="hero-scroll-bar" />
        <span>Kaydır</span>
      </button>
    </section>
  )
}
