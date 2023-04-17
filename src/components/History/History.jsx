import './History.css';
import Participant from '../Participant/Participant'
import moment from 'moment';

const History = ({ history, userName }) => {
    return (
        <div className='history'>
            {history.map(el =>
                <div>
                    {moment(el.info.gameEndTimestamp).fromNow()}
                    {
                        el.info.participants.map(participant => <Participant participant={participant} userName={userName} />)
                    }
                </div>
            )}
        </div>
    )
}

export default History