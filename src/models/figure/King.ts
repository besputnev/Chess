import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import blackLogo from "../../assests/black-king.png";
import whiteLogo from "../../assests/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    return true;
  }
}