import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faT, faUserAstronaut, faCalendar, faAudioDescription } from '@fortawesome/free-solid-svg-icons';
import { Controller } from 'react-hook-form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './Public.scss';
import '../../sass/Edit.scss';
import PublicButton from '../Button/PublicButton';
import { deleteTodo } from '../../redux/actions';

export default function PublicInput({ isEdit = false, methods, onValid }) {
    const editTask = useSelector((state) => state.tasks.taskDetail);
    const { control, handleSubmit, reset } = methods;
    const [selectStatus, setSelectStatus] = React.useState(editTask && editTask.status);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChangeStatus = (e) => {
        setSelectStatus(e.target.value);
    };

    console.log(selectStatus);

    const handleDeleteTask = (id) => {
        dispatch(deleteTodo(id));
        history.push('/');
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '55ch' },
            }}
            className="public-form"
            onSubmit={handleSubmit(onValid)}
        >
            <div className="form-group">
                <FontAwesomeIcon className="form-icon" icon={faT} />
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            label="Title"
                            value={editTask && editTask.title}
                            id="standard-size-normal"
                            variant="standard"
                            {...field}
                        />
                    )}
                />
            </div>
            <div className="form-group">
                <FontAwesomeIcon className="form-icon" icon={faUserAstronaut} />
                <Controller
                    name="creator"
                    control={control}
                    render={({ field }) => (
                        <TextField label="Creator" id="standard-size-normal" variant="standard" {...field} />
                    )}
                />
            </div>
            <div className="form-group">
                <FontAwesomeIcon className="form-icon" icon={faCalendar} />
                <Controller
                    name="createdAt"
                    control={control}
                    render={({ field }) => (
                        <TextField label="Create At" id="standard-size-normal" disabled variant="standard" {...field} />
                    )}
                />
            </div>
            <div className="form-group">
                <FontAwesomeIcon className="form-icon" icon={faAudioDescription} />
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                        <TextField label="Description" id="standard-size-normal" variant="standard" {...field} />
                    )}
                />
            </div>
            {isEdit && (
                <>
                    <div className="radio-group">
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={handleChangeStatus}
                                value={selectStatus}
                            >
                                <FormControlLabel value="New" control={<Radio />} label="New" />
                                <FormControlLabel value="Doing" control={<Radio />} label="Doing" />
                                <FormControlLabel value="Done" control={<Radio />} label="Done" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="btn-group">
                        <Button variant="contained" type={'submit'}>
                            Save
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => {
                                reset();
                            }}
                        >
                            Reset
                        </Button>
                        <Button variant="contained" onClick={() => handleDeleteTask(editTask.id)}>
                            Delete
                        </Button>
                    </div>
                </>
            )}
            {!isEdit && (
                <div className="btn-save">
                    <PublicButton title={'Save'} />
                </div>
            )}
        </Box>
    );
}
