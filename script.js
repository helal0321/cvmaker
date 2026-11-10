const templates = [
  { id: 'modern', name: 'Modern', category: 'Popular', description: 'Clean, confident, and contemporary', layout: 'sidebar' },
  { id: 'professional', name: 'Professional', category: 'Popular', description: 'A timeless business-ready format', layout: 'classic' },
  { id: 'minimal', name: 'Minimal', category: 'Minimal', description: 'Quietly confident with generous space', layout: 'minimal' },
  { id: 'executive', name: 'Executive', category: 'Professional', description: 'Polished presence for senior leaders', layout: 'header' },
  { id: 'creative', name: 'Creative', category: 'Creative', description: 'A little more personality, still polished', layout: 'creative' },
  { id: 'developer', name: 'Developer', category: 'Technology', description: 'Technical skills take center stage', layout: 'sidebar' },
  { id: 'academic', name: 'Academic', category: 'Academic', description: 'Research and education focused', layout: 'classic' },
  { id: 'bold', name: 'Bold', category: 'Creative', description: 'Strong typography and a striking header', layout: 'header' },
  { id: 'timeline', name: 'Timeline', category: 'Professional', description: 'A clear story of your career journey', layout: 'timeline' },
  { id: 'compact', name: 'Compact', category: 'Minimal', description: 'More impact in less space', layout: 'minimal' },
  { id: 'elegant', name: 'Elegant', category: 'Professional', description: 'Refined typography with classic details', layout: 'classic' },
  { id: 'studio', name: 'Studio', category: 'Creative', description: 'Color-blocked layout for makers', layout: 'creative' },
  { id: 'corporate', name: 'Corporate', category: 'Professional', description: 'Structured, focused, and reliable', layout: 'header' },
  { id: 'technical', name: 'Technical', category: 'Technology', description: 'Skills and projects front and center', layout: 'sidebar' },
  { id: 'swiss', name: 'Swiss', category: 'Minimal', description: 'Precise grid and editorial clarity', layout: 'minimal' },
  { id: 'journal', name: 'Journal', category: 'Academic', description: 'A thoughtful, publication-inspired CV', layout: 'classic' },
  { id: 'signal', name: 'Signal', category: 'Creative', description: 'High contrast with a memorable profile', layout: 'creative' },
  { id: 'horizon', name: 'Horizon', category: 'Professional', description: 'A spacious, modern two-column resume', layout: 'sidebar' },
  { id: 'milestone', name: 'Milestone', category: 'Professional', description: 'Milestones and achievements in focus', layout: 'timeline' },
  { id: 'monogram', name: 'Monogram', category: 'Creative', description: 'Distinctive nameplate and elegant details', layout: 'header' },
  { id: 'folio', name: 'Folio', category: 'Creative', description: 'Portfolio-inspired and image-ready', layout: 'creative' },
  { id: 'scholar', name: 'Scholar', category: 'Academic', description: 'A traditional format for academia', layout: 'classic' },
];

const templateCategories = ['All', ...new Set(templates.map((t) => t.category))];

const sections = [
  { id: 'personal', label: 'Personal details', number: '01', group: 'YOUR CONTENT' },
  { id: 'experience', label: 'Work experience', number: '02', group: 'YOUR CONTENT' },
  { id: 'education', label: 'Education', number: '03', group: 'YOUR CONTENT' },
  { id: 'skills', label: 'Skills & expertise', number: '04', group: 'YOUR CONTENT' },
  { id: 'projects', label: 'Projects', number: '05', group: 'YOUR CONTENT' },
  { id: 'extras', label: 'Certifications & languages', number: '06', group: 'YOUR CONTENT' },
  { id: 'design', label: 'Design & templates', number: '07', group: 'LOOK & FEEL' },
];

const sampleResume = {
  personal: {
    fullName: 'Alex Morgan',
    title: 'Senior Product Designer',
    email: 'alex.morgan@email.com',
    phone: '+1 (415) 555-0138',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/alexmorgan',
    github: 'github.com/alexmorgan',
    website: 'alexmorgan.design',
    avatar: ''
  },
  summary: 'Product designer with 8+ years of experience turning complex problems into thoughtful digital products. I partner across design, research, and engineering to build experiences that feel simple, inclusive, and genuinely useful.',
  experience: [
    {
      id: crypto.randomUUID(),
      role: 'Senior Product Designer',
      company: 'Northstar',
      location: 'San Francisco, CA',
      startDate: '2021',
      endDate: 'Present',
      bullets: [
        'Led end-to-end design for a new analytics platform used by 45,000+ customers.',
        'Improved activation by 28% by simplifying the onboarding journey across web and mobile.',
        'Built a shared design system that cut product delivery time by 35%.'
      ]
    },
    {
      id: crypto.randomUUID(),
      role: 'Product Designer',
      company: 'Forma Labs',
      location: 'Oakland, CA',
      startDate: '2018',
      endDate: '2021',
      bullets: [
        'Shipped 12 customer-facing features in close collaboration with a team of 10 engineers.',
        'Introduced a continuous research program that informed quarterly product strategy.'
      ]
    }
  ],
  education: [
    { id: crypto.randomUUID(), degree: 'BFA, Interaction Design', institution: 'California College of the Arts', location: 'San Francisco, CA', date: '2014 – 2018', detail: 'Magna Cum Laude' }
  ],
  skills: [
    { id: crypto.randomUUID(), name: 'Product design', category: 'Design', level: 5 },
    { id: crypto.randomUUID(), name: 'Figma', category: 'Design', level: 5 },
    { id: crypto.randomUUID(), name: 'Prototyping', category: 'Design', level: 4 },
    { id: crypto.randomUUID(), name: 'User research', category: 'Research', level: 4 },
    { id: crypto.randomUUID(), name: 'Design systems', category: 'Tools', level: 5 },
    { id: crypto.randomUUID(), name: 'HTML & CSS', category: 'Technology', level: 3 }
  ],
  projects: [
    { id: crypto.randomUUID(), name: 'Goodwell', description: 'A personal finance experience that makes everyday money decisions feel more approachable.', link: 'goodwell.app', technologies: 'Product strategy, UX, UI' },
    { id: crypto.randomUUID(), name: 'Open Source Design Kit', description: 'An accessible component library for early-stage product teams.', link: 'github.com/alexmorgan/design-kit', technologies: 'Figma, React, Storybook' }
  ],
  certifications: [
    { id: crypto.randomUUID(), name: 'Certified UX Professional', issuer: 'Nielsen Norman Group', date: '2022' }
  ],
  languages: [
    { id: crypto.randomUUID(), name: 'English', proficiency: 'Native' },
    { id: crypto.randomUUID(), name: 'Spanish', proficiency: 'Conversational' }
  ],
  theme: { color: '#496b59', font: 'sans', density: 'comfortable', template: 'modern' }
};

const state = {
  activeSection: 'personal',
  zoom: 0.75,
  showAts: false,
  exportOpen: false,
  previewMode: 'desktop',
  notice: '',
  fileInput: null,
  templateFilter: 'All',
  data: loadFromStorage() || JSON.parse(JSON.stringify(sampleResume))
};

function clone(obj) { return JSON.parse(JSON.stringify(obj)); }

function saveToStorage() {
  localStorage.setItem('resume-studio-data', JSON.stringify(state.data));
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem('resume-studio-data');
    const parsed = raw ? JSON.parse(raw) : null;
    if (parsed && parsed.personal && parsed.theme) return parsed;
  } catch (err) {
    console.warn('Failed to load resume data', err);
  }
  return null;
}

function parseHash() {
  const hash = window.location.hash;
  if (!hash.startsWith('#resume=')) return null;
  try {
    const value = atob(hash.slice('#resume='.length));
    const json = decodeURIComponent(escape(value));
    const parsed = JSON.parse(json);
    return parsed && parsed.personal ? parsed : null;
  } catch (err) {
    console.warn('Failed to parse share hash', err);
    return null;
  }
}

function normalizeState() {
  const parsedHash = parseHash();
  if (parsedHash) {
    state.data = parsedHash;
    saveToStorage();
    return;
  }
  state.data = loadFromStorage() || clone(sampleResume);
}

normalizeState();

function getCurrentTemplate() {
  const template = templates.find((item) => item.id === state.data.theme.template) || templates[0];
  return template;
}

function computeATS() {
  const checks = [
    { label: 'Contact details', complete: Boolean(state.data.personal.email && state.data.personal.phone) },
    { label: 'Professional summary', complete: state.data.summary.trim().length >= 60 },
    { label: 'Work experience', complete: state.data.experience.some((item) => item.role && item.company && item.bullets.some(Boolean)) },
    { label: 'Education', complete: state.data.education.some((item) => item.degree && item.institution) },
    { label: 'Relevant skills', complete: state.data.skills.length >= 4 },
  ];
  const score = Math.round((checks.filter((check) => check.complete).length / checks.length) * 100);
  const words = `${state.data.summary} ${state.data.experience.flatMap((item) => item.bullets).join(' ')} ${state.data.skills.map((skill) => skill.name).join(' ')}`.toLowerCase();
  const keywords = ['lead', 'develop', 'manage', 'improve', 'design', 'deliver', 'analyze', 'create'];
  const matched = keywords.filter((keyword) => words.includes(keyword));
  return {
    score,
    checks,
    tip: matched.length < 3 ? 'Add action words like “led”, “developed”, or “improved” to show your impact.' : 'Nice use of action words. Add measurable results to make your achievements even stronger.'
  };
}

function setNotice(message) {
  state.notice = message;
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.style.display = 'flex';
  clearTimeout(setNotice.timer);
  setNotice.timer = setTimeout(() => {
    el.style.display = 'none';
  }, 2200);
}

function renderApp() {
  const ats = computeATS();
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <a class="brand" href="#" aria-label="Resume Studio home"><span class="brand-mark">📄</span><span>resume<span class="brand-light">studio</span></span><span class="beta-chip">BETA</span></a>
        <div class="topbar-center"><span class="save-indicator"><span class="save-dot"></span> All changes saved</span><span class="topbar-divider"></span><span class="document-name">${state.data.personal.fullName ? `${state.data.personal.fullName}’s resume` : 'Untitled resume'}</span><button class="tiny-chevron" aria-label="Rename resume">▾</button></div>
        <div class="topbar-actions">
          <button class="top-action sample-action" id="loadSampleBtn"><span>Load sample</span></button>
          <button class="top-action import-action" id="importBtn">Import</button>
          <input id="importInput" type="file" accept=".json,application/json" hidden />
          <button class="share-button" id="shareBtn">Share</button>
          <div class="export-wrap">
            <button class="export-button" id="exportBtn">Export ▾</button>
            ${state.exportOpen ? `
              <div class="export-menu">
                <strong>Download your resume</strong>
                <button data-export="pdf"><span><b>Save as PDF</b><small>Print-ready, standard paper size</small></span></button>
                <button data-export="word"><span><b>Word document</b><small>Editable Microsoft Word file (.doc)</small></span></button>
                <button data-export="json"><span><b>Resume data</b><small>JSON backup file</small></span></button>
              </div>
            ` : ''}
          </div>
        </div>
      </header>
      <main class="workspace">
        <aside class="editor-sidebar">
          <div class="sidebar-progress">
            <div class="progress-top"><span>YOUR RESUME</span><span>${ats.score}% complete</span></div>
            <div class="progress-track"><span style="width:${ats.score}%"></span></div>
          </div>
          <nav class="section-nav" aria-label="Resume sections">
            ${sections.map((section, index) => {
              const groupBreak = index === 0 || sections[index - 1].group !== section.group;
              return `
                <div>
                  ${groupBreak ? `<span class="nav-group">${section.group}</span>` : ''}
                  <button class="section-nav-item ${state.activeSection === section.id ? 'active' : ''}" data-section="${section.id}">
                    <span class="nav-number">${section.number}</span>
                    <span>${section.label}</span>
                    ${state.activeSection === section.id ? '<span class="nav-arrow">→</span>' : ''}
                  </button>
                </div>
              `;
            }).join('')}
          </nav>
          <div class="sidebar-bottom">
            <button class="ats-toggle" id="atsToggle">
              <span class="ats-icon">✦</span>
              <span class="ats-copy"><strong>ATS check</strong><small>Optimize for applications</small></span>
              <span class="ats-score">${ats.score}</span>
            </button>
            ${state.showAts ? `
              <div class="ats-panel">
                <div class="ats-panel-heading"><span>Resume readiness</span><b>${ats.score}/100</b></div>
                <div class="ats-progress"><i style="width:${ats.score}%"></i></div>
                ${ats.checks.map((check) => `<div class="ats-check"><span class="${check.complete ? 'check-ok' : ''}">${check.complete ? '✓' : ''}</span>${check.label}</div>`).join('')}
                <p>💡 ${ats.tip}</p>
              </div>
            ` : ''}
            <button class="sidebar-help" id="helpBtn">❔ Help & tips →</button>
          </div>
        </aside>
        <section class="editor-pane" aria-label="Resume editor">
          <div class="editor-heading">
            <div class="editor-heading-text">
              <span class="editor-kicker">${sections.find((section) => section.id === state.activeSection)?.number} / 07</span>
              <h1>${sections.find((section) => section.id === state.activeSection)?.label}</h1>
            </div>
            <button class="reset-button" id="resetBtn">↻ Start over</button>
          </div>
          <div class="editor-content" id="editorContent"></div>
          <div class="editor-footer">
            <button class="footer-previous" id="prevBtn" ${state.activeSection === 'personal' ? 'disabled' : ''}>← Previous</button>
            <span>Changes save automatically</span>
            <button class="footer-next" id="nextBtn">${state.activeSection === 'design' ? 'Download resume' : 'Next section'} ${state.activeSection === 'design' ? '🖨' : '→'}</button>
          </div>
        </section>
        <section class="preview-pane ${state.previewMode === 'mobile' ? 'mobile-preview' : ''}" aria-label="Live resume preview">
          <div class="preview-toolbar">
            <div class="preview-label"><span class="live-dot"></span> LIVE PREVIEW <span class="page-size">A4 · 1 PAGE</span></div>
            <div class="preview-tools">
              <button class="view-toggle ${state.previewMode === 'mobile' ? 'active' : ''}" id="mobileToggle" title="Toggle preview width">▣</button>
              <span class="zoom-control">
                <button id="zoomOutBtn">−</button>
                <span>${Math.round(state.zoom * 100)}%</span>
                <button id="zoomInBtn">＋</button>
              </span>
              <button class="preview-download" id="previewPrintBtn">⤓</button>
            </div>
          </div>
          <div class="preview-stage">
            <div class="paper-scale" id="paperScale" style="transform: scale(${state.zoom}); margin-bottom: ${-1123 * (1 - state.zoom)}px;">
              ${renderResumePreview()}
            </div>
            <div class="page-break-label"><span></span> END OF PAGE <span></span></div>
          </div>
          <div class="preview-bottom"><span>Looking good? Make it yours.</span><button id="customizeBtn">Customize design →</button></div>
        </section>
      </main>
      <div class="toast" id="toast" style="display:${state.notice ? 'flex' : 'none'};">✓ ${state.notice || ''}</div>
    </div>
  `;
  bindEvents();
  renderEditor();
}

function renderEditor() {
  const editorContent = document.getElementById('editorContent');
  if (!editorContent) return;
  editorContent.innerHTML = {
    personal: renderPersonalForm(),
    experience: renderExperienceForm(),
    education: renderEducationForm(),
    skills: renderSkillsForm(),
    projects: renderProjectsForm(),
    extras: renderExtrasForm(),
    design: renderDesignForm()
  }[state.activeSection] || '';
}

function refreshDataDisplay() {
  const name = state.data.personal.fullName;
  const documentName = document.querySelector('.document-name');
  if (documentName) documentName.textContent = name ? `${name}’s resume` : 'Untitled resume';
  const paper = document.getElementById('paperScale');
  if (paper) paper.innerHTML = renderResumePreview();

  const ats = computeATS();
  const progressLabel = document.querySelector('.progress-top span:last-child');
  const progressBar = document.querySelector('.progress-track > span');
  const score = document.querySelector('.ats-score');
  if (progressLabel) progressLabel.textContent = `${ats.score}% complete`;
  if (progressBar) progressBar.style.width = `${ats.score}%`;
  if (score) score.textContent = ats.score;
  const atsPanel = document.querySelector('.ats-panel');
  if (atsPanel) {
    atsPanel.innerHTML = `
      <div class="ats-panel-heading"><span>Resume readiness</span><b>${ats.score}/100</b></div>
      <div class="ats-progress"><i style="width:${ats.score}%"></i></div>
      ${ats.checks.map((check) => `<div class="ats-check"><span class="${check.complete ? 'check-ok' : ''}">${check.complete ? '✓' : ''}</span>${check.label}</div>`).join('')}
      <p>💡 ${ats.tip}</p>
    `;
  }
}

function renderPersonalForm() {
  const { personal } = state.data;
  return `
    <div class="form-section">
      <div class="section-intro"><span class="eyebrow">01 — The essentials</span><h2>Personal details</h2><p>Start with the basics. You can decide what to include later.</p></div>
      <label class="avatar-upload">
        ${personal.avatar ? `<img src="${personal.avatar}" alt="Profile" />` : '<span class="avatar-icon">👤</span>'}
        <span class="avatar-upload-copy"><strong>Profile photo</strong><small>Optional · JPG or PNG · 2 MB max</small></span>
        <span class="camera-button">📷 Upload</span>
        <input type="file" accept="image/*" id="avatarUpload" />
      </label>
      <div class="form-grid">
        <label class="field"><span>Full name</span><input data-key="personal.fullName" value="${escapeHtml(personal.fullName)}" placeholder="e.g. Alex Morgan" /></label>
        <label class="field"><span>Professional title</span><input data-key="personal.title" value="${escapeHtml(personal.title)}" placeholder="e.g. Product Designer" /></label>
        <label class="field"><span>Email address</span><input type="email" data-key="personal.email" value="${escapeHtml(personal.email)}" placeholder="you@example.com" /></label>
        <label class="field"><span>Phone number</span><input data-key="personal.phone" value="${escapeHtml(personal.phone)}" placeholder="+1 (555) 000-0000" /></label>
        <label class="field"><span>City & country</span><input data-key="personal.location" value="${escapeHtml(personal.location)}" placeholder="San Francisco, CA" /></label>
        <label class="field"><span>LinkedIn</span><input data-key="personal.linkedin" value="${escapeHtml(personal.linkedin)}" placeholder="linkedin.com/in/you" /></label>
        <label class="field"><span>GitHub</span><input data-key="personal.github" value="${escapeHtml(personal.github)}" placeholder="github.com/you" /></label>
        <label class="field"><span>Personal website</span><input data-key="personal.website" value="${escapeHtml(personal.website)}" placeholder="yourwebsite.com" /></label>
      </div>
      <div class="form-divider"></div>
      <div class="subsection-title"><span class="number-badge">✳</span><div><h3>Professional summary</h3><p>Give people a quick sense of what you bring.</p></div></div>
      <label class="field"><span>About you</span><textarea rows="5" data-key="summary" placeholder="A thoughtful professional with experience in...">${escapeHtml(state.data.summary)}</textarea></label>
    </div>
  `;
}

function renderExperienceForm() {
  return `
    <div class="form-section">
      <div class="section-intro"><span class="eyebrow">02 — Your journey</span><h2>Work experience</h2><p>Show the impact you made, not just the responsibilities you had.</p></div>
      ${state.data.experience.map((item, index) => `
        <section class="entry-card" data-experience-id="${item.id}">
          <div class="entry-card-top">
            <div class="entry-counter">${String(index + 1).padStart(2, '0')}</div>
            <div class="entry-card-title"><strong>${escapeHtml(item.role || 'New position')}</strong><span>${escapeHtml(item.company || 'Company name')}</span></div>
            <div class="entry-actions">
              <button data-move-up="${item.id}" ${index === 0 ? 'disabled' : ''}>↑</button>
              <button data-move-down="${item.id}" ${index === state.data.experience.length - 1 ? 'disabled' : ''}>↓</button>
              <button class="danger-icon" data-remove-experience="${item.id}">🗑</button>
            </div>
          </div>
          <div class="form-grid">
            <label class="field"><span>Job title</span><input data-experience-field="role" data-id="${item.id}" value="${escapeHtml(item.role)}" placeholder="Senior Product Designer" /></label>
            <label class="field"><span>Company</span><input data-experience-field="company" data-id="${item.id}" value="${escapeHtml(item.company)}" placeholder="Company name" /></label>
            <label class="field"><span>Location</span><input data-experience-field="location" data-id="${item.id}" value="${escapeHtml(item.location)}" placeholder="City, country or Remote" /></label>
            <div class="form-grid form-grid-dates">
              <label class="field"><span>Start date</span><input data-experience-field="startDate" data-id="${item.id}" value="${escapeHtml(item.startDate)}" placeholder="Jan 2022" /></label>
              <label class="field"><span>End date</span><input data-experience-field="endDate" data-id="${item.id}" value="${escapeHtml(item.endDate)}" placeholder="Present" /></label>
            </div>
          </div>
          <div class="bullet-label"><span>Key achievements</span><button class="text-button ai-button" data-suggest-bullets="${item.id}">✦ Help me write</button></div>
          <div class="achievement-list">
            ${item.bullets.map((bullet, bulletIndex) => `
              <div class="achievement-row">
                <span class="achievement-marker">${String(bulletIndex + 1).padStart(2, '0')}</span>
                <textarea data-bullet-index="${bulletIndex}" data-experience-id="${item.id}" placeholder="What did you accomplish? Add numbers when you can.">${escapeHtml(bullet)}</textarea>
                <div class="achievement-actions">
                  <button data-bullet-move-up="${item.id}" data-bullet-index="${bulletIndex}" ${bulletIndex === 0 ? 'disabled' : ''}>↑</button>
                  <button data-bullet-move-down="${item.id}" data-bullet-index="${bulletIndex}" ${bulletIndex === item.bullets.length - 1 ? 'disabled' : ''}>↓</button>
                  <button class="danger-icon" data-bullet-remove="${item.id}" data-bullet-index="${bulletIndex}" ${item.bullets.length === 1 ? 'disabled' : ''}>🗑</button>
                </div>
              </div>
            `).join('')}
          </div>
          <button class="add-bullet-button" data-add-bullet="${item.id}">＋ Add achievement</button>
          <p class="field-tip">Add one achievement at a time. Numbers make your impact memorable.</p>
        </section>
      `).join('')}
      <button class="add-entry-button" id="addExperienceBtn">＋ Add experience</button>
    </div>
  `;
}

function renderEducationForm() {
  return `
    <div class="form-section">
      <div class="section-intro"><span class="eyebrow">03 — The foundation</span><h2>Education</h2><p>Add your most relevant education, training, or academic background.</p></div>
      ${state.data.education.map((item) => `
        <div class="entry-card">
          <div class="entry-card-top">
            <div class="entry-counter">✦</div>
            <div class="entry-card-title"><strong>${escapeHtml(item.degree || 'Education')}</strong><span>${escapeHtml(item.institution || 'Institution')}</span></div>
            <button class="icon-button danger-icon" data-remove-education="${item.id}">🗑</button>
          </div>
          <div class="form-grid">
            <label class="field"><span>Degree or qualification</span><input data-education-field="degree" data-id="${item.id}" value="${escapeHtml(item.degree)}" placeholder="BSc Computer Science" /></label>
            <label class="field"><span>School or institution</span><input data-education-field="institution" data-id="${item.id}" value="${escapeHtml(item.institution)}" placeholder="University name" /></label>
            <label class="field"><span>Location</span><input data-education-field="location" data-id="${item.id}" value="${escapeHtml(item.location)}" placeholder="City, country" /></label>
            <label class="field"><span>Graduation date</span><input data-education-field="date" data-id="${item.id}" value="${escapeHtml(item.date)}" placeholder="2018" /></label>
            <label class="field" style="grid-column:1 / -1;"><span>Honors, GPA, or details</span><input data-education-field="detail" data-id="${item.id}" value="${escapeHtml(item.detail)}" placeholder="Magna Cum Laude" /></label>
          </div>
        </div>
      `).join('')}
      <button class="add-entry-button" id="addEducationBtn">＋ Add education</button>
    </div>
  `;
}

function renderSkillsForm() {
  return `
    <div class="form-section">
      <div class="section-intro"><span class="eyebrow">04 — What you bring</span><h2>Skills & expertise</h2><p>Group your strengths so the right skills are easy to find.</p></div>
      <div class="info-callout">Tip: Include skills that appear in the job description. Group related skills together.</div>
      ${state.data.skills.map((skill) => `
        <div class="skill-edit-row">
          <label class="field"><span>Skill</span><input data-skill-field="name" data-id="${skill.id}" value="${escapeHtml(skill.name)}" placeholder="e.g. Product strategy" /></label>
          <label class="field"><span>Category</span>
            <select data-skill-field="category" data-id="${skill.id}">
              ${['Technical','Design','Research','Tools','Soft skills','Languages'].map((option) => `<option value="${option}" ${skill.category === option ? 'selected' : ''}>${option}</option>`).join('')}
            </select>
          </label>
          <button class="icon-button danger-icon skill-delete" data-remove-skill="${skill.id}">🗑</button>
        </div>
      `).join('')}
      <button class="add-entry-button" id="addSkillBtn">＋ Add a skill</button>
    </div>
  `;
}

function renderProjectsForm() {
  return `
    <div class="form-section">
      <div class="section-intro"><span class="eyebrow">05 — What you have made</span><h2>Selected projects</h2><p>Showcase work that demonstrates your thinking and craft.</p></div>
      ${state.data.projects.map((project) => `
        <div class="entry-card">
          <div class="entry-card-top">
            <div class="entry-counter">↗</div>
            <div class="entry-card-title"><strong>${escapeHtml(project.name || 'New project')}</strong><span>Project</span></div>
            <button class="icon-button danger-icon" data-remove-project="${project.id}">🗑</button>
          </div>
          <div class="form-grid">
            <label class="field"><span>Project name</span><input data-project-field="name" data-id="${project.id}" value="${escapeHtml(project.name)}" placeholder="Project name" /></label>
            <label class="field"><span>Website or repository</span><input data-project-field="link" data-id="${project.id}" value="${escapeHtml(project.link)}" placeholder="project.com" /></label>
            <label class="field" style="grid-column:1 / -1;"><span>Description</span><textarea data-project-field="description" data-id="${project.id}" placeholder="What did you build and why does it matter?">${escapeHtml(project.description)}</textarea></label>
            <label class="field" style="grid-column:1 / -1;"><span>Tools & technologies</span><input data-project-field="technologies" data-id="${project.id}" value="${escapeHtml(project.technologies)}" placeholder="React, Figma, ..." /></label>
          </div>
        </div>
      `).join('')}
      <button class="add-entry-button" id="addProjectBtn">＋ Add project</button>
    </div>
  `;
}

function renderExtrasForm() {
  return `
    <div class="form-section">
      <div class="section-intro"><span class="eyebrow">06 — The details</span><h2>Credentials & languages</h2><p>Add certifications and languages that are relevant to this role.</p></div>
      <h3 class="form-subheading">Certifications</h3>
      ${state.data.certifications.map((cert) => `
        <div class="entry-card">
          <div class="form-grid">
            <label class="field"><span>Credential</span><input data-cert-field="name" data-id="${cert.id}" value="${escapeHtml(cert.name)}" placeholder="Certification name" /></label>
            <label class="field"><span>Issuing organization</span><input data-cert-field="issuer" data-id="${cert.id}" value="${escapeHtml(cert.issuer)}" placeholder="Organization" /></label>
            <label class="field"><span>Date</span><input data-cert-field="date" data-id="${cert.id}" value="${escapeHtml(cert.date)}" placeholder="2024" /></label>
            <button class="icon-button danger-icon" data-remove-cert="${cert.id}" style="align-self:end; margin-bottom:7px;">🗑</button>
          </div>
        </div>
      `).join('')}
      <button class="add-entry-button" id="addCertBtn">＋ Add certification</button>
      <h3 class="form-subheading spaced-subheading">Languages</h3>
      ${state.data.languages.map((language) => `
        <div class="skill-edit-row">
          <label class="field"><span>Language</span><input data-language-field="name" data-id="${language.id}" value="${escapeHtml(language.name)}" placeholder="Language" /></label>
          <label class="field"><span>Proficiency</span>
            <select data-language-field="proficiency" data-id="${language.id}">
              ${['Native','Fluent','Professional','Conversational','Basic'].map((option) => `<option value="${option}" ${language.proficiency === option ? 'selected' : ''}>${option}</option>`).join('')}
            </select>
          </label>
          <button class="icon-button danger-icon skill-delete" data-remove-language="${language.id}">🗑</button>
        </div>
      `).join('')}
      <button class="add-entry-button" id="addLanguageBtn">＋ Add language</button>
    </div>
  `;
}

function renderDesignForm() {
  const filteredTemplates = templates.filter((template) => state.templateFilter === 'All' || template.category === state.templateFilter);

  return `
    <div class="form-section design-section">
      <div class="section-intro"><span class="eyebrow">07 — Make it yours</span><h2>Design & templates</h2><p>Choose a layout, then make it feel like you.</p></div>
      <div class="design-control">
        <div><h3>Accent color</h3><p>A subtle touch of personality.</p></div>
        <div class="color-options">
          ${['#496b59','#486c9b','#a35448','#735a8e','#24394f','#bd8b46'].map((color) => `<button type="button" class="color-dot ${state.data.theme.color === color ? 'selected' : ''}" data-theme-color="${color}" style="background:${color}">${state.data.theme.color === color ? '✓' : ''}</button>`).join('')}
          <label class="custom-color"><input type="color" value="${state.data.theme.color}" data-theme-color-custom /></label>
        </div>
      </div>
      <div class="design-control">
        <div><h3>Typography</h3><p>Set the tone with a font style.</p></div>
        <div class="segmented-control">
          ${['sans','serif','mono'].map((font) => `<button class="${state.data.theme.font === font ? 'active' : ''}" data-theme-font="${font}">${font === 'sans' ? 'Sans' : font === 'serif' ? 'Serif' : 'Mono'}</button>`).join('')}
        </div>
      </div>
      <div class="design-control">
        <div><h3>Page density</h3><p>Adjust the breathing room.</p></div>
        <div class="segmented-control">
          ${['compact','comfortable','spacious'].map((density) => `<button class="${state.data.theme.density === density ? 'active' : ''}" data-theme-density="${density}">${density[0].toUpperCase() + density.slice(1)}</button>`).join('')}
        </div>
      </div>
      <div class="template-filters">
        ${templateCategories.map((category) => `<button type="button" class="${state.templateFilter === category ? 'active' : ''}" data-template-filter="${category}">${category}</button>`).join('')}
      </div>
      <section class="template-category">
        <div class="template-category-heading"><h3>${state.templateFilter === 'All' ? 'All templates' : state.templateFilter}</h3><span>${filteredTemplates.length} styles</span></div>
        <div class="template-grid">
          ${filteredTemplates.map((template, index) => `
            <button type="button" class="template-card ${state.data.theme.template === template.id ? 'chosen' : ''}" data-template-id="${template.id}">
              <div class="template-thumb thumb-${template.layout}" style="--resume-accent:${state.data.theme.color};">
                <span class="thumb-mark">${template.name.slice(0,1)}</span>
                <i></i><i></i><i></i><b></b><b></b><b></b>
              </div>
              <div class="template-card-info"><strong>${template.name}</strong><span>${state.data.theme.template === template.id ? '✓ Selected' : template.description}</span></div>
              ${index === 0 && state.templateFilter === 'All' ? '<span class="popular-tag">POPULAR</span>' : ''}
            </button>
          `).join('')}
        </div>
      </section>
    </div>
  `;
}

function renderResumePreview() {
  const template = getCurrentTemplate();
  const skillGroups = state.data.skills.reduce((acc, skill) => {
    const key = skill.category || 'Skills';
    acc[key] = acc[key] || [];
    acc[key].push(skill);
    return acc;
  }, {});
  const resumePaperClass = `resume-paper layout-${template.layout} template-${template.id} density-${state.data.theme.density} font-${state.data.theme.font}`;
  return `
    <article class="${resumePaperClass}" style="--resume-accent:${state.data.theme.color};">
      <header class="resume-header">
        ${state.data.personal.avatar ? `<img class="resume-avatar" src="${state.data.personal.avatar}" alt="" />` : '<div class="resume-avatar avatar-placeholder">👤</div>'}
        <div class="resume-heading">
          <h1>${escapeHtml(state.data.personal.fullName || 'Your Name')}</h1>
          <p class="resume-role">${escapeHtml(state.data.personal.title || 'Your professional title')}</p>
        </div>
        <div class="resume-contact">
          ${[
            state.data.personal.email && `<span>✉ ${escapeHtml(state.data.personal.email)}</span>`,
            state.data.personal.phone && `<span>☎ ${escapeHtml(state.data.personal.phone)}</span>`,
            state.data.personal.location && `<span>📍 ${escapeHtml(state.data.personal.location)}</span>`,
            state.data.personal.linkedin && `<span>🔗 ${escapeHtml(state.data.personal.linkedin)}</span>`,
            state.data.personal.github && `<span>⌂ ${escapeHtml(state.data.personal.github)}</span>`,
            state.data.personal.website && `<span>🌐 ${escapeHtml(state.data.personal.website)}</span>`,
          ].filter(Boolean).join('')}
        </div>
      </header>
      <div class="resume-body">
        <main class="resume-main">
          ${state.data.summary ? `<section class="resume-section"><h2>Profile</h2><p>${escapeHtml(state.data.summary)}</p></section>` : ''}
          ${state.data.experience.length ? `<section class="resume-section"><h2>Experience</h2>${state.data.experience.map((item) => `
            <div class="resume-entry">
              <div class="entry-heading">
                <div><h3>${escapeHtml(item.role || 'Position')}</h3><p class="entry-subtitle">${escapeHtml(item.company || 'Company')}${item.location ? ` · ${escapeHtml(item.location)}` : ''}</p></div>
                <span class="entry-date">${escapeHtml(item.startDate)}${item.endDate ? ` – ${escapeHtml(item.endDate)}` : ''}</span>
              </div>
              <ul>${(item.bullets || []).filter(Boolean).map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>
            </div>
          `).join('')}</section>` : ''}
          ${state.data.projects.length ? `<section class="resume-section"><h2>Selected projects</h2>${state.data.projects.map((project) => `
            <div class="resume-entry"><h3>${escapeHtml(project.name || 'Project')}</h3><p>${escapeHtml(project.description)}</p><p class="entry-subtitle">${escapeHtml(project.technologies || '')}${project.link ? ` · ${escapeHtml(project.link)}` : ''}</p></div>
          `).join('')}</section>` : ''}
          ${state.data.education.length ? `<section class="resume-section"><h2>Education</h2>${state.data.education.map((item) => `
            <div class="resume-entry">
              <div class="entry-heading">
                <div><h3>${escapeHtml(item.degree || 'Degree')}</h3><p class="entry-subtitle">${escapeHtml(item.institution || 'Institution')}${item.location ? ` · ${escapeHtml(item.location)}` : ''}</p></div>
                <span class="entry-date">${escapeHtml(item.date)}</span>
              </div>
              ${item.detail ? `<p>${escapeHtml(item.detail)}</p>` : ''}
            </div>
          `).join('')}</section>` : ''}
        </main>
        <aside class="resume-aside">
          ${state.data.skills.length ? `<section class="resume-section"><h2>Expertise</h2>${Object.entries(skillGroups).map(([category, skills]) => `
            <div class="skill-group"><h3>${category}</h3><div class="skill-pills">${skills.map((skill) => `<span>${escapeHtml(skill.name)}</span>`).join('')}</div></div>
          `).join('')}</section>` : ''}
          ${state.data.certifications.length ? `<section class="resume-section"><h2>Certifications</h2>${state.data.certifications.map((item) => `
            <div class="resume-entry"><h3>${escapeHtml(item.name)}</h3><p class="entry-subtitle">${escapeHtml(item.issuer)}${item.date ? ` · ${escapeHtml(item.date)}` : ''}</p></div>
          `).join('')}</section>` : ''}
          ${state.data.languages.length ? `<section class="resume-section"><h2>Languages</h2>${state.data.languages.map((item) => `
            <p class="language-line"><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.proficiency)}</span></p>
          `).join('')}</section>` : ''}
        </aside>
      </div>
    </article>
  `;
}

function bindEvents() {
  document.getElementById('loadSampleBtn')?.addEventListener('click', () => {
    state.data = clone(sampleResume);
    saveToStorage();
    renderApp();
    setNotice('Sample resume loaded.');
  });

  document.getElementById('shareBtn')?.addEventListener('click', () => {
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(state.data))));
    const link = `${location.origin}${location.pathname}#resume=${encoded}`;
    navigator.clipboard?.writeText(link).then(() => setNotice('Share link copied.')).catch(() => {
      window.prompt('Copy your share link:', link);
    });
  });

  document.getElementById('importBtn')?.addEventListener('click', () => document.getElementById('importInput').click());
  document.getElementById('importInput')?.addEventListener('change', async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const json = JSON.parse(await file.text());
      if (!json || !json.personal || !json.theme) throw new Error('Not a valid resume backup.');
      state.data = json;
      saveToStorage();
      renderApp();
      setNotice('Your resume backup was imported.');
    } catch (error) {
      alert(error.message || 'Could not import this file.');
    }
    event.target.value = '';
  });

  document.getElementById('helpBtn')?.addEventListener('click', () => setNotice('Your resume saves automatically on this device.'));
  document.getElementById('atsToggle')?.addEventListener('click', () => {
    state.showAts = !state.showAts;
    renderApp();
  });

  document.getElementById('resetBtn')?.addEventListener('click', () => {
    if (confirm('Start over with the sample resume? This replaces your current resume.')) {
      state.data = clone(sampleResume);
      saveToStorage();
      renderApp();
      setNotice('Sample resume loaded.');
    }
  });

  document.getElementById('nextBtn')?.addEventListener('click', () => {
    if (state.activeSection === 'design') {
      window.print();
      return;
    }
    const currentIndex = sections.findIndex((section) => section.id === state.activeSection);
    const nextSection = sections[Math.min(currentIndex + 1, sections.length - 1)];
    state.activeSection = nextSection.id;
    renderApp();
  });

  document.getElementById('prevBtn')?.addEventListener('click', () => {
    const currentIndex = sections.findIndex((section) => section.id === state.activeSection);
    const prevSection = sections[Math.max(currentIndex - 1, 0)];
    state.activeSection = prevSection.id;
    renderApp();
  });

  document.getElementById('mobileToggle')?.addEventListener('click', () => {
    state.previewMode = state.previewMode === 'desktop' ? 'mobile' : 'desktop';
    renderApp();
  });

  document.getElementById('zoomInBtn')?.addEventListener('click', () => {
    state.zoom = Math.min(1.05, Number((state.zoom + 0.1).toFixed(2)));
    renderApp();
  });

  document.getElementById('zoomOutBtn')?.addEventListener('click', () => {
    state.zoom = Math.max(0.5, Number((state.zoom - 0.1).toFixed(2)));
    renderApp();
  });

  document.getElementById('previewPrintBtn')?.addEventListener('click', () => window.print());
  document.getElementById('customizeBtn')?.addEventListener('click', () => {
    state.activeSection = 'design';
    renderApp();
  });

  document.querySelectorAll('[data-section]').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeSection = button.dataset.section;
      renderApp();
    });
  });

  document.getElementById('exportBtn')?.addEventListener('click', () => {
    state.exportOpen = !state.exportOpen;
    renderApp();
  });

  document.querySelectorAll('[data-export]').forEach((button) => {
    button.addEventListener('click', () => {
      const type = button.dataset.export;
      if (type === 'pdf') {
        window.print();
      } else if (type === 'word') {
        exportWord();
      } else {
        exportJson();
      }
      state.exportOpen = false;
      renderApp();
    });
  });

  document.addEventListener('input', (event) => {
    const target = event.target;
    if (!target || !target.dataset) return;
    const { key } = target.dataset;
    if (key) {
      setNestedValue(key, target.value);
      saveToStorage();
    refreshDataDisplay();
      return;
    }

    if (target.dataset.themeColorCustom !== undefined) {
    state.data.theme.color = target.value;
    saveToStorage();
    refreshDataDisplay();
    return;
    }

    if (target.dataset.experienceField) {
      const id = target.dataset.id;
      const field = target.dataset.experienceField;
      state.data.experience = state.data.experience.map((item) => item.id === id ? { ...item, [field]: target.value } : item);
      saveToStorage();
      refreshDataDisplay();
      return;
    }

    if (target.dataset.educationField) {
      const id = target.dataset.id;
      const field = target.dataset.educationField;
      state.data.education = state.data.education.map((item) => item.id === id ? { ...item, [field]: target.value } : item);
      saveToStorage();
      refreshDataDisplay();
      return;
    }

    if (target.dataset.skillField) {
      const id = target.dataset.id;
      const field = target.dataset.skillField;
      state.data.skills = state.data.skills.map((item) => item.id === id ? { ...item, [field]: target.value } : item);
      saveToStorage();
      refreshDataDisplay();
      return;
    }

    if (target.dataset.projectField) {
      const id = target.dataset.id;
      const field = target.dataset.projectField;
      state.data.projects = state.data.projects.map((item) => item.id === id ? { ...item, [field]: target.value } : item);
      saveToStorage();
      refreshDataDisplay();
      return;
    }

    if (target.dataset.certField) {
      const id = target.dataset.id;
      const field = target.dataset.certField;
      state.data.certifications = state.data.certifications.map((item) => item.id === id ? { ...item, [field]: target.value } : item);
      saveToStorage();
      refreshDataDisplay();
      return;
    }

    if (target.dataset.languageField) {
      const id = target.dataset.id;
      const field = target.dataset.languageField;
      state.data.languages = state.data.languages.map((item) => item.id === id ? { ...item, [field]: target.value } : item);
      saveToStorage();
      refreshDataDisplay();
      return;
    }

    if (target.dataset.bulletIndex !== undefined && target.dataset.experienceId) {
      const id = target.dataset.experienceId;
      const bulletIndex = Number(target.dataset.bulletIndex);
      state.data.experience = state.data.experience.map((item) => item.id === id ? { ...item, bullets: item.bullets.map((bullet, index) => index === bulletIndex ? target.value : bullet) } : item);
      saveToStorage();
      refreshDataDisplay();
    }
  });

  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-theme-color]');
    if (button) {
      state.data.theme.color = button.dataset.themeColor;
      saveToStorage();
      renderApp();
      return;
    }

    const fontButton = event.target.closest('[data-theme-font]');
    if (fontButton) {
      state.data.theme.font = fontButton.dataset.themeFont;
      saveToStorage();
      renderApp();
      return;
    }

    const densityButton = event.target.closest('[data-theme-density]');
    if (densityButton) {
      state.data.theme.density = densityButton.dataset.themeDensity;
      saveToStorage();
      renderApp();
      return;
    }

    const filterButton = event.target.closest('[data-template-filter]');
    if (filterButton) {
      state.templateFilter = filterButton.dataset.templateFilter;
      renderApp();
      return;
    }

    const templateCard = event.target.closest('[data-template-id]');
    if (templateCard) {
      state.data.theme.template = templateCard.dataset.templateId;
      saveToStorage();
      renderApp();
      return;
    }

    if (event.target.closest('#addExperienceBtn')) {
      state.data.experience.push({ id: crypto.randomUUID(), role: '', company: '', location: '', startDate: '', endDate: '', bullets: [''] });
      saveToStorage();
      renderApp();
      return;
    }

    if (event.target.closest('#addEducationBtn')) {
      state.data.education.push({ id: crypto.randomUUID(), degree: '', institution: '', location: '', date: '', detail: '' });
      saveToStorage();
      renderApp();
      return;
    }

    if (event.target.closest('#addSkillBtn')) {
      state.data.skills.push({ id: crypto.randomUUID(), name: '', category: 'Technical', level: 3 });
      saveToStorage();
      renderApp();
      return;
    }

    if (event.target.closest('#addProjectBtn')) {
      state.data.projects.push({ id: crypto.randomUUID(), name: '', description: '', link: '', technologies: '' });
      saveToStorage();
      renderApp();
      return;
    }

    if (event.target.closest('#addCertBtn')) {
      state.data.certifications.push({ id: crypto.randomUUID(), name: '', issuer: '', date: '' });
      saveToStorage();
      renderApp();
      return;
    }

    if (event.target.closest('#addLanguageBtn')) {
      state.data.languages.push({ id: crypto.randomUUID(), name: '', proficiency: 'Conversational' });
      saveToStorage();
      renderApp();
      return;
    }

    const removeExperience = event.target.closest('[data-remove-experience]');
    if (removeExperience) {
      state.data.experience = state.data.experience.filter((item) => item.id !== removeExperience.dataset.removeExperience);
      saveToStorage();
      renderApp();
      return;
    }

    const removeEducation = event.target.closest('[data-remove-education]');
    if (removeEducation) {
      state.data.education = state.data.education.filter((item) => item.id !== removeEducation.dataset.removeEducation);
      saveToStorage();
      renderApp();
      return;
    }

    const removeSkill = event.target.closest('[data-remove-skill]');
    if (removeSkill) {
      state.data.skills = state.data.skills.filter((item) => item.id !== removeSkill.dataset.removeSkill);
      saveToStorage();
      renderApp();
      return;
    }

    const removeProject = event.target.closest('[data-remove-project]');
    if (removeProject) {
      state.data.projects = state.data.projects.filter((item) => item.id !== removeProject.dataset.removeProject);
      saveToStorage();
      renderApp();
      return;
    }

    const removeCert = event.target.closest('[data-remove-cert]');
    if (removeCert) {
      state.data.certifications = state.data.certifications.filter((item) => item.id !== removeCert.dataset.removeCert);
      saveToStorage();
      renderApp();
      return;
    }

    const removeLanguage = event.target.closest('[data-remove-language]');
    if (removeLanguage) {
      state.data.languages = state.data.languages.filter((item) => item.id !== removeLanguage.dataset.removeLanguage);
      saveToStorage();
      renderApp();
      return;
    }

    const bulletRemove = event.target.closest('[data-bullet-remove]');
    if (bulletRemove) {
      const id = bulletRemove.dataset.bulletRemove;
      const index = Number(bulletRemove.dataset.bulletIndex);
      state.data.experience = state.data.experience.map((item) => item.id === id ? { ...item, bullets: item.bullets.filter((_, bulletIndex) => bulletIndex !== index) } : item);
      saveToStorage();
      renderApp();
      return;
    }

    const addBullet = event.target.closest('[data-add-bullet]');
    if (addBullet) {
      const id = addBullet.dataset.addBullet;
      state.data.experience = state.data.experience.map((item) => item.id === id ? { ...item, bullets: [...item.bullets, ''] } : item);
      saveToStorage();
      renderApp();
      return;
    }

    const bulletMoveUp = event.target.closest('[data-bullet-move-up]');
    if (bulletMoveUp) {
      moveBullet(bulletMoveUp.dataset.bulletMoveUp, Number(bulletMoveUp.dataset.bulletIndex), -1);
      return;
    }

    const bulletMoveDown = event.target.closest('[data-bullet-move-down]');
    if (bulletMoveDown) {
      moveBullet(bulletMoveDown.dataset.bulletMoveDown, Number(bulletMoveDown.dataset.bulletIndex), 1);
      return;
    }

    const moveUp = event.target.closest('[data-move-up]');
    if (moveUp) {
      moveExperience(moveUp.dataset.moveUp, -1);
      return;
    }

    const moveDown = event.target.closest('[data-move-down]');
    if (moveDown) {
      moveExperience(moveDown.dataset.moveDown, 1);
      return;
    }

    const suggest = event.target.closest('[data-suggest-bullets]');
    if (suggest) {
      const id = suggest.dataset.suggestBullets;
      const item = state.data.experience.find((entry) => entry.id === id);
      if (!item) return;
      item.bullets = [
        `Led a key initiative as ${item.role || 'your role'}, partnering with ${item.company || 'your team'} to deliver measurable business results.`,
        `Improved team processes and customer outcomes by identifying opportunities and turning insights into action.`,
        `Collaborated cross-functionally to launch high-quality solutions on time and within scope.`
      ];
      saveToStorage();
      renderApp();
      return;
    }
  });

  document.getElementById('avatarUpload')?.addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      state.data.personal.avatar = String(reader.result);
      saveToStorage();
      renderApp();
    };
    reader.readAsDataURL(file);
  });
}

function moveExperience(id, direction) {
  const index = state.data.experience.findIndex((item) => item.id === id);
  if (index < 0) return;
  const targetIndex = index + direction;
  if (targetIndex < 0 || targetIndex >= state.data.experience.length) return;
  const next = [...state.data.experience];
  [next[index], next[targetIndex]] = [next[targetIndex], next[index]];
  state.data.experience = next;
  saveToStorage();
  renderApp();
}

function moveBullet(id, bulletIndex, direction) {
  const item = state.data.experience.find((entry) => entry.id === id);
  if (!item || bulletIndex + direction < 0 || bulletIndex + direction >= item.bullets.length) return;
  const bullets = [...item.bullets];
  [bullets[bulletIndex], bullets[bulletIndex + direction]] = [bullets[bulletIndex + direction], bullets[bulletIndex]];
  item.bullets = bullets;
  saveToStorage();
  renderApp();
}

function setNestedValue(path, value) {
  const keys = path.split('.');
  let obj = state.data;
  for (let i = 0; i < keys.length - 1; i++) {
    obj = obj[keys[i]];
  }
  obj[keys[keys.length - 1]] = value;
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state.data, null, 2)], { type: 'application/json' });
  triggerDownload(blob, `${fileName(state.data)}.json`);
}

function exportWord() {
  const resume = state.data;
  const content = `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;color:#202b27;line-height:1.45;margin:40px}h1{font-size:28px;margin-bottom:4px}h2{font-size:15px;text-transform:uppercase;border-bottom:1px solid #9aaca1;padding-bottom:5px;margin-top:22px}h3{font-size:13px;margin-bottom:2px}p,li{font-size:11px}ul{padding-left:18px}</style></head><body><h1>${escapeHtml(resume.personal.fullName || 'Your Name')}</h1><p><strong>${escapeHtml(resume.personal.title)}</strong></p><p>${escapeHtml([resume.personal.email, resume.personal.phone, resume.personal.location, resume.personal.linkedin, resume.personal.website].filter(Boolean).join(' · '))}</p>${Object.entries({ Profile: `<p>${escapeHtml(resume.summary)}</p>`, Experience: resume.experience.map((item) => `<h3>${escapeHtml(item.role)} — ${escapeHtml(item.company)}</h3><p>${escapeHtml(item.startDate)} – ${escapeHtml(item.endDate)} · ${escapeHtml(item.location)}</p><ul>${item.bullets.filter(Boolean).map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>`).join(''), Education: resume.education.map((item) => `<h3>${escapeHtml(item.degree)} — ${escapeHtml(item.institution)}</h3><p>${escapeHtml(item.date)} · ${escapeHtml(item.detail)}</p>`).join(''), Skills: `<p>${resume.skills.map((skill) => escapeHtml(skill.name)).join(' · ')}</p>`, Projects: resume.projects.map((project) => `<h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(project.description)} ${escapeHtml(project.technologies)}</p>`).join(''), Certifications: resume.certifications.map((item) => `<p><strong>${escapeHtml(item.name)}</strong> · ${escapeHtml(item.issuer)} · ${escapeHtml(item.date)}</p>`).join(''), Languages: `<p>${resume.languages.map((item) => `${escapeHtml(item.name)} (${escapeHtml(item.proficiency)})`).join(' · ')}</p>`}).map(([title, body]) => body ? `<h2>${escapeHtml(title)}</h2>${body}` : '').join('')}</body></html>`;
  const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
  triggerDownload(blob, `${fileName(resume)}.doc`);
}

function triggerDownload(blob, name) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function fileName(resume) {
  return (resume.personal.fullName || 'resume').trim().replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase() || 'resume';
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

const ats = computeATS();
renderApp();

window.addEventListener('hashchange', () => {
  const parsed = parseHash();
  if (parsed) {
    state.data = parsed;
    saveToStorage();
    renderApp();
  }
});
