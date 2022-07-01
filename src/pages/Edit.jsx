import PublicInput from '../components/Input/PublicInput';
import '../sass/Edit.scss';

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { INITIAL_VALUES } from './constant';
import { actGetTaskById, updateTodo } from '../redux/actions';

export default function Edit() {
    const { id } = useParams();
    const { taskDetail } = useSelector((state) => state.tasks);
    console.log(id, taskDetail);
    const history = useHistory();
    const dispatch = useDispatch();
    const methods = useForm({
        defaultValues: INITIAL_VALUES,
    });

    React.useEffect(() => {
        dispatch(actGetTaskById(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        if (!taskDetail) {
            history.push('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [taskDetail]);

    // const onValid = (id, values) => {
    //     dispatch(updateTodo(id, values));
    //     history.push('/');
    // };

    return (
        <>
            <PublicInput methods={methods} isEdit />
        </>
    );
}
