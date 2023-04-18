import './History.css';
import Participant from '../Participant/Participant'
import moment from 'moment';

const History = ({ history, user }) => {
    return (
        <div className='history'>
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
                    </div>
                    {
                        el.info.participants.map((participant, i) => <Participant key={i} participant={participant} user={user} />)
                    }
                </div>
            )}
        </div>
    )
}

export default History