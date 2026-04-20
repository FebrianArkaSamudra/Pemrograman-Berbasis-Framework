import dynamic from "next/dynamic";
const ProdukView = dynamic(() => import("../../views/produk"), { ssr: false });

const ProductPage = () => <ProdukView />;

export default ProductPage;