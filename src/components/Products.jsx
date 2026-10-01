import watches from "../data/watches";
import WatchCard from "./WatchCard";

function Products({ onAdd }) {
  return (
    <section className="products section" id="watches">
      <div className="section-heading">
        <div><p className="eyebrow">THE COLLECTION</p><h2>Watches made to be remembered.</h2></div>
        <p>From everyday elegance to statement pieces, discover the first VELORA collection.</p>
      </div>
      <div className="product-grid">
        {watches.map((watch) => <WatchCard key={watch.id} watch={watch} onAdd={onAdd} />)}
      </div>
    </section>
  );
}
export default Products;
