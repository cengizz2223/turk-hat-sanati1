const testimonials = [
  {
    text: 'Nikâhımız için hazırlanan özel hat levhası, ailemizin en değerli hatırası oldu. Emek ve zarafet her fırça darbesinde hissediliyor.',
    author: 'Ayşe & Mehmet K.',
    role: 'Özel Sipariş Müşterisi',
  },
  {
    text: 'Camimizin mihrap yazısı için yaptıkları çalışma mükemmeldi. Büyük format işlerde gösterdikleri ustalık ve hassasiyet gerçekten takdire şayan.',
    author: 'İmam Mustafa E.',
    role: 'Kurumsal Proje',
  },
  {
    text: 'Atölye çalışmaları sayesinde hat sanatını sıfırdan öğrendim. Öğretmenin sabrı ve tutkusu her derse yansıyor. Şiddetle tavsiye ederim.',
    author: 'Zeynep A.',
    role: 'Atölye Öğrencisi',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="referanslar">
      <span className="s-label reveal">Müşterilerimiz</span>
      <h2 className="s-title reveal">Referanslar</h2>
      <span className="s-script reveal" style={{ opacity: 0.45 }}>Neler Dediler</span>
      <div className="s-divider c reveal" />

      <div className="testimonials-grid reveal">
        {testimonials.map((t) => (
          <div key={t.author} className="testi-card">
            <div className="testi-quote">&ldquo;</div>
            <p className="testi-text">{t.text}</p>
            <div className="testi-divider" />
            <div className="testi-author">{t.author}</div>
            <div className="testi-role">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
