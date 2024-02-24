import { test, expect } from '@playwright/test';
require('dotenv').config();

test('full wallet connection with popup handling', async ({ browser }) => {
  const context = await browser.newContext();
  const squadsPage = await context.newPage();

  // Navigate to the Squads app
  await squadsPage.goto('https://app.squads.so/squads');

  // Click on the Connect button
  await squadsPage.getByRole('button', { name: 'Connect' }).nth(1).click();
  // Select Solflare option
  await squadsPage.locator('div').filter({ hasText: /^Solflare$/ }).click();

  // Handle the popup for wallet setup
  const walletSetupPromise = squadsPage.waitForEvent('popup');
  await squadsPage.frameLocator('iframe').getByRole('button', { name: 'Use Web Wallet' }).click();
  const walletSetupPage = await walletSetupPromise;

  // Fill in the wallet setup details
  const seedPhrase = process.env.SEED_PHRASE;

// Check if the mnemonicPhrase is not undefined before using it
  if (seedPhrase === undefined) {
  throw new Error('The SEED_PHRASE environment variable is not set.');
  }
  await walletSetupPage.getByRole('button', { name: 'I ALREADY HAVE A WALLET' }).click();
  await walletSetupPage.locator('#mnemonic-input-0').fill(seedPhrase);
  await walletSetupPage.getByRole('button', { name: 'Continue' }).click();
  await walletSetupPage.getByLabel('New Password').fill('test1234');
  await walletSetupPage.getByLabel('Repeat Password').fill('test1234');
  await walletSetupPage.getByRole('button', { name: 'Continue' }).click();
  await walletSetupPage.getByRole('button', { name: 'Import All' }).click();

  // Verify wallet is ready and proceed to Solflare page
  await expect(walletSetupPage.getByText('Your wallet is ready!')).toBeVisible();
  const solflarePage = await context.newPage();
  await solflarePage.goto('https://solflare.com/portfolio');

  // Perform actions on the Solflare page as needed
  // For this example, we'll assume you're doing some verification or actions here.

  // Go back to the Squads page and refresh to trigger the new popup
  await squadsPage.bringToFront();
  await squadsPage.reload();

  // Prepare to capture the new popup after refresh
  const newWalletSetupPromise = squadsPage.waitForEvent('popup');
  // Assuming clicking 'Connect' again to trigger the new popup - adjust as needed
  await squadsPage.getByRole('button', { name: 'Connect' }).nth(1).click();

  // Handle the new popup
  const newWalletSetupPage = await newWalletSetupPromise;
  await newWalletSetupPage.getByRole('button', { name: 'Connect' }).click();

  // Verify public wallet address matches
  await squadsPage.getByRole('button', { name: 'BTnJ…ZTAj' }).isVisible();
  
  // Create a squad
  await squadsPage.getByRole('button', { name: 'Create Squad' }).click();
  await squadsPage.getByPlaceholder('Squad name').click();
  await squadsPage.getByPlaceholder('Squad name').fill('one member squad');
  await squadsPage.getByPlaceholder('Description (max 64').click();
  await squadsPage.getByPlaceholder('Description (max 64').fill('one member squad');
  await squadsPage.getByRole('button', { name: 'Next' }).click();
  await expect(squadsPage.getByText('1', { exact: true })).toBeVisible();

  await squadsPage.getByRole('button', { name: 'Next' }).click();
  await expect(squadsPage.locator('body')).toContainText('1/1');
  await squadsPage.getByRole('button', { name: 'Confirm' }).click();

  // Load new popup for transaction confirmation
  const newWalletConfirmPromise = squadsPage.waitForEvent('popup');
  const newWalletConfirm = await newWalletConfirmPromise;
  await newWalletConfirm.getByRole('button', { name: 'Confirm' }).click();
  await newWalletConfirm.getByRole('button', { name: 'Approve' }).click();

  // Cleanup: Close pages or context if necessary
  // await solflarePage.close();
  // await squadsPage.close();
  // await context.close();
});
