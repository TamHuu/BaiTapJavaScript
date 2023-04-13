### Class component

### Lifecycle

- Tạo một ES6 class cùng với tên file, kế thừa React.Component
- Thêm một method là render() và return về một jsx
- Nếu muốn dùng state trong component thì phải tạo constructor(props){...}. Nhớ gọi super(props) để hoàn tất việc gọi constructor của class React.Component.Nếu đã dùng constructor thì phải dùng super. Bạn không cần tạo constructor nếu bạn không khởi tạo state
- Gán object cho this.state. Lưu ý là this.state chỉ có thể là object hoặc null

# ComponentDidMount

Được chạy ngay khi component mounted.Thường được dùng để

- Truy cập đến DOM node, vì lúc này UI đã được render ra rồi
- Gọi API
- setState()

# ComponentDidUpdate

Sẽ được gọi ngay lập tức khi component của bạn re-render và cập nhật lại DOM thật. Phương thức này không chạy ở lần render đầu tiên.

Chúng ta dùng khi

- Muốn tracking sự thay đổi trên state thì sẽ thực hiện 1 hành động gì đó, ví dụ truy cập đến DOM thật.
- Tracking sự thay đổi URL
- Bạn cũng có thể gọi API và setState trong này nhưng hãy cẩn thận đặt điều kiện vào trong, còn không thì sẽ dễ đẫn đến vòng lặp vô hạn.

# ComponentWillUnmount
 Sẽ được chạy ngay trước khi component bị unmount và hủy.

Chúng ta dùng khi 
- Clean một thứ gì đó như setTimeout hay setInterval
- Hủy gọi API, hủy subscription nào đó được tạo ở componentDidMount
- Bạn không nên setState trong componentWillUnmount vì component sẽ không bao giờ re-render lại.
