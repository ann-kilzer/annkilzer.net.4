import { test, expect } from '@playwright/test'

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('shows name and title', async ({ page }) => {
    await expect(page.getByText("I'm Ann Kilzer.")).toBeVisible()
    await expect(page.getByText('Senior Software Engineer', { exact: true })).toBeVisible()
  })

  test('shows social links', async ({ page }) => {
    await expect(page.getByRole('link', { name: /github/i })).toHaveAttribute('href', 'https://github.com/ann-kilzer')
    await expect(page.getByRole('link', { name: /instagram/i })).toHaveAttribute('href', 'https://www.instagram.com/ann.kilzer.art/')
    await expect(page.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', 'https://www.linkedin.com/in/annkilzer/')
  })

  test('social links open in new tab', async ({ page }) => {
    for (const name of ['GitHub', 'Instagram', 'LinkedIn']) {
      await expect(page.getByRole('link', { name })).toHaveAttribute('target', '_blank')
    }
  })

  test('has page title', async ({ page }) => {
    await expect(page).toHaveTitle('Ann Kilzer')
  })
})
