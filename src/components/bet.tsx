import GameData from "../models/game_data";

interface BetProps {
    data: GameData | undefined
}

const Bet: React.FunctionComponent<BetProps> = ({ data }) => {
    var time = `${data?.time.getHours()}:${data?.time.getMinutes()}`
    return <div className="bet">
        <div className="bet__content">
            <div className="bet__title">
                EVENT OF THE DAY
            </div>
            <div className="bet__subtitle">⚽️&nbsp;&nbsp;{data?.gameType}
                <span className="bet__subtitle__carret">-</span>
                <span className="bet__subtitle__small">Aujourd'hui | {time}</span>
            </div>
            <div className="bet__contenders">
                {data?.player1} - {data?.player2}
            </div>
            <div className="bets">
                <div className="bets__box">
                    <div className="bets__quote">1</div>
                    <div className="bets__value">{twoDigitValue(data?.prices[0])}</div>
                </div>
                <div className="bets__box">
                    <div className="bets__quote">X</div>
                    <div className="bets__value">{twoDigitValue(data?.prices[1])}</div>
                </div>
                <div className="bets__box">
                    <div className="bets__quote">2</div>
                    <div className="bets__value">{twoDigitValue(data?.prices[2])}</div>
                </div>
            </div>
        </div>
    </div>
}

const twoDigitValue = (value: number | undefined): string => !value ? "0.00" : value.toFixed(2);

export default Bet;