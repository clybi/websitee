/* ===================================================================
   app.js  –  EduPinas Grade 12 SHS LMS
   =================================================================== */

/* ===== DATA — GRADE 12 SHS ===== */
const SUBJECTS = [
  // CORE
  { id:'english-for-academic',     strand:'core',  color:'#2d5a45', tag:'Core',  tagColor:'#e8f4ec', tagText:'#2d5a45',
    title:'English for Academic & Professional Purposes', sub:'Grade 12 – Core',
    desc:'Academic writing, research papers, position papers, and professional communication.', progress:0, total:5 },
  { id:'practical-research-2',     strand:'core',  color:'#2d5a45', tag:'Core',  tagColor:'#e8f4ec', tagText:'#2d5a45',
    title:'Practical Research 2', sub:'Grade 12 – Core',
    desc:'Quantitative research methods, sampling, statistical analysis, and writing a research paper.', progress:0, total:5 },
  { id:'filisopiya',               strand:'core',  color:'#2d5a45', tag:'Core',  tagColor:'#e8f4ec', tagText:'#2d5a45',
    title:"Pagbabasa at Pagsusuri ng Iba't Ibang Teksto", sub:'Grade 12 – Core',
    desc:"Kritikal na pagbabasa at pagsusuri ng iba't ibang teksto para sa matalinong komunikasyon.", progress:0, total:5 },
  { id:'understanding-culture',    strand:'core',  color:'#2d5a45', tag:'Core',  tagColor:'#e8f4ec', tagText:'#2d5a45',
    title:'Understanding Culture, Society & Politics', sub:'Grade 12 – Core',
    desc:'Sociological and political concepts applied to Philippine society.', progress:0, total:5 },
  { id:'media-info',               strand:'core',  color:'#2d5a45', tag:'Core',  tagColor:'#e8f4ec', tagText:'#2d5a45',
    title:'Media and Information Literacy', sub:'Grade 12 – Core',
    desc:'Evaluate and use media and information responsibly in the digital age.', progress:0, total:5 },
  { id:'pe-health-4',              strand:'core',  color:'#2d5a45', tag:'Core',  tagColor:'#e8f4ec', tagText:'#2d5a45',
    title:'PE and Health 4', sub:'Grade 12 – Core',
    desc:'Community health, first aid, CPR, fitness programs, and mental wellness.', progress:0, total:4 },
  // STEM
  { id:'gen-bio-2',                strand:'stem',  color:'#1a4a7a', tag:'STEM',  tagColor:'#e2eaf8', tagText:'#1a4a7a',
    title:'General Biology 2', sub:'Grade 12 – STEM',
    desc:'Plant and animal anatomy, ecology, evolution, biodiversity, and conservation.', progress:0, total:5 },
  { id:'gen-chem-2',               strand:'stem',  color:'#1a4a7a', tag:'STEM',  tagColor:'#e2eaf8', tagText:'#1a4a7a',
    title:'General Chemistry 2', sub:'Grade 12 – STEM',
    desc:'Chemical equilibrium, acids & bases, electrochemistry, and organic chemistry.', progress:0, total:5 },
  { id:'basic-calculus',           strand:'stem',  color:'#1a4a7a', tag:'STEM',  tagColor:'#e2eaf8', tagText:'#1a4a7a',
    title:'Basic Calculus', sub:'Grade 12 – STEM',
    desc:'Limits, derivatives, antiderivatives, integrals and their real-world applications.', progress:0, total:5 },
  { id:'gen-physics-1',            strand:'stem',  color:'#1a4a7a', tag:'STEM',  tagColor:'#e2eaf8', tagText:'#1a4a7a',
    title:'General Physics 1', sub:'Grade 12 – STEM',
    desc:'Kinematics, Newton\'s laws, work-energy theorem, and fluid mechanics.', progress:0, total:5 },
  { id:'research-sci',             strand:'stem',  color:'#1a4a7a', tag:'STEM',  tagColor:'#e2eaf8', tagText:'#1a4a7a',
    title:'Research in Daily Life (Science)', sub:'Grade 12 – STEM',
    desc:'Scientific method, experimental design, data analysis, and science communication.', progress:0, total:4 },
  // HUMSS
  { id:'creative-writing',         strand:'humss', color:'#7a3a1a', tag:'HUMSS', tagColor:'#f8ede2', tagText:'#7a3a1a',
    title:'Creative Writing', sub:'Grade 12 – HUMSS',
    desc:'Craft poetry, short fiction, scripts, and creative nonfiction using literary techniques.', progress:0, total:5 },
  { id:'community-engagement',     strand:'humss', color:'#7a3a1a', tag:'HUMSS', tagColor:'#f8ede2', tagText:'#7a3a1a',
    title:'Community Engagement, Solidarity & Citizenship', sub:'Grade 12 – HUMSS',
    desc:'Community, social responsibility, volunteerism, and civic participation.', progress:0, total:4 },
  { id:'trends-networks',          strand:'humss', color:'#7a3a1a', tag:'HUMSS', tagColor:'#f8ede2', tagText:'#7a3a1a',
    title:'Trends, Networks & Critical Thinking', sub:'Grade 12 – HUMSS',
    desc:'Globalization, social networks, and critical thinking in the 21st century.', progress:0, total:5 },
  { id:'philliterature',           strand:'humss', color:'#7a3a1a', tag:'HUMSS', tagColor:'#f8ede2', tagText:'#7a3a1a',
    title:'Philippine Politics & Governance', sub:'Grade 12 – HUMSS',
    desc:'Philippine political system, Constitution, branches of government.', progress:0, total:5 },
  // ABM
  { id:'fundamentals-accountancy', strand:'abm',   color:'#4a1a7a', tag:'ABM',   tagColor:'#ede2f8', tagText:'#4a1a7a',
    title:'Fundamentals of Accountancy, Business & Management 2', sub:'Grade 12 – ABM',
    desc:'Financial statements, income statement, and the accounting cycle.', progress:0, total:5 },
  { id:'applied-economics',        strand:'abm',   color:'#4a1a7a', tag:'ABM',   tagColor:'#ede2f8', tagText:'#4a1a7a',
    title:'Applied Economics', sub:'Grade 12 – ABM',
    desc:'Microeconomics, supply & demand, market structures, and the Philippine economy.', progress:0, total:5 },
  { id:'business-finance',         strand:'abm',   color:'#4a1a7a', tag:'ABM',   tagColor:'#ede2f8', tagText:'#4a1a7a',
    title:'Business Finance', sub:'Grade 12 – ABM',
    desc:'Time value of money, financial markets, capital budgeting, and corporate finance.', progress:0, total:5 },
  { id:'marketing',                strand:'abm',   color:'#4a1a7a', tag:'ABM',   tagColor:'#ede2f8', tagText:'#4a1a7a',
    title:'Principles of Marketing', sub:'Grade 12 – ABM',
    desc:'Marketing mix, consumer behavior, branding, and digital marketing.', progress:0, total:5 },
  // TVL
  { id:'empowerment-tech',         strand:'tvl',   color:'#7a5a1a', tag:'TVL',   tagColor:'#f8f0e2', tagText:'#7a5a1a',
    title:'Empowerment Technologies', sub:'Grade 12 – TVL / All Strands',
    desc:'ICT productivity tools, online platforms, and digital citizenship.', progress:0, total:5 },
  { id:'entrep',                   strand:'tvl',   color:'#7a5a1a', tag:'TVL',   tagColor:'#f8f0e2', tagText:'#7a5a1a',
    title:'Entrepreneurship', sub:'Grade 12 – TVL / All Strands',
    desc:'Business planning, feasibility study, marketing, and launching a small enterprise.', progress:0, total:5 },
];

/* LESSONS loaded from lessons.js */

/* ===== DEFAULT LESSONS fallback ===== */
function getDefaultLessons(subjectId) {
  return [
    { id:1, title:'Introduction and Overview', duration:'7:08', videoId:'h8EYEJ32oQ8', done:false,
      desc:'An overview of key concepts and learning objectives for this subject.',
      concepts:['Overview','Learning Objectives','Key Terms','Relevance'] },
    { id:2, title:'Core Concepts – Part 1', duration:'11:32', videoId:'riXcZT2ICjA', done:false,
      desc:'Deep dive into the foundational ideas that underpin this subject.',
      concepts:['Foundation Concepts','Definitions','Background','Applications'] },
    { id:3, title:'Core Concepts – Part 2', duration:'9:05', videoId:'GtaoP0skPWc', done:false,
      desc:'Continuation exploring advanced ideas and real-world applications.',
      concepts:['Advanced Concepts','Case Studies','Problem Solving','Critical Thinking'] },
  ];
}

/* ===== UTILITIES ===== */
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

/* ===== ROUTE GUARD (works on localhost AND GitHub Pages) ===== */
function isAuthPage() {
  const p = window.location.pathname;
  return p.endsWith('index.html') || p.endsWith('login.html') ||
         p === '/' || p.endsWith('/audru/') || p === '';
}

/* ===== DASHBOARD PAGE ===== */
function initDashboard() {
  if (!document.getElementById('continueCards')) return;
  const container = document.getElementById('continueCards');
  container.innerHTML = SUBJECTS.slice(0, 3).map(s => subjectCardHTML(s)).join('');
  const activities = [
    { icon:'🎬', title:'Watched: Introduction to Limits', detail:'Basic Calculus', time:'2 hours ago' },
    { icon:'📝', title:'Took Quiz: Supply and Demand', detail:'Applied Economics – Score: 9/10', time:'Yesterday' },
    { icon:'✅', title:'Completed: Mitosis & Cell Division', detail:'General Biology 2', time:'Yesterday' },
    { icon:'🔖', title:'Saved: Newton\'s Laws of Motion', detail:'General Physics 1', time:'2 days ago' },
    { icon:'🎬', title:'Watched: Cybersecurity and Online Crime', detail:'Empowerment Technologies', time:'3 days ago' },
  ];
  document.getElementById('activityList').innerHTML = activities.map(a => `
    <div class="activity-item">
      <div class="activity-icon">${a.icon}</div>
      <div class="activity-info">
        <div class="activity-title">${a.title}</div>
        <div class="activity-detail">${a.detail}</div>
      </div>
      <div class="activity-time">${a.time}</div>
    </div>`).join('');
}

function subjectCardHTML(s) {
  const done = Math.round((s.progress / 100) * s.total);
  return `
    <div class="subject-card" onclick="location.href='lesson.html?subject=${s.id}'">
      <div class="card-color-bar" style="background:${s.color}"></div>
      <div class="card-body">
        <span class="card-tag" style="background:${s.tagColor};color:${s.tagText}">${s.tag}</span>
        <div class="card-title">${s.title}</div>
        <div class="card-sub">${s.sub}</div>
        <div class="card-progress-wrap">
          <div class="card-progress-bar">
            <div class="card-progress-fill" style="width:${s.progress}%;background:${s.color}"></div>
          </div>
          <div class="card-progress-label">${done} / ${s.total} lessons · ${s.progress}%</div>
        </div>
      </div>
    </div>`;
}

/* ===== SUBJECTS PAGE ===== */
let activeFilter = 'all';

function initSubjects() {
  const grid = document.getElementById('subjectsGrid');
  if (!grid) return;
  const strand = getParam('strand');
  if (strand) {
    activeFilter = strand;
    document.querySelectorAll('.filter-tab').forEach(t => {
      const txt = t.textContent.trim().toLowerCase();
      t.classList.toggle('active', txt === strand || (strand === 'core' && txt === 'core'));
    });
  }
  renderSubjects();
}

function setFilter(strand, el) {
  activeFilter = strand;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderSubjects();
}

function filterSubjects() { renderSubjects(); }

function renderSubjects() {
  const grid = document.getElementById('subjectsGrid');
  if (!grid) return;
  const query = (document.getElementById('subjectSearch')?.value || '').toLowerCase();
  const filtered = SUBJECTS.filter(s => {
    const matchStrand = activeFilter === 'all' || s.strand === activeFilter;
    const matchSearch = !query || s.title.toLowerCase().includes(query);
    return matchStrand && matchSearch;
  });
  grid.innerHTML = filtered.length
    ? filtered.map(s => subjectCardHTML(s)).join('')
    : '<p style="color:#888;grid-column:1/-1;padding:20px">No subjects found.</p>';
}

/* ===== VIDEO CARD ===== */
let _currentVideoUrl = '#';

function loadVideo(videoId, lessonTitle) {
  _currentVideoUrl = 'https://www.youtube.com/watch?v=' + videoId;
  const searchUrl = 'https://www.youtube.com/results?search_query=' +
    encodeURIComponent('Grade 12 SHS ' + lessonTitle + ' lesson');
  const thumb = document.getElementById('videoThumb');
  if (thumb) {
    thumb.src = 'https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg';
    thumb.onerror = function() {
      this.src = 'https://img.youtube.com/vi/' + videoId + '/hqdefault.jpg';
      this.onerror = function() {
        this.onerror = null; this.style.display = 'none';
        _currentVideoUrl = searchUrl;
      };
    };
  }
  const vcTitle = document.getElementById('vcTitle');
  if (vcTitle) vcTitle.textContent = lessonTitle;
  const ytBtn = document.getElementById('btnYouTube');
  if (ytBtn) ytBtn.href = _currentVideoUrl;
}

function openVideo() {
  window.open(_currentVideoUrl, '_blank', 'noopener,noreferrer');
}

/* ===== LESSON PAGE ===== */
function initLesson() {
  if (!document.getElementById('lessonList')) return;
  const subjectId = getParam('subject');
  const lessonId  = parseInt(getParam('lesson') || '1');
  const subject   = SUBJECTS.find(s => s.id === subjectId) || SUBJECTS[0];
  const lessons   = (typeof LESSONS !== 'undefined' && LESSONS[subject.id])
                    ? LESSONS[subject.id]
                    : getDefaultLessons(subject.id);
  const lesson    = lessons.find(l => l.id === lessonId) || lessons[0];

  document.getElementById('breadcrumb').innerHTML =
    '<a href="dashboard.html">Dashboard</a> <span>›</span>' +
    '<a href="subjects.html">Subjects</a> <span>›</span>' +
    '<a href="subjects.html?strand=' + subject.strand + '">' + subject.tag + '</a> <span>›</span>' +
    '<strong>' + subject.title + '</strong>';

  loadVideo(lesson.videoId, lesson.title);

  document.getElementById('lessonTitle').textContent = lesson.title;
  document.getElementById('lessonMeta').innerHTML =
    '<span>📖 ' + subject.title + '</span>' +
    '<span>⏱ ' + lesson.duration + '</span>' +
    '<span>🎬 Lesson ' + lesson.id + ' of ' + lessons.length + '</span>';
  document.getElementById('lessonDesc').textContent = lesson.desc;
  document.getElementById('conceptsList').innerHTML = lesson.concepts.map(c => '<li>' + c + '</li>').join('');
  document.getElementById('subjectTitle').textContent = subject.title;

  const doneCount = lessons.filter(l => l.done).length;
  const pct = Math.round((doneCount / lessons.length) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = doneCount + ' / ' + lessons.length + ' completed';

  document.getElementById('lessonList').innerHTML = lessons.map(l => `
    <div class="lesson-list-item ${l.id === lesson.id ? 'active' : ''} ${l.done ? 'done' : ''}"
         onclick="location.href='lesson.html?subject=${subject.id}&lesson=${l.id}'">
      <div class="lli-num">${l.done ? '✓' : l.id}</div>
      <div class="lli-info">
        <div class="lli-title">${l.title}</div>
        <div class="lli-dur">⏱ ${l.duration}</div>
      </div>
      ${l.done ? '<div class="lli-done">✅</div>' : ''}
    </div>`).join('');

  const saved = JSON.parse(localStorage.getItem('savedLessons') || '[]');
  const key = subject.id + '-' + lesson.id;
  if (saved.includes(key)) {
    const btn = document.getElementById('btnSave');
    if (btn) { btn.classList.add('saved'); btn.textContent = '🔖 Saved'; }
  }
}

function toggleSave() {
  const subjectId = getParam('subject') || SUBJECTS[0].id;
  const lessonId  = getParam('lesson') || '1';
  const key = subjectId + '-' + lessonId;
  let saved = JSON.parse(localStorage.getItem('savedLessons') || '[]');
  const btn = document.getElementById('btnSave');
  if (saved.includes(key)) {
    saved = saved.filter(k => k !== key);
    btn.classList.remove('saved'); btn.textContent = '🔖 Save Lesson';
  } else {
    saved.push(key);
    btn.classList.add('saved'); btn.textContent = '🔖 Saved';
  }
  localStorage.setItem('savedLessons', JSON.stringify(saved));
}

function markDone() {
  alert('Great job! Lesson marked as complete. 🎉');
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  /* Route guard — works on localhost AND GitHub Pages subpaths */
  if (typeof AUTH !== 'undefined' && !isAuthPage()) {
    if (!AUTH.requireAuth()) return;
  }

  /* Personalize with real user name */
  const session = (typeof AUTH !== 'undefined') ? AUTH.getSession() : null;
  if (session) {
    const greetEl  = document.getElementById('welcomeName');
    const avatarEl = document.getElementById('userAvatar');
    if (greetEl)  greetEl.textContent = 'Welcome back, ' + session.firstName + '!';
    if (avatarEl) avatarEl.textContent = (session.firstName[0] + session.lastName[0]).toUpperCase();
    /* Also update sidebar avatar on all pages */
    document.querySelectorAll('.avatar').forEach(el => {
      el.textContent = (session.firstName[0] + session.lastName[0]).toUpperCase();
    });
  }

  initDashboard();
  initSubjects();
  initLesson();
});
