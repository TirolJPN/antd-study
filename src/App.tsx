import { Empty } from 'antd';
import CustomizeTheme from './CustomizeTheme';
import MyAutoComplete from './MyAutoComplete';
import MyDescriptions from './MyDescriptions';
import MyTable from './MyTable';
import MyTour from './MyTour';

const App = () => (
  <div className="App">
    <CustomizeTheme/>
    <MyAutoComplete />
    <MyDescriptions />
    <Empty/>
    <MyTable />
    <MyTour />
  </div>
);

export default App;