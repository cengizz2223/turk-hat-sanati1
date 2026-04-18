const items = [
  { cls: 'gi-1', bg: 'linear-gradient(145deg,#0D1B3E,#1A2B52)', glyph: 'الله', glyphSize: '200px', title: 'Celî Sülüs',  sub: 'Hattat Eseri · 2024' },
  { cls: 'gi-2', bg: 'linear-gradient(135deg,#1A2B52,#2A3F6B)', glyph: 'بسم',  glyphSize: '80px',  title: 'Nesih Hattı', sub: 'Özel Sipariş' },
  { cls: 'gi-3', bg: 'linear-gradient(135deg,#0D1B3E,#3D2B1F)', glyph: 'نور',  glyphSize: '80px',  title: 'Talik Hattı', sub: 'Galeri Eseri',  glyphColor: 'rgba(201,169,110,0.2)' },
  { cls: 'gi-4', bg: 'linear-gradient(135deg,#2A1A3D,#1A2B52)', glyph: 'محبة', glyphSize: '75px',  title: 'Divânî Hat',  sub: 'Özel Sipariş' },
  { cls: 'gi-5', bg: 'linear-gradient(135deg,#1A3D2A,#0D1B3E)', glyph: 'حكمة', glyphSize: '75px',  title: 'Rık\'a Hattı', sub: 'Atölye Eseri', glyphColor: 'rgba(201,169,110,0.2)' },
  { cls: 'gi-6', bg: 'linear-gradient(135deg,#0D1B3E,#1A1A2E)', glyph: 'سلام', glyphSize: '75px',  title: 'Sülüs Hattı', sub: 'Galeri Eseri' },
  { cls: 'gi-7', bg: 'linear-gradient(135deg,#2B1A0D,#1A2B52)', glyph: 'صبر',  glyphSize: '75px',  title: 'Kufi Hattı',  sub: 'Özel Sipariş' },
  { cls: 'gi-8', bg: 'linear-gradient(135deg,#1A2B52,#0D1B3E)', glyph: 'حب',   glyphSize: '75px',  title: 'Müsenna Hat', sub: 'Galeri Eseri', glyphColor: 'rgba(201,169,110,0.2)' },
]

export default function Gallery() {
  return (
    <section className="gallery" id="galeri">
      <span className="s-label reveal">Galeri &amp; Portfolio</span>
      <h2 className="s-title reveal">Eserlerimizden</h2>
      <span className="s-script reveal" style={{ opacity: 0.45 }}>Seçkiler</span>
      <div className="s-divider c reveal" />
      <p className="gallery-intro reveal">
        Hat sanatının incelikli dünyasından özenle seçilmiş eserler.
        Her biri bir hikâye, her biri bir ruh taşımaktadır.
      </p>

      <div className="gallery-grid reveal">
        {items.map((item) => (
          <div key={item.cls} className={`gallery-item ${item.cls}`}>
            <div className="gallery-bg" style={{ background: item.bg }} />
            <div
              className="gallery-glyph"
              style={{
                fontSize: item.glyphSize,
                color: item.glyphColor ?? 'rgba(240,230,216,0.12)',
              }}
            >
              {item.glyph}
            </div>
            <div className="gallery-overlay">
              <div className="gallery-ov-title">{item.title}</div>
              <div className="gallery-ov-sub">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-cta reveal">
        <a href="#iletisim" className="btn-primary">
          Tüm Eserleri Görüntüle
        </a>
      </div>
    </section>
  )
}
