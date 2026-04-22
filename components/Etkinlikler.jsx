const modules = [
  {
    num: '1',
    style: 'Sülüs – Nesih',
    trainer: 'Prof. Dr. Yusuf Bilen',
    desc: 'Geleneksel hat sanatının temel yazılarından Sülüs ve Nesih türleri üzerinden, katılımcılara hem teknik hem estetik bir temel kazandırılır.',
    tags: ['Hat yazım atölyesi', 'Sergi', 'Konferans'],
  },
  {
    num: '2',
    style: 'Talik – Rika',
    trainer: 'Hattat Tahsin Kurt',
    desc: 'Geleneksel hat sanatının temel yazılarından Talik ve Rika türleri üzerinden, katılımcılara hem teknik hem estetik bir temel kazandırılır.',
    tags: ['Hat yazım atölyesi', 'Sergi', 'Konferans'],
  },
]

const expectations = [
  'Birebir uygulamalı çalışma',
  'Geleneksel yöntemlerle öğrenim',
  'Sabır ve odak gerektiren bir üretim süreci',
  'Kendi yazı pratiğini geliştirme imkânı',
]

export default function Etkinlikler() {
  return (
    <section className="etkinlikler" id="etkinlikler">
      <div className="etkinlikler-header">
        <span className="s-label reveal">Program</span>
        <h2 className="s-title reveal">Etkinlikler</h2>
        <span className="s-script reveal" style={{ color: 'rgba(240,230,216,0.45)' }}>
          İki Modüllü Öğrenme Süreci
        </span>
        <div className="s-divider c reveal" />
        <p className="etkinlikler-intro reveal">
          Bu proje, katılımcılara hem teorik hem uygulamalı bir deneyim sunar.
        </p>
      </div>

      {/* Modules */}
      <div className="modul-grid reveal">
        {modules.map((m) => (
          <div key={m.num} className="modul-card">
            <div className="modul-num">{m.num}. Modül</div>
            <h3 className="modul-style">{m.style}</h3>
            <div className="modul-trainer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
              {m.trainer}
            </div>
            <p className="modul-desc">{m.desc}</p>
            <div className="modul-tags">
              {m.tags.map((t) => (
                <span key={t} className="modul-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* What to expect */}
      <div className="expectations reveal">
        <div className="expectations-title">Bu süreçte seni ne bekliyor?</div>
        <div className="expectations-grid">
          {expectations.map((e, i) => (
            <div key={e} className="expectation-item">
              <div className="expectation-num">0{i + 1}</div>
              <div className="expectation-text">{e}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
