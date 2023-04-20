import React from 'react'

// Material Ui Components 
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const Copyright = () => {
    return (
        <Typography variant='body2' color='GrayText' align='center'>
            {'Copyright (C)'}
            <Link color='inherit' href='https://github.com/stvnmc'>
                ISteven Marchena github 
            </Link>
            {''}
            {new Date().getFullYear()}
        </Typography>
    )
}

export default Copyright