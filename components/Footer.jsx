const pages = [
  { href: '#hero',        label: 'Ana Sayfa' },
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#galeri',     label: 'Galeri' },
  { href: '#hizmetler',  label: 'Hizmetler' },
  { href: '#atolye',     label: 'Atölye' },
  { href: '#referanslar',label: 'Referanslar' },
  { href: '#iletisim',   label: 'İletişim' },
]

const services = [
  { href: '#hizmetler', label: 'Özel Siparişler' },
  { href: '#atolye',    label: 'Hat Atölyeleri' },
  { href: '#hizmetler', label: 'Kurumsal Hatlar' },
  { href: '#hizmetler', label: 'Nikâh Hediyelikleri' },
  { href: '#hizmetler', label: 'Dijital Hat' },
  { href: '#hizmetler', label: 'Malzeme & Kitap' },
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
            Asırların birikimiyle şekillenen hat sanatını,<br />
            modern bir ruhla yaşatıyoruz.
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

        {/* Services */}
        <div>
          <div className="ft-col-title">Hizmetler</div>
          <ul className="ft-links">
            {services.map((s) => (
              <li key={s.label}><a href={s.href}>{s.label}</a></li>
            ))}
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
            <div className="ft-contact-lbl">Telefon</div>
            <a href="tel:+905000000000" className="ft-contact-val">
              +90 (XXX) XXX XX XX
            </a>
          </div>
          <div className="ft-contact-item">
            <div className="ft-contact-lbl">Konum</div>
            <span className="ft-contact-val">İstanbul, Türkiye</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="ft-copy">
          © 2024 <span>Türk Hat Sanatı Yolculuğu</span>. Tüm hakları saklıdır.
        </p>
        <p className="ft-copy">
          Hat&apos;la yazılmış bir <span>♥</span> ile
        </p>
      </div>
    </footer>
  )
}
