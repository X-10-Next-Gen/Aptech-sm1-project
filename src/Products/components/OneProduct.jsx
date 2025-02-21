import { useParams } from "react-router-dom";
import styles from "./One.module.css";

const OneProduct = ({ cardData }) => {
    const { id } = useParams(); // Extracts the "id" parameter from the URL
    const product = cardData[parseInt(id, 10)]; // Convert id to number and get product


    // Function to handle button click
    const handleAddToCart = () => {
        alert("Added to cart successfully!");
    };

    return (
        <div className={styles.productContainer}>
            <img className={styles.productImage} src={product.imgSrc} alt={product.title} /> <br />
            <h2 className={styles.productTitle}>{product.title}</h2>
            <ul className={styles.productDescription}>
                {product.about.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>

            <button className={styles.customButton} onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default OneProduct;
