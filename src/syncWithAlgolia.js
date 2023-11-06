import algoliasearch from 'algoliasearch';
import axios from 'axios';

// Hardcoding keys for local development - NOT recommended for production
const client = algoliasearch('MXC1E9QBKG', '0c03543931ef72890e9de4c91c697d61');
const index = client.initIndex('dev_MINA');
const baseURL = 'https://kaas-test-1-90911d46768d.herokuapp.com/'; // Your server's base URL

export const syncWithAlgolia = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/api/products?populate=*`);
    const products = data.data;

    const records = products.map(product => {
        // Check if Product_Images and its data array are not null or undefined
                const imageUrl = product.attributes.Product_Images;
      
        return {
          objectID: product.id,
          name: product.attributes.Product_Name,
          description: product.attributes.Product_Desc,
          image: imageUrl || null,  // Use the full URL directly, no need to prepend baseURL
          price: product.attributes.Price,
          availability: product.attributes.Availability,
          // ... any other product attributes you need
        };
      });
      

    await index.saveObjects(records);
  } catch (error) {
    console.error('Error syncing with Algolia:', error);
  }
};
