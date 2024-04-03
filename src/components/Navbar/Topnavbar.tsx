import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Topnavbar = () => {
  return (
    <div className='container__style mt-[5px] justify-between items-center text-gray-500 text-[15px] '>
        <div className="flex gap-4">
            <a href="#">
            Eng 
            <KeyboardArrowDownIcon/>
            </a>
            <a href="#">
            USD
            <KeyboardArrowDownIcon/>

            </a>
        </div>

        <div className='border-l-[1px] pl-4'>
            Sign In / Sign Up
        </div>
    </div>
  )
}

export default Topnavbar