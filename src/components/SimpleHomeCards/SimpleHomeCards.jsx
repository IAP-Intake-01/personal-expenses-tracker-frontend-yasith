import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import ReviewsIcon from '@mui/icons-material/Reviews';
export default function SimpleHomeCards(){

    return(
        <div className={'flex justify-center pt-20 gap-12'}>
            <div className={'bg-gray-100 w-[15%] flex flex-col items-center p-5 gap-2 border rounded-xl'}>
                <VpnLockIcon sx={{fontSize:'45px',color:'#007DFC'}}/>
                <h2 className={'text-lg font-bold'}>100% Secured data</h2>
            </div>
            <div className={'bg-gray-100 w-[15%] flex flex-col items-center p-5 gap-2  border rounded-xl'}>
                <GroupsIcon sx={{fontSize:'45px',color:'#007DFC'}}/>
                <h2 className={'text-lg font-bold'}>1 million+ users</h2>
            </div>
            <div className={'bg-gray-100 w-[17%] flex flex-col items-center p-5 gap-2 border rounded-xl'}>
                <ReviewsIcon sx={{fontSize:'45px',color:'#007DFC'}}/>
                <h2 className={'text-lg font-bold'}>100k+ 5-Star Reviews </h2>
            </div>
            <div className={'bg-gray-100 w-[15%] flex flex-col items-center p-5 gap-2 border rounded-xl'}>
                <EmojiEventsIcon sx={{fontSize:'45px',color:'#007DFC'}}/>
                <h2 className={'text-lg font-bold '}>App of the day</h2>
            </div>
        </div>
    )
}