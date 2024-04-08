import { Star } from "../Star/Star"
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

export const Stars = ({ count }) => {
  const validateCount = count > 5 || count < 1; 
  const countList = new Array(count).fill(0)

  return validateCount ? 'Рейтинг от 1 до 5 звёзд' : (
    <ul className="card-body-stars u-clearfix">
      {countList.map(() => (
        <li key={uuidv4()}><Star/></li>
      ))}
    </ul>
  )
}

Stars.propTypes = {
  count: PropTypes.number.isRequired
}
