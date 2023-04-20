import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import champs from '../../utilities/champs.json';
import "react-lazy-load-image-component/src/effects/blur.css";

const ActualGame = ({ matchInfo }) => {
    const [champsID, setChampsID] = useState([])
    let champsArray = Object.entries(champs.data);
    useEffect(() => {
        setChampsID([]);
        champsArray.forEach(el => {
            if (el[1].key == 222) {
                console.log(el[1].id);
            }
            matchInfo.participants.forEach(element => {
                if (element.championId == el[1].key) {
                    setChampsID(test => [...test, { name: el[1].id, key: el[1].key }])
                }
            })
        })
    }, [])
    return (
        <div>
            {matchInfo.gameMode === 'ARAM' && <p>Abismo de los lamentos 5v5</p>}
            {matchInfo.gameMode === 'CLASSIC' && <p>Grieta del Invocador 5v5</p>}
            {matchInfo.participants.map((participant, i) => (
                <div key={i}>
                    <LazyLoadImage
                        src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/profileicon/${participant.profileIconId}.png`}
                        alt={`${participant.summonerName} icon`}
                        effect="blur"
                        width={35}
                        height={35}
                    />
                    {champsID.map(champ => (
                        champ.key == participant.championId
                        && <LazyLoadImage
                            src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/${champ.name}.png`}
                            alt={champ.name}
                            effect="blur"
                            width={35}
                            height={35}
                        />
                    ))}
                    {participant.summonerName}
                </div>
            ))}
        </div>
    )
}

export default ActualGame