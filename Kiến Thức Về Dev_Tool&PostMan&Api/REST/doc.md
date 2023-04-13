### REST

- Là viết tắt của REpresentational State Tranfer, là quy ước một số quy tắc ràng buộc khi thiết kế hệ thống mạng.
- REST cho phép Client tương tác với dữ liệu được lưu trữ trên server mà không cần phải có bất kỳ kiến thức trước nào về máy chủ hoặc những gì tồn tại trên đó.
- REST có một số ràng buộc:

* Uniform Interface (Giao diện thống nhất).
* Stateless (Không trạng thái).
* Cacheable (Dữ liệu có thể lưu vào bộ nhớ cache).
* Client-Server (Máy khách - Máy chủ ).
* Layered System (Hệ thống phân lớp).
* Code on Demand (Code theo yêu cầu).

### API

- Là cơ chế cho phép 2 thành phần phần mềm giao tiếp với nhau bằng một tập hợp các định nghĩa và giao thức.
  ==> Ví dụ : hệ thống phần mềm chứa dữ liệu thời tiết hằng ngày. ứng dụng thời tiết trên điện thoại của bạn sẽ 'trò truyện' với hệ thống này qua API và hiển thị thông tin cập nhật về thời tiết hằng ngày trên điện thoại của bạn.

### RESTful API

- Là một API chuẩn REST.Chuẩn REST khá khó hiểu vì thế chỉ cần áp dụng những kỹ thuật dưới đậy có thể coi là chuẩn REST.

### Sử dụng các phương thức HTTP để request có ý nghĩa

- GET: Đọc một hoặc nhiều tài nguyên nào đó.
- PUT: Cập nhật một hoặc nhiều tài nguyên nào đó.
- DELETE: Xóa
- POST : Tạo

### Cung cấp tài nguyên hợp lý

- Sử dụng id định danh cho URL thay vì dùng query-string. Sử dụng URL query-string cho việc filter chứ không phải cho việc lấy tài nguyên.

* Good: /users/123
* Poor: /api?type=user&id=23

- Thiết kế cho người dùng sử dụng chứ không phải thiết kế cho data của bạn.
- Giữ cho URL ngắn và dễ đọc nhất cho client.
- Sử dụng số nhiều trong URL để có tính nhất quán.

* Nên: /customers/3323/orders/87/lineitems/1
* Không nên: /customer/3323/order/87/lineitems/1

### Sử dụng các HTTP response code để xác định trạng thái API trả về

- 200 OK: Thành công
- 201 CREATED: Tạo thành công (có thể từ method POST hoặc PUT)
- 204 NO CONTENT: Thành công nhưng không có gì trả về trong body cả, thường được dùng cho DELETE hoặc PUT
- 400 BAD REQUEST: Lỗi, có thể nguyên nhân từ validate lỗi, thiếu data...
- 404 UNAUTHORIZED: Lỗi liên quan đến thiếu hoặc sai authentication token
- 403 FORBIDDEN: Lỗi liên quan đến không có quyền truy cập
- 404 NOT FOUND: Lỗi liên quan đến tài nguyên không tìm thấy
- 405 METHOD NOT ALLOWED: Lỗi liên quan method không được chấp nhận. Ví dụ API chỉ cho phép sử dụng GET,PUT,DELETE nhưng bạn dùng POST thì sẽ trả về lỗi này.
- 500 INTERNAL SERVER ERROR: Lỗi liên quan đến việc server bị lỗi khi xử lý một tác vụ nào đó.

### Sử dụng định dạng JSON hoặc XML để giao tiếp với client-server
