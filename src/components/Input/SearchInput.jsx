import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { searchFilterChange } from '../../redux/actions';

export default function SearchInput() {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = React.useState('');

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
        dispatch(searchFilterChange(e.target.value));
    };

    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
                bgcolor: '#fff',
                borderRadius: '16px',
            }}
        >
            <TextField
                fullWidth
                label="Type something to search..."
                id="fullWidth"
                sx={{
                    color: '#000',
                }}
                value={searchText}
                onChange={handleSearchTextChange}
            />
        </Box>
    );
}
