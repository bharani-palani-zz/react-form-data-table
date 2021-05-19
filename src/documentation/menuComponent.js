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
      lastLogin: s.lastLogin
    })),
    aliasHeaders: ["Id", "Name", "Gender", "DOB", "Salary", "Last Login"]
  },
  {
    href: "/react-form-data-table/bigTable",
    label: "Big Table",
    data: sampleData.map(s => ({
      title: s.title,
      body: s.body,
      content: s.body,
      header: s.title,
      summary: s.body
    })),
    aliasHeaders: ["Title", "Body", "Conent", "Header", "Summary"]
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
    href: "/react-form-data-table/simpleAjaxTable",
    label: "Simple Ajax Form",
    data: sampleData
      .map(s => ({
        id: s.id,
        name: s.name,
        gender: s.gender,
        dob: s.dob,
        salary: s.salary,
        lastLogin: s.lastLogin
      }))
      .filter((_, i) => i < 5),
    config: {
      footer: { pagination: {} }
    },
    defaultValues: { gender: "Male" },
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
        headers: { Authorization: "1234AbCd" }
      },
      ajaxApiUrl: "/v1/updateEmployee",
      payloadKeyName: "postPayload",
      ajaxType: "put",
      ajaxButtonName: "Save"
    },
    onTableUpdate: () => {},
    onAjaxCallBack: () => {}
  },
  {
    href: "/react-form-data-table/bigAjaxForm",
    label: "Big Ajax Form",
    data: sampleData
      .map(s => ({
        id: s.id,
        title: s.title,
        body: s.body,
        name: s.name,
        dob: s.dob,
        salary: s.salary
      }))
      .filter((_, i) => i < 5),
    defaultValues: { gender: "Male" },
    config: {
      footer: { pagination: {} }
    },
    aliasHeaders: ["Id", "Title", "Body", "Name", "DOB", "Salary"],
    rowElements: [
      "checkbox",
      "textarea",
      "textarea",
      "textbox",
      "date",
      "number"
    ],
    apiInstance: {
      create: {
        baseURL: "https://example.com",
        headers: { Authorization: "1234AbCd" }
      },
      ajaxApiUrl: "/v1/updateEmployee",
      payloadKeyName: "postPayload",
      ajaxType: "put",
      ajaxButtonName: "Update"
    },
    onTableUpdate: () => {},
    onAjaxCallBack: () => {}
  },
  {
    href: "/react-form-data-table/AjaxFormWithPagination",
    label: "Ajax Form With Pagination",
    data: sampleData.map(s => ({
      id: s.id,
      name: s.name,
      gender: s.gender,
      dob: s.dob,
      salary: s.salary,
      lastLogin: s.lastLogin,
      contact: s.contact,
      transport: s.transport
    })).filter((_, i) => i < 20),
    defaultValues: { gender: "Male", transport: [] },
    config : {
      footer: {
        pagination: {
          currentPage: "last",
          recordsPerPage: 10,
          maxPagesToShow: 5
        }
      }
    },
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
      "dateTime",
      {
        multiChoice: {
          dropDownList:[
            { id: "Mobile", value: "Mobile" },
            { id: "Email", value: "Email" },
            { id: "Land line", value: "Land line" },
          ]
        },
        searchable: false
      },
      {
        multiChoice: {
          dropDownList:[
            { id: "Car", value: "Car", checked: false },
            { id: "Bike", value: "Bike", checked: false },
            { id: "Cab", value: "Cab", checked: false },
            { id: "Tube", value: "Tube", checked: false },
            { id: "Bus", value: "Bus", checked: false },
          ]
        }
      }
    ],
    apiInstance: {
      create: {
        baseURL: "https://example.com",
        headers: { Authorization: "1234AbCd" }
      },
      ajaxApiUrl: "/v1/updateEmployee",
      payloadKeyName: "postPayload",
      ajaxType: "put",
      ajaxButtonName: "Save"
    },
    onTableUpdate: () => {},
    onAjaxCallBack: () => {},
    onReFetchData: () => {}
  }
];

export { menus };
