import React, { useState, useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { DataProps } from '../types';
import Checkbox from '@mui/material/Checkbox';

type MainProps = {
    data: DataProps;
};

const Main: React.FC<MainProps> = ({ data }): JSX.Element => {
    const [checkList, setCheckList] = useState<DataProps>(data);
    const [allChecked, setAllChecked] = useState<boolean>(false);
    const checkboxKeyList = Object.keys(checkList);

    useEffect((): void => {
        const checkboxesValues: boolean[] = Object.values(checkList);
        const allChecked: boolean = !checkboxesValues.some((item: boolean) => !item);

        setAllChecked(allChecked);
    }, [checkList]);

    const getContent = useMemo(() => {
        return checkboxKeyList.map((item: string): JSX.Element => (
            <Checkbox
                checked={checkList[item]}
                onChange={(e, state) => handleClick(state, item)}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        ));
    }, [checkList]);

    const handleClick = (state: boolean, item: string): void => {
        setCheckList({
            ...checkList,
            [item]: state,
        })
    };

    const handleClickAll = (state: boolean): void => {
        let data: DataProps = {};
        checkboxKeyList.map((key): void => {
            data = {
                ...data,
                [key]: state
            }
        });

        setAllChecked(state);
        setCheckList(data);
    };

    return (
        <div className="wrapper content-wrapper">
            <div className="block-header">
                <Checkbox
                    checked={allChecked}
                    onChange={(e, state) => handleClickAll(state)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </div>
            <Box sx={{width: '100%'}}>
                <Stack spacing={2} className="content-inner">
                    {getContent}
                </Stack>
            </Box>
        </div>
    );
};

export default Main;
