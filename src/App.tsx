import BaseLayout from 'layouts/BaseLayout';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Character from 'views/Character';
import Main from 'views/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:id" element={<Character />} />
          </Routes>
        </BaseLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
