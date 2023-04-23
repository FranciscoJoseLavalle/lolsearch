import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import champs from '../../utilities/champs.json';
import './FreeChamps.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ModalContext } from '../../context/ModalContext';

const FreeChamps = () => {
    const { api_key } = useContext(ModalContext);
    const [freeChamps, setFreeChamps] = useState([]);
    const [champsID, setChampsID] = useState([])
    const [viewChamps, setViewChamps] = useState(false)
    let champsArray = Object.entries(champs.data);
    useEffect(() => {
        axios.get(`https://la2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${api_key}`)
            .then(res => {
                setFreeChamps(res.data.freeChampionIds)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        setChampsID([]);
        champsArray.forEach(el => {
            if (el[1].key == 222) {
                console.log(el[1].id);
            }
            freeChamps.forEach(element => {
                if (element == el[1].key) {
                    setChampsID(test => [...test, el[1].id])
                }
            })
        })
    }, [freeChamps])
    return (
        <div className='free'>
            <p>Rotación gratuita semanal</p>
            <button onClick={() => setViewChamps(!viewChamps)}>{viewChamps ? "Ocultar rotación" : "Ver rotación"}</button>
            {viewChamps
                && <div className='freechamps'>
                    {champsID.map((champ, i) =>
                        <LazyLoadImage
                            key={i}
                            src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/${champ}.png`}
                            alt={champ}
                            effect="blur"
                            width={40}
                            height={40}
                        />
                    )}
                </div>
            }

        </div>
    )
}

export default FreeChamps