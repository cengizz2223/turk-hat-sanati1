const courses = [
  'Başlangıç Seviyesi — Temel Hat ve Kalem Çalışmaları',
  'Orta Seviye — Sülüs ve Nesih Hattı',
  'İleri Seviye — Celî ve Divânî Hattı',
  'Yoğun Kurslar — Hafta Sonu Programları',
  'Çocuklar İçin Hat — 8–14 Yaş Grubu',
  'Özel Dersler — Birebir Eğitim İmkânı',
]

export default function Workshop() {
  return (
    <section className="workshop" id="atolye">
      {/* Visual panel */}
      <div className="workshop-visual">
        <div className="workshop-bg-glyph">Atölye</div>
        <div className="workshop-visual-label">
          <span>Eğitim Programı</span>
          <p>
            Her seviyeye<br />uygun dersler
          </p>
        </div>
      </div>

      {/* Content panel */}
      <div className="workshop-content">
        <span className="s-label reveal">Eğitim Programı</span>
        <h2 className="s-title reveal">
          Hat Sanatı<br />Atölyesi
        </h2>
        <span className="s-script reveal">Sizinle Birlikte</span>
        <div className="s-divider reveal" />

        <p className="s-body reveal">
          Geleneksel Türk hat sanatını ustalığıyla öğretmek için tasarlanmış kapsamlı
          atölye programımıza katılın. Temel kalem tutmadan ileri hat stillerine kadar
          her seviyeye uygun dersler sunuyoruz.
        </p>

        <ul className="workshop-list reveal">
          {courses.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <div className="reveal">
          <a href="#iletisim" className="btn-primary">
            Kayıt Olun
          </a>
        </div>
      </div>
    </section>
  )
}
