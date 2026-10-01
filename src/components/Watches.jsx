import watches from "../data/watches";
import WatchCard from "./WatchCard";

function Watches({ onAdd }) {
  return (
    <section className="products section" id="watches">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE COLLECTION</p>
          <h1>Explore every VELORA watch.</h1>
        </div>
        <p>Find the piece that fits your time, your style, and your story.</p>
      </div>
      <div className="product-grid">
        {watches.map((watch) => (
          <WatchCard key={watch.id} watch={watch} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

export default Watches;