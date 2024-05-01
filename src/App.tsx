import { Empty } from 'antd';
import CustomizeTheme from './CustomizeTheme';
import MyAutoComplete from './MyAutoComplete';
import MyDescriptions from './MyDescriptions';
import MyTable from './MyTable';

const App = () => (
  <div className="App">
    <CustomizeTheme/>
    <MyAutoComplete />
    <MyDescriptions />
    <Empty/>
    <MyTable />
  </div>
);

export default App;