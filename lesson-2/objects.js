const payments = [
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe", // Name of the student
    payedAmount: 1600, // Amount payed with this transaction
    year: 2020, // The payment year
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021,
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022,
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1500,

    year: 2020,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023,
  },
];

// ex 1

// v1
// let maxPayment = payments[0].payedAmount;
// for (let i = 0; i < payments.length; i++) {
//   if (payments[i].payedAmount > maxPayment) {
//     maxPayment = payments[i].payedAmount;
//   }
// }

// console.log("maxPayment", maxPayment);

// // v2
// const paymentAmounts = payments.map((elemnt) => {
//   return elemnt.payedAmount;
// });
// const maxPayment2 = Math.max(...paymentAmounts);

// console.log("maxPayment2", maxPayment2);

// // v3
// const maxPayment3 = Math.max(...payments.map((elemnt) => elemnt.payedAmount));

// e3
const res = payments.filter((el) => el.payedAmount > 1400).length;
console.log(res);

let counter = 0;
for (let i = 0; i < payments.length; i++) {
  if (payments[i].payedAmount > 1400) {
    counter++;
  }
}
console.log(counter);
