import { useParams } from 'react-router-dom';

function ProductDetails() {
    const params = useParams();
    return <h2>Product details {params.id}</h2>
};

export default ProductDetails;