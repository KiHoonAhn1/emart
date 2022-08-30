class ProductRepository {
  async getProducts() {
    const result = await fetch(
      'https://github.com/KiHoonAhn1/emart/blob/master/public/products.json',
      {
        method: 'GET',
      });
    return await result.json();
  }

  async getMenus() {
    const result = await fetch(
      'https://github.com/KiHoonAhn1/emart/blob/master/public/menus.json',
      {
        method: 'GET',
      });
    return await result.json();
  }
}

export default ProductRepository;