import React, { useEffect, useState } from 'react';
import { FormattedDataProps } from '../types';
import { apiSearch } from '../api/apiSearch';

const Simple: React.FC = (): JSX.Element => {
    const [title, setTitle] = useState<string>('');

    useEffect((): void => {
        const getData = async (): Promise<void> => {
            const dataFromApi: FormattedDataProps | void = await apiSearch();
            const titleFromData: string = dataFromApi && await dataFromApi.organicResults[0].title;

            setTitle(titleFromData);
        };

        getData();
    }, []);

    return (
        <div className="wrapper content-wrapper">
            <h3 className="block-title">{title}</h3>
            <p></p>
        </div>
    );
};

export default Simple;
