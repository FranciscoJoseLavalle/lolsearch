import { useEffect } from 'react';
import Item from '../Item/Item';
import './Participant.css';

const Participant = ({ participant, user }) => {
    let items = [participant.item0, participant.item1, participant.item2, participant.item3, participant.item4, participant.item5, participant.item6]
    return (
        <div className='participant' style={{
            backgroundColor: participant.summonerName.toLowerCase() == user.name.toLowerCase() ? participant.win ? '#66c' : '#c66' : participant.win ? '#44a' : '#a44',

        }}>
            <div>
                <div className='participant__champ'>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/${participant.championName === "FiddleSticks" ? "Fiddlesticks" : participant.championName}.png`} alt={participant.championName} width={45} height={45} />
                    <p>{participant.champLevel}</p>
                </div>
                <div className="participant__spells">
                    <img src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/spell/SummonerFlash.png`} alt="Champion" width={25} height={25} />
                    <img src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/spell/SummonerTeleport.png`} alt="Champion" width={25} height={25} />
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