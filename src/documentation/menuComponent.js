import sampleData from "../mockData";

const menus = [
  {
    href: "/react-form-data-table/simpleDataTable",
    label: "Simple Data Table",
    data: sampleData.map(s => ({
      id: s.id,
      name: s.name,
      gender: s.gender,
      dob: s.dob,
      salary: s.salary
    }))
  },
  {
    href: "/react-form-data-table/longTable",
    label: "Long Table",
    data: sampleData.map(s => ({
      id: s.id,
      name: s.name,
      gender: s.gender,
      dob: s.dob,
      salary: s.salary,
      lastLogin: s.lastLogin,
      userId: s.userId
    }))
  },
  {
    href: "/react-form-data-table/aliasHeaders",
    label: "Alias Headers",
    data: sampleData.map(s => ({
      id: s.id,
      name: s.name,
      gender: s.gender,
      dob: s.dob,
      salary: s.salary,
      lastLogin: s.lastLogin,
      title: s.title,
      body: s.body
    })),
    aliasHeaders: [
      "Id",
      "Name",
      "Gender",
      "DOB",
      "Salary",
      "Last Login",
      "Title",
      "Body"
    ]
  },
  {
    href: "/react-form-data-table/paginationConfig",
    label: "Pagination Config",
    data: sampleData.map(s => ({
      id: s.id,
      name: s.name,
      gender: s.gender,
      dob: s.dob,
      salary: s.salary
    })),
    config: {
      footer: {
        pagination: {
          currentPage: "last",
          recordsPerPage: 5,
          maxPagesToShow: 3
        }
      }
    }
  },
  {
    href: "/react-form-data-table/noPagination",
    label: "Disable Pagination & Search",
    data: sampleData
      .map(s => ({
        id: s.id,
        name: s.name,
        gender: s.gender,
        dob: s.dob,
        salary: s.salary
      }))
      .filter((_, i) => i < 20),
    config: { footer: { pagination: {} } }
  },
  {
    href: "/react-form-data-table/toolTip",
    label: "Tooltip",
    data: sampleData.map(s => ({
      id: s.id,
      name: s.name,
      gender: s.gender,
      dob: s.dob,
      salary: s.salary
    })),
    showTooltipFor: ["name", "salary"]
  },
  {
    href: "/react-form-data-table/footerTotal",
    label: "Footer Total",
    data: sampleData.map(s => ({
      id: s.id,
      name: s.name,
      gender: s.gender,
      dob: s.dob,
      salary: s.salary
    })),
    showTotal: ["salary"],
    config: {
      footer: {
        total: {
          locale: "en-IN",
          currency: "USD",
          maxDecimal: 2
        },
        pagination: {
          currentPage: "first",
          recordsPerPage: 10,
          maxPagesToShow: 5
        }
      }
    }
  },
  {
    href: "/react-form-data-table/footerTotalOnCondition",
    label: "Footer Total on Condition",
    data: sampleData.map(s => ({
      id: s.id,
      name: s.name,
      gender: s.gender,
      dob: s.dob,
      salary: s.salary
    })),
    showTotal: [
      {
        whichKey: "salary",
        forKey: "gender",
        forCondition: "equals", // includes or equals
        forValue: ["Male", "Female"],
        showDifference: { indexes: [0, 1], showStability: true }
      }
    ],
    config: {
      footer: {
        total: {
          locale: "en-IN",
          currency: "",
          maxDecimal: 2,
          doubleEntryBalanceStrings: {
            zero: "Settled",
            plus: "Ahead",
            minus: "Bal"
          }
        },
        pagination: {
          currentPage: "first",
          recordsPerPage: 10,
          maxPagesToShow: 5
        }
      }
    }
  },
  {
    href: "/react-form-data-table/ajaxTable",
    label: "Ajax",
    data: sampleData.map(s => ({
      id: s.id,
      name: s.name,
      gender: s.gender,
      dob: s.dob,
      salary: s.salary,
      lastLogin: s.lastLogin
    })).filter((_, i) => i < 5),
    showTotal: ["salary"],
    defaultValues: [{ gender: "Male" }],
    aliasHeaders: ["Id", "Name", "Gender", "DOB", "Salary", "Last login"],
    rowElements: [
      "checkbox",
      "textbox",
      {
        radio: {
          radioList: [
            { label: "Male", value: "Male", checked: true },
            { label: "Female", value: "Female", checked: false }
          ]
        }
      },
      "date",
      "number",
      "dateTime"
    ],
    apiInstance: {
      create: {
        baseURL: "https://example.com",
        headers: {Authorization: "1234AbCd"}
      },
      ajaxApiUrl: "/v1/updateEmployee",
      payloadKeyName: "postPayload",
      ajaxType: "put"
    },
    onTableUpdate: () => {}
  }
];

export { menus };
