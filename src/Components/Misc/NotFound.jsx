//Styles
import './NotFound.scss'
// Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFrown} from '@fortawesome/free-regular-svg-icons';

function NotFound(props) {
    return (
        <section className='not-found'>
            <h1>Page Not Found</h1>
            <FontAwesomeIcon className="not-found-icon" icon={faFrown} />
        </section>
    )
}

export default NotFound