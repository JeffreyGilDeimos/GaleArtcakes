const toPhp = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PHP",
});

const mapTotal = (items) =>
  items.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

const calcTotal = (items) => {
  return toPhp.format(mapTotal(items));
};

export default {
  toPhp,
  calcTotal,
};
