"use strict";
const totalPrice = ({ price, discount, isInstallment, months, }) => {
    return isInstallment
        ? (price * ((100 - discount) / 100)) / months
        : `Некорректное значение ${months}`;
};
const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
console.log(price);
