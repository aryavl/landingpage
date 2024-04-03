import SearchIcon from '@mui/icons-material/Search';
const MiddleNavbar = () => {
  return (
    <div className="container py-2 justify-between">
      <div className="dflex">
        <div className="w-[20px] cursor-pointer">
          <img src="/images/plant 1.png" alt="" className="w-[100%]" />
        </div>
        <a href="/" className=" hidden md:block">
          BankNotes
        </a>
      </div>
      <div>
        <div>

          <input type="text" className="border" />
          <button>Search</button>
        </div>
      </div>
      <div>
        <div>hdklskfl</div>
      </div>
    </div>
  );
};

export default MiddleNavbar;
