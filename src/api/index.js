const baseUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT";
const basePlayersUrl = `${baseUrl}/players`;

const getAllPlayers = async () => {
    let players = [];
    try {
        const response = await fetch(basePlayersUrl);
        const result = await response.json();
        players = result.data.players;
    } catch (err) {
        console.error(err);
    }
    return players;
};

const getPlayerById = async (playerId) => {
    let player = undefined;
    console.info(`getting data for playerid: ${playerId}`)
    try {
        const response = await fetch(`${basePlayersUrl}/${playerId}`);
        const result = await response.json();
        player = result.data.player;
    } catch (err) {
        console.error(err);
    }
    return player;
};

const addPlayer = async (player) => {
    try {
        const response = await fetch(`${basePlayersUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(player),
        });
        const result = await response.json();
        console.log(result);
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};
export { getAllPlayers, getPlayerById, addPlayer };
