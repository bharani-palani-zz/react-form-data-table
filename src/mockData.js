const simpleTable = {
  dbData: new Array(100).fill().map((_, i) => ({
    name: `John-${i + 1}`,
    dob: "1990-05-01",
    gender: "Male",
    salary: 100000
  }))
};

const longTable = {
  data: new Array(100).fill().map((_, i) => ({
    name: `John-${i + 1}`,
    dob: "1990-05-01",
    gender: "Male",
    salary: 100000,
    phone: "+91 44 12345678",
    city: "CHN",
    pinCode: "600001",
    state: "TN",
    country: "IN"
  }))
};
const aliasHeaders = {
  data: new Array(100).fill().map((_, i) => ({
    name: `John-${i + 1}`,
    dob: "1990-05-01",
    gender: "Male",
    salary: 100000
  }))
};
const noPagination = {
  data: new Array(10).fill().map((_, i) => ({
    name: `John-${i + 1}`,
    dob: "1990-05-01",
    gender: "Male",
    salary: 100000 + i
  }))
};
export { simpleTable, longTable, aliasHeaders, noPagination };
