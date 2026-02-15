/**
 * Generates HTML for a <picture> element with AVIF/WebP support.
 * Assumes the optimizer moves files to images/dist/ and adds extensions.
 */
function getPictureHtml(imagePath, altText, className = "") {
    if (!imagePath) return "";

    // Extract filename: "Products_Images/gold_ring.jpg" -> "gold_ring"
    const fileName = imagePath.replace(/\.[^/.]+$/, "");
    
    return `
        <picture class="${className}">
            <source srcset="${fileName}.avif" type="image/avif">
            <source srcset="${fileName}.webp" type="image/webp">
            <img src="${imagePath}" 
                 alt="${altText}" 
                 class="${className}" 
                 loading="lazy" 
                 decoding="async">
        </picture>
    `;
}
