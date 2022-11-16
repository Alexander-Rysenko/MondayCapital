import React, { useState, useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DataProps } from '../types';

type MainProps = {
    data: DataProps;
};

const Main: React.FC<MainProps> = ({ data }): JSX.Element => {
    const [checkList, setCheckList] = useState<DataProps>(data);
    const [allChecked, setAllChecked] = useState<boolean>(false);
    const [mixedCheckbox, setMixedCheckbox] = useState<boolean>(false);
    const checkboxKeyList: string[] = Object.keys(checkList);

    useEffect((): void => {
        const checkboxesValues: boolean[] = Object.values(checkList);
        const allChecked: boolean = !checkboxesValues.some((item: boolean) => !item);
        const mixed: boolean = !checkboxesValues.every((item: boolean) => item === checkboxesValues[0]);

        setMixedCheckbox(mixed);
        setAllChecked(allChecked);
    }, [checkList]);

    const getContent = useMemo(() => {
        return checkboxKeyList.map((item: string): JSX.Element => (
            <FormControlLabel
                className="checkbox-item"
                control={
                    <Checkbox
                        checked={checkList[item]}
                        onChange={(e, state) => handleClick(state, item)}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                }
                label={item}
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
        checkboxKeyList.forEach((key): void => {
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
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={allChecked}
                            className={`${mixedCheckbox ? 'header-mixed-checkbox' : ''}`}
                            onChange={(e, state) => handleClickAll(state)}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    }
                    label="Asset Classes"
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
