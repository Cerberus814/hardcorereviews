// --- Config ---
const fullReviewsPerPage = 6; // adjust between 5 and 10 as you prefer
let fullReviewsCurrentPage = 1;
let activeTag = "ALL";
let searchQuery = "";

function renderTagFilters() {
    const tagsContainer = document.getElementById('tagsFilter');
    if (!tagsContainer) return;

    const allTags = ["ALL"];
    fullReviews.forEach(r => {
        if (r.tags) {
            r.tags.split(',').forEach(tag => {
                const cleanTag = tag.trim();
                if (!allTags.includes(cleanTag)) allTags.push(cleanTag);
            });
        }
    });

    tagsContainer.innerHTML = allTags.map(tag => `
    <span class="tag-pill ${tag === activeTag ? 'active' : ''}"
    onclick="setTagFilter('${tag}')">${tag}</span>
    `).join('');
}

function setTagFilter(tag) {
    activeTag = tag;
    fullReviewsCurrentPage = 1;
    renderTagFilters();
    renderFullReviews();
}

function filterReviews() {
    const searchInput = document.getElementById('reviewSearch');
    searchQuery = searchInput ? searchInput.value.toLowerCase() : "";
    fullReviewsCurrentPage = 1;
    renderFullReviews();
}

function renderFullReviews() {
    const container = document.getElementById('fullreviews-container');
    if (!container) return;
    container.innerHTML = '';

    renderTagFilters();

    const filtered = fullReviews.filter(r => {
        const matchesSearch = r.title.toLowerCase().includes(searchQuery);
        const matchesTag = activeTag === "ALL" || (r.tags && r.tags.includes(activeTag));
        return matchesSearch && matchesTag;
    });

    if (fullReviews.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#888;">No full reviews published yet. Check back soon!</p>';
        renderFullReviewsPagination(0);
        return;
    }
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#888;">No reviews match your search.</p>';
        renderFullReviewsPagination(0);
        return;
    }

    const start = (fullReviewsCurrentPage - 1) * fullReviewsPerPage;
    const end = start + fullReviewsPerPage;
    const visible = filtered.slice(start, end);

    visible.forEach(r => {
        const card = document.createElement('div');
        card.className = 'review-card';

        const tagsHtml = r.tags
            ? `<div class="review-tags">${r.tags.split(',').map(t => `<span>${t.trim()}</span>`).join('')}</div>`
            : '';

        const bgHtml = r.img
            ? `<div class="review-card-bg"><img src="${r.img}" alt=""></div>`
            : '';

        card.innerHTML = `
            ${bgHtml}
            <div class="review-card-inner">
                <h3>${r.title}</h3>
                <div class="review-meta"><span>📅 ${r.date}</span><span>👤 BY CERBERUS814</span></div>
                ${tagsHtml}
                <p class="review-excerpt">${r.excerpt}</p>
                <a href="fullreviews/${r.slug}.html" class="btn-cap-gaming">READ MORE</a>
            </div>
        `;
        container.appendChild(card);
    });

    renderFullReviewsPagination(filtered.length);
}

function renderFullReviewsPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / fullReviewsPerPage);
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    pagination.innerHTML = '';

    if (totalPages <= 1) return;

    if (fullReviewsCurrentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.textContent = '«';
        prevBtn.onclick = () => { fullReviewsCurrentPage--; renderFullReviews(); scrollToTopOfList(); };
        pagination.appendChild(prevBtn);
    }

    let startPage = Math.max(1, fullReviewsCurrentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);
    if (endPage - startPage < 4) { startPage = Math.max(1, endPage - 4); }

    for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (i === fullReviewsCurrentPage) btn.className = 'active';
        btn.onclick = () => { fullReviewsCurrentPage = i; renderFullReviews(); scrollToTopOfList(); };
        pagination.appendChild(btn);
    }

    if (fullReviewsCurrentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.textContent = '»';
        nextBtn.onclick = () => { fullReviewsCurrentPage++; renderFullReviews(); scrollToTopOfList(); };
        pagination.appendChild(nextBtn);
    }
}

function scrollToTopOfList() {
    const el = document.getElementById('fullreviews-container');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* --- BACK TO TOP (same as index) --- */
document.addEventListener('DOMContentLoaded', () => {
    renderFullReviews();

    const btnTop = document.getElementById('backToTop');
    if (btnTop) {
        window.onscroll = function () {
            btnTop.style.display = document.documentElement.scrollTop > 300 ? "block" : "none";
        };
        btnTop.onclick = function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});
