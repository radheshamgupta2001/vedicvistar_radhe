import { makeStyles } from "@mui/styles";

export default makeStyles((them) =>({
    moviesContainer : {
        display : 'flex',
        flexWrap : 'wrap',
        justifyContent : 'space-between',
        overflow : 'auto',
        [them.breakpoints.down('sm')]:{
            justifyContent:'center',
        }
    }
}));