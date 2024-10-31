import './Navbar.css'
import logo from '../../assets/logo.svg'
import Button from '@mui/material/Button';

export default function Navbar(){
    return(
        <div className={'p-6 flex justify-between items-center border shadow-sm '}>
            <img src={logo} alt={''}/>
            <div className={'flex  gap-4'}>
                <Button sx={{fontSize:'0.75rem',backgroundColor: 'white',color:'black',fontWeight:'600',fontFamily: 'Poppins, sans-serif',width:111,height:35}} variant="contained">Dashboard</Button>
                <Button sx={{fontSize:'0.75rem',backgroundColor:'007DFC',fontFamily: 'Poppins, sans-serif',width:113,height:35}} variant="contained">Get Started</Button>
            </div>
        </div>
    )
}