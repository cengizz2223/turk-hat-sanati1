'use client'

const highlights = [
  'Berlin merkezli kültür ve sanat projesi',
  'Seminer ve uygulamalı atölye modeli',
  'Diaspora gençliğine yönelik kültürel aidiyet odağı',
  'Türkiye\'den davet edilen uzman eğitmenler',
  'Sürdürülebilir ve görünür çıktı hedefi',
]

export default function Hero() {
  const scrollDown = () =>
    document.getElementById('hakkinda')?.scrollIntoView({ behavior: 'smooth' })

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
        <div className="hero-tagline">Gelenekten Geleceğe · Berlin</div>
        <h1 className="hero-title">Hüsn-i Hat</h1>
        <div className="hero-script-wrap">
          <div className="hero-script">Yolculuğu</div>
        </div>
        <div className="hero-line" />
        <div className="hero-sub-wrap">
          <p className="hero-subtitle">
            Hüsn-i Hat ile kültürel hafızayı canlı tutan,<br />
            kimlik bilincini güçlendiren çok boyutlu bir yolculuk.<br />
            <span style={{ opacity: 0.6, fontSize: '13px' }}>
              Sanat, estetik ve aidiyet arasında güçlü bir bağ.
            </span>
          </p>
        </div>

        {/* Project highlights */}
        <div className="hero-highlights">
          {highlights.map((item) => (
            <div key={item} className="hero-highlight-item">
              <span className="hero-highlight-dot" />
              {item}
            </div>
          ))}
        </div>

        <div className="hero-buttons" style={{ marginTop: '48px' }}>
          <a href="#etkinlikler" className="btn-primary">Etkinlikleri Keşfet</a>
          <a href="#hakkinda"    className="btn-secondary">Proje Hakkında</a>
        </div>
      </div>

      <button className="hero-scroll" onClick={scrollDown} aria-label="Aşağı kaydır">
        <div className="hero-scroll-bar" />
        <span>Kaydır</span>
      </button>
    </section>
  )
}
