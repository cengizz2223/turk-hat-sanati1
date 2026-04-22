const trainers = [
  {
    name: 'Prof. Dr. Yusuf Bilen',
    style: 'Sülüs & Nesih',
    glyph: 'ي',
    bio: [
      'Hüsn-i hat sanatına genç yaşta başlayarak akademik ve sanatsal bir derinlik kazanan Yusuf Bilen, Sülüs ve Nesih alanındaki uzmanlığıyla projeye katkı sunmaktadır.',
      'Sanat ve akademi arasında güçlü bir köprü kuran Bilen, katılımcılara hem teknik bilgi hem de kültürel perspektif kazandırır.',
    ],
    module: '1. Modül',
  },
  {
    name: 'Hattat Tahsin Kurt',
    style: 'Ta\'lik & Rika',
    glyph: 'ط',
    bio: [
      'Ta\'lik ve Rika yazı türlerindeki çalışmalarıyla tanınan Tahsin Kurt, geleneksel meşk geleneğini çağdaş bir yaklaşımla sürdürmektedir.',
      'Katılımcılara yazının estetik yönünü deneyimleme ve kültürel derinleştirme imkânı sunar.',
    ],
    module: '2. Modül',
  },
]

export default function Egitmenler() {
  return (
    <section className="egitmenler" id="egitmenler">
      <span className="s-label reveal">Uzman Kadro</span>
      <h2 className="s-title reveal">Eğitmenler</h2>
      <span className="s-script reveal" style={{ opacity: 0.45 }}>Ustalardan Öğren</span>
      <div className="s-divider c reveal" />

      <div className="egitmenler-grid reveal">
        {trainers.map((t) => (
          <div key={t.name} className="egitmen-card">
            {/* Visual */}
            <div className="egitmen-visual">
              <div className="egitmen-glyph">{t.glyph}</div>
              <div className="egitmen-module-badge">{t.module}</div>
            </div>

            {/* Content */}
            <div className="egitmen-content">
              <div className="egitmen-style">{t.style}</div>
              <h3 className="egitmen-name">{t.name}</h3>
              <div className="egitmen-divider" />
              {t.bio.map((p, i) => (
                <p key={i} className="egitmen-bio">{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
