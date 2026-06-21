import { test, expect } from '@playwright/test'

test.describe('Software page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/software')
  })

  test('shows current employer', async ({ page }) => {
    await expect(page.getByText('Kraken Technologies')).toBeVisible()
    await expect(page.getByText('Sep 2025 – Present')).toBeVisible()
  })

  test('shows key sections', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Volunteering' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Publications & Talks' })).toBeVisible()
  })

  test('GitHub link is present', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/ann-kilzer')
  })
})
