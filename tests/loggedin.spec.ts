import { test, expect } from '@playwright/test';

test.describe('wallet functionality', () => {
  let context;
  let squadsPage;
  let solflarePage;

  test.beforeAll(async ({ browser }) => {
    // Setup context and pages before running the tests
    context = await browser.newContext();
    squadsPage = await context.newPage();

    // Navigate to the Squads app and connect the wallet
    await squadsPage.goto('https://app.squads.so/squads');
    await squadsPage.getByRole('button', { name: 'Connect' }).nth(1).click();
    await squadsPage.locator('div').filter({ hasText: /^Solflare$/ }).click();

    const walletSetupPromise = squadsPage.waitForEvent('popup');
    await squadsPage.frameLocator('iframe').getByRole('button', { name: 'Use Web Wallet' }).click();
    const walletSetupPage = await walletSetupPromise;

    await walletSetupPage.getByRole('button', { name: 'I ALREADY HAVE A WALLET' }).click();
    await walletSetupPage.locator('#mnemonic-input-0').fill('urge certain magic lawn cool hill vintage hunt hope cotton roof abuse');
    await walletSetupPage.getByRole('button', { name: 'Continue' }).click();
    await walletSetupPage.getByLabel('New Password').fill('test1234');
    await walletSetupPage.getByLabel('Repeat Password').fill('test1234');
    await walletSetupPage.getByRole('button', { name: 'Continue' }).click();
    await walletSetupPage.getByRole('button', { name: 'Quick setup' }).click();

    await expect(walletSetupPage.getByText('Your wallet is ready!')).toBeVisible();

    solflarePage = await context.newPage();
    await solflarePage.goto('https://solflare.com/portfolio');
  });

  test('verify wallet connection', async () => {
    // Verify the wallet is connected and ready for transactions
    await squadsPage.getByRole('button', { name: 'BTnJ…ZTAj' }).isVisible();
    
  });

  test('create one member squad', async () => {
    // Create a one member squad
    await solflarePage.getByRole('button').first().click();
    await squadsPage.bringToFront();
    await squadsPage.getByRole('button', { name: 'Create Squad' }).click();
    await squadsPage.getByPlaceholder('Squad name').click();
    await squadsPage.getByPlaceholder('Squad name').fill('One Member Squad');
    await squadsPage.getByPlaceholder('Description (max 64').click();
    await squadsPage.getByPlaceholder('Description (max 64').fill('This is a one member squad');
    await squadsPage.getByRole('button', { name: 'Next' }).click();
    await expect(squadsPage.getByText('Member 1')).toBeVisible();
    await squadsPage.getByRole('button', { name: 'Next' }).click();
    await expect(squadsPage.getByText('1Members')).toBeVisible();
    await expect(squadsPage.locator('body')).toContainText('1/1');
    await squadsPage.getByRole('button', { name: 'Confirm' }).click();
    await solflarePage.getByRole('button', { name: 'Approve' }).click();
  });

  // Add more tests as needed...

  test.afterAll(async () => {
    // Cleanup: Close pages or context if necessary
    await solflarePage.close();
    await squadsPage.close();
    await context.close();
  });
});
