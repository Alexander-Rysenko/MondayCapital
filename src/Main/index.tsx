import React, { useEffect } from 'react';
import Header from '../Header';
import Content from '../Content';
import Sidebar from '../Sidebar';
import { FormattedDataProps } from '../types';
import { useSearchParams, useNavigate, NavigateFunction } from 'react-router-dom';

type MainProps = {
    data: FormattedDataProps | void | {};
    searchHandler: () => void;
};

const Main: React.FC<MainProps> = ({ data, searchHandler }): JSX.Element => {
    const { knowledgeGraph, organicResults } = data as FormattedDataProps;
    const [searchParams] = useSearchParams();
    const navigate: NavigateFunction = useNavigate();


    useEffect((): void => {
        const getUrlParam: string | null = searchParams.get('template');

        if (getUrlParam === 'simple') {
            navigate('/simple');
        }
    }, [searchParams]);

    return (
        <>
            <Header searchHandler={searchHandler} />
            <div className="main-wrapper">
                <Content data={organicResults} />
                <Sidebar data={knowledgeGraph} />
            </div>
        </>
    );
};

export default Main;
