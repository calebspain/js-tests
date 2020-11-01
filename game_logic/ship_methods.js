const checkForShip = (player, coordinates) => {
    let shipPresent = false

    for (const ship of player.ships) {
        shipPresent = ship.locations.filter(location => location[0] === coordinates[0] && location[1] === coordinates[1]).length > 0

        if (shipPresent) {
            return ship
        }
    }

    return false
}

const damageShip = (ship, coordinates) => {
    ship.damage.push(coordinates)
}

const fire = (player, coordinates) => {
    const ship = checkForShip(player, coordinates)

    if (ship) {
        damageShip(ship, coordinates)
    }
}

module.exports.checkForShip = checkForShip
module.exports.damageShip = damageShip
module.exports.fire = fire