// ========= DONNÉES =========
const team = [
  {
    id: "christian", name: "Christian Mwamba",
    role: "Président et Cofondateur",
    org: "Fulfilled Leaders Network (FLN) / Réseau des Leaders Épanouis (RLE)",
    desc: "Christian Mwamba est le visionnaire à l'origine de la création du réseau. Bâtisseur de leaders et catalyseur de transformation, il œuvre à former une génération de leaders conscients, audacieux et engagés, capables d'avoir un impact durable au sein de leurs communautés et des institutions. Convaincu que le leadership est avant tout un état d'esprit, il s'engage à créer des initiatives structurées qui favorisent le développement stratégique et l'engagement communautaire. Son approche repose sur la rigueur et une vision claire orientée vers la croissance durable. Bilingue et expert en gestion de projets, il incarne un leadership fondé sur l'intégrité, l'excellence et le service.",
    img: "Photos RLE/Christian Final.jpg",
    isPortrait: true,
    theme: "dark"
  },
  {
    id: "eliezer", name: "Eliezer Dikiefu",
    role: "Vice-Président et Cofondateur",
    org: "Fulfilled Leaders Network (FLN) / Réseau des Leaders Épanouis (RLE)",
    desc: "Eliezer joue un rôle déterminant dans la structuration stratégique et le développement institutionnel de l'organisation. Reconnu pour son leadership visionnaire et sa capacité à bâtir des initiatives à fort impact, il contribue activement à la croissance et au positionnement du réseau comme une plateforme influente de formation et de mobilisation des leaders. Animé par une foi profonde, un engagement envers l'excellence et une quête constante de connaissance, Eliezer place le développement continu et les valeurs humaines au cœur de son leadership. Sa vision est de construire un réseau solide, structuré et pérenne, capable d'influencer durablement la société.",
    img: "Photos RLE/Eliezer Final.png",
    isPortrait: true,
    theme: "light"
  },
  {
    id: "tensia", name: "Tensia Molisho",
    role: "Directrice Financière et Co-fondatrice",
    org: "Fulfilled Leaders Network (FLN) / Réseau des Leaders Épanouis (RLE)",
    desc: "Tensia Molisho assure la structuration financière et le développement durable de l'organisation. En tant que membre fondatrice, elle contribue activement à la vision et à la consolidation institutionnelle du réseau. Passionnée par le développement personnel et l'intelligence émotionnelle, elle incarne un leadership conscient, aligné sur des valeurs d'intégrité, de croissance et d'impact. Elle contribue à bâtir une organisation solide, résiliente et orientée vers la transformation des individus et des communautés. Par son engagement, elle joue un rôle essentiel dans la construction et le rayonnement du FLN/RLE, contribuant à propulser une nouvelle génération de leaders.",
    img: "Photos RLE/tensia_official.png",
    isPortrait: true,
    theme: "dark"
  },
  {
    id: "marie", name: "Marie-Reine Ntabala",
    role: "Directrice Stratégique des Médias & Co-fondatrice",
    org: "Fulfilled Leaders Network (FLN) / Réseau des Leaders Épanouis (RLE)",
    desc: "Membre fondatrice, Marie-Reine joue un rôle déterminant dans la construction, le positionnement et le rayonnement institutionnel du réseau. Elle dirige l'élaboration et la mise en œuvre des stratégies médiatiques et marketing, en veillant à la cohérence de l'image de marque et à la visibilité de l'organisation à travers ses différentes plateformes et initiatives. Dotée d'une vision stratégique, d'un sens aigu de la communication et d'un engagement profond envers l'impact social, elle contribue à bâtir une identité forte, crédible et inspirante pour l'organisation.",
    img: "Photos RLE/marie_official.png",
    isPortrait: true,
    theme: "light"
  },
  {
    id: "sephora", name: "Sephora Ilunga",
    role: "Directrice Marketing et Événements",
    org: "Fulfilled Leaders Network (FLN) / Réseau des Leaders Épanouis (RLE)",
    desc: "Sephora transforme les idées en expériences percutantes et les initiatives du réseau en véritables moments de connexion et d'inspiration. Bilingue et passionnée, elle combine expertise en gestion de projets et stratégie marketing pour amplifier l'impact et la visibilité du réseau. Elle a su insuffler énergie et innovation dans la planification et l'exécution des activités, tout en assurant une communication fluide avec les partenaires. Son sens du détail permet de transformer chaque projet en réussite tangible et mémorable. Elle contribue à faire du FLN/RLE une plateforme vibrante et inspirante.",
    img: "Photos RLE/Image Finale Séphora.jpg",
    isPortrait: true,
    theme: "dark"
  },
  {
    id: "urielle", name: "Urielle Katende",
    role: "Éditrice en Chef - Contenu & Réseaux Sociaux",
    org: "Fulfilled Leaders Network (FLN) / Réseau des Leaders Épanouis (RLE)",
    desc: "Urielle joue un rôle central dans la création, la supervision et la diffusion de contenus stratégiques qui renforcent la visibilité du réseau. Spécialiste du contenu numérique et passionnée par la communication engageante, elle coordonne les campagnes multimédias, développe la présence du réseau sur les plateformes sociales et veille à ce que chaque message reflète fidèlement la mission et les valeurs de l'organisation. Grâce à sa créativité et son sens de l'innovation, elle contribue à mobiliser et connecter une nouvelle génération de leaders épanouis à travers le Canada.",
    img: "Photos RLE/Image Finale Urielle.jpg",
    isPortrait: true,
    theme: "light"
  },
  {
    id: "nanouche", name: "Nanouche Mulaj",
    role: "Secrétaire Générale",
    org: "Fulfilled Leaders Network (FLN) / Réseau des Leaders Épanouis (RLE)",
    desc: "Nanouche assure un rôle clé dans la coordination administrative, la gouvernance organisationnelle et la continuité des opérations stratégiques. Forte d'une expérience en administration et en logistique événementielle, elle a contribué à la mise en œuvre d'initiatives structurantes, notamment la Conférence Oser Briller. Son expertise lui permet de garantir l'efficacité des processus administratifs et de soutenir le bon fonctionnement des instances dirigeantes. Reconnue pour sa rigueur et son professionnalisme, elle joue un rôle essentiel dans le renforcement de la structure du réseau.",
    img: "Photos RLE/nanoushe final.png",
    isPortrait: true,
    theme: "dark"
  }
];

const newsSlides = [
  {
    date: "28 MARS 2026", tag: "CONFÉRENCE",
    title: "Femmes au cœur du changement",
    desc: "Une conférence inspirante dédiée au leadership féminin et à l'impact des femmes dans nos communautés.",
    img: "Photos RLE/actualité.png"
  },
  {
    date: "", tag: "CITATION",
    title: "Le courage ne rugit pas toujours. Parfois, le courage est la petite voix à la fin de la journée qui dit : ‘Je réessaierai demain.’",
    desc: "Mary Anne Radmacher",
    img: "",
    bgClass: "stars-bg",
    isQuote: true
  },
  {
    date: "OCTOBRE 2026", tag: "CONFÉRENCE",
    title: "Oser Briller – 2ᵉ édition",
    desc: "Détails à venir !",
    img: "Photos RLE/Conférence.jpg"
  }
];

const values = [
  { icon: "🛡️", title: "Intégrité", desc: "Nous agissons avec honnêteté, transparence et cohérence." },
  { icon: "📖", title: "Sagesse & Connaissance", desc: "Apprentissage continu et décisions éclairées." },
  { icon: "✅", title: "Leadership Authentique", desc: "Influence sincère, humble et responsable." },
  { icon: "❤️", title: "Compassion & Empathie", desc: "L'être humain au cœur de chaque initiative." },
  { icon: "💡", title: "Innovation & Créativité", desc: "Idées nouvelles et solutions adaptées." },
  { icon: "⭐", title: "Responsabilité & Excellence", desc: "Viser le plus haut niveau d'engagement." },
  { icon: "🌍", title: "Inclusion & Diversité", desc: "Célébrer la diversité culturelle." },
  { icon: "🤝", title: "Service Communautaire", desc: "Contribuer positivement à la communauté." },
  { icon: "✨", title: "Valeurs Chrétiennes", desc: "Principes inspirés de l'amour et du respect." }
];

const programs = [
  {
    icon: "📊", title: "Ateliers",
    img: "Photos RLE/Atelier_sharpened.png",
    desc: "Organisation d’ateliers interactifs et stratégiques centrés sur l'incubation de projets à fort impact. Nos interventions préparent les leaders à excaver leur potentiel dans quatre sphères clés de transformation : économique, politique, professionnelle et sociale."
  },
  {
    icon: "🎤", title: "Conférences & Réseautage",
    img: "Photos RLE/Conférence.jpg",
    desc: "Organisation de conférences et d'activités de réseautage pour connecter les jeunes, les nouveaux arrivants et les professionnels, mettre en avant des leaders inspirants et renforcer les compétences en leadership."
  },
  {
    icon: "📚", title: "Read to Lead",
    img: "Photos RLE/prog_readtolead_2.png",
    desc: "Un programme structuré autour de lectures thématiques visant à renforcer la pensée critique, le leadership, la communication et la compréhension des enjeux sociaux. Les sessions favorisent l'analyse et le débat constructif."
  },
  {
    icon: "🎙️", title: "Podcast",
    img: "Photos RLE/prog_podcast_2.png",
    desc: "Mettre en avant des leaders émergents et inspirants, qu'ils soient immigrants ou issus de communautés sous-représentées, ayant réussi dans divers domaines : économique, social, politique ou professionnel.",
    isPodcast: true
  }
];

// ========= STATE =========
let currentView = 'home';
let currentSlide = 0;
let slideInterval;

// ========= NAVIGATION =========
function showView(view) {
  currentView = view;
  window.location.hash = view === 'home' ? '' : view;
  renderView();
  window.scrollTo(0, 0);
  updateNav();
}

function getViewFromHash() {
  const hash = window.location.hash.replace('#', '');
  const valid = ['home','about','programs','team','contact','donation'];
  return valid.includes(hash) ? hash : 'home';
}

function updateNav() {
  const nav = document.getElementById('navbar');
  if (currentView !== 'home') {
    nav.classList.add('opaque');
  } else {
    if (window.scrollY <= 50) nav.classList.remove('opaque');
  }
}

window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50 || currentView !== 'home') {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ========= SIDE MENU =========
function openMenu() {
  document.getElementById('side-menu').classList.add('open');
  document.getElementById('overlay').classList.add('open');
}
function closeMenu() {
  document.getElementById('side-menu').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

// ========= NEWS SLIDER =========
function startSlider() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % newsSlides.length;
    renderSlide();
  }, 8000);
}
function prevSlide() {
  currentSlide = currentSlide === 0 ? newsSlides.length - 1 : currentSlide - 1;
  renderSlide(); startSlider();
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % newsSlides.length;
  renderSlide(); startSlider();
}
function renderSlide() {
  newsSlides.forEach((_, i) => {
    const el = document.getElementById('slide-' + i);
    const bg = document.getElementById('slide-bg-' + i);
    if (el) el.classList.toggle('active', i === currentSlide);
    if (bg) bg.classList.toggle('active', i === currentSlide);
  });
  const fill = document.getElementById('progress-fill');
  if (fill) fill.style.width = (((currentSlide + 1) / newsSlides.length) * 100) + '%';
  const num = document.getElementById('slide-num');
  if (num) num.textContent = '0' + (currentSlide + 1);
}

// ========= VIEWS =========
function renderView() {
  const app = document.getElementById('app');
  clearInterval(slideInterval);
  switch (currentView) {
    case 'home':     app.innerHTML = homeHTML(); startSlider(); break;
    case 'about':    app.innerHTML = aboutHTML(); break;
    case 'programs': app.innerHTML = programsHTML(); break;
    case 'team':     app.innerHTML = teamHTML(); break;
    case 'contact':  app.innerHTML = contactHTML(); break;
    case 'donation': app.innerHTML = donationHTML(); break;
  }
}

// ========= HOME =========
function homeHTML() {
  const slideBgs = newsSlides.map((s, i) => `
    <div id="slide-bg-${i}" class="news-bg ${i === 0 ? 'active' : ''} ${s.bgClass || ''}" style="position:absolute;inset:0;">
      ${s.img ? `<img src="${s.img}" alt="${s.title}" style="width:100%;height:100%;object-fit:cover;opacity:1"/>` : ''}
      <div class="news-gradient"></div>
    </div>`).join('');

  const slides = newsSlides.map((s, i) => `
    <div id="slide-${i}" class="news-slide ${i === 0 ? 'active' : ''} ${s.isQuote ? 'is-quote' : ''}">
      <div style="display:flex;align-items:center;gap:1.5rem;margin-bottom:1.5rem">
        <span class="news-tag" style="${s.isQuote ? 'background:rgba(179,139,89,.2);border:1px solid #B38B59;color:#B38B59' : ''}">${s.tag}</span>
        ${s.date ? `<span class="news-date">${s.date}</span>` : ''}
      </div>
      ${s.isQuote ? `<blockquote class="quote-content">${s.title}</blockquote>` : `<h3 class="news-headline">${s.title}</h3>`}
      <p class="${s.isQuote ? 'quote-author' : 'news-desc'}">${s.isQuote ? `— ${s.desc}` : s.desc}</p>
    </div>`).join('');

  return `<div class="view">
  <header class="hero">
    <div class="hero-inner">
      <p class="hero-eyebrow">ÉVEILLER • INSPIRER • DIRIGER</p>
      <h1 class="hero-title">
        Bienvenue au Cœur de<br><em>notre Réseau</em>
      </h1>
      <p class="hero-description">
        Explorez nos activités marquantes et suivez les prochaines initiatives qui façonnent notre communauté.
      </p>
      <div class="hero-ctas">
        <button class="btn-primary" onclick="showView('donation')">FAIRE UN DON</button>
        <button class="btn-outline" onclick="showView('programs')">NOS PROGRAMMES</button>
      </div>
    </div>
  </header>

  <section class="news-section">
    ${slideBgs}
    <div class="news-inner">
      <div class="news-header">
        <div class="news-title-block">
          <p>Journal d'Impact</p>
          <h2>Dernières Nouvelles</h2>
        </div>
        <div class="news-arrows">
          <button class="arrow-btn" onclick="prevSlide()">&#8249;</button>
          <button class="arrow-btn" onclick="nextSlide()">&#8250;</button>
        </div>
      </div>
      ${slides}
      <div class="news-progress">
        <span id="slide-num">01</span>
        <div class="progress-bar"><div class="progress-fill" id="progress-fill" style="width:${(1/newsSlides.length*100)}%"></div></div>
        <span>0${newsSlides.length}</span>
      </div>
    </div>
  </section>

  <section class="values-home">
    <div style="max-width:56rem;margin:0 auto">
      <p class="eyebrow">L'Âme du Réseau</p>
      <h2>Nos <em>Valeurs</em></h2>
      <blockquote>"Nous croyons en un leadership humain, éthique et inspirant, guidé par des principes forts qui orientent nos actions et notre engagement auprès de la communauté."</blockquote>
    </div>
  </section>

  <section class="cta-section">
    <div class="cta-inner">
      <div>
        <p class="cta-eyebrow">Propulser l'Excellence</p>
        <h2 class="cta-title">Soutenez la<br><span>Mission.</span></h2>
        <p class="cta-text">Votre soutien contribue directement à la formation et à l'épanouissement des leaders de demain. Investissez dès aujourd'hui dans l'avenir de notre communauté.</p>
        <button class="btn-cta-gold" onclick="showView('donation')">Faire un don maintenant &nbsp;→</button>
      </div>
      <div class="cta-box">
        <div class="cta-box-icon">🤲</div>
        <p class="cta-box-quote">"Chaque geste bâtit un héritage durable."</p>
        <div class="cta-divider"></div>
      </div>
    </div>
  </section>
</div>`;
}

// ========= ABOUT =========
function aboutHTML() {
  const valCards = values.map(v => `
    <div class="value-card">
      <div class="value-icon">${v.icon}</div>
      <h3>${v.title}</h3>
      <p>${v.desc}</p>
    </div>`).join('');

  return `<div class="view">
  <section class="page-hero about-hero-white">
    <div class="page-hero-inner">
      <p class="page-eyebrow">Identité • Ottawa</p>
      <h1 class="page-title">Bâtir un leadership capable<br><em>d'influencer la société.</em></h1>
    </div>
  </section>

  <section class="about-who">
    <div class="about-who-inner">
      <div>
        <h2>Qui sommes-nous</h2>
        <p>Le <strong>Réseau des Leaders Épanouis</strong> est un groupe de jeunes visionnaires basé à Ottawa, unis par la vision de promouvoir une idéologie de leadership capable de façonner et d'influencer la société grâce à la connaissance, à la sagesse et à la passion des individus.</p>
        <p>Le réseau vise à créer un environnement propice à l'épanouissement personnel et professionnel, en offrant des opportunités d'apprentissage, de partage et de développement du leadership.</p>
      </div>
      <div>
        <img class="about-img" src="Photos RLE/O.jpg" alt="Leadership Ottawa"/>
      </div>
    </div>
  </section>

  <section class="about-vision">
    <div class="about-vision-inner">
      <div style="color:#B38B59;font-size:2rem">👁</div>
      <h2>Vision</h2>
      <blockquote>"Promouvoir une idéologie de leadership capable d'influencer la société à travers la connaissance, la sagesse et la passion des individus."</blockquote>
    </div>
  </section>

  <section class="about-mission">
    <div class="about-mission-inner">
      <div>
        <h2>Mission</h2>
        <p class="about-mission-quote">"Créer un espace où chaque personne peut s'épanouir, concrétiser ses rêves et <span>oser briller</span>."</p>
      </div>
      <div>
        <p class="about-mission-text">En encourageant la proactivité, la collaboration et l'innovation, nous aspirons à former des leaders conscients, capables de bâtir un avenir durable et inspirant.</p>
        <div class="mission-divider"></div>
      </div>
    </div>
  </section>

  <section class="about-values">
    <div class="about-values-inner">
      <h2>Nos Valeurs</h2>
      <p class="subtitle">"Nous croyons en un leadership humain, éthique et inspirant."</p>
      <div class="values-grid">${valCards}</div>
    </div>
  </section>
</div>`;
}

// ========= PROGRAMS =========
function programsHTML() {
  const items = programs.map((p, i) => `
    <div class="program-item">
      <div class="program-inner ${i % 2 !== 0 ? 'reverse' : ''}">
        <div class="program-text">
          <div class="program-icon">${p.icon}</div>
          <h2>${p.title}</h2>
          <p>${p.desc}</p>
          ${p.isPodcast ? `<a href="https://youtube.com/@reseaudesleadersepanouis?si=NY9fpML217kWRtvR" target="_blank" class="btn-youtube"><span class="yt-icon">▶</span> DÉCOUVRIR NOTRE CHAÎNE</a>` : ''}
        </div>
        <div class="program-img-wrap">
          <img src="${p.img}" alt="${p.title}"/>
        </div>
      </div>
    </div>`).join('');

  return `<div class="view">
  <section class="page-hero">
    <div class="page-hero-inner">
      <p class="page-eyebrow">Impact & Initiatives</p>
      <h1 class="page-title">Nos <em>Programmes.</em></h1>
    </div>
  </section>
  ${items}
</div>`;
}

// ========= TEAM =========
function teamHTML() {
  const members = team.map((m, i) => `
    <section id="member-${m.id}" class="team-member ${m.theme}">
      <div class="team-inner ${i % 2 !== 0 ? 'reverse' : ''}">
        <div class="member-photo-wrap">
          <div class="member-photo">
            <img src="${m.img}" alt="${m.name}" style="${m.isPortrait ? 'width:100%;height:100%;object-fit:cover;object-position:center top;position:absolute;top:0;left:0;' : ''}"/>
          </div>
          <div class="photo-corner-tl"></div>
          <div class="photo-corner-br"></div>
        </div>
        <div class="member-info">
          <p class="member-role">${m.role}</p>
          <h2 class="member-name">${m.name}</h2>
          <p class="member-org">${m.org}</p>
          <p class="member-bio">${m.desc}</p>
          <div class="member-socials">
            <span>LinkedIn</span>
            <span>✉ Email</span>
          </div>
        </div>
      </div>
    </section>`).join('');

  return `<div class="view">
  <section class="page-hero">
    <div class="page-hero-inner">
      <p class="page-eyebrow">Conseil de Direction</p>
      <h1 class="page-title" style="font-size:clamp(2.5rem,8vw,5rem)">L'Élite du <em>Leadership.</em></h1>
    </div>
  </section>
  ${members}
</div>`;
}

// ========= CONTACT =========
function contactHTML() {
  return `<div class="view">
  <section class="page-hero">
    <div class="page-hero-inner">
      <p class="page-eyebrow">Contact & Collaboration</p>
      <h1 class="page-title">Contactez-<em>Nous.</em></h1>
    </div>
  </section>
  <section class="contact-section">
    <div class="contact-inner">
      <div class="contact-info">
        <blockquote>"Nous sommes toujours ouverts à collaborer avec des leaders qui partagent notre vision."</blockquote>
        <p>Si vous souhaitez établir un partenariat ou participer à notre podcast, remplissez le formulaire ci-dessous.</p>
        <div class="contact-details">
          <div class="contact-detail loc">
            <span class="icon">📍</span>
            <span>Ottawa, Canada</span>
          </div>
          <div class="contact-detail email">
            <span class="icon">✉</span>
            <span>Contact@rlefln.com</span>
          </div>
        </div>
      </div>
      <div class="contact-form-wrap" id="contact-form-area">
        <form onsubmit="submitContact(event)">
          <div class="form-grid">
            <div class="form-group">
              <label>Nom complet</label>
              <input type="text" required placeholder=""/>
            </div>
            <div class="form-group">
              <label>Adresse courriel</label>
              <input type="email" required placeholder=""/>
            </div>
          </div>
          <div class="form-group">
            <label>Objet</label>
            <select required>
              <option value="">Sélectionner</option>
              <option value="p">Partenariat</option>
              <option value="po">Podcast</option>
              <option value="pu">Publicité</option>
              <option value="a">Autre</option>
            </select>
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea rows="4" required placeholder="Décrivez votre projet..."></textarea>
          </div>
          <button type="submit" class="btn-submit">Envoyer la demande &nbsp;✈</button>
        </form>
      </div>
    </div>
  </section>
</div>`;
}

function submitContact(e) {
  e.preventDefault();
  document.getElementById('contact-form-area').innerHTML = `
    <div class="success-msg">
      <div class="tick">✓</div>
      <h2>Message envoyé.</h2>
      <p>Notre équipe vous contactera prochainement.</p>
    </div>`;
}

// ========= DONATION =========
function donationHTML() {
  return `<div class="view">
  <section class="page-hero">
    <div class="page-hero-inner">
      <p class="page-eyebrow">Soutien & Héritage</p>
      <h1 class="page-title">Soutenez la <em>Mission.</em></h1>
    </div>
  </section>
  <section class="donation-section">
    <div class="donation-inner">
      <div class="donation-info">
        <blockquote>"Votre soutien contribue directement à l'épanouissement des leaders de demain."</blockquote>
        <p>Grâce à vos dons, nous continuons d'offrir des programmes éducatifs, des ateliers et des activités de réseautage qui ont un impact réel dans la communauté.</p>
        <div class="donation-quote-box">
          <p>"En soutenant notre réseau, vous contribuez à bâtir une communauté de leaders engagés, inspirés et prêts à faire une différence."</p>
        </div>
      </div>
      <div class="donation-form-wrap" id="donation-form-area" style="padding: 1rem;">
        <div style="position:relative;overflow:hidden;height:650px;width:100%;"><iframe title='Donation form powered by Zeffy' style='position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%' src='https://www.zeffy.com/embed/donation-form/support-our-mission-110' allowpaymentrequest allowTransparency="true"></iframe></div>
      </div>
    </div>
  </section>
</div>`;
}

function submitDonation(e) {
  e.preventDefault();
  document.getElementById('donation-form-area').innerHTML = `
    <div class="success-msg" style="padding:8rem 2rem">
      <div class="tick">✓</div>
      <h2>Merci infiniment.</h2>
      <p>Votre don a été traité avec succès.</p>
    </div>`;
}

// ========= INIT =========
document.addEventListener('DOMContentLoaded', () => {
  currentView = getViewFromHash();
  renderView();
  updateNav();
});

window.addEventListener('hashchange', () => {
  currentView = getViewFromHash();
  renderView();
  window.scrollTo(0, 0);
  updateNav();
});
