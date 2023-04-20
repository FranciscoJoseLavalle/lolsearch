import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Participant.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Participant = ({ participant, user, summonersID }) => {
    let items = [participant.item0, participant.item1, participant.item2, participant.item3, participant.item4, participant.item5, participant.item6]
    const [summoners, setSummoners] = useState([]);

    useEffect(() => {
        let array = [];
        summonersID.forEach(el => {
            if (el.key == participant.summoner1Id) {
                array.push(el.id);
            }
            if (el.key == participant.summoner2Id) {
                array.push(el.id);
            }
            setSummoners(array);
        })
    }, [summonersID])
    return (
        <div className='participant' style={{
            backgroundColor: participant.summonerName.toLowerCase() == user.name.toLowerCase() ? participant.win ? '#66c' : '#c66' : participant.win ? '#44a' : '#a44',

        }}>
            <div>
                <div className='participant__champ'>
                    <LazyLoadImage
                        src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/${participant.championName === "FiddleSticks" ? "Fiddlesticks" : participant.championName}.png`}
                        alt={participant.championName}
                        effect="blur"
                        width={45}
                        height={45}
                    />
                    <p>{participant.champLevel}</p>
                </div>
                <div className="participant__spells">
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
                <div className='participant__summoner'>
                    <p>{participant.summonerName}</p>
                    <small>Nivel {participant.summonerLevel}</small>
                </div>
                <p>{`${participant.kills}/${participant.deaths}/${participant.assists}`}</p>
            </div>
            <div className='participant__items'>
                {items.map((item, i) => item !== 0 && <Item key={i} itemName={item} />)}
            </div>
        </div>
    )
}

export default Participant