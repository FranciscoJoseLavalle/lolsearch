import './History.css';
import summoners from '../../utilities/summoners.json';
import { useContext, useEffect, useState } from 'react';
import HistoryMatch from '../HistoryMatch/HistoryMatch';
import { ModalContext } from '../../context/ModalContext';
import Loader from '../Loader/Loader';

const History = ({ user, findMatches }) => {
    const { history, historyLoading } = useContext(ModalContext);
    const [historyFilter, setHistoryFilter] = useState('todos');
    const [summonersID, setSummonersID] = useState([])
    let summonersArray = Object.entries(summoners.data);
    useEffect(() => {
        setSummonersID([]);
        summonersArray.forEach(el => {
            setSummonersID(test => [...test, { id: el[1].id, key: el[1].key }])
        })
    }, [])
    if (historyLoading) {
        return (
            <Loader />
        )
    }
    return (
        <div className='history'>
            <select onChange={(e) => {
                findMatches(user.puuid, e.target.value)
            }}>
                <option value="10">Cantidad de partidas</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
            <div className='history__filter'>
                <button onClick={() => setHistoryFilter('todos')}>Todos</button>
                <button onClick={() => setHistoryFilter(420)}>SoloQ</button>
                <button onClick={() => setHistoryFilter(440)}>Flex</button>
            </div>
            {history.map((el, i) => (
                <>
                    {historyFilter === 'todos'
                        && <HistoryMatch key={i} el={el} user={user} summonersID={summonersID} />}
                    {el.info.queueId === historyFilter && <HistoryMatch key={i} el={el} user={user} summonersID={summonersID} />}
                </>
            )
            )}
        </div>
    )
}

export default History