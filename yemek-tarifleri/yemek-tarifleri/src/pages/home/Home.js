import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard';
import './Home.css';

function Home() {
    const [tarifler, setTarifler] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/tarifler")
            .then(res => res.json())
            .then(data => setTarifler(data))
    }, []);
    return (
        <div className="row mt-3">
            {
                tarifler && tarifler.map(tarif => (
                    <ProductCard key={tarif.id} tarif={tarif} />
                ))
            }
        </div>
    )
}

export default Home