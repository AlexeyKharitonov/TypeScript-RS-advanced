interface IDiscountedPrice {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: IDiscountedPrice): number | string => {
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

console.log(price); // 6250
