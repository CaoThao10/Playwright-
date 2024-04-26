// const puppeteer = require("puppeteer");

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

// Mở trang web thương mại điện tử
//   await page.goto(
//     "https://qldtbeta.phenikaa-uni.edu.vn/conggiangvien/login.aspx"
//   );
//   await page.goto(
//     "https://qldtbeta.phenikaa-uni.edu.vn/conggiangvien/login.aspx",
//     { timeout: 60000 }
//   ); // Tăng thời gian chờ lên 60 giây

// Đăng nhập
//   await page.type("#username", "your_username");
//   await page.type("#password", "your_password");
//   await page.click("#cms_authenticate_do_login");

// Chờ trang load sau khi đăng nhập
//   await page.waitForNavigation();

// Tìm sản phẩm và thêm vào giỏ hàng
//   await page.type("#searchInput", "product_name");
//   await page.click("#searchButton");

// Chờ trang kết quả tìm kiếm load
//   await page.waitForSelector(".product");

// Chọn sản phẩm và thêm vào giỏ hàng
//   await page.click(".product");

// Chờ trang sản phẩm load
//   await page.waitForNavigation();

// Thêm sản phẩm vào giỏ hàng
//   await page.click("#addToCartButton");

// Chuyển đến trang giỏ hàng
//   await page.click("#cartLink");

// Kiểm tra xem sản phẩm đã được thêm vào giỏ hàng chưa
//   const cartItemCount = await page.$$eval(
//     ".cart-item",
//     (items) => items.length
//   );
//   if (cartItemCount > 0) {
//     console.log("Sản phẩm đã được thêm vào giỏ hàng");
//   } else {
//     console.log("Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng");
//   }

// Thực hiện các thao tác khác trên trang web thương mại điện tử

// Đóng trình duyệt
//   await browser.close();
// })();

const { test, expect } = require("@playwright/test");

test("Login test", async ({ page }) => {
  // Điều hướng đến trang đăng nhập
  await page.goto("https://github.com/login");

  // Nhập thông tin đăng nhập
  await page.fill("#login_field", "caothao1002");
  await page.fill("#password", "Thao1002");

  // Bấm nút đăng nhập
  await page.click("[name='commit']");

  // Chờ trang load sau khi đăng nhập
  // await page.waitForNavigation();
  await page.waitForNavigation({ timeout: 60000 });

  // Kiểm tra xem đã đăng nhập thành công chưa
  const url = page.url();

  expect(url).toContain("https://github.com/");
});
