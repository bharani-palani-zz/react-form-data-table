## React Form Data Table
### Features
- Supports search string, records per page and pagination
- Dynamic form elements to manipulate and save your data
- UX available with light and dark theme
- Adaptive for tablet and mobile viewports
- Ajax put, post, update etc.. can be configured.
- Row element onChange event, to update changes in row data, using dynamic form elements
- Clone your custom data to data table
- Show tooltip for elements
- Configure Footer total with tailor made requirements
- Configure pagination as you wish
- Add a custom class name to change data table style. <br />*(Note:)*  This table is styled using display: grid with grid-template-columns

### A Demo is always awesome
[https://bharani-palani.github.io/react-form-data-table](https://bharani-palani.github.io/react-form-data-table)

### Usage
```html
<ReactFormDataTable
  data={[
    {id: 10000, name: "John", age: 21, salary: 50000},
    {id: 10003, name: "Woo", age: 28, salary: 60000}
    ...
  ]}
/>
```

### Props
Property  | Type | Default | Sample
----------- | -------| -------- | -------------
data | Array | [ ] | Refer Data Table
TableAliasRows | Array | [ ] | [ID, Name, Age, Salary]
showTotal | Array | [ ] | [salary]
rowElements | Array | [ ] | Refer rowElements table
insertCloneData | Array | [ ] | [{id: 10002, name: "Woo", age: 31, salary: 70000}]
showTooltipFor | Array | [ ] | [name]
apiInstance | Object | | Refer below table
defaultValues | Object | { } | {age: "21"}
config | Object | { } | Refer Config table
className | String |  | `my-custom-table`
defaultValues | Object | { } | { age: 21 } <br /> *Note:* value will be added to element during adding rows in table
cellWidth | String | `12rem` | 20rem or 200px
theme | String | light| `light` or `dark`
onTableUpdate() | function | | Callback after table form is updated
insertCloneData | Array | [ ] | Clone your custom data to the top of your table.<br />Refer Data Table

### Data Table

<pre>
[
  {
    "id": 10000,
    "name": "John",
    "age": 21,
    "salary": 50000
  },
  {
    "id": 10003,
    "name": "Woo",
    "age": 28,
    "salary": 60000
  }
  ...
]
</pre>

### Config sample
See [https://www.w3schools.com/jsref/jsref_tolocalestring.asp](https://www.w3schools.com/jsref/jsref_tolocalestring.asp) for locale, currency and maxDecimal settings

<pre>
{
  "footer": {
    "total": {
      "locale": "en-IN",
      "currency": "USD",
      "maxDecimal": 2,
      "doubleEntryBalanceStrings": {
        "zero": "Settled",
        "plus": "Ahead",
        "minus": "Behind"
      }
    },
    "pagination": {
      "currentPage": "first",
      "recordsPerPage": 10,
      "maxPagesToShow": 5
    }
  }
}
</pre>

**Note:**
- currency can be USD, INR etc..
- currentPage can be "first" or "last"

### rowElements
Value  | Render element | Type|  Description
----------- | -------| --- | -------- 
textbox | `<input />` | String |Text box to enter strings
number | `<input />` | String | Text box to enter numbers 
textarea | `<textarea />`| String | Text area to enter paragraphs 
checkbox | `<button />` | String | + and - buttons to add or remove. <br /> **Note:** Should always be in the first position in array of objects. See to that the values are unique to update values accordingly. Watch [Demo](https://bharani-palani.github.io/react-form-data-table)
radio | `<input type="radio" />` | Object | Refer radio sample below
multiChoice | `<PreDefined />`| Object | Refer multiChoice sample below
date | `<PreDefined />` | Object | Drop down date picker.<br /> Ex: `new Date()`
dateTime | `<PreDefined />`| Object | Drop down date and time picker.<br /> Ex: `new Date()`

### radio sample

<pre>
{
  "radio": {
    "radioList": [
      {
        "label": "Male",
        "value": "Male",
      },
      {
        "label": "Female",
        "value": "Female",
      }
    ]
  }
}
</pre>

### multiChoice sample

<pre>
{
  "multiChoice": {
    "dropDownList": [
      {
        "id": "Mobile",
        "value": "Mobile"
      },
      {
        "id": "Email",
        "value": "Email"
      },
      {
        "id": "Land line",
        "value": "Land line"
      }
    ]
  },
  "searchable": false
}
</pre>

**Note:**
- If value is string("Mobile"), single select drop down is rendered.
- If value is array(["Mobile", "Email"]), multi select select drop down is rendered.<br /> *Array can be empty.*
- "searchable" key is default to true, which helps to search values from the list. <br />To disable search functionality, you can set it to false. <br />*This feaure is only for multi select select drop.*

### [apiInstance](#api-ins)
#### We use [Axios](https://www.npmjs.com/package/axios) for xmlHttpRequest()

| Property | Type | Sample
| -- | -- | -- |
|Table  | String | EmployeeMySqlTable
| baseURL | String | https://myapiservices.com |
| headers | Object | { Authorization: `MySecretHashKey` } |
| ajaxApiUrl | String | /V1/updateEmployeeInformation |
| payloadKeyName | String | `postData` `putData` `payload` etc.. |
| ajaxType | String | `put` `post` `update` etc.. |
| onAjaxCallBack | Function | (data) => showMessage(data) |
| ajaxButtonName | String | `Save` |
| onReFetchData | Function <br />`Only success callback` | (data) => reRenderTableFromApi(data) |


