import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import './ActualGameParticipant.css';
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from 'axios';
import UserLeague from '../UserLeague/UserLeague'

const ActualGameParticipant = ({ summonersID, participant, champsID }) => {
    const [summoners, setSummoners] = useState([]);
    const [leagues, setLeagues] = useState([]);
    const api_key = "RGAPI-ec83c821-6493-404d-84d2-5faca21df553"

    useEffect(() => {
        let array = [];
        summonersID.forEach(el => {
            if (el.key == participant.spell1Id) {
                array.push(el.id);
            }
            if (el.key == participant.spell2Id) {
                array.push(el.id);
            }
            setSummoners(array);
        })

        axios.get(`https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${participant.summonerId}?api_key=${api_key}`)
            .then(res => {
                setLeagues(res.data);
            })
    }, [summonersID])
    return (
        <div className='actualgame__participant' style={{
            background: participant.teamId == 100 ? "linear-gradient(145deg, #334, #226)" : "linear-gradient(145deg, #334, #622)"
        }}>
            {/* <LazyLoadImage
                src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/profileicon/${participant.profileIconId}.png`}
                alt={`${participant.summonerName} icon`}
                effect="blur"
                width={35}
                height={35}
            /> */}
            <div>
                {champsID.map((champ, i) => (
                    champ.key == participant.championId
                    && <LazyLoadImage
                        className='actualgame__participant-champ'
                        key={i}
                        src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/${champ.name}.png`}
                        alt={champ.name}
                        effect="blur"
                        width={50}
                        height={50}
                    />
                ))}
                <div className="actualgame__participant-spells">
                    <LazyLoadImage
                        src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/spell/${summoners[0]}.png`}
                        alt={summoners[0]}
                        effect="blur"
                        width={25}
                        height={25}
                    />
                    <LazyLoadImage
                        src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/spell/${summoners[1]}.png`}
                        alt={summoners[1]}
                        effect="blur"
                        width={25}
                        height={25}
                    />
                </div>
            </div>

            <div>
                {participant.summonerName}
                {leagues.map(league => (
                    league.queueType === "RANKED_SOLO_5x5"
                        ? <UserLeague league={league} text={"SoloQ"} />
                        : <UserLeague league={league} text={"Flex"} />
                ))}
            </div>
        </div>
    )
}

export default ActualGameParticipant