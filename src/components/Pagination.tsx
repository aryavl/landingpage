
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface PageinationProps{
    page?:number;
    totalPage?:number;
    handleNextPage?:()=>void;
    handlePrevPage?:()=>void;
}

const Pagination = ({page,totalPage,handleNextPage,handlePrevPage}:PageinationProps) => {
     // Create a dash string based on the totalPage
  const dashString = "-".repeat(totalPage || 0);

  // Get the index of the current page dash
  const currentIndex = page ? page - 1 : 0;

  return (
    <>
      
        <h1>View All</h1>
        <div className={`px-1 py-1 rounded-md cursor-pointer ${currentIndex === dashString.length - 1 ? 'pointer-events-none' : ''}`} onClick={handleNextPage}>
          <ArrowForwardIcon className="  " />
        </div>
    
      </>
  )
}

export default Pagination