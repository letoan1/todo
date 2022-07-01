import './Items.scss';

import { useHistory, generatePath } from 'react-router-dom';

export default function ItemContent({ taskList, status }) {
    const history = useHistory();

    const taskFilters = taskList.filter((task) => task.status === status);
    const tasks = status ? taskFilters : taskList;

    const handleRedirectToEdit = (id) => {
        history.push(
            generatePath('/edit/:id', {
                id: id,
            }),
        );
        console.log(history);
    };

    return (
        <>
            {tasks && tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <div key={index} className="item-content" onClick={() => handleRedirectToEdit(task?.id)}>
                        <div className="about__task">
                            <h4>Title: {task?.title}</h4>
                            <p>Creator: {task?.creator}</p>
                            <p className="status">Status: {task?.status}</p>
                            <p>Posting date: {task?.createdAt}</p>
                        </div>
                        <div className="task__desc">
                            <h4>Description:</h4>
                            <p>{task?.description}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="empty__task">There are no tasks here !!!</p>
            )}
        </>
    );
}
