const mainPartners = [
  { name: 'YTB', desc: 'Yurtdışı Türkler ve Akraba Topluluklar Başkanlığı', abbr: 'YTB' },
  { name: 'Irfan e.V.', desc: 'Irfan Bildungs- und Kulturverein e.V.', abbr: 'İ' },
]

const supportPartners = [
  { name: 'T.C. Berlin Büyükelçiliği Eğitim Müşavirliği', abbr: 'TC' },
  { name: 'Hayrat Avrupa', abbr: 'HA' },
  { name: 'Yunus Emre Enstitüsü', abbr: 'YE' },
  { name: 'Irfan Bildungs- und Kulturverein e.V.', abbr: 'İ' },
  { name: 'Seniyye', abbr: 'S' },
]

export default function Paydashlar() {
  return (
    <section className="paydashlar" id="paydashlar">
      <span className="s-label reveal">Kurumsal Destek</span>
      <h2 className="s-title reveal">Paydaşlar</h2>
      <span className="s-script reveal" style={{ opacity: 0.45 }}>Birlikte Daha Güçlü</span>
      <div className="s-divider c reveal" />
      <p className="paydashlar-intro reveal">
        Bu proje, aşağıdaki kurumların katkılarıyla hayata geçirilmektedir.
      </p>

      {/* Ana Paydaşlar */}
      <div className="paydashlar-main reveal">
        {mainPartners.map((p) => (
          <div key={p.name} className="partner-main-card">
            <div className="partner-main-abbr">{p.abbr}</div>
            <div className="partner-main-name">{p.name}</div>
            <div className="partner-main-desc">{p.desc}</div>
          </div>
        ))}
      </div>

      {/* Destek Veren Kurumlar */}
      <div className="paydashlar-support-label reveal">Projeye destek veren kurumlar</div>
      <div className="paydashlar-support reveal">
        {supportPartners.map((p) => (
          <div key={p.name} className="partner-support-card">
            <div className="partner-support-abbr">{p.abbr}</div>
            <div className="partner-support-name">{p.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
