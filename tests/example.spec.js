import {test} from '@playwright/test';

test("Braden's Portfolio", async ({ page })=> {
  const viewport = page.viewportSize();

  if (viewport){
    const new_width = viewport.width - 30;
    const new_height = viewport.height;

    await page.setViewportSize({width:new_width, height:new_height});
  }


  await page.goto("http://localhost:5173/");
})


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
