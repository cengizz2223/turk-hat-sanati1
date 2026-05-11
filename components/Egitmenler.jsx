'use client'
import Image from 'next/image'
import { useState } from 'react'

const trainers = [
  {
    name: 'Prof. Dr. Yusuf Bilen',
    style: 'Sülüs & Nesih',
    module: '1. Modül',
    image: '/images/egitmen-yusuf-bilen.jpg',
    glyph: 'ي',
    bio: [
      'Hüsn-i hat sanatına genç yaşta başlayarak akademik ve sanatsal bir derinlik kazanan Yusuf Bilen, Sülüs ve Nesih alanındaki uzmanlığıyla projeye katkı sunmaktadır.',
      'Sanat ve akademi arasında güçlü bir köprü kuran Bilen, katılımcılara hem teknik bilgi hem de kültürel perspektif kazandırır.',
    ],
  },
  {
    name: 'Hattat Tahsin Kurt',
    style: "Ta'lik & Rika",
    module: '2. Modül',
    image: '/images/egitmen-tahsin-kurt.jpg',
    glyph: 'ط',
    bio: [
      "Ta'lik ve Rika yazı türlerindeki çalışmalarıyla tanınan Tahsin Kurt, geleneksel meşk geleneğini çağdaş bir yaklaşımla sürdürmektedir.",
      'Katılımcılara yazının estetik yönünü deneyimleme ve kültürel derinleştirme imkânı sunar.',
    ],
  },
]

function EgitmenCard({ trainer }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="egitmen-card">
      {/* Foto / Fallback */}
      <div className="egitmen-visual">
        {!imgError ? (
          <Image
            src={trainer.image}
            alt={trainer.name}
            fill
            sizes="280px"
            className="egitmen-photo"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            onError={() => setImgError(true)}
          />
        ) : (
          /* Eleganter Fallback wenn kein Bild vorhanden */
          <div className="egitmen-fallback">
            <div className="egitmen-fallback-glyph">{trainer.glyph}</div>
          </div>
        )}
        <div className="egitmen-overlay" />
        <div className="egitmen-module-badge">{trainer.module}</div>
      </div>

      {/* Inhalt */}
      <div className="egitmen-content">
        <div className="egitmen-style">{trainer.style}</div>
        <h3 className="egitmen-name">{trainer.name}</h3>
        <div className="egitmen-divider" />
        {trainer.bio.map((p, i) => (
          <p key={i} className="egitmen-bio">{p}</p>
        ))}
      </div>
    </div>
  )
}

export default function Egitmenler() {
  return (
    <section className="egitmenler" id="egitmenler">
      <span className="s-label reveal">Uzman Kadro</span>
      <h2 className="s-title reveal">Eğitmenler</h2>
      <span className="s-script reveal" style={{ opacity: 0.45 }}>Ustalardan Öğren</span>
      <div className="s-divider c reveal" />

      <div className="egitmenler-grid reveal">
        {trainers.map((t) => (
          <EgitmenCard key={t.name} trainer={t} />
        ))}
      </div>
    </section>
  )
}
