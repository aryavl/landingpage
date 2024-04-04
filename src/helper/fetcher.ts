const baseURL = 'https://fakestoreapi.com';

export const getPopularCategories = async () => {
  const response = await fetch(`${baseURL}/products/categories`);
  if (!response.ok) {
    throw new Error(`Failed to fetch categories. Status: ${response.status}`);
  }

  const categories = await response.json();
  const categoriesWithImages = [];

  // Fetch details for each category to get its image
  for (const category of categories) {
    const categoryResponse = await fetch(`${baseURL}/products/category/${category}`);
    if (!categoryResponse.ok) {
      throw new Error(`Failed to fetch category ${category}. Status: ${categoryResponse.status}`);
    }

    const categoryData = await categoryResponse.json();
    const categoryWithImage = {
      name: category,
      image: categoryData[0].image // Assuming the image is the same for all products in the category
    };

    categoriesWithImages.push(categoryWithImage);
  }

  return categoriesWithImages;
};

export const getSingleCategories= async(cat:string)=>{
    const response = await fetch(
        `${baseURL}/products/category/${cat}`
    );
    if (!response.ok) {
        throw new Error(
            `Failed to fetch categories. Status: ${response}`
        );
    }
    const data = await response.json();
    return data;
}
export const getSearchProducts= async()=>{
    const response = await fetch(
        `${baseURL}/products`
    );
    if (!response.ok) {
        throw new Error(
            `Failed to fetch categories. Status: ${response}`
        );
    }
    const data = await response.json();
    return data;
}