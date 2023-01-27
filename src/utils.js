export const moneyFormatter = (money, currency = "USD") => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  });
  return formatter.format(money);
};

export const getExpiresTimeInDays = (date) => {
  const ONE_DAY_MS = 86400000;
  const expTime = new Date(`${date}`).getTime();
  const currentTime = new Date().getTime();

  const timeDifference = expTime - currentTime;
  const getExpiresDay = timeDifference / ONE_DAY_MS;
  if (getExpiresDay <= 0) return false;
  return parseInt(timeDifference / ONE_DAY_MS);
};
