# Tham trị và tham chiếu

JS về bản chất có 2 kiểu dữ liệu chính là tham trị và tham chiếu

## Kiểu tham trị (primitive types)

Có những kiểu dưới đây

1. number
2. string
3. boolean
4. null
5. undefined
6. BigInt
7. Symbol

### Việc copy với tham trị

```js
let message = "hello";

let pharase = message;
//  log => nếu thay đổi biến pharase thì biến pharase thay đổi giá trị còn biến masage vẫn giữ nguyên giá trị là `hello`
```

## Kiểu tham chiếu (reference types)

Có những kiểu dưới đây

1. object
2. array
3. function
<!--
Thực ra array & function về bản chất vẫn là object cả thôi -->

## Việc copy với tham chiếu

```js
let user = {
name:'Tam'
}

let admin = user //Copy the reference

admin.name = 'Nhi' //Change by the 'admin' reference

=> log user.name // 'Nhi

- Một biến object không lưu trữ giá trị, nó lưu trữ "địa chỉ bộ nhớ" - hay còn gọi là nó tham chiếu đến ô nhớ.
- Object thì được lưu trữ đâu đó trong bộ nhớ, còn biến user thì tham chiếu đến nó
- Khi chúng ta copy một biến object, tham chiếu của nó sẽ bị copy, object không bị nhân đôi lên
```

### So sánh với tham chiếu

```js
let a= {}
let b = a

log a == b => true
log a === b =>

=> 2 thằng cùng tham chiếu đến cùng 1 object  là {} nên nó bằng nhau

----

let c = {}
let d = {}

log c == d => false
log c === d => false

=> Đây là 2 object độc lập nhìn giống nhau, tuy nhiên chúng không bằng nhau
```

#### Clone và merge

- Copy một biến object sẽ tạo thêm 1 biến khác tham chiếu đến cùng object đó.
- Trong nhiều trường hợp chúng ta cần nhân đôi một object để khi chỉnh sửa biến này thfi không ảnh hưởng biến kia. Chúng ta gọi cái này là clone

- Clone gồm 2 loại :

* clone thường ( cũng có thể gọi là shallow copy)
* deep thường ( cũng có thể gọi là deep copy)

## Clone thường ta thường dùng spread syntax để clone clone = {...user}

```js
let userCustomer = {
    name:'TâmHuu',
    age:20
}

let clone = {...useCustomer}
clone.name ='Petter'
log user.name //Vẫn là TâmHuu trong object gốc

Hoặc

Vòng lặp

let userCustom = {
    name:'Tâm',
    age:30
}

let clone = {}

for (let key in user){
    clone[key]= user[key]
}
clone.name ='Petter'
log user.name //Vẫn là Tâm trong object gốc
=> Clone thường chỉ hiệu quả với những object 1 cấp, những object nested nhiều cấp thfi phải deep clone
```

## Deep clone

```js
let userCustom = {
  name: "Tâm",
  age: 30,
  sizes: {
    height: 182,
    width: 50,
  },
};

log user.sizes.height //182

let clone = {...user}

log user.sizes === clone.sizes //true vì cùng 1 object

//user và clone cùng chia sẻ sizes

user.sizes.width++ // Thay đổi thuộc tính từ một nơi

log clone.sizes.width // 51 ==> Tại nơi khác kết quả cũng thay đổi


```

Để fix vấn đề này (Tại nơi khác kết quả cũng thay đổi) ta có 3 cách :

- JSON.parse(JSON.stringify())
- Dùng method \_.cloneDeep(obj) của thư viện lodassh (nó dùng đệ quy để lặp các thuộc tính bên trong object)
- Dùng thư viện như immer. Đôi lúc chúng ta không cần clone hết tất cả một object lơn để chỉnh sửa vài thuộc tính.

## Lưu ý: Const object cũng có thể chỉnh sửa
