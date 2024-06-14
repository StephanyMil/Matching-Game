import CardGame from "../../components/CardGame";

function BoardGame(amountCards) {
    const $htmlCardGame= CardGame();
    const $htmalBoardGame = $htmlCardGame.repeat(amountCards);

    console.log($htmalBoardGame);

    return $htmalBoardGame;
}

export default BoardGame;