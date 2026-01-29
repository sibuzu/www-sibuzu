const cardData = [
    {
        link: "http://quiz.sibuzu.com",
        image: "quiz_cover.svg",
        alt: "國中試題庫 Illustration",
        title: "國中試題庫",
        desc: "海量題庫，智能練習，助您輕鬆應對考試。",
        action: "前往"
    },
    {
        link: "http://nblm.sibuzu.com",
        image: "nblm_cover.svg",
        alt: "NotebookLM Editor Illustration",
        title: "NotebookLM Editor",
        desc: "即時編輯，智能輔助，打造您的專屬知識庫。",
        action: "開啟"
    },
    {
        link: "http://news.sibuzu.com",
        image: "news_cover.svg",
        alt: "AI News Query Illustration",
        title: "AI News Query",
        desc: "AI 驅動，精準檢索，掌握最新即時新聞。",
        action: "查詢"
    },
    {
        link: "http://calculator.sibuzu.com",
        image: "calculator_cover.svg",
        alt: "Calculator Illustration",
        title: "Calculator",
        desc: "使用 Tauri + SvelteKit 打造的計算機。",
        action: "使用"
    },
    {
        link: "https://slide.sibuzu.com",
        image: "slide_flow_cover.png",
        alt: "Slide Flow Illustration",
        title: "Slide Flow",
        desc: "流暢的投影片展示體驗，輕鬆製作與分享。",
        action: "前往"
    }
];

function renderCards() {
    const cardGrid = document.querySelector('.card-grid');
    if (!cardGrid) return;

    const cardsHTML = cardData.map(card => `
        <a href="${card.link}" class="card" target="_blank" rel="noopener noreferrer">
            <div class="card-image-wrapper">
                <img src="${card.image}" alt="${card.alt}" class="card-image">
            </div>
            <div class="card-content">
                <h2 class="card-title">${card.title}</h2>
                <p class="card-desc">${card.desc}</p>
                <div class="card-action">
                    <span>${card.action}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </a>
    `).join('');

    cardGrid.innerHTML = cardsHTML;
}

document.addEventListener('DOMContentLoaded', renderCards);
