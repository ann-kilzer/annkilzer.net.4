import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('nav links are present', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Software' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Fine Art' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible()
  })

  test('navigates to Software page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Software' }).click()
    await expect(page).toHaveURL('/software')
    await expect(page.getByRole('heading', { name: 'Software' })).toBeVisible()
  })

  test('navigates to Fine Art page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Fine Art' }).click()
    await expect(page).toHaveURL('/art')
    await expect(page.getByRole('heading', { name: 'Fine Art' })).toBeVisible()
  })

  test('navigates to Blog page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Blog' }).click()
    await expect(page).toHaveURL('/blog')
    await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible()
  })

  test('shows 404 for unknown route', async ({ page }) => {
    await page.goto('/does-not-exist')
    await expect(page.getByText('404')).toBeVisible()
    await expect(page.getByRole('link', { name: /go home/i })).toBeVisible()
  })

  test('404 page links back to home', async ({ page }) => {
    await page.goto('/does-not-exist')
    await page.getByRole('link', { name: /go home/i }).click()
    await expect(page).toHaveURL('/')
  })
})
