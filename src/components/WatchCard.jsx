function WatchCard({ watch, onAdd }) {
  return (
    <article className="watch-card">
      <div className="watch-image-wrap">
        <span className="watch-category">{watch.category}</span>
        <img src={watch.image} alt={watch.name} />
      </div>
      <div className="watch-info">
        <div>
          <h3>{watch.name}</h3>          
          <p>{watch.description}</p>
        </div>
        <div className="watch-bottom">
          <strong>₹{watch.price.toLocaleString("en-IN")}</strong>
          <button onClick={() => onAdd(watch)}>Add to Cart</button>
        </div>
      </div>
    </article>
  );
}
export default WatchCard;
