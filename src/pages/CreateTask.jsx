import PublicInput from '../components/Input/PublicInput';
import { INITIAL_VALUES } from './constant';

import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function CreateTask() {
    const dispatch = useDispatch();

    const history = useHistory();
    const methods = useForm({
        defaultValues: INITIAL_VALUES,
    });

    const onValid = (values, e) => {
        e.preventDefault();
        dispatch(addTodo(values));
        history.push('/');
    };

    return (
        <>
            <PublicInput methods={methods} onValid={onValid} />
        </>
    );
}
