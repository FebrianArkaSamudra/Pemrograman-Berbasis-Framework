const MainSection = () => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-2">Produk 1</h2>
      <p className="mb-2">Deskripsi produk 1.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Beli</button>
    </div>
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-2">Produk 2</h2>
      <p className="mb-2">Deskripsi produk 2.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Beli</button>
    </div>
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-2">Produk 3</h2>
      <p className="mb-2">Deskripsi produk 3.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Beli</button>
    </div>
  </section>
);

export default MainSection;
