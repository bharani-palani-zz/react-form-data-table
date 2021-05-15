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
      salary: s.salary,
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
    label: "No Pagination / Search",
    data: sampleData.map(s => ({
      id: s.id,
      name: s.name,
      gender: s.gender,
      dob: s.dob,
      salary: s.salary,
    })).filter((_,i) => i < 20),
    config: { footer: { pagination: {} } }
  }
];

export { menus };
