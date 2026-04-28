/* ═══════════════════════════════════════════════════════
   HACK2HIRE 1.0 — FINALISTS SHOWCASE
   app.js
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────────────────
   DATA  — Replace placeholder entries with real data
   ───────────────────────────────────────────────────────── */

/**
 * FINALISTS  (10 teams)
 * Each object represents one team shown on a card.
 * Fields:
 *   id        – unique key
 *   name      – project/team name
 *   team      – team identifier
 *   role      – participant names
 *   tags      – branch/semester tags
 *   linkedin  – LinkedIn profile URL (null → shows "Coming Soon")
 *   avatar    – image URL or null (initials shown as fallback)
 */
const FINALISTS = [
  {
    id: 'f1',
    name: 'Interrupt Error',
    statement: 'Impact Analysis & Automated Test Execution Tool',
    role: 'Adithya S, Sooraj R Nair',
    tags: ['6th CSE'],
    github: 'https://github.com/sjr27-maker/H2H-Interrupt-Error-Impact-Lens',
    linkedins: [
      { name: 'Adithya S', url: 'https://www.linkedin.com/in/adithya-s-1620342a9/' },
      { name: 'Sooraj R', url: 'https://www.linkedin.com/in/soorajjr27' }
    ],
    avatar: null,
  },
  {
    id: 'f2',
    name: 'Error202',
    statement: 'Intelligent Network Topology Discovery & Anomaly Detection',
    role: 'Rahul Balan, Gladson K',
    tags: ['6th CSE'],
    github: 'https://github.com/Gladson-git/H2H-Error202-NetGraphIQ',
    linkedins: [],
    avatar: null,
  },
  {
    id: 'f3',
    name: 'Binary Bandits',
    statement: 'AI-Powered Network Log Translator',
    role: 'Ayush Krishnan, Hithashree P',
    tags: ['6th IOT'],
    github: 'https://github.com/Ayush75-arch/H2H-BinaryBandits-Network_Log_Translator.git',
    linkedins: [
      { name: 'Hithasree P', url: 'https://www.linkedin.com/in/hithasree-p-584383290' }
    ],
    avatar: null,
  },
  {
    id: 'f4',
    name: 'Team Visions',
    statement: 'Protocol Fuzzing & Network Resilience Tool',
    role: 'Jeevan Reddy, Sagar L',
    tags: ['4th IOT'],
    github: 'https://github.com/sagar-l/protocol-fuzzing-and-network-resilenece-toll.git',
    linkedins: [
      { name: 'Sagar L', url: 'https://www.linkedin.com/in/sagar-l-575181323' }
    ],
    avatar: null,
  },
  {
    id: 'f5',
    name: 'Shadow Hash',
    statement: 'Smart Customer Management Portal with AI-Driven Insights',
    role: 'Mohith Kumar, Pavan R',
    tags: ['6th CSE', '6th DS'],
    github: 'https://github.com/MohithKumar223/Shadow-Hash.git',
    linkedins: [
      { name: 'Mohith', url: 'https://www.linkedin.com/in/mohithkumar-dev/' },
      { name: 'Pavan R', url: 'https://www.linkedin.com/in/pavan-r-244678292' }
    ],
    avatar: null,
  },
  {
    id: 'f6',
    name: 'InnovAItors',
    statement: 'AI-Powered Jenkins Pipeline Analyzer & Self-Healing DevOps Agent',
    role: 'Preetam Kage, Vinay Babannavar',
    tags: ['6th CSE'],
    github: 'https://github.com/vinaybabannavar-create/AI-Powered-Jenkins-Pipeline-Analyzer-Self-Healing-DevOps-Agent',
    linkedins: [],
    avatar: null,
  },
  {
    id: 'f7',
    name: 'DUAL 404',
    statement: 'Agentic AI Ops Assistant for Kubernetes Clusters',
    role: 'Nethravathi D, Neethu Chauhan',
    tags: ['6th CSE'],
    github: 'https://github.com/Nethravathi-24/H2H-DUAL-404---AI-Ops-KUBERNETES-AGENT',
    linkedins: [
      { name: 'Nethravathi', url: 'https://www.linkedin.com/in/nethravathi-d24' }
    ],
    avatar: null,
  },
  {
    id: 'f8',
    name: 'OopsOps',
    statement: 'Intelligent Network Topology Discovery & Anomaly Detection',
    role: 'Jeswin M, Avikrit Chhetri',
    tags: ['6th IOT'],
    github: 'https://github.com/avi2004-cpu/H2H-OopsOps-INS_System.git',
    linkedins: [],
    avatar: null,
  },
  {
    id: 'f9',
    name: 'Latency Legends',
    statement: 'Agentic AI Ops Assistant for Kubernetes Clusters',
    role: 'Panyam Siva, Siva mallesh',
    tags: ['6th CSE'],
    github: 'https://github.com/SivaPanyam/H2H-Latency-Legends-KubeAssist.git',
    linkedins: [
      { name: 'Siva Panyam', url: 'https://www.linkedin.com/in/siva-panyam-587268290' }
    ],
    avatar: null,
  },
  {
    id: 'f10',
    name: 'CryptoKnights',
    statement: 'Agentic AI Ops Assistant for Kubernetes Clusters',
    role: 'Harsha C, Manoj Kumar C',
    tags: ['6th CSE'],
    github: 'https://github.com/Mr-hars007/H2H-CryptoKnights-AI-K8s-Agent',
    linkedins: [
      { name: 'Harsha C', url: 'https://in.linkedin.com/in/harsha-c14920' }
    ],
    avatar: null,
  },
];

/**
 * GUESTS  — Distinguished guests / judges
 * Fields: id, name, title, company, linkedin, avatar
 */
const GUESTS = [
  {
    id: 'g1',
    name: 'Surendra Kumar Viswanathan',
    title: 'Guest / Judge',
    company: 'Nile Secure',
    linkedin: 'https://www.linkedin.com/in/surendra-kumar-viswanathan-9338428',
    avatar: null,
  },
  {
    id: 'g2',
    name: 'Devendra Mukharaiya',
    title: 'Guest / Judge',
    company: 'Nile Secure',
    linkedin: 'https://www.linkedin.com/in/devendra-mukharaiya-41293366',
    avatar: null,
  },
  {
    id: 'g3',
    name: 'Sriharsh',
    title: 'Guest / Judge',
    company: 'Nile Secure',
    linkedin: 'https://www.linkedin.com/in/sriharsh/',
    avatar: null,
  },
];

/**
 * FACULTY COORDINATOR
 */
const FACULTY_COORDINATOR = [
  {
    id: 'o0',
    name: 'Dr. Sudaroli',
    title: 'Faculty Coordinator',
    company: 'CSE Dept, TJIT',
    linkedin: 'https://www.linkedin.com/in/dr-sudaroli-dhananjeyan-581444163/',
    avatar: null,
  }
];

/**
 * ORGANIZERS  — Hack2Hire organizing committee
 */
const ORGANIZERS = [
  {
    id: 'o1',
    name: 'G. Surya',
    title: 'Operations Lead',
    company: '📞 8667234480',
    linkedin: 'https://www.linkedin.com/in/g-surya-63a01b290',
    avatar: null,
  },
  {
    id: 'o2',
    name: 'Gomathi D',
    title: 'Event Lead',
    company: '📞 8618474453',
    linkedin: 'https://www.linkedin.com/in/gomathi-dhandapani-47435b350',
    avatar: null,
  },
  {
    id: 'o3',
    name: 'Yashaswini C',
    title: 'Design Lead',
    company: '📞 7338144731',
    linkedin: 'https://www.linkedin.com/in/yashaswini-c-02b97235a/',
    avatar: null,
  },
  {
    id: 'o4',
    name: 'Ahmed Sufiyan',
    title: 'Tech Lead',
    company: '📞 7483368337',
    linkedin: 'https://www.linkedin.com/in/ahmedsufiyan209/',
    avatar: null,
  },
];

/**
 * VOLUNTEERS
 */
const VOLUNTEERS = [
  {
    id: 'v1',
    name: 'Vivek',
    title: 'Volunteer',
    company: '4th Sem CSE',
    linkedin: null,
    avatar: null,
  },
  {
    id: 'v2',
    name: 'Vijisha',
    title: 'Volunteer',
    company: '4th Sem CSE',
    linkedin: null,
    avatar: null,
  }
];

/* ─────────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────────── */

/** Returns initials from a name string */
function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map(w => w[0].toUpperCase())
    .slice(0, 2)
    .join('');
}

/** Builds a LinkedIn button element */
function buildLinkedInBtn(url, isCyan = false) {
  const a = document.createElement('a');
  const liSVG = `<svg class="li-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>`;

  if (url) {
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = `li-btn${isCyan ? ' cyan-li' : ''}`;
    a.innerHTML = `${liSVG} Connect on LinkedIn`;
  } else {
    a.href = '#';
    a.className = `li-btn placeholder-li${isCyan ? ' cyan-li' : ''}`;
    a.setAttribute('aria-disabled', 'true');
    a.innerHTML = `${liSVG} LinkedIn Coming Soon`;
  }
  return a;
}

/** Builds a GitHub button element */
function buildGitHubBtn(url) {
  const a = document.createElement('a');
  const ghSVG = `<svg class="li-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>`;

  if (url) {
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'li-btn cyan-li';
    a.innerHTML = `${ghSVG} Repository`;
  } else {
    a.href = '#';
    a.className = 'li-btn placeholder-li cyan-li';
    a.setAttribute('aria-disabled', 'true');
    a.innerHTML = `${ghSVG} Code TBA`;
  }
  return a;
}

/* ─────────────────────────────────────────────────────────
   RENDER — FINALISTS
   ───────────────────────────────────────────────────────── */

function renderFinalists() {
  const grid = document.getElementById('finalistGrid');
  if (!grid) return;
  grid.innerHTML = '';

  FINALISTS.forEach((f, i) => {
    const card = document.createElement('div');
    card.className = 'finalist-card reveal';
    card.style.animationDelay = `${i * 0.06}s`;
    card.id = `finalist-card-${f.id}`;

    // Rank badge
    const rank = document.createElement('div');
    rank.className = 'finalist-rank';
    rank.textContent = `#${String(i + 1).padStart(2, '0')}`;

    // Card body (flex: avatar + info)
    const body = document.createElement('div');
    body.className = 'finalist-card-body';

    // Avatar
    const avatar = document.createElement('div');
    avatar.className = 'finalist-avatar';
    if (f.avatar) {
      const img = document.createElement('img');
      img.src = f.avatar;
      img.alt = f.name;
      img.loading = 'lazy';
      avatar.appendChild(img);
    } else {
      avatar.textContent = getInitials(f.name);
    }

    // Info block
    const info = document.createElement('div');
    info.className = 'finalist-info';

    const name = document.createElement('div');
    name.className = 'finalist-name';
    name.textContent = f.name;

    const team = document.createElement('div');
    team.className = 'finalist-team';
    if (f.statement) {
      team.textContent = f.statement;
    } else {
      team.textContent = 'Problem Statement TBA';
    }

    const role = document.createElement('div');
    role.className = 'finalist-role';
    role.textContent = f.role;

    // Tags
    const tagsWrap = document.createElement('div');
    tagsWrap.className = 'finalist-tags';
    (f.tags || []).forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'finalist-tag';
      tag.textContent = t;
      tagsWrap.appendChild(tag);
    });

    // Links
    const linksWrap = document.createElement('div');
    linksWrap.className = 'finalist-links';

    if (f.github) {
      linksWrap.appendChild(buildGitHubBtn(f.github));
    }
    
    if (f.linkedins && f.linkedins.length > 0) {
      f.linkedins.forEach(link => {
        const btn = buildLinkedInBtn(link.url, true);
        btn.innerHTML = btn.innerHTML.replace('Connect on LinkedIn', link.name);
        linksWrap.appendChild(btn);
      });
    }

    info.append(name, team, role, tagsWrap, linksWrap);
    body.append(avatar, info);
    card.append(rank, body);
    grid.appendChild(card);
  });
}

/* ─────────────────────────────────────────────────────────
   RENDER — PERSON CARD (Guests / Nile / Organizers)
   ───────────────────────────────────────────────────────── */

function renderPeopleGrid(containerId, people, isCyan = false) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = '';

  if (!people || people.length === 0) {
    const cs = document.createElement('div');
    cs.className = 'coming-soon-card';
    cs.innerHTML = `
      <div class="coming-soon-icon">⏳</div>
      <div class="coming-soon-title">COMING SOON</div>
      <div class="coming-soon-sub">Details will be announced shortly</div>`;
    grid.appendChild(cs);
    return;
  }

  people.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'person-card reveal';
    card.style.animationDelay = `${i * 0.07}s`;
    card.id = `person-card-${p.id}`;

    // Avatar
    const avatar = document.createElement('div');
    avatar.className = 'person-avatar';
    if (p.avatar) {
      const img = document.createElement('img');
      img.src = p.avatar;
      img.alt = p.name;
      img.loading = 'lazy';
      avatar.appendChild(img);
    } else {
      avatar.textContent = getInitials(p.name);
    }

    const name = document.createElement('div');
    name.className = 'person-name';
    name.textContent = p.name;

    const title = document.createElement('div');
    title.className = 'person-title';
    title.textContent = p.title;

    const company = document.createElement('div');
    company.className = 'person-company';
    company.textContent = p.company;

    card.append(avatar, name, title, company, buildLinkedInBtn(p.linkedin, isCyan));
    grid.appendChild(card);
  });
}

/* ─────────────────────────────────────────────────────────
   PARTICLE NETWORK
   ───────────────────────────────────────────────────────── */

function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles, mouse = { x: -9999, y: -9999 };
  const COUNT = window.innerWidth < 768 ? 55 : 110;
  const MAX_DIST = 140;
  const MOUSE_DIST = 180;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function mkParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 2 + 1,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, mkParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Update positions
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      // Draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,245,255,0.55)';
      ctx.fill();
    });

    // Draw connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.3;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,245,255,${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      // Mouse repulsion
      const mdx = particles[i].x - mouse.x;
      const mdy = particles[i].y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < MOUSE_DIST) {
        const force = (MOUSE_DIST - mdist) / MOUSE_DIST * 0.012;
        particles[i].vx += (mdx / mdist) * force;
        particles[i].vy += (mdy / mdist) * force;
        // Cap speed
        const speed = Math.sqrt(particles[i].vx ** 2 + particles[i].vy ** 2);
        if (speed > 1.5) {
          particles[i].vx = (particles[i].vx / speed) * 1.5;
          particles[i].vy = (particles[i].vy / speed) * 1.5;
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

  init();
  draw();
}

/* ─────────────────────────────────────────────────────────
   CONSOLE LOG SIDE PANEL
   ───────────────────────────────────────────────────────── */

function initConsoleLog() {
  const panel = document.getElementById('consoleLog');
  if (!panel) return;

  const messages = [
    ':: Initializing Hack2Hire 1.0...',
    ':: Loading finalist profiles...',
    ':: Establishing secure connection...',
    ':: Verifying submission integrity...',
    ':: Compiling innovative solutions...',
    ':: Optimizing system resources...',
    ':: Kernel version 2.0.6 loaded.',
    ':: Bootstrapping participant nodes...',
    ':: Running code quality checks...',
    ':: Syncing with industry partners...',
    ':: Nile Secure handshake complete.',
    ':: Finalizing event parameters...',
    ':: Participant data authenticated.',
    ':: Judge panels connected — OK.',
    ':: Stage environment configured.',
    ':: Countdown sequence armed.',
    ':: All systems nominal.',
    ':: Awaiting presentations...',
    ':: LinkedIn API initialized.',
    ':: Department of CSE — online.',
    ':: T John Institute — connected.',
    ':: Live scoring board ready.',
    ':: Broadcast channel active.',
    ':: Submission review — complete.',
    ':: Top 10 teams confirmed.',
    ':: Loading sponsor assets...',
    ':: Security protocols engaged.',
    ':: Backup systems standing by.',
    ':: Press pass verified.',
    ':: Good luck, finalists! 🚀',
  ];

  let lineIdx = 0;
  let lines = [];

  function addLine() {
    const now = new Date();
    const ts = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
    const msg = messages[lineIdx % messages.length];
    lineIdx++;
    lines.push(`> ${ts} ${msg}`);
    if (lines.length > 60) lines.shift();
    panel.textContent = lines.join('\n');
    panel.scrollTop = panel.scrollHeight;
  }

  // Prime with some lines
  for (let i = 0; i < 18; i++) addLine();
  setInterval(addLine, 1800);
}

/* ─────────────────────────────────────────────────────────
   SCROLL REVEAL
   ───────────────────────────────────────────────────────── */

function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Re-observe any cards added dynamically after initial render
  const mutObs = new MutationObserver(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  });
  mutObs.observe(document.body, { childList: true, subtree: true });
}

/* ─────────────────────────────────────────────────────────
   MOBILE NAV
   ───────────────────────────────────────────────────────── */

function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    // Animate hamburger → X
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close on link click
  mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
}

/* ─────────────────────────────────────────────────────────
   HEADER SCROLL BEHAVIOR
   ───────────────────────────────────────────────────────── */

function initHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.background = 'rgba(2,13,26,0.95)';
    } else {
      header.style.background = 'rgba(2,13,26,0.7)';
    }
  }, { passive: true });
}

/* ─────────────────────────────────────────────────────────
   SECTION TITLE REVEAL GLOW EFFECT
   ───────────────────────────────────────────────────────── */

function initSectionGlow() {
  const titles = document.querySelectorAll('.section-title');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.transition = 'text-shadow 1s ease';
        e.target.style.textShadow = '0 0 40px rgba(0,245,255,0.3)';
      }
    });
  }, { threshold: 0.5 });
  titles.forEach(t => obs.observe(t));
}

/* ─────────────────────────────────────────────────────────
   BOOT — INIT ALL
   ───────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  // Render data
  renderFinalists();
  renderPeopleGrid('guestsGrid', GUESTS, true);
  renderPeopleGrid('facultyGrid', FACULTY_COORDINATOR, true);
  renderPeopleGrid('organizersGrid', ORGANIZERS, true);
  renderPeopleGrid('volunteersGrid', VOLUNTEERS, true);

  // UI systems
  initParticles();
  initConsoleLog();
  initScrollReveal();
  initMobileNav();
  initHeader();
  initSectionGlow();
});
