import { test, expect } from '@playwright/test'

test.describe('Blog', () => {
  test('index lists posts', async ({ page }) => {
    await page.goto('/blog')
    await expect(page.getByRole('heading', { name: /blog/i })).toBeVisible()
    await expect(page.getByText('Hello, World')).toBeVisible()
  })

  test('post card links to the post', async ({ page }) => {
    await page.goto('/blog')
    await page.getByRole('link', { name: /hello, world/i }).click()
    await expect(page).toHaveURL('/blog/hello-world')
  })

  test('post page renders content', async ({ page }) => {
    await page.goto('/blog/hello-world')
    await expect(page.getByRole('heading', { name: /hello, world/i })).toBeVisible()
    await expect(page.getByText(/lorem ipsum/i)).toBeVisible()
  })

  test('post page has back link to blog', async ({ page }) => {
    await page.goto('/blog/hello-world')
    await page.getByRole('link', { name: /← blog/i }).click()
    await expect(page).toHaveURL('/blog')
  })

  test('unknown slug redirects to blog index', async ({ page }) => {
    await page.goto('/blog/does-not-exist')
    await expect(page).toHaveURL('/blog')
  })
})
