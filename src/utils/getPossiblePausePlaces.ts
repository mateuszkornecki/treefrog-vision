import Direction from '../app/enums/Direction'
export default function getPossiblePausePlaces(currentPausePlaces: Direction[]): Direction[] {
    switch (currentPausePlaces.length) {
        case 0:
            return [Direction.Top, Direction.Right, Direction.Bottom, Direction.Left, Direction.Center]
        case 1:
            switch (currentPausePlaces[0]) {
                case Direction.Top:
                    return [Direction.Bottom, Direction.Center]
                case Direction.Right:
                    return [Direction.Left, Direction.Center]
                case  Direction.Bottom:
                    return [Direction.Center, Direction.Top]
                case Direction.Left:
                    return [Direction.Center, Direction.Right]
                case Direction.Center:
                    return [Direction.Top, Direction.Right, Direction.Bottom, Direction.Left]
            }
        case 2:
            switch (currentPausePlaces[1]) {
                case Direction.Top:
                    return []
                case Direction.Right:
                    return []
                case Direction.Bottom:
                    return []
                case Direction.Left:
                    return []
                case  Direction.Center:
                    //spr pos 0
                    switch (currentPausePlaces[0]) {
                        case Direction.Top:
                            return [Direction.Bottom]
                        case Direction.Right:
                            return [Direction.Left]
                        case Direction.Bottom:
                            return [Direction.Top]
                        case Direction.Left:
                            return [Direction.Right]
                        case Direction.Center:
                            return []
                    }
            }
    }
    return [Direction.Top, Direction.Top]
}