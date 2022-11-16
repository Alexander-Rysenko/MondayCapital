import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Main from './Main'
import { DataProps } from './types';

import './app.scss';

const initialData: DataProps = {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
}

const App: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main data={initialData} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
