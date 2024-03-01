import './NavItem.scss';
import { Link } from 'react-scroll';

function NavItem (props) {
    return (
        <li>
            <Link smooth spy to={props.id} onClick={props.handleClick}>
                <span>{props.text}</span>
            </Link>
            <div></div>
        </li>
    )
}

export default NavItem;