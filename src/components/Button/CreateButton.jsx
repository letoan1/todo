import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function CreateButton() {
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
                <Link to="/create" style={{ textDecoration: 'none', color: '#000' }}>
                    Create New Task
                </Link>
            </Button>
        </Stack>
    );
}
