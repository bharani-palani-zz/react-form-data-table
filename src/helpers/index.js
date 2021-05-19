const helpers = {
  self: this,
  fluorescentColor: "#c2d82e",
  stringToCapitalize: string => {
    return string
      .split("_")
      .map(s => s.substring(0, 1).toUpperCase() + s.substring(1, s.length))
      .join(" ");
  },
  countryCurrencyLacSeperator: (locale, currency, value, maximumFractionDigits) => {
    return Number(value).toLocaleString(locale, {
      maximumFractionDigits,
      minimumFractionDigits: maximumFractionDigits,
      style: currency ? "currency" : "decimal",
      ...currency && {currency}
    });
  },
  leadingZeros: number => {
    let num = Number(number);
    return num < 10 ? `0${num}` : num;
  },
  getDateTime: (now) => {
    const leadingZeros = number => {
      let num = Number(number);
      return num < 10 ? `0${num}` : num;
    };
    const yyyy = now.getFullYear();
    const mmm = leadingZeros(now.getMonth() + 1);
    const dd = leadingZeros(now.getDate());
    const hh = leadingZeros(now.getHours());
    const mm = leadingZeros(now.getMinutes());
    const ss = leadingZeros(now.getSeconds());
    return `${yyyy}-${mmm}-${dd} ${hh}:${mm}:${ss}`;
  }
};

export default helpers;
