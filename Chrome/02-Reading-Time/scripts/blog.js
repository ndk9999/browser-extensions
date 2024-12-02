const selectors = {
    "h1.font-serif.text-3xl.font-semibold": {
        contentSelector: "div.post-content",
        classes: ["text-orange-400", "hover:text-orange-500"]
    },
    "h1#caas-lead-header-undefined": {
        contentSelector: "div.caas-body",
        classes: ["caas-live-badge-status", "wafer-template-success"]
    },
    "h1.font-polysans.text-45.font-bold.leading-100": {
        contentSelector: "div.duet--article--article-body-component-container>div",
        classes: ["text-blurple"]
    },
    "h1.article-hero__title.wp-block-post-title": {
        contentSelector: "div.entry-content",
        classes: ["article-hero__date"]
    },
    "h1.entry-title.leading-none": {
        contentSelector: "div.entry-content",
        classes: ["fn", "text-black", "dark:text-white", "font-bold"]
    }
};

let heading;
let contentEle;
let styles;

for (const configKey in selectors) {
    heading = document.querySelector(configKey);

    if (!heading) continue;

    contentEle = document.querySelector(selectors[configKey].contentSelector)

    if (contentEle) {
        styles = selectors[configKey].classes;
        break;
    }
}

if (heading && contentEle) {
    const text = contentEle.textContent;
    const wordMatchRegExp = /[^\s]+/g;  // Regular expression
    const words = text.matchAll(wordMatchRegExp);

    // matchAll returns an iterator, convert to array to get word count
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);

    const timeEle = document.createElement("div");
    timeEle.classList.add(...styles);
    timeEle.textContent = `⏱️ ${readingTime} minutes to read`;

    heading.insertAdjacentElement('afterend', timeEle);
}