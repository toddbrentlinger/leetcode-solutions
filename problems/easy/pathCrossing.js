/**
 * @param {string} path
 * @return {boolean}
 * Runtime: 45ms (88.81%)
 * Memory: 41.94MB (73.13%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var isPathCrossing = function(path) {
    // Map of nodes visited where keys are x-coords and values are Set of y-coords visited
    // Initialized to have visited origin (0,0)
    let nodesVisited = new Map([
        [ 0, new Set([0]) ]
    ]);
    let x = 0, y = 0; // Coords on graph of ith visited node
    let yCoordsSet; // Reference to y-coords Set of x-coords in nodesVisited Map

    for (let i = 0; i < path.length; i++) {
        // Adjust (x,y) coords according to direction string
        switch (path[i]) {
            case 'N':
                y++;
                break;
            case 'S':
                y--;
                break;
            case 'W':
                x--;
                break;
            case 'E':
                x++;
                break;
            default:
        }

        // Check if coords have already been visited
        yCoordsSet = nodesVisited.get(x);
        // If x-coord has not yet been added to nodesVisited map, add new Set
        if (yCoordsSet === undefined) {
            nodesVisited.set(x, new Set([y]));
        }
        // Else x-coord has already been visited, check if also matching y-coor in Set 
        else {
            // If y-coord has also been visisted along x-coord, same point has been traversed
            if (yCoordsSet.has(y)) {
                return true;
            }

            // Add y-coord to x-coord set
            yCoordsSet.add(y);
        }
    }

    // If reach here, path has NO crossing
    return false;
};