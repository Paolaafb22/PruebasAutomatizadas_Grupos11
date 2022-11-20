import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/ghost/#/signin');
  
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill('lwilches@gmail.com');
  await page.getByPlaceholder('•••••••••••••••').click();
  await page.getByPlaceholder('•••••••••••••••').fill('LEwima123456');
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/dashboard');
  await page.screenshot({path: './result/post/delete_post/screenshot/dashboard.png'})

  await page.getByRole('link', { name: '.posts_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Posts' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/posts');

  var  post = page.locator("a.ember-view.permalink.gh-list-data.gh-post-list-clicks").first() 
  var url  = await post.evaluate(e => (e as HTMLLinkElement ).href);
  await page.screenshot({path: './result/post/delete_post/screenshot/post.png'})
  post.click();
  await expect(page).toHaveURL( url.substring(0, url.length -1 ) );
  await page.screenshot({path: './result/post/delete_post/screenshot/post_detail.png'})
  
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('button', { name: '.trash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Delete post' }).click();
  await page.screenshot({path: './result/post/delete_post/screenshot/post_delete1.png'})
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.screenshot({path: './result/post/delete_post/screenshot/post_delete2.png'})
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/posts');
  await page.screenshot({path: './result/post/delete_post/screenshot/posts.png'})  
  
});