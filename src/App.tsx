import { Empty } from 'antd';
import CustomizeTheme from './CustomizeTheme';
import MyAutoComplete from './MyAutoComplete';
import MyDescriptions from './MyDescriptions';

const App = () => (
  <div className="App">
    <CustomizeTheme/>
    <MyAutoComplete />
    <MyDescriptions />
    <Empty/>
  </div>
);

export default App;