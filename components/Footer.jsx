const pages = [
  { href: '#hero',        label: 'Ana Sayfa' },
  { href: '#hakkinda',    label: 'Proje Hakkında' },
  { href: '#etkinlikler', label: 'Etkinlikler' },
  { href: '#egitmenler',  label: 'Eğitmenler' },
  { href: '#paydashlar',  label: 'Paydaşlar' },
  { href: '#iletisim',    label: 'İletişim' },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <div className="ft-brand-tag">Gelenekten Geleceğe</div>
          <div className="ft-brand-main">Türk Hat Sanatı</div>
          <span className="ft-brand-script">Yolculuğu</span>
          <p className="ft-brand-desc">
            Berlin&apos;de hüsn-i hat sanatı aracılığıyla<br />
            kültürel aidiyet ve kimlik inşasına katkı sunuyoruz.
          </p>
        </div>

        {/* Pages */}
        <div>
          <div className="ft-col-title">Sayfalar</div>
          <ul className="ft-links">
            {pages.map((p) => (
              <li key={p.label}><a href={p.href}>{p.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Partners */}
        <div>
          <div className="ft-col-title">Paydaşlar</div>
          <ul className="ft-links">
            <li><a href="#paydashlar">YTB</a></li>
            <li><a href="#paydashlar">Irfan Bildungs- und Kulturverein e.V.</a></li>
            <li><a href="#paydashlar">T.C. Berlin Büyükelçiliği</a></li>
            <li><a href="#paydashlar">Hayrat Avrupa</a></li>
            <li><a href="#paydashlar">Yunus Emre Enstitüsü</a></li>
            <li><a href="#paydashlar">Seniyye</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="ft-col-title">İletişim</div>
          <div className="ft-contact-item">
            <div className="ft-contact-lbl">E-posta</div>
            <a href="mailto:info@turkhatsanati.com" className="ft-contact-val">
              info@turkhatsanati.com
            </a>
          </div>
          <div className="ft-contact-item">
            <div className="ft-contact-lbl">Konum</div>
            <span className="ft-contact-val">Berlin, Deutschland</span>
          </div>
          <div className="ft-contact-item" style={{ marginTop: '20px' }}>
            <a href="#iletisim" className="ft-contact-val" style={{ color: 'var(--gold)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              → Impressum
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="ft-copy">
          © 2024 <span>Gelenekten Geleceğe Türk Hat Sanatı Yolculuğu</span>. Tüm hakları saklıdır.
        </p>
        <p className="ft-copy">
          Berlin&apos;den <span>♥</span> ile
        </p>
      </div>
    </footer>
  )
}
