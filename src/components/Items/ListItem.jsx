import './Items.scss';
import ItemContent from './ItemContent';

import { useSelector } from 'react-redux';
import * as React from 'react';

const tasksSelector = (state) => {
    const taskRemaining = state.tasks.tasks.filter((task) => {
        return task.title.includes(state.tasks.filters.search);
    });

    return taskRemaining;
};

const searchTextSelector = (state) => state.tasks.filters.search;

export default function ListItem({ status }) {
    const tasks = useSelector(tasksSelector);
    const searchText = useSelector(searchTextSelector);

    return (
        <>
            <div className="list-item">
                <ItemContent taskList={tasks} status={status} />
            </div>
        </>
    );
}
