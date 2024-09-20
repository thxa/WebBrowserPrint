const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    // Read the file and split into an array of URLs
    const urls = fs.readFileSync('uri.txt', 'utf-8').trim().split('\n');

    const browser = await puppeteer.launch();
    var i = 1;
    for (const url of urls) {
        const page = await browser.newPage();

        try {
            // Navigate to the URI
            await page.goto(url);

            // Set screen size.
            await page.setViewport({width: 1080, height: 1024});
            // Wait for the button to load and click it
            // await page.waitForSelector('a.btn.btn-primary.reveal-solution');
            // await page.click('a.btn.btn-primary.reveal-solution');

            // Wait for the suggested answer to appear
            // await page.waitForTimeout(2000); // Adjust as necessary

            // Simulate pressing the Enter key
            // await page.keyboard.press('Enter');

            // Generate PDF and save to specified path
            const fileName = url.split('/').slice(-2, -1)[0]; // Extract the last part of the URL for filename
            const filePath = path.join(__dirname, `${i}.pdf`);
            await page.pdf({ 
                path: filePath, 
                format: 'A4', 
                printBackground: true
            });

            console.log(`PDF saved for ${url} to ${filePath}`);
        } catch (error) {
            console.error(`Error processing ${url}:`, error);
        } finally {
            await page.close();
        }
        i+=1;
    }

    await browser.close();
})();
