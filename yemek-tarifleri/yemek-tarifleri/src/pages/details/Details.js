import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import useFetch from '../../hooks/useFetch';
import './Details.css';

function Details() {
    const { btnColor } = useContext(ThemeContext);
    const { id } = useParams();
    const url = "http://localhost:3000/tarifler/" + id;

    const { data: tarif, isLoading, error } = useFetch(url);

    return (
        <div className='row mt-3'>
            {isLoading && <div className={`alert alert-${btnColor}`}>Yükleniyor...</div>}
            {
                tarif && (
                    <>
                        <div className='col-4'>
                            <img src={`/images/${tarif.resim}`} alt={tarif.baslik} className="img-fluid rounded" />
                        </div>
                        <div className='col-8'>
                            <h5>{tarif.baslik}</h5>
                            <p>{tarif.aciklama}</p>
                            <ul>
                                {
                                    tarif.malzemeler.map((malzeme, index) => (
                                        <li key={index}>{malzeme}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='col-12 mt-3'>
                            <p>{tarif.hazirlanisi}</p>
                            <a href={tarif.url} className={`btn btn-outline-${btnColor}`}>Tarifi İncele</a>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Details