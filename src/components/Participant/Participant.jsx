import './Participant.css';

const Participant = ({ participant, userName }) => {
    return (
        <div className='participant' style={{
            backgroundColor: participant.win ? '#44a' : '#a44'
        }}>
            <p>
                {
                    participant.summonerName.toLowerCase() == userName.toLowerCase()
                        ? <b>{participant.summonerName}</b>
                        : <>{participant.summonerName}</>
                }
            </p>
            <small>Nivel: {participant.summonerLevel}</small>
            <p>{participant.championName}</p>
            <p>{participant.champLevel}</p>
            <p>{`${participant.kills}/${participant.deaths}/${participant.assists}`}</p>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/${participant.championName}.png`} alt="Champion" width={45} height={45} />
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/spell/SummonerFlash.png`} alt="Champion" width={45} height={45} />
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/spell/SummonerFlash.png`} alt="Champion" width={45} height={45} />
            <div className='participant__items'>
                <img src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/item/${participant.item0}.png`} alt="item" width={45} height={45} />
                <img src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/item/${participant.item1}.png`} alt="item" width={45} height={45} />
                <img src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/item/${participant.item2}.png`} alt="item" width={45} height={45} />
                <img src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/item/${participant.item3}.png`} alt="item" width={45} height={45} />
                <img src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/item/${participant.item4}.png`} alt="item" width={45} height={45} />
                <img src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/item/${participant.item5}.png`} alt="item" width={45} height={45} />
                <img src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/item/${participant.item6}.png`} alt="item" width={45} height={45} />
            </div>
        </div>
    )
}

export default Participant