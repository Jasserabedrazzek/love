import { create_html_element,create_css,add_to_DOM } from 'https://create-page-with-js.netlify.app/create-page.js';

export const add_html_element = (option) => {
    return create_html_element(option);
}

export const add_css = (option) => {
    return create_css(option);
}

export const Add_to_DOM = (option) => {
    return add_to_DOM(option);
}

async function speedTest(url = "https://create-page-with-js.netlify.app/create-page.js") {
    const fileSizeInBits = 100 * 1024 * 1024 * 8;

    const startTime = performance.now();
    try {
        await fetch(url, { method: "GET", cache: "no-store" });
        const endTime = performance.now();
        const durationInSeconds = (endTime - startTime) / 1000;
        const speedMbps = (fileSizeInBits / durationInSeconds) / (1024 * 1024);
        console.log(`Download Speed: ${speedMbps.toFixed(2)} Mbps`);
    } catch (error) {
        console.error("Speed test failed:", error);
    }
}

speedTest();
