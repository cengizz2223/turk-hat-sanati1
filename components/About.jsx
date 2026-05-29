'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const slides = [
  '/images/about-slide-1.jpg',
  '/images/about-slide-2.jpg',
  '/images/about-slide-3.jpg',
]

const outputs = [
  'Seminer ve atölye çalışmaları',
  'Katılımcı üretimleri',
  'Dijital içerikler ve görseller',
  'Tanıtım videoları',
  'Dijital katalog',
]

function AboutSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((prev) => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  function goTo(indexOrFn) {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(typeof indexOrFn === 'function' ? indexOrFn(current) : indexOrFn)
      setAnimating(false)
    }, 350)
  }

  return (
    <div className="about-slider">
      {/* Slides */}
      <div className={`about-slider-track ${animating ? 'fading' : ''}`}>
        <Image
          src={slides[current]}
          alt={`Atölye ${current + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="about-slider-img"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority={current === 0}
        />
        {/* Overlay */}
        <div className="about-slider-overlay" />
      </div>

      {/* Badge */}
      <div className="about-img-badge">Berlin · 2024 / 2025</div>

      {/* Nav Arrows */}
      <button
        className="about-slider-arrow left"
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Önceki"
      >
        ‹
      </button>
      <button
        className="about-slider-arrow right"
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Sonraki"
      >
        ›
      </button>

      {/* Dots */}
      <div className="about-slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`about-slider-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section className="about" id="hakkinda">
      {/* Slider column */}
      <div className="about-img-wrap reveal-left">
        <AboutSlider />
        <div className="about-img-border" />
      </div>

      {/* Text column */}
      <div className="about-text">
        <span className="s-label reveal">Proje Hakkında</span>
        <h2 className="s-title reveal">Gelenekten Geleceğe</h2>
        <span className="s-script reveal">Hüsn-i Hat Yolculuğu</span>
        <div className="s-divider reveal" />

        <div className="about-block reveal">
          <div className="about-block-title">Proje Tanımı</div>
          <p className="s-body">
            Berlin&apos;de yaşayan Türk diasporasına yönelik olarak geliştirilen;
            hüsn-i hat sanatı aracılığıyla kültürel aidiyet, estetik bilinç ve kimlik
            inşasını güçlendirmeyi amaçlayan bir kültür ve sanat projesidir.
          </p>
        </div>

        <div className="about-block reveal">
          <div className="about-block-title">Proje Amacı</div>
          <p className="s-body">
            Genç kuşaklar arasında zayıflayan kültürel aidiyet duygusunu güçlendirmeyi,
            hüsn-i hat sanatını estetik bir öğrenme alanı olarak tanıtmayı ve
            katılımcıların kültürel miraslarıyla yeniden bağ kurmalarına katkı sunmayı hedefler.
          </p>
        </div>

        <div className="about-block reveal">
          <div className="about-block-title">Proje Gerekçesi</div>
          <p className="s-body">
            Berlin gibi çokkültürlü şehirlerde yetişen bireyler için,
            geleneksel değerlerle bağ kurabilecekleri anlamlı ve üretken alanlara
            ihtiyaç duyulmaktadır. Bu proje, sanat ve eğitim aracılığıyla bu ihtiyaca cevap verir.
          </p>
        </div>

        <div className="about-block reveal">
          <div className="about-block-title">Somut Çıktılar</div>
          <ul className="about-output-list">
            {outputs.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>

        <div className="reveal" style={{ marginTop: '36px' }}>
          <a href="#etkinlikler" className="btn-primary">Etkinliklere Git</a>
        </div>
      </div>
    </section>
  )
}
