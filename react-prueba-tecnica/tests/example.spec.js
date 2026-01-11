// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

test('app show random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image1 = await page.getByRole('img')

  const textContent = await text.textContent()
  const imgSrc1 = await image1.getAttribute('src')
  console.log(imgSrc1)

  const clickedButton = await page.getByRole('button')
  const button = await clickedButton.click()
  await page.waitForTimeout(1000)
  const image2 = await page.getByRole('img')
  const imgSrc2 = await image2.getAttribute('src')
  console.log(imgSrc2)

  await expect(imgSrc2).not.toBe(imgSrc1)

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSrc1?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})
