export default interface GameData {
    player1: string;
    player2: string;
    gameType: string;
    code: GameCode;
    time: Date;
    prices: (number | undefined)[];
}

export enum GameCode {
    FOOT, BASKET
}