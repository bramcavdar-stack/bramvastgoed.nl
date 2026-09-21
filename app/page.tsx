const properties = [
  { title: "Villa aan het water", location: "Rotterdam · Kralingen", price: "€ 1.395.000", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85" },
  { title: "Licht stadsappartement", location: "Rotterdam · Centrum", price: "€ 685.000", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85" },
  { title: "Modern familiehuis", location: "Hillegersberg", price: "€ 925.000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85" },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="logo" href="#">BRAM<span>VASTGOED</span></a>
        <nav><a href="#aanbod">Aanbod</a><a href="#over">Over Bram</a><a href="#contact">Contact</a></nav>
        <a className="navCta" href="#contact">Plan een afspraak</a>
      </header>

      <section className="hero">
        <div className="heroImage" />
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">BRAM VASTGOED · ROTTERDAM</p>
          <h1>Ruimte om<br /><em>thuis</em> te komen.</h1>
          <p className="heroText">Persoonlijke begeleiding bij de aankoop en verkoop van bijzondere woningen.</p>
          <div className="actions"><a className="button" href="#aanbod">Ontdek het aanbod</a><a className="textLink" href="#contact">Vertel ons uw woonwens →</a></div>
        </div>
        <div className="heroMeta"><span>01</span><span>ROTTERDAM &amp; OMGEVING</span></div>
      </section>

      <section className="intro" id="over">
        <div className="sectionLabel">01 — BRAM VASTGOED</div>
        <div className="introCopy"><h2>Vastgoed met<br /><em>gevoel</em> voor detail.</h2><p>Een woning is meer dan vier muren. Het is de plek waar verhalen ontstaan. Bram Vastgoed combineert lokale kennis met een persoonlijke, hoogwaardige aanpak.</p><a className="textLink dark" href="#contact">Maak kennis met Bram →</a></div>
      </section>

      <section className="properties" id="aanbod">
        <div className="sectionHead"><div><div className="sectionLabel">02 — UITGELICHT</div><h2>Ons aanbod</h2></div><a className="textLink dark" href="#contact">Bekijk alle woningen →</a></div>
        <div className="propertyGrid">{properties.map((p) => <article className="property" key={p.title}><div className="propertyImage" style={{backgroundImage: `url("${p.image}")`}}><span>TE KOOP</span></div><div className="propertyInfo"><div><h3>{p.title}</h3><p>{p.location}</p></div><strong>{p.price}</strong></div></article>)}</div>
      </section>

      <section className="statement"><p className="eyebrow">03 — ONZE BELofte</p><h2>Geen standaard<br />makelaar. <em>Wel</em> aandacht.</h2><p>Van het eerste gesprek tot de sleuteloverdracht: helder advies, stijlvolle presentatie en volledige aandacht voor uw woning.</p></section>

      <section className="contact" id="contact">
        <div><div className="sectionLabel">04 — CONTACT</div><h2>Laten we iets<br /><em>moois</em> maken.</h2></div>
        <div className="contactSide"><p>Heeft u verkoopplannen, zoekt u een bijzondere woning of wilt u gewoon eens kennismaken?</p><a className="button light" href="mailto:info@bramvastgoed.nl">Neem contact op</a></div>
      </section>

      <footer><a className="logo footerLogo" href="#">BRAM<span>VASTGOED</span></a><p>Rotterdam · Zuid-Holland</p><p>© 2026 Bram Vastgoed</p></footer>
    </main>
  );
}