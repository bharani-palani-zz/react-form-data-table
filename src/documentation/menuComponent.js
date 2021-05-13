import SimpleDataTable from "./tables/SimpleDataTable";
import LongTable from "./tables/LongTable";
import AliasHeaders from "./tables/AliasHeaders";
import NoPagination from "./tables/NoPagination";
const menus = [
  {
    href: "/simpleDataTable",
    label: "Simple Data Table",
    component: SimpleDataTable
  },
  {
    href: "/longTable",
    label: "Long Table",
    component: LongTable
  },
  {
    href: "/aliasHeaders",
    label: "Alias Headers",
    component: AliasHeaders
  },
  {
    href: "/noPagination",
    label: "No Pagination",
    component: NoPagination
  },

];

export { menus };
