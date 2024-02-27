import { test as base, chromium, webkit } from '@playwright/test';
import { config } from 'dotenv';
import path from 'path';

// Load environment variables
config();

const extensionPath = path.join(__dirname, '../phantom');

// Simplify browser context setup
const test = base.extend({
  context: async ({ browserName }, use) => {
    const browserTypes = { chromium, webkit };
    const launchOptions = {
      devtools: false,
      headless: false,
      args: [`--disable-extensions-except=${extensionPath}`],
    };
    const context = await browserTypes[browserName].launchPersistentContext('', launchOptions);
    await use(context);
  }
});

test.describe('Phantom wallet connection', () => {
  test('Connect Phantom wallet', async ({ page, context, squadsPage }) => {
    await page.goto('chrome-extension://achbgjbljceobfamblkicfjcclcampgi/onboarding.html');
    
    // Use a loop for seed phrase input to reduce redundancy
    for (let i = 0; i <= 11; i++) {
      const seedPhrase = process.env[`SEED_PHRASE_${i}`];
      if (seedPhrase === undefined) {
        throw new Error("SEED_PHRASE is not defined in the environment variables.");
      }
      await page.getByTestId(`secret-recovery-phrase-word-input-${i}`).fill(seedPhrase);
    }

    // Complete form submission
    await page.getByTestId('onboarding-form-submit-button').click(); // Click once if needed
    await page.bringToFront();
    await page.getByTestId('onboarding-form-password-input').fill('test1234');
    await page.getByTestId('onboarding-form-confirm-password-input').fill('test1234');
    await page.getByTestId('onboarding-form-terms-of-service-checkbox').check();
    await page.getByTestId('onboarding-form-submit-button').click();
    
    // Connect to the wallet
    await page.getByRole('button', { name: 'Connect' }).nth(1).click();
    await page.getByText('Phantom').click();

    // Handle notification
    const page2 = await context.newPage();
    await page2.goto('chrome-extension://achbgjbljceobfamblkicfjcclcampgi/notification.html');
    await page2.getByText('Squadsapp.squads.soThis app').click();

    await page.pause(); // For debugging, remove or comment out for production
  });
});
