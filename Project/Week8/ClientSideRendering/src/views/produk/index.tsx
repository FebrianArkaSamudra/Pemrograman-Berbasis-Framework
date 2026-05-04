type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      <h1>Daftar Produk</h1>
      {products.map((product: ProductType) => (
        <div key={product.id}>
          <h2>nama : {product.name}</h2>
          <p>Harga: {product.price}</p>
          <img src={product.image} alt={product.name} width={200} />
          <p>kategori: {product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default TampilanProduk;