interface PopularCategory {
    items:{name: string;
    image: string;
    }[] }
function Card({ items}:PopularCategory) {
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 ">
    
      {items.map((image, index) => (
        
<div className="bg-white rounded-xl shadow-md overflow-hidden my-4" key={index}>
      <div className="flex flex-col ">
        <div className="">
          <img
            className="h-48 w-full object-cover "
            src={image.image}
            alt={image.name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {image.name}
          </div>
          
        </div>
      </div>
    </div>
        
      ))}
    </div>   
  );
}


export default Card;
