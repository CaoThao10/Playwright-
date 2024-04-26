const { chromium } = require("playwright");
const notifier = require("node-notifier");

(async () => {
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("https://example.com");

// Chờ cho các trường input và nút đăng nhập được tải và sẵn sàng
await page.waitForSelector('input[name="username"]');
await page.waitForSelector('input[name="password"]');
await page.waitForSelector('button[type="submit"]');

// Thực hiện điền dữ liệu vào các trường input và nhấp vào nút đăng nhập
await page.fill('input[name="username"]', "myusername");
await page.fill('input[name="password"]', "mypassword");
await page.click('button[type="submit"]');

// Chờ một khoảng thời gian hoặc theo dõi trạng thái của trang để kiểm tra kết quả
await page.waitForTimeout(3000); // Chờ 3 giây (đây là ví dụ)

// Hiển thị thông báo sau khi đã thực hiện kiểm thử và kiểm tra kết quả
notifier.notify({
title: "Kiểm thử đã hoàn thành",
message: "Đã hoàn thành kiểm thử trên trang web.",
sound: true, // Kích hoạt âm thanh thông báo
wait: true, // Chờ người dùng đóng thông báo trước khi tiếp tục chương trình
});

await browser.close();
})();
