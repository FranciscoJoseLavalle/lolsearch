import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Item = ({ itemName }) => {
    return (
        <LazyLoadImage
            src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/item/${itemName}.png`}
            alt={itemName}
            effect="blur"
            width={"1.65rem"}
            height={"1.65rem"}
        />
    )
}

export default Item