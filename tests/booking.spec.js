// tests/booking.spec.js
import { test, expect } from '@playwright/test';

test.describe('Hotel Booking Flow', () => {
  test('should complete booking successfully', async ({ page }) => {
    // 1. Go to app + wait for network idle
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle', // All requests ≤ 2 in 500ms
    timeout: 30000
  });
    // 2. Wait for form to be visible (Vue mounted)
    await page.waitForSelector('form', { state: 'visible', timeout: 40000 });

    // 3. Fill inputs using **label text** (most reliable in Vue)
    await page.locator(`input[type="text"]`).fill('Ram Bahadur');
    await page.locator(`input[type="email"]`).fill('ram@example.com');
    await page.locator('input[type="date"]').nth(0).fill('2025-12-01');
    await page.locator('input[type="date"]').nth(1).fill('2025-12-05');

    // Optional: Adjust rooms/guests if needed
    // await page.getByLabel('Rooms').fill('2');

    // 4. Click button — use text + wait for navigation or confirmation
 
      page.getByRole('button', { name: 'Confirm Booking' }).click(),
    

    // 5. Assert confirmation
    await expect(page.getByText('Booking Confirmed!')).toBeVisible({ timeout: 30000 });
    // 6. Optionally, check the email for confirmation
  });
});