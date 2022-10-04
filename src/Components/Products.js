import { Link } from 'react-router-dom';
function Products() {
    return (
        <section>
            <h2>Products Page!</h2>
            <ul>
                <li><Link>A book</Link></li>
                <li><Link>A book</Link></li>

                <Link>Product 2</Link>
                <Link>Product 3</Link>
                <Link>Product 4</Link>
            </ul>
        </section>
    );
}

export default Products;