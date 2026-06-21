import { test, expect } from '@playwright/test'

test.describe('Language switcher', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('shows EN content by default', async ({ page }) => {
    await expect(page.getByText("I'm Ann Kilzer.")).toBeVisible()
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(page.getByRole('button', { name: /switch language/i })).toHaveText('日本語')
  })

  test('switches to Japanese when toggle clicked', async ({ page }) => {
    await page.getByRole('button', { name: /switch language/i }).click()
    await expect(page.getByText('杏キルザーです。')).toBeVisible()
    await expect(page.getByRole('link', { name: 'ホーム' })).toBeVisible()
    await expect(page.getByRole('button', { name: /switch language/i })).toHaveText('EN')
  })

  test('switches back to English when toggled again', async ({ page }) => {
    await page.getByRole('button', { name: /switch language/i }).click()
    await page.getByRole('button', { name: /switch language/i }).click()
    await expect(page.getByText("I'm Ann Kilzer.")).toBeVisible()
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible()
  })

  test('nav links are translated in Japanese', async ({ page }) => {
    await page.getByRole('button', { name: /switch language/i }).click()
    await expect(page.getByRole('link', { name: 'ソフトウェア' })).toBeVisible()
    await expect(page.getByRole('link', { name: '美術' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'ブログ' })).toBeVisible()
  })

  test('Japanese nav links navigate correctly', async ({ page }) => {
    await page.getByRole('button', { name: /switch language/i }).click()
    await page.getByRole('link', { name: 'ソフトウェア' }).click()
    await expect(page).toHaveURL('/software')
  })
})
