import Cls from "../models/cls";
import DayEventData from "../models/day_event_data";
import GameData from "../models/game_data";
import useRequest, { IAxiosResponse } from "./axios_service";


export const GetEventOfDay = (): Promise<IAxiosResponse<DayEventData>> =>
    useRequest<DayEventData>(`sports/event-of-the-day`);

export async function sportServices() {
    const fetchData = () => {
        return GetEventOfDay().then(response => {
            return response.data
        })
    }

    const dataToGameData = (cls: Cls): GameData | null => {
        var pos0 = Object.values(cls.items).find(i => i.pos === 0)
        if (!pos0) {
            return null;
        }
        var prices = []

        var p0 = Object.values(cls.items).find(i => i.desc === pos0!.a)
        prices.push(parseFloat(p0?.price || "0"))
        var p1 = Object.values(cls.items).find(i => i.desc === 'X')
        prices.push(parseFloat(p1?.price || "0"))
        var p2 = Object.values(cls.items).find(i => i.desc === pos0!.b)
        prices.push(parseFloat(p2?.price || "0"))

        var gameData: GameData = {
            player1: pos0.a,
            player2: pos0.b,
            gameType: pos0.pdesc,
            time: new Date(pos0.startDateTime),
            code: pos0.code,
            prices: prices,
        }

        return gameData;
    }
    var data = await fetchData();
    var gameData = dataToGameData(data!.cls)
    return gameData;
}