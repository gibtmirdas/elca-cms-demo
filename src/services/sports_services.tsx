import Cls from "../models/cls";
import GameData, { GameCode } from "../models/game_data";

export async function sportServices() {
    const fetchData = () => {
        return fetch('https://sports-events-api.loro.ch/api/sports/event-of-the-day'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
                    'Access-Control-Allow-Headers': 'Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control',
                },
            }
        ).catch(async function (err) {
            return await fetch('data.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
                    'Access-Control-Allow-Headers': 'Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control',
                },
            });
        }).then(function (response) {
            return response.json();
        })
            .then(function (myJson) {
                console.debug('FETCH', myJson);
                var cls = (myJson['cls'] as Cls);
                return cls;
            });
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
            code: GameCode.FOOT,
            prices: prices,
        }

        return gameData;
    }
    var data = await fetchData();
    var truc = dataToGameData(data)
    return truc;
}