import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import isEmpty from 'lodash.isempty';
import { DataProps, ObjectDataProps } from '../types';
import { NO_DATA_TEXT } from '../constants';

type ContentProps = {
    data: DataProps;
};

const Content: React.FC<ContentProps> = ({data}): JSX.Element => {
    const [itemList, setItemList] = useState<JSX.Element[]>([]);
    const [restItemList, setRestItemList] = useState<JSX.Element[]>([]);

    useEffect((): void => {
        if (isEmpty(data)) {
            return;
        }

        const [contentItems, restContentItems]: JSX.Element[][] = getContentItems();

        setItemList(contentItems);
        setRestItemList(restContentItems);
    }, [data]);

    useEffect((): void => {
        if (isEmpty(restItemList)) {
            return;
        }

        restItemList.forEach((item: JSX.Element) => {
            const randomTime: number = getRandomIntNumber();

            setTimeout(() => {
                setItemList((currList: JSX.Element[]): JSX.Element[] => [item, ...currList]);
            }, randomTime);
        });

    }, [restItemList]);

    const getRandomIntNumber = (): number => {
        const min: number = Math.ceil(1);
        const max: number = Math.floor(3);

        return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
    };

    const createContentItem = (itemData: ObjectDataProps, index: number): JSX.Element => {
        const {title, snippet} = itemData;

        return (
            <div key={`${title}${index}`}>
                <h4>{title}</h4>
                <p>{snippet}</p>
            </div>
        )
    };

    const getContentItems = (): JSX.Element[][] => {
        const dataItems: JSX.Element[] = [];
        const restDataItems: JSX.Element[] = [];
        const dataKeys: string[] = data && Object.keys(data);

        dataKeys.forEach((key: string, index: number) => {
            const item: DataProps = data[key];
            const element: JSX.Element = createContentItem(item, index);

            if (index < 5) {
                dataItems.push(element);
            } else {
                restDataItems.push(element);
            }
        });

        return [dataItems, restDataItems];
    };

    return (
        <div className="wrapper content-wrapper">
            <h3 className="block-title">Content</h3>
            <Box sx={{width: '100%'}}>
                <Stack spacing={2}>
                    {!isEmpty(itemList) ? itemList : NO_DATA_TEXT}
                </Stack>
            </Box>
        </div>
    );
};

export default Content;
