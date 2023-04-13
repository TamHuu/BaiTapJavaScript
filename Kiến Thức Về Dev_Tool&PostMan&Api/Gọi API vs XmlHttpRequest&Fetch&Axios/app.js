/**
 *  XmlHttpRequest
 */

// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     const res = JSON.parse(this.responseText);
//     let html = "";
//     res.data.forEach((element) => {
//       html += `<div>${element.first_name} ${element.last_name}</div>`;
//     });
//     document.getElementById("result").innerHTML = html;
//   }
// };
// xhttp.open("GET", "https://reqres.in/api/users/2", true);
// xhttp.send();

/**
 * FetchApi
 */
// fetch("https://reqres.in/api/users/2")
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("Loi cmnr");
//     }
//   })
//   .then((res) => {
//     let html = "";
//     res.data.forEach((element) => {
//       html += `<div>${element.first_name} ${element.last_name}</div>`;
//     });
//     document.getElementById("result").innerHTML = html;
//     console.log("chinh thuc", res);
//   })
//   .catch((error) => {
//     console.log("Loi", error);
//   });

/**
 *  Axios
 */

// axios
//   .get("https://reqres.in/api/users/2") // method get
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.warn(error);
//   });

// Cách tạo instance axios để dùng lại nhiều lần
// const http = axios.create({
//   baseUrl: "https://reqres.in/api",
// });
// http
//   .get("/users/2")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Cách tạo interceptors nó là thằng trung gian giữa server và client

const http = axios.create({
  baseUrl: "https://reqres.in/api",
});
http.interceptor.request.use(
  (config) => {
    return config.data.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http
  .get("/users/2")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
