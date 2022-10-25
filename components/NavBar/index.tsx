import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import styles from './index.module.scss'

const NavBar = () => {
  return (
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
          Mercy Relief
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default NavBar
