/**
 * Bất đồng bộ
 */

/**
 *Promise
 */

const pFunc = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 0);
  });

pFunc()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    //Vẫn sẽ chạy dù func có trả ra là resolve hoặc reject
    console.log("Kết thúc rồi");
  });

/**
 * Async / Await
 *
 * await chỉ sử dụng trong một async function
 * Chỉ sử dụng await với promise
 */

const p2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 0);
  });

//Cach 1
const handle = async () => {
  try {
    const value = await p2(); //p2() laf promise
    console.log(value);
  } catch (error) {
    console.warn(error);
  } finally {
    console.log("Finally");
  }
};

handle();

//Cach 2 hàm ẩn danh

(async () => {
  try {
    const value = await p2(); //p2() laf promise
    console.log(value);
  } catch (error) {
    console.warn(error);
  } finally {
    console.log("Finally");
  }
})();
