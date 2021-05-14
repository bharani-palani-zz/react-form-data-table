import sampleData from "../mockData";

const menus = [
  {
    href: "/simpleDataTable",
    label: "Simple Data Table",
    data: sampleData.map(s => ({
      id: s.id,
      name: s.name,
      gender: s.gender,
      dob: s.dob
    }))
  },
  {
    href: "/longTable",
    label: "Long Table",
    data: sampleData.map(s => ({
      id: s.id,
      name: s.name,
      gender: s.gender,
      dob: s.dob,
      salary: s.salary,
      lastLogin: s.lastLogin
    }))
  },
  {
    href: "/aliasHeaders",
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
    href: "/paginationConfig",
    label: "Pagination Config",
    data: sampleData.map(s => ({
      id: s.id,
      name: s.name,
      gender: s.gender,
      dob: s.dob
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
    href: "/noPagination",
    label: "No Pagination / Search",
    data: sampleData.map(s => ({
      id: s.id,
      name: s.name,
      gender: s.gender,
      dob: s.dob
    })).filter((_,i) => i < 20),
    config: { footer: { pagination: {} } }
  }
];

export { menus };
