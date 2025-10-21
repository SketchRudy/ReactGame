export default function MaterialButton({ material, image, onClick }) {
    return (
      <button onClick={onClick}>
        <img src={image} alt={material} className="materialimg" />
      </button>
    );
  }