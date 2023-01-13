import './styles/App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Coba from './pages/Coba';
import Groups from './pages/Groups';

import {
  groups
} from './data/GroupsData';


export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/coba" element={<Coba />} />
      <Route path="*" element={<Home />} />
      {
        groups().map((group, index) => {
          return (
            <Route 
              key={index}
              // path={group.path}
              path={group.randstr + group.id + group.randstr}
              element={<Groups data={group}/>} 
            />
          )
        })
      }
      {/* <Route path="/groups" element={<Groups data={groups()}/>} /> */}
    </Routes>
  );
}
