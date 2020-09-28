import { data } from "../../../data";

export const Calculation = (
  origin: number,
  destiny: number,
  minutes: number,
  planType: string
) => {
  data.details.map((detail) => {
    let discountValue = 0;
    if (planType === "FaleMais 30") discountValue = 30;
    if (planType === "FaleMais 60") discountValue = 60;
    if (planType === "FaleMais 120") discountValue = 120;

    const originDDD = parseInt(detail.origin);
    const destinyDDD = parseInt(detail.destiny);

    if (originDDD === origin && destinyDDD === destiny) {
      const normalPrice = detail.pricePerMinute * minutes;
      let planPrice = minutes - discountValue;

      planPrice < 0 ? (planPrice = 0) : (planPrice = planPrice);
      let costPerMinute = detail.pricePerMinute * 1.1;

      planPrice *= costPerMinute;
      let fixedPrice = planPrice.toFixed(2);
      let resultData;
      return (resultData = {
        origin,
        destiny,
        minutes,
        planType,
        normalPrice,
        fixedPrice,
      });
    } else {
      return;
    }
  });
};
