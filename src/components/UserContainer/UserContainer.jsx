import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ModalContext } from '../../context/ModalContext';
import ActualGame from '../ActualGame/ActualGame';
import History from '../History/History';
import Loader from '../Loader/Loader';
import User from '../User/User';

const UserContainer = () => {
    const { user, api_key, isPlaying, findMatches, matchInfo, searchPlayer } = useContext(ModalContext);
    const { userName, live } = useParams()
    useEffect(() => {
        searchPlayer(userName)
    }, [userName])
    return (
        <>
            <User user={user} api_key={api_key} isPlaying={isPlaying} live={live} />
            {live === 'live'
                ? <ActualGame matchInfo={matchInfo} />
                : <History user={user} findMatches={findMatches} />
            }
        </>
    )
}

export default UserContainer