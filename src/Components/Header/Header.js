import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './Header.css';

const Header =()=>{
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <h4 className="Header_title">Leader Appreciation Tool</h4>
          </Typography>
          <Button color="inherit" sx={{ backgroundColor: "black" }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    )
}
export default Header;