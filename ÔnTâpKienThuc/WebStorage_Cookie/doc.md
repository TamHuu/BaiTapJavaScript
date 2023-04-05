### Web Storage và Cookie

- Web storage : Local storage và Session storage
- Web storage lưu trữ được nhiều dữ liệu và dễ dùng hơn cookie
- Cả 3 đều dùng để lưu trữ thông tin trên trình duyệt để tiện xử lí sau này.

==> Khác biệt lớn nhất giữa Local storage, Session storage và cookie là thời gian lưu lại trên trình duyệt

# Local storage

- Là web storage
- Lưu lại vĩnh viễn trên trình duyệt
- Dung lượng khoản 5MB - 10 MB
- Các trang khác không thể truy cập đến Local storage nếu như khác domain (js ở trang fb.com không thể truy cập vào local storage của trang gg.com)

```js
// Thêm item
localStorage.setItem("name", "John Doe");
// Đọc item
localStorage.getItem("name"); // John Doe
// Xóa item
localStorage.removeItem("name");
// Xóa hết item
localStorage.clear();
```

# Session storage

- Là web storage giống local storage
- Lưu lại trong 1 phiên dùng web thôi, đóng tab là mất hết data. --> khác chỗ này với local storage
- Dung lượng khoản 5MB - 10 MB
- Các trang khác không thể truy cập đến Local storage nếu như khác domain (js ở trang fb.com không thể truy cập vào local storage của trang gg.com)

```js
// Thêm item
session.setItem("name", "John Doe");
// Đọc item
session.getItem("name"); // John Doe
// Xóa item
session.removeItem("name");
// Xóa hết item
session.clear();
```

# Cookie

- Không phải là web storage
- Thời gian lưu trữ data có giới hạn, khi hết hạn thì cookie tự động xóa
- Dung lượng lưu trữ chỉ khoảng 4KB => Nên lưu trữ những data đơn giản, càng ít càng tốt
- Cookie sẽ tự động truyền từ server xuống client và truyền từ client lên server thông qua mỗi header request
- Có thể cấu hình để các sub domain ví dụ: sub1.domain.com có thể set cookie cho sub2.domain.com. Lưu ý là phải dùng domain cha !

==> Cookie thường được tạo trên server bằng PHP, Python, Java, hoặc Node.js để truyền xuống client thông qua header của mỗi request

```js
setCookie(
    string $name,
    string $value= "",
    int $expires_or_options = 0,
    string $path = "",
    string $domain = "",
    bool $secure = false,
    bool $httponly= false
): bool
```

- Cookie cũng có thể được tạo thông qua Javascript bằng cách dùng document.cookie

```js
document.cookie = "yummy_cookie= choco";
document.cookie = "tasty_cookie = strawberry";
log document.cookie => "yummy_cookie= choco;tasty_cookie = strawberry";
```
- Những Cookie mà tạo bằng js thì không có cờ HttpOnly flag.


## Bonus thêm Server Session
- Đây là phiên trên server, không phải ở client
- Server sẽ tự động quyết định khi nào kết thúc phiên để đưa ra quyết định với client.
