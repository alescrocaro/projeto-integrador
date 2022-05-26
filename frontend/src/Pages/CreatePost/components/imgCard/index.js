
import { Box,Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export function ImgCard ({id,imgName,handleOnDelete}) {
    return (
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            padding: 1
        }}>
            <Typography variant='body1'>
                {imgName}
            </Typography>

            <DeleteIcon onClick={() => {handleOnDelete(id)}}/>

        </Box>
    )
}