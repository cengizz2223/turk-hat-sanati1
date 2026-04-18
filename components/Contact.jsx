'use client'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      e.target.reset()
    }, 3500)
  }

  return (
    <section className="contact" id="iletisim">
      {/* Info column */}
      <div className="contact-info">
        <span className="s-label reveal">Bize Ulaşın</span>
        <h2 className="s-title reveal">İletişim</h2>
        <span className="s-script reveal" style={{ opacity: 0.45 }}>Yolculuğa Başlayın</span>
        <div className="s-divider reveal" />

        <p className="s-body reveal">
          Özel sipariş, atölye kaydı ya da hat sanatı hakkında merak ettiğiniz her
          şey için bizimle iletişime geçin. En kısa sürede dönüş yaparız.
        </p>

        <div className="c-item reveal">
          <div className="c-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <div className="c-lbl">Adres</div>
            <div className="c-val">İstanbul, Türkiye</div>
          </div>
        </div>

        <div className="c-item reveal">
          <div className="c-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <div>
            <div className="c-lbl">Telefon</div>
            <div className="c-val">+90 (XXX) XXX XX XX</div>
          </div>
        </div>

        <div className="c-item reveal">
          <div className="c-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div>
            <div className="c-lbl">E-posta</div>
            <div className="c-val">info@turkhatsanati.com</div>
          </div>
        </div>

        <div className="c-socials reveal">
          {[
            {
              label: 'Instagram',
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
            },
            {
              label: 'Facebook',
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>,
            },
            {
              label: 'YouTube',
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>,
            },
            {
              label: 'WhatsApp',
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>,
            },
          ].map((s) => (
            <a key={s.label} href="#" className="c-social" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="contact-form reveal-right">
        <h3 className="form-head">Mesaj Gönderin</h3>
        <p className="form-sub">Tüm alanları doldurun — en kısa sürede yanıtlayalım.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="f-group">
              <label className="f-label" htmlFor="fname">Ad Soyad</label>
              <input className="f-input" type="text" id="fname" name="name" placeholder="Adınız Soyadınız" required />
            </div>
            <div className="f-group">
              <label className="f-label" htmlFor="femail">E-posta</label>
              <input className="f-input" type="email" id="femail" name="email" placeholder="ornek@email.com" required />
            </div>
            <div className="f-group">
              <label className="f-label" htmlFor="fphone">Telefon</label>
              <input className="f-input" type="tel" id="fphone" name="phone" placeholder="+90 5XX XXX XX XX" />
            </div>
            <div className="f-group">
              <label className="f-label" htmlFor="fsubject">Konu</label>
              <select className="f-select" id="fsubject" name="subject">
                <option value="">Konu Seçin</option>
                <option>Özel Sipariş</option>
                <option>Atölye Kaydı</option>
                <option>Kurumsal Proje</option>
                <option>Nikâh / Özel Gün</option>
                <option>Dijital Hat</option>
                <option>Malzeme / Katalog</option>
                <option>Diğer</option>
              </select>
            </div>
            <div className="f-group full">
              <label className="f-label" htmlFor="fmessage">Mesajınız</label>
              <textarea
                className="f-textarea"
                id="fmessage"
                name="message"
                placeholder="Projenizi veya talebinizi kısaca açıklayın..."
                required
              />
            </div>
            <button
              type="submit"
              className="f-submit"
              style={sent ? { background: 'var(--gold)', borderColor: 'var(--gold)', color: 'var(--navy)' } : {}}
            >
              {sent ? 'Mesajınız Gönderildi ✓' : 'Mesaj Gönder'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
