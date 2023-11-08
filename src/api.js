import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://kaas-test-1-90911d46768d.herokuapp.com/api/products?populate=*');
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
