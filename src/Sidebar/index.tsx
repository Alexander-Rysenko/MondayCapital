import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import isEmpty from 'lodash.isempty';
import { DataProps, ObjectDataProps } from '../types';
import { NO_DATA_TEXT } from '../constants';

type ContentProps = {
    data: DataProps;
};

const Sidebar: React.FC<ContentProps> = ({data}): JSX.Element => {

    const getSidebarItems = (): JSX.Element => {
        const { see_results_about } = data;

        return see_results_about.map((item: ObjectDataProps) => {
            return (
                <ImageListItem key={item.image}>
                    <img
                        src={`${item.image}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.name}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.name}
                        position="top"
                    />
                </ImageListItem>
            )
        });
    };

    return (
        <div className="wrapper sidebar-wrapper">
            <h3 className="block-title">Sidebar</h3>
            <ImageList>
                {!isEmpty(data) ? getSidebarItems() : NO_DATA_TEXT}
            </ImageList>
        </div>
    );
};

export default Sidebar;
