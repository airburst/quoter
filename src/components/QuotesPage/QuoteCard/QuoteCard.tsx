import { ListWithIcon } from "../ListWithIcon/ListWithIcon";
import { QuoteActions } from "../QuoteActions";
import { Rating } from "../Rating";

export const QuoteCard = () => {
  return (
    <li>
      <div>
        <div>Promo banner</div>
        <header>
          {/* <img src="./partner-logo.png" /> */}
          <span>Cost</span>
        </header>
        <Rating />
        <ListWithIcon title="Included with this policy" icon="./tick.png" />
        <ListWithIcon
          title="Available to add to this policy"
          icon="./plus.png"
        />
        <QuoteActions />
      </div>
    </li>
  );
};
