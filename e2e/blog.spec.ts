import { test, expect } from '@playwright/test'

test.describe('Blog', () => {
  test('index lists posts', async ({ page }) => {
    await page.goto('/blog')
    await expect(page.getByRole('heading', { name: /blog/i })).toBeVisible()
    await expect(page.getByText(/how i got to japan/i)).toBeVisible()
  })

  test('post card links to the post', async ({ page }) => {
    await page.goto('/blog')
    await page.getByRole('link', { name: /how i got to japan/i }).click()
    await expect(page).toHaveURL('/blog/how-i-got-to-japan-part-1')
  })

  test('post page renders content', async ({ page }) => {
    await page.goto('/blog/how-i-got-to-japan-part-1')
    await expect(page.getByRole('heading', { name: /how i got to japan/i })).toBeVisible()
    await expect(page.getByText(/this is not an advice column/i)).toBeVisible()
  })

  test('post page has back link to blog', async ({ page }) => {
    await page.goto('/blog/how-i-got-to-japan-part-1')
    await page.getByRole('link', { name: /← blog/i }).click()
    await expect(page).toHaveURL('/blog')
  })

  test('unknown slug redirects to blog index', async ({ page }) => {
    await page.goto('/blog/does-not-exist')
    await expect(page).toHaveURL('/blog')
  })
})
