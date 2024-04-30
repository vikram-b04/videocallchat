import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Room } from './Room';
import { Videocall } from './Videocall';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Room></Room>}></Route>
        <Route path='/videocall/:roomID' element={<Videocall></Videocall>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
