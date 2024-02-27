import { test as base, chromium, webkit } from '@playwright/test';
require('dotenv').config();
import path from 'path';


const extensionPath = path.join(__dirname, '../phantom');

const test = base.extend({
    context: async ({ browserName }, use) => {
        const browserTypes = { chromium, webkit };
        const launchOptions = {
            devtools: false,
            headless: false,
            args: [
                `--disable-extensions-except=${extensionPath}`,
                // `--load-extension=${extensionPath}`
            ],
        };
        const context = await browserTypes[browserName].launchPersistentContext('', launchOptions);
        await use(context);
        // // Keep the browser open after tests
        // await new Promise(resolve => setTimeout(resolve, 100000000)); // Adjust the timeout as needed or use a different condition to wait indefinitely
    }
});

test.describe('Phantom wallet connection', () => {
    test('Connect Phantom wallet', async ({ page }) => {
        await page.goto('chrome-extension://achbgjbljceobfamblkicfjcclcampgi/onboarding.html');
        const seedPhrase0 = process.env.SEED_PHRASE_0;
        const seedPhrase1 = process.env.SEED_PHRASE_1;
        const seedPhrase2 = process.env.SEED_PHRASE_2;
        const seedPhrase3 = process.env.SEED_PHRASE_3;
        const seedPhrase4 = process.env.SEED_PHRASE_4;
        const seedPhrase5 = process.env.SEED_PHRASE_5;
        const seedPhrase6 = process.env.SEED_PHRASE_6;
        const seedPhrase7 = process.env.SEED_PHRASE_7;
        const seedPhrase8 = process.env.SEED_PHRASE_8;
        const seedPhrase9 = process.env.SEED_PHRASE_9;
        const seedPhrase10 = process.env.SEED_PHRASE_10;
        const seedPhrase11 = process.env.SEED_PHRASE_11;


        // Insert seed phrase
        await page.getByTestId('import-recovery-phrase-button').click();
        await page.getByTestId('secret-recovery-phrase-word-input-0').fill(seedPhrase0);
        await page.getByTestId('secret-recovery-phrase-word-input-1').fill(seedPhrase1);
        await page.getByTestId('secret-recovery-phrase-word-input-2').fill(seedPhrase2);
        await page.getByTestId('secret-recovery-phrase-word-input-3').fill(seedPhrase3);
        await page.getByTestId('secret-recovery-phrase-word-input-4').fill(seedPhrase4);
        await page.getByTestId('secret-recovery-phrase-word-input-5').fill(seedPhrase5);
        await page.getByTestId('secret-recovery-phrase-word-input-6').fill(seedPhrase6);
        await page.getByTestId('secret-recovery-phrase-word-input-7').fill(seedPhrase7);
        await page.getByTestId('secret-recovery-phrase-word-input-8').fill(seedPhrase8);
        await page.getByTestId('secret-recovery-phrase-word-input-9').fill(seedPhrase9);
        await page.getByTestId('secret-recovery-phrase-word-input-10').fill(seedPhrase10);
        await page.getByTestId('secret-recovery-phrase-word-input-11').fill(seedPhrase11);

        await page.getByTestId('onboarding-form-submit-button').click();
        await page.getByTestId('onboarding-form-submit-button').click();
        await page.bringToFront();
        await page.getByTestId('onboarding-form-password-input').click();
        await page.getByTestId('onboarding-form-password-input').fill('test1234');
        await page.getByTestId('onboarding-form-confirm-password-input').click();
        await page.getByTestId('onboarding-form-confirm-password-input').fill('test1234');
        await page.getByTestId('onboarding-form-terms-of-service-checkbox').check();
        await page.getByTestId('onboarding-form-submit-button').click();
        await page.close();
        await page.getByTestId('onboarding-form-submit-button').click();
        await page.getByRole('button', { name: 'Connect' }).nth(1).click();
        await page.getByText('Phantom').click();
        const page2 = await context.newPage();
        await page2.goto('chrome-extension://achbgjbljceobfamblkicfjcclcampgi/notification.html');
        await page2.getByText('Squadsapp.squads.soThis app').click();
        await page.pause();
    });
});
