class ProductRepository {
  async getProducts() {
    const result = await fetch(
      './products.json',
      {
        method: 'GET',
      });
    return await result.json();
  }

  async getMenus() {
    const result = await fetch(
      './menus.json',
      {
        method: 'GET',
      });
    return await result.json();
  }
}

export default ProductRepository;