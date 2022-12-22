function sqaurePromise(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then((data) => {
        if (!isNaN(data)) {
          resolve(data * data);
        }
        reject(`Cannot convert '${data}' to a number!`);
      })
      .catch((err) => reject(err));
  });
}

function squarePromiseV2(p) {
  p.then((res) => {
    if (typeof res === "number" || typeof Number(res) === "number") {
      res(Math.pow(res, 2));
    }
    rej(`Cannot convert '${res}' to a number!`);
  }).catch((err) => {
    rej(err);
  });
}
