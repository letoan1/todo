import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SearchButton() {
    return (
        <Stack
            spacing={2}
            direction="row"
            sx={{
                bgcolor: '#fff',
                borderRadius: '16px',
            }}
        >
            <Button
                variant="outlined"
                sx={{
                    color: '#000',
                    borderRadius: '16px',
                    border: '1px solid transparent',
                }}
            >
                Search
            </Button>
        </Stack>
    );
}
