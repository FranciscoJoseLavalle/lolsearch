import './History.css';
import Participant from '../Participant/Participant'
import moment from 'moment';
import summoners from '../../utilities/summoners.json';
import { useEffect, useState } from 'react';

const History = ({ history, user, findMatches, setLoading }) => {
    const [summonersID, setSummonersID] = useState([])
    let summonersArray = Object.entries(summoners.data);
    useEffect(() => {
        setSummonersID([]);
        summonersArray.forEach(el => {
            setSummonersID(test => [...test, { id: el[1].id, key: el[1].key }])
        })
    }, [])
    return (
        <div className='history'>
            <select onChange={(e) => {
                findMatches(user.puuid, e.target.value)
                setLoading(true);
            }}>
                <option value="10">Cantidad de partidas</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
            {history.map((el, i) =>
                <div key={i}>
                    <div className='history__gameinfo'>
                        <p>
                            {el.info.gameMode === "CLASSIC"
                                && "Grieta del Invocador 5v5"}
                            {el.info.gameMode === "ARAM"
                                && "Abismo de los Lamentos 5v5"}
                        </p>
                        <small>{moment(el.info.gameEndTimestamp).fromNow()}</small>
                        <small>
                            {Math.trunc((el.info.gameDuration / 60))} minutos {el.info.gameDuration % 60} segundos
                        </small>
                    </div>
                    {
                        el.info.participants.map((participant, i) => <Participant key={i} participant={participant} user={user} summonersID={summonersID} />)
                    }
                </div>
            )}
        </div>
    )
}

export default History