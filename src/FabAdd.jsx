import './FabAdd.scss';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      black: {
        main: '#000',
      }
    }
  });

export default function FabAdd(props){
    
    return (
        <div className="FabAdd">
            <ThemeProvider theme={theme}>
                <Fab color="black" aria-label="add">
                    <AddIcon />
                </Fab>
            </ThemeProvider>
        </div>
    );
}