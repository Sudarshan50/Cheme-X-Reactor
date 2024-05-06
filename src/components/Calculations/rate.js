export const rate = (kref, Ea, temp, Ca0, order, conv) => {
  let k = kref * Math.exp((-Ea / 8.314) * ((1 / 300) - (1 / temp)));
  let Ca = Ca0 * (1 - conv);
  let r = k * Math.pow(Ca, order);
  return r;
};
console.log(rate(0.01,1200,300,10/5,1,0.6))