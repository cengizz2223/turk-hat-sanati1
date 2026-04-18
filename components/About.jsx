export default function About() {
  return (
    <section className="about" id="hakkimizda">
      {/* Image */}
      <div className="about-img-wrap reveal-left">
        <div className="about-img-main">
          <div className="about-img-glyph">ب</div>
          <div className="about-img-badge">Hat Atölyesi · Est. 2015</div>
        </div>
        <div className="about-img-border" />
      </div>

      {/* Text */}
      <div className="about-text">
        <span className="s-label reveal">Hakkımızda</span>
        <h2 className="s-title reveal">Kalem&apos;in Ruhunu</h2>
        <span className="s-script reveal">Taşıyoruz</span>
        <div className="s-divider reveal" />

        <p className="s-body reveal">
          Türk hat sanatının köklü geleneğini modern bir bakış açısıyla harmanlayarak,
          kalıcı ve anlamlı eserler ortaya koyuyoruz. Her harf, her nüans ve her
          dokunuş; yüzyıllık bir kültürün sesini taşımaktadır.
        </p>
        <p className="s-body reveal">
          Atölyemizde hattatlar, kâğıt ustaları ve sanatseverler bir araya gelerek
          gelenekten geleceğe uzanan bu güzel yolculuğu birlikte sürdürüyorlar.
          Sizi de bu yolculuğa davet ediyoruz.
        </p>

        <div className="reveal" style={{ marginTop: '36px' }}>
          <a href="#iletisim" className="btn-primary">
            Bizimle İletişime Geçin
          </a>
        </div>

        <div className="about-stats reveal">
          <div>
            <div className="stat-num">10+</div>
            <div className="stat-lbl">Yıllık Deneyim</div>
          </div>
          <div>
            <div className="stat-num">500+</div>
            <div className="stat-lbl">Tamamlanan Eser</div>
          </div>
          <div>
            <div className="stat-num">30+</div>
            <div className="stat-lbl">Atölye Çalışması</div>
          </div>
        </div>
      </div>
    </section>
  )
}
