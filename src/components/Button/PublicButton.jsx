import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function PublicButton({ title }) {
    return (
        <Stack direction="row" spacing={2}>
            <Button type={'submit'} variant="contained">
                {title}
            </Button>
        </Stack>
    );
}
