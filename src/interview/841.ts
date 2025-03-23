function canVisitAllRooms(rooms: number[][]): boolean {

    let visited = new Set();
    visited.add(0)
    let queu: number[] = [];
    queu.push(...rooms[0])

    while (queu.length > 0) {
        let room = queu.shift();
        if (!visited.has(room)) {
            visited.add(room)
            queu.push(...rooms[room!])
        }
    }

    return visited.size == rooms.length

};


console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]))