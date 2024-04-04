
import { useEffect, useState } from "react";
import Card from "./Card";
import { getPopularCategories } from "../helper/fetcher";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
    interface PopularCategory {
    name: string;
    image: string;
    }

function Popular() {
    const [popularCategories, setPopularCategories] = useState<PopularCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPopularCategories();
        setPopularCategories(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching popular categories data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  
  return (
    <div className="container__style flex-col py-10">
        <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold  my-8">Popuplar Categories</h1>
<h1>View All <ArrowForwardOutlinedIcon/></h1>
      </div>
      {loading ? (<h1>Loading...</h1>):(<div className="">
        <Card items={popularCategories} />
      </div> )}
     
    </div>
  );
}

export default Popular;

