import React from 'react'

const Item = ({ itemName }) => {
    return (
        <img src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/item/${itemName}.png`} alt="item" width={45} height={45} />
    )
}

export default Item