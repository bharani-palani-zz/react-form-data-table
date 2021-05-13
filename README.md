## React Form Data Table
### Features
- Supports search string, records per page and pagination
- Dynamic form elements to manipulate and save your data
- UX available with light and dark theme
- Adaptable for tablet and mobile viewports
- Ajax put, post, update etc.. can be configured.
- Footer total with tailor made requirements
- Row based, element onChange event, to alter changes in row data, using dynamic form elements (text box)
- Dynamic form elements can be configured. (Default is label)
- Clone data to data table
- Show tooltip for configured elements
- While making changes in table, expect a callback of updated data
- Configure footer and pagination properties based on your requirement
- Add a custom class name to change the style as you wish

### A Demo is always awesome
[https://bharani.tech/react/react-form-data-table](https://bharani.tech/react/react-form-data-table)

### Usage
```html
<ReactFormDataTable
  data={[
    {id: 10000, name: "John", age: 21, salary: 50000},
    {id: 10003, name: "Travolta", age: 28, salary: 60000}
    ...
  ]}
/>
```

### Props
Property  | Type | Default | IsRequired | Sample
----------- | -------| -------- | ------------- | ---------
Table  | String | My table | No | Employee Table
TableRows  | Array  | [ ] | Yes | [id, name, age, salary]
TableAliasRows | Array | [ ] | Yes | [ID, Name, Age, Salary]
data | Array | [ ] | Yes | [{id: 10000, name: "John", age: 21, salary: 50000},{id: 10003, name: "Travolta", age: 28, salary: 60000}]
showTotal | Array | [ ] | No | [salary]
rowElements | Array | [ ] | No | [number, textbox, number, number] (Available form elements: number, textbox, textarea, checkbox, date, dateTime, fetch)
insertCloneData | Array | [ ] | No | [{id: 10002, name: "Woo", age: 31, salary: 70000}]
showTooltipFor | Array | [ ] | No | [name]
apiInstance | Object | | No |  { create: { baseURL: "", headers: {}, }, ajaxApiUrl: "", payloadKeyName: "payload", ajaxType: "post" }
ajaxButtonName | String | Submit | No | {any}
config | Object | { } | No | {"footer":{"total":{"locale":"en-IN","currency":"","maxDecimal":2,"doubleEntryBalanceStrings":{"zero":"Settled","plus":"Ahead","minus":"Bal"}},"pagination":{"currentPage":"first","recordsPerPage":10,"maxPagesToShow":5}}}
className | String |  | No | my-custom-table
defaultValues | Array | [ ] | No | [{ age: 21 }] (used only during adding rows in table)
cellWidth | String | 12rem | No | 20rem or 200px
theme | String | | No | light or dark

### [apiInstance](#api-ins)
#### We use [Axios](https://www.npmjs.com/package/axios) for xmlHttpRequest()

| Property | Type | Sample
| -- | -- | -- |
| baseURL | String | https://myapiservices.com |
| headers | Object | { Authorization: `{MySecretHashKey}` } |
| ajaxApiUrl | String | /V1/updateEmployeeInformation |
| payloadKeyName | String | `postData` `putData` `payload` etc.. |
| ajaxType | String | `put` `post` `update` etc.. |
| onAjaxCallBack | Function | (data) => showSnackBar(data) |

### Function Props
| Function name | Description
| ------------------ | -------------- |
| `onTableUpdate()` | Callback after table data is updated
| `onPostApi()` | Callback once Ajax call is done


