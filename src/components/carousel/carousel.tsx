import { Carousel } from "react-responsive-carousel";
import GameData from "../../models/game_data";
import Bet from "../bet";

interface CarouselProps {
    data: GameData | undefined
}

const CarouselAnimated: React.FunctionComponent<CarouselProps> = ({ data }) => {
    return <Carousel
        transitionTime={2000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        interval={7000}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        swipeable={false}
        stopOnHover={false}
        animationHandler={'fade'}
    >
        <div>
            <Bet data={data} />
        </div>
        <div>
            <img src="assets/02.jpg" alt="assets/02" />
        </div>
    </Carousel>
}

export default CarouselAnimated