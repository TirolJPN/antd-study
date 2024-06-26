import { AutoComplete } from "antd";

const options = [
  { value: 'Burns Bay Road' },
  { value: 'Downing Street' },
  { value: 'Wall Street' },
];

const MyAutoComplete = () => (
  <AutoComplete
    style={{ width: 200 }}
    options={options}
    placeholder="try to type `b`"
    filterOption={(inputValue, option) => 
      option!.value.toUpperCase().includes(inputValue.toUpperCase())
    }
  />
)

export default MyAutoComplete