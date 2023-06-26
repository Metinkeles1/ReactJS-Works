import React from 'react'
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import './Home.css';

function Home() {

    const { data: tarifler, isLoading, error } = useFetch("http://localhost:3000/tarifler");

    return (
        <div className="row mt-3">
            {isLoading && <div className='alert alert-warning'>Yükleniyor...</div>}
            {error && <div className='alert alert-danger'>Hata</div>}
            {
                tarifler && tarifler.map(tarif => (
                    <ProductCard key={tarif.id} tarif={tarif} />
                ))
            }
        </div>
    )
}

export default Home