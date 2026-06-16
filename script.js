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
        institute: "IIT Madras",
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

document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderCards(programmes);
    renderTable(programmes);

    // Goal-based filtering via Tiles
    const filterTiles = document.querySelectorAll('.filter-tile');
    filterTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            filterTiles.forEach(t => t.classList.remove('active'));
            tile.classList.add('active');

            const filter = tile.getAttribute('data-filter');
            const filtered = programmes.filter(p => p.filters.includes(filter));
            
            renderCards(filtered);
            document.getElementById('programmes').scrollIntoView({ behavior: 'smooth' });
            
            // Sync tabs
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            const matchingTab = document.querySelector(`.tab-btn[data-tab="${filter}"]`);
            if(matchingTab) matchingTab.classList.add('active');
        });
    });

    // Tab-based filtering (Interest-based)
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');

            const tab = btn.getAttribute('data-tab');
            if (tab === 'all') {
                renderCards(programmes);
            } else {
                const filtered = programmes.filter(p => p.filters.includes(tab));
                renderCards(filtered);
            }

            // Sync tiles visually
            filterTiles.forEach(t => t.classList.remove('active'));
            const matchingTile = document.querySelector(`.filter-tile[data-filter="${tab}"]`);
            if(matchingTile) matchingTile.classList.add('active');
        });
    });

    // FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const expanded = header.getAttribute('aria-expanded') === 'true';
            document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
            accordionHeaders.forEach(h => h.setAttribute('aria-expanded', 'false'));
            if (!expanded) {
                header.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Hero Form Submission
    const heroForm = document.getElementById('heroForm');
    if (heroForm) {
        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted! In a real environment, this would send data to the backend.');
        });
    }

    // Sticky Nav visibility on scroll
    const stickyNav = document.getElementById('stickyNav');
    const heroSection = document.querySelector('.hero');
    if (stickyNav && heroSection) {
        window.addEventListener('scroll', () => {
            // Show sticky nav when scrolled past the hero section
            if (window.scrollY > heroSection.offsetHeight) {
                stickyNav.classList.add('visible');
            } else {
                stickyNav.classList.remove('visible');
            }
        });
    }
});

function renderCards(data) {
    const grid = document.getElementById('programmeGrid');
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = '<p>No programmes match your selection.</p>';
        return;
    }

    data.forEach(p => {
        grid.innerHTML += `
            <div class="prog-card">
                <div class="prog-institute">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    ${p.institute}
                </div>
                <h3 class="prog-title">${p.title}</h3>
                <span class="prog-badge">${p.badge}</span>
                <div class="prog-meta">
                    <span><strong>Duration:</strong> ${p.duration} | ${p.format}</span>
                    <span><strong>Starts:</strong> ${p.startDate}</span>
                </div>
                <p style="font-size: 14px; margin-bottom: 24px; color: var(--tp-dark-gray);">${p.desc}</p>
                <div style="margin-top: auto;">
                    <button class="btn btn-primary" style="width: 100%;" onclick="applyForProgramme('${p.id}')">View Details & Apply</button>
                </div>
            </div>
        `;
    });
}

// Helper to pre-fill the form and scroll to hero
function applyForProgramme(id) {
    const progSelect = document.getElementById('programme');
    if (progSelect) {
        progSelect.value = id;
    }
    document.getElementById('heroFormSection').scrollIntoView({behavior: 'smooth'});
}

let compareSelection = [1, 2, 4]; // Default comparing first 3 distinct programmes

function renderTable() {
    const table = document.getElementById('comparisonTable');
    if (!table) return;
    
    // Get the selected programmes
    const selectedProgrammes = compareSelection.map(id => programmes.find(p => p.id == id)).filter(Boolean);

    // Create the inverted table rows
    const attributes = [
        { key: 'select', label: 'Select Programme' },
        { key: 'institute', label: 'Institute' },
        { key: 'duration', label: 'Duration' },
        { key: 'format', label: 'Format' },
        { key: 'feeTotal', label: 'Total Fee (incl. GST)' },
        { key: 'startDate', label: 'Batch Starts' }
    ];

    let html = '<tbody>';
    
    // Loop through attributes (rows)
    attributes.forEach(attr => {
        html += '<tr>';
        // Left fixed column
        html += `<th class="row-header">${attr.label}</th>`;
        
        // Data columns (for each selected programme)
        selectedProgrammes.forEach((p, colIndex) => {
            if (attr.key === 'select') {
                // Render a select dropdown
                let options = programmes.map(prog => 
                    `<option value="${prog.id}" ${prog.id == p.id ? 'selected' : ''}>${prog.title}</option>`
                ).join('');
                html += `<th class="prog-header-cell">
                    <select class="compare-select" onchange="updateCompare(${colIndex}, this.value)">
                        ${options}
                    </select>
                </th>`;
            } else {
                html += `<td>${p[attr.key]}</td>`;
            }
        });
        html += '</tr>';
    });

    // Action row
    html += '<tr><th class="row-header">Action</th>';
    selectedProgrammes.forEach(p => {
        html += `<td><button class="btn btn-outline" style="width: 100%; padding: 8px;" onclick="applyForProgramme('${p.id}')">Apply</button></td>`;
    });
    html += '</tr>';

    html += '</tbody>';
    table.innerHTML = html;
}

window.updateCompare = function(colIndex, newId) {
    compareSelection[colIndex] = parseInt(newId);
    renderTable(); // Re-render with new selection
};
