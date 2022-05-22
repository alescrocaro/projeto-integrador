
import { Box,Typography, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { padding } from '@mui/system';

export function ImgCard ({imgName}) {
    return (
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            padding: 1
        }}>
            <Typography variant='body1'>
                {imgName}
            </Typography>

            <DeleteIcon />

        </Box>
    )
}