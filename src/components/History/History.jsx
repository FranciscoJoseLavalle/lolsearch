import React from 'react'
import Participant from '../Participant/Participant'

const History = ({ history, userName }) => {
    return (
        <div className='history'>
            {history.map(el =>
                <div>
                    {
                        el.info.participants.map(participant => <Participant participant={participant} userName={userName} />)
                    }
                </div>
            )}
        </div>
    )
}

export default History