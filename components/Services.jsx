const services = [
  {
    num: '01',
    title: 'Özel Hat\nSiparişleri',
    desc: 'Kişiye özel isimler, sureler, şiirler veya anlamlı sözler; seçtiğiniz hat stilinde, sizin için özenle hazırlanır. Her eser benzersizdir.',
    link: '#iletisim',
    linkLabel: 'Sipariş Ver',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Hat Sanatı\nAtölyeleri',
    desc: 'Başlangıç seviyesinden ileri seviyeye kadar düzenlenen atölye çalışmalarında hat sanatının inceliklerini birebir öğrenin.',
    link: '#atolye',
    linkLabel: 'Programa Bak',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Kurumsal &\nMimari Hatlar',
    desc: 'Camiler, kurumlar ve mimari mekânlar için büyük format hat çalışmaları; levhalar, tabelalar ve dekoratif paneller hazırlanır.',
    link: '#iletisim',
    linkLabel: 'Bilgi Al',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Nikâh &\nÖzel Günler',
    desc: 'Düğün, nikâh, doğum günü ve özel anlar için kişiselleştirilmiş hat hediyelikleri ve sertifikalar özenle hazırlanır.',
    link: '#iletisim',
    linkLabel: 'Sipariş Ver',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Dijital &\nBaskı Hattı',
    desc: 'Dijital ortama aktarılmış yüksek çözünürlüklü hat çalışmaları; poster, tablo baskısı ve çerçeveleme hizmetleriyle eksiksiz sunulur.',
    link: '#iletisim',
    linkLabel: 'Keşfet',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Malzemeler &\nKitaplar',
    desc: 'Kaliteli kalem, mürekkep, kâğıt ve hat kitapları; hat yolculuğunuzun her aşaması için özenle seçilmiş malzemeler.',
    link: '#iletisim',
    linkLabel: 'Kataloğa Bak',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="services" id="hizmetler">
      <span className="s-label reveal">Neler Sunuyoruz</span>
      <h2 className="s-title reveal">Hizmetlerimiz</h2>
      <span className="s-script reveal">Size Özel</span>
      <div className="s-divider c reveal" />

      <div className="services-grid reveal">
        {services.map((s) => (
          <div key={s.num} className="svc-card">
            <span className="svc-num">{s.num}</span>
            <div className="svc-icon">{s.icon}</div>
            <h3 className="svc-title">
              {s.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h3>
            <p className="svc-desc">{s.desc}</p>
            <a href={s.link} className="svc-link">{s.linkLabel}</a>
          </div>
        ))}
      </div>
    </section>
  )
}
