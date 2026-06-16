// Progressive enhancement flag — CSS uses this to gate reveal animations
document.documentElement.classList.add('js');

const programmes = [
    {
        id: "1",
        title: "PG Certificate in Data Science, ML & Generative AI",
        institute: "IIT Roorkee",
        duration: "8 months",
        format: "Weekend",
        fee: "₹1,75,000",
        feeTotal: "~₹2,06,500",
        startDate: "Refer to website",
        filters: ["deepen-tech"],
        badge: "1+ yrs experience",
        desc: "Build job-ready skills across data science, machine learning and generative AI from one of India's top engineering institutes."
    },
    {
        id: "2",
        title: "AI & ML for Industry",
        institute: "IIT Delhi",
        duration: "6 months",
        format: "Weekend",
        fee: "₹1,89,000",
        feeTotal: "₹2,23,020",
        startDate: "4 Jul 2026",
        filters: ["just-starting", "deepen-tech"],
        badge: "Open to freshers",
        desc: "Apply AI and ML to real industry problems — open to graduates from any science, engineering or commerce background."
    },
    {
        id: "3",
        title: "Quantum Computing & Machine Learning",
        institute: "IIT Delhi",
        duration: "6 months",
        format: "Weekend",
        fee: "₹2,24,000",
        feeTotal: "₹2,64,320",
        startDate: "25 Jul 2026",
        filters: ["newest-ai", "deepen-tech"],
        badge: "Strong maths needed",
        desc: "Go beyond classical ML into quantum computing — one of the few certificate programmes in India covering this combination."
    },
    {
        id: "4",
        title: "Generative AI",
        institute: "IIT Delhi",
        duration: "6 months",
        format: "Weekend",
        fee: "₹1,95,000",
        feeTotal: "₹2,30,100",
        startDate: "25 Jul 2026",
        filters: ["newest-ai", "deepen-tech"],
        badge: "2+ yrs coding",
        desc: "Master the techniques behind today's GenAI systems — fine-tuning, prompting strategies, RAG and responsible AI."
    },
    {
        id: "5",
        title: "Advanced Certificate in AI, ML and DL",
        institute: "IIT Delhi",
        duration: "6 months",
        format: "Weekend",
        fee: "₹1,95,000",
        feeTotal: "₹2,30,100",
        startDate: "26 Jul 2026",
        filters: ["deepen-tech"],
        badge: "No prior experience",
        desc: "A technical deep-dive into AI, machine learning and deep learning, with a faculty interview as part of admission."
    },
    {
        id: "6",
        title: "Advanced Certificate in Artificial Intelligence",
        institute: "DTU",
        duration: "6 months",
        format: "Weekend",
        fee: "₹1,10,000",
        feeTotal: "₹1,29,800",
        startDate: "12 Sep 2026",
        filters: ["newest-ai"],
        badge: "1+ yrs in tech",
        desc: "The newest AI programme in this set, from Delhi Technological University's Continuing Education arm."
    },
    {
        id: "7",
        title: "Applied AI & Deep Learning",
        institute: "IIT Madras (Pravartak)",
        duration: "7 months",
        format: "Weekend",
        fee: "₹1,65,000",
        feeTotal: "₹1,94,700",
        startDate: "19 Sep 2026",
        filters: ["just-starting"],
        badge: "Open to freshers",
        desc: "Open to fresh graduates and experienced professionals alike, with a strong applied focus on deep learning."
    },
    {
        id: "8",
        title: "PG Certificate in AI & GenAI for Managers",
        institute: "IIM Nagpur",
        duration: "8 months",
        format: "Online + campus",
        fee: "₹2,00,000 + taxes",
        feeTotal: "~₹2,36,000",
        startDate: "27 Jun 2026",
        filters: ["lead-ai"],
        badge: "3+ yrs experience",
        desc: "Built for managers and leaders who need to direct AI initiatives — no coding required."
    }
];

const TAB_LABELS = {
    'all': 'All Programmes',
    'just-starting': 'Just Starting',
    'deepen-tech': 'Deepen Tech Expertise',
    'lead-ai': 'Lead AI (No Coding)',
    'newest-ai': 'Quantum & GenAI'
};

let activeFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('footerYear').textContent = '© ' + new Date().getFullYear();

    renderCards(programmes);
    renderTable();
    wireFilters();
    wireAccordion();
    wireForm();
    wireCounsellorButtons();
    wireStickyNav();
    wireScrollReveal();
});

/* ---------------- Filtering (tiles + tabs stay in sync) ---------------- */
function applyFilter(filter) {
    activeFilter = filter;
    const list = filter === 'all'
        ? programmes
        : programmes.filter(p => p.filters.includes(filter));
    renderCards(list);

    // Sync tabs
    document.querySelectorAll('.tab-btn').forEach(t => {
        const on = t.getAttribute('data-tab') === filter;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    // Sync tiles
    document.querySelectorAll('.filter-tile').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-filter') === filter);
    });

    // Results bar
    const count = document.getElementById('resultsCount');
    const reset = document.getElementById('resetFilter');
    if (filter === 'all') {
        count.textContent = `Showing all ${programmes.length} programmes`;
        reset.hidden = true;
    } else {
        count.textContent = `Showing ${list.length} of ${programmes.length} programmes · ${TAB_LABELS[filter]}`;
        reset.hidden = false;
    }
}

function wireFilters() {
    document.querySelectorAll('.filter-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            applyFilter(tile.getAttribute('data-filter'));
            scrollToId('programmes');
        });
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => applyFilter(btn.getAttribute('data-tab')));
    });

    document.getElementById('resetFilter').addEventListener('click', () => applyFilter('all'));

    // Initialise the results bar
    applyFilter('all');
}

/* ---------------- Programme cards ---------------- */
function renderCards(data) {
    const grid = document.getElementById('programmeGrid');
    grid.innerHTML = '';

    if (!data.length) {
        grid.innerHTML = '<p class="empty-state">No programmes match your selection. <button type="button" class="link-btn" onclick="applyFilter(\'all\')">Show all programmes</button></p>';
        return;
    }

    const frag = document.createDocumentFragment();
    data.forEach(p => {
        const soon = startsSoon(p.startDate);
        const card = document.createElement('article');
        card.className = 'prog-card';
        card.innerHTML = `
            <div class="prog-institute">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                ${p.institute}
            </div>
            <h3 class="prog-title">${p.title}</h3>
            <span class="prog-badge">${p.badge}</span>
            <div class="prog-meta">
                <span><strong>Duration:</strong> ${p.duration} · ${p.format}</span>
                <span class="prog-start"><strong>Starts:</strong> ${p.startDate}${soon ? ' <span class="starts-soon">Starts soon</span>' : ''}</span>
            </div>
            <p class="prog-desc">${p.desc}</p>
            <div class="prog-cta">
                <button type="button" class="btn btn-primary btn-block" onclick="applyForProgramme('${p.id}')">View Details &amp; Apply</button>
            </div>`;
        frag.appendChild(card);
    });
    grid.appendChild(frag);
}

// Returns true when a start date is a real date within the next 30 days
function startsSoon(dateStr) {
    const d = parseStartDate(dateStr);
    if (!d) return false;
    const now = new Date();
    const days = (d - now) / (1000 * 60 * 60 * 24);
    return days > 0 && days <= 30;
}

function parseStartDate(str) {
    const months = { jan:0, feb:1, mar:2, apr:3, may:4, jun:5, jul:6, aug:7, sep:8, oct:9, nov:10, dec:11 };
    const m = /^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/.exec(str.trim());
    if (!m) return null;
    const mon = months[m[2].toLowerCase()];
    if (mon === undefined) return null;
    return new Date(Number(m[3]), mon, Number(m[1]));
}

// Pre-fill the form's programme dropdown and scroll to the form
function applyForProgramme(id) {
    const progSelect = document.getElementById('programme');
    if (progSelect) progSelect.value = id;
    scrollToId('heroFormSection');
}
window.applyForProgramme = applyForProgramme;
window.applyFilter = applyFilter;

/* ---------------- Comparison table ---------------- */
let compareSelection = ["1", "2", "4"]; // Default: 3 distinct programmes

function renderTable() {
    const table = document.getElementById('comparisonTable');
    if (!table) return;

    const selected = compareSelection.map(id => programmes.find(p => p.id === id)).filter(Boolean);

    const attributes = [
        { key: 'select', label: 'Select Programme' },
        { key: 'institute', label: 'Institute' },
        { key: 'duration', label: 'Duration' },
        { key: 'format', label: 'Format' },
        { key: 'feeTotal', label: 'Total Fee (incl. GST)' },
        { key: 'startDate', label: 'Batch Starts' }
    ];

    let html = '<tbody>';
    attributes.forEach(attr => {
        html += '<tr>';
        html += `<th scope="row" class="row-header">${attr.label}</th>`;
        selected.forEach((p, colIndex) => {
            if (attr.key === 'select') {
                const options = programmes.map(prog => {
                    // Disable a programme already chosen in another column to avoid duplicate columns
                    const usedElsewhere = compareSelection.includes(prog.id) && prog.id !== p.id;
                    return `<option value="${prog.id}" ${prog.id === p.id ? 'selected' : ''} ${usedElsewhere ? 'disabled' : ''}>${prog.title} — ${prog.institute}</option>`;
                }).join('');
                html += `<th scope="col" class="prog-header-cell">
                    <select class="compare-select" aria-label="Choose programme for column ${colIndex + 1}" onchange="updateCompare(${colIndex}, this.value)">
                        ${options}
                    </select>
                </th>`;
            } else {
                html += `<td>${p[attr.key]}</td>`;
            }
        });
        html += '</tr>';
    });

    html += '<tr><th scope="row" class="row-header">Action</th>';
    selected.forEach(p => {
        html += `<td><button type="button" class="btn btn-outline btn-block" onclick="applyForProgramme('${p.id}')">Apply</button></td>`;
    });
    html += '</tr></tbody>';

    table.innerHTML = html;
}

window.updateCompare = function(colIndex, newId) {
    compareSelection[colIndex] = String(newId);
    renderTable();
};

/* ---------------- FAQ accordion ---------------- */
function wireAccordion() {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach((header, i) => {
        const content = header.nextElementSibling;
        const contentId = 'accordion-panel-' + i;
        content.id = contentId;
        content.setAttribute('role', 'region');
        header.setAttribute('aria-controls', contentId);

        header.addEventListener('click', () => {
            const isOpen = header.getAttribute('aria-expanded') === 'true';
            // Close all
            headers.forEach(h => {
                h.setAttribute('aria-expanded', 'false');
                h.nextElementSibling.style.maxHeight = null;
            });
            // Open the clicked one if it was closed
            if (!isOpen) {
                header.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // Keep an open panel correctly sized if the viewport changes
    window.addEventListener('resize', () => {
        const open = document.querySelector('.accordion-header[aria-expanded="true"]');
        if (open) open.nextElementSibling.style.maxHeight = open.nextElementSibling.scrollHeight + 'px';
    });
}

/* ---------------- Lead form ---------------- */
function wireForm() {
    const form = document.getElementById('heroForm');
    if (!form) return;
    const status = document.getElementById('formStatus');

    const validators = {
        name: v => v.trim().length >= 2 || 'Please enter your name.',
        email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Enter a valid email address.',
        phone: v => /^[0-9+\-\s()]{8,15}$/.test(v.trim()) || 'Enter a valid phone number.',
        experience: v => v !== '' || 'Select your experience.',
        programme: v => v !== '' || 'Select a programme.',
        consent: (v, el) => el.checked || 'Please accept to continue.'
    };

    function validateField(name) {
        const el = form.elements[name];
        const errEl = form.querySelector(`[data-error-for="${name}"]`);
        const result = validators[name](el.value, el);
        const ok = result === true;
        if (errEl) errEl.textContent = ok ? '' : result;
        el.closest('.form-group').classList.toggle('has-error', !ok);
        el.setAttribute('aria-invalid', ok ? 'false' : 'true');
        return ok;
    }

    Object.keys(validators).forEach(name => {
        const el = form.elements[name];
        el.addEventListener('blur', () => validateField(name));
        el.addEventListener('input', () => {
            if (el.closest('.form-group').classList.contains('has-error')) validateField(name);
        });
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        status.className = 'form-status';
        status.textContent = '';

        // Honeypot: real users never fill this
        if (form.elements['company'].value !== '') return;

        const allValid = Object.keys(validators).map(validateField).every(Boolean);
        if (!allValid) {
            status.className = 'form-status is-error';
            status.textContent = 'Please fix the highlighted fields and try again.';
            const firstError = form.querySelector('.form-group.has-error input, .form-group.has-error select');
            if (firstError) firstError.focus();
            return;
        }

        // TODO: wire to the real lead-capture endpoint (e.g. fetch POST to CRM / Salesforce).
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting…';

        setTimeout(() => {
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Talk To A Counsellor';
            status.className = 'form-status is-success';
            status.textContent = 'Thank you! A counsellor will reach out to you shortly.';
            form.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));
        }, 600);
    });
}

/* ---------------- Counsellor CTAs ---------------- */
function wireCounsellorButtons() {
    document.querySelectorAll('[data-counsellor]').forEach(btn => {
        btn.addEventListener('click', () => {
            const prog = document.getElementById('programme');
            if (prog) prog.value = 'Help me decide';
            scrollToId('heroFormSection');
            setTimeout(() => {
                const name = document.getElementById('name');
                if (name) name.focus({ preventScroll: true });
            }, 500);
        });
    });
}

/* ---------------- Sticky nav + active section ---------------- */
function wireStickyNav() {
    const stickyNav = document.getElementById('stickyNav');
    const hero = document.querySelector('.hero');
    if (!stickyNav || !hero) return;

    const onScroll = () => {
        stickyNav.classList.toggle('visible', window.scrollY > hero.offsetHeight * 0.6);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Highlight the section currently in view
    const links = Array.from(stickyNav.querySelectorAll('.sticky-links a'));
    const sections = links
        .map(a => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);

    if ('IntersectionObserver' in window && sections.length) {
        const spy = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    links.forEach(l => l.classList.toggle('active',
                        l.getAttribute('href') === '#' + entry.target.id));
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach(s => spy.observe(s));
    }
}

/* ---------------- Scroll reveal ---------------- */
function wireScrollReveal() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = Array.from(document.querySelectorAll('.reveal'));
    const revealAll = () => items.forEach(el => el.classList.add('is-visible'));

    if (reduce || !('IntersectionObserver' in window)) {
        revealAll();
        return;
    }

    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    items.forEach(el => io.observe(el));

    // Safety net: never let content stay permanently hidden if the observer
    // doesn't fire (bfcache restore, frozen tab, edge-case browsers).
    setTimeout(revealAll, 2500);
    window.addEventListener('pageshow', e => { if (e.persisted) revealAll(); });
}

/* ---------------- Smooth scroll helper (respects reduced motion) ---------------- */
function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}
window.scrollToId = scrollToId;
