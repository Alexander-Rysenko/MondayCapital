import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import { apiSearch } from './api/apiSearch';
import Main from './Main'
import Simple from './Simple'
import { FormattedDataProps } from './types';

import './app.scss';

const App: React.FC = (): JSX.Element => {
    const [data, setData] = useState<FormattedDataProps | void | {}>({});

    const searchHandler = async (): Promise<void> => {
        const dataFromApi: FormattedDataProps | void = await apiSearch();

        setData(dataFromApi);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main searchHandler={searchHandler} data={data} />} />
                <Route path="/simple" element={<Simple />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
