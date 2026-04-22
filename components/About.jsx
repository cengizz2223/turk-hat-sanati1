const outputs = [
  'Seminer ve atölye çalışmaları',
  'Katılımcı üretimleri',
  'Dijital içerikler ve görseller',
  'Tanıtım videoları',
  'Dijital katalog',
]

export default function About() {
  return (
    <section className="about" id="hakkinda">
      {/* Image / visual column */}
      <div className="about-img-wrap reveal-left">
        <div className="about-img-main">
          <div className="about-img-glyph">ب</div>
          <div className="about-img-badge">Berlin · 2024 / 2025</div>
        </div>
        <div className="about-img-border" />
      </div>

      {/* Text column */}
      <div className="about-text">
        <span className="s-label reveal">Proje Hakkında</span>
        <h2 className="s-title reveal">Gelenekten Geleceğe</h2>
        <span className="s-script reveal">Hüsn-i Hat Yolculuğu</span>
        <div className="s-divider reveal" />

        {/* Proje Tanımı */}
        <div className="about-block reveal">
          <div className="about-block-title">Proje Tanımı</div>
          <p className="s-body">
            Berlin&apos;de yaşayan Türk diasporasına yönelik olarak geliştirilen;
            hüsn-i hat sanatı aracılığıyla kültürel aidiyet, estetik bilinç ve kimlik
            inşasını güçlendirmeyi amaçlayan bir kültür ve sanat projesidir.
          </p>
        </div>

        {/* Proje Amacı */}
        <div className="about-block reveal">
          <div className="about-block-title">Proje Amacı</div>
          <p className="s-body">
            Genç kuşaklar arasında zayıflayan kültürel aidiyet duygusunu güçlendirmeyi,
            hüsn-i hat sanatını estetik bir öğrenme alanı olarak tanıtmayı ve
            katılımcıların kültürel miraslarıyla yeniden bağ kurmalarına katkı sunmayı hedefler.
          </p>
        </div>

        {/* Proje Gerekçesi */}
        <div className="about-block reveal">
          <div className="about-block-title">Proje Gerekçesi</div>
          <p className="s-body">
            Berlin gibi çokkültürlü şehirlerde yetişen bireyler için,
            geleneksel değerlerle bağ kurabilecekleri anlamlı ve üretken alanlara
            ihtiyaç duyulmaktadır. Bu proje, sanat ve eğitim aracılığıyla bu ihtiyaca cevap verir.
          </p>
        </div>

        {/* Somut Çıktılar */}
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
