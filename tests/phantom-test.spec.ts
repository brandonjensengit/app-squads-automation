import { test, expect } from '@playwright/test';
require('dotenv').config();

test('full wallet connection with popup handling_phantom', async ({ browser }) => {
    const context = await browser.newContext();
    const squadsPage = await context.newPage();
  
    // Navigate to the Squads app
    await squadsPage.goto('https://app.squads.so/squads');
});