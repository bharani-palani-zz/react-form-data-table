## React Form Data Table
### Features
- Supports search string, records per page and pagination
- Dynamic form elements to manipulate and save your data
- UX available with light and dark theme
- Adaptive for tablet and mobile viewports
- Ajax put, post, update etc.. can be configured.
- Footer total with tailor made requirements
- Row based, element onChange event, to alter changes in row data, using dynamic form elements
- Dynamic form elements can be configured. <sup>*</sup>Default is label
- Clone data to data table
- Show tooltip for configured elements
- While making changes in table, expect a callback of updated data
- Configure footer and pagination properties based on your requirement
- Add a custom class name to change the style as you wish

### A Demo is always awesome
[https://bharani-palani.github.io/react-form-data-table](https://bharani-palani.github.io/react-form-data-table)

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
Table  | String | `My table` | No | Employee Table
TableAliasRows | Array | [ ] | Yes | [ID, Name, Age, Salary]
data | Array | [ ] | Yes | [{id: 10000, name: "John", age: 21, salary: 50000},{id: 10003, name: "Travolta", age: 28, salary: 60000}]
showTotal | Array | [ ] | No | [salary]
rowElements | Array | [ ] | No | `[textbox, number]` Refer below table |
insertCloneData | Array | [ ] | No | [{id: 10002, name: "Woo", age: 31, salary: 70000}]
showTooltipFor | Array | [ ] | No | [name]
apiInstance | Object | | No |  Refer below table
defaultValues | Object | { } | No | {age: "21"}
config | Object | { } | No | Refer below table
className | String |  | No | my-custom-table
defaultValues | Array | [ ] | No | [{ age: 21 }] *Note:* value will be added to element during adding rows in table
cellWidth | String | `12rem` | No | 20rem or 200px
theme | String | light| No | light or dark
onTableUpdate() | function | |No | Callback after table data is updated

### Config sample
[https://www.w3schools.com/jsref/jsref_tolocalestring.asp](https://www.w3schools.com/jsref/jsref_tolocalestring.asp)
<pre>
{
  "footer": {
    "total": {
      "locale": "en-IN",
      "currency": "",
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

### rowElements array value
Value  | Element | Type|  Description
----------- | -------| --- | -------- 
textbox | `<input />` | String |Add text box to enter strings
number | `<input />` | String |Add text box to enter numbers 
textarea | `<textarea />`| String | Add text area to enter paragraphs 
checkbox | `<button />` | String | + and - buttons to add or remove rows in table
radio | `<input type="radio" />` | Object | Radio for boolean option
multiChoice | `Custom component`| Object | To create a single select dropdown or multiple select dropdown *Note:* Should always be in the first position of array objects
date | `Custom component` | String | Drop down date picker
dateTime | `Custom component`| String | Drop down date and time picker

### radio sample

<pre>
{
	radio: {
		radioList: [
			{ label: "Male", value: "Male", checked: true },
			{ label: "Female", value: "Female", checked: false }
		]
	}
}
</pre>

### multiChoice sample

<pre>
{
	 multiChoice: {
		  dropDownList:[
			{ id: "Mobile", value: "Mobile" },
			{ id: "Email", value: "Email" },
			{ id: "Land line", value: "Land line" },
		  ]
	},
	searchable: false || true
}
</pre>

### [apiInstance](#api-ins)
#### We use [Axios](https://www.npmjs.com/package/axios) for xmlHttpRequest()

| Property | Type | Sample
| -- | -- | -- |
| baseURL | String | https://myapiservices.com |
| headers | Object | { Authorization: `MySecretHashKey` } |
| ajaxApiUrl | String | /V1/updateEmployeeInformation |
| payloadKeyName | String | `postData` `putData` `payload` etc.. |
| ajaxType | String | `put` `post` `update` etc.. |
| onAjaxCallBack | Function | (data) => showSnackBar(data) |
| ajaxButtonName | String | `Submit` |



