import {NavLink} from "react-router-dom";

function Trend({content,urlIcon,navigateTo}) {

    return (
        <div>
            <NavLink to={navigateTo}>
            <img src={urlIcon} alt="" />
            {content}
            </NavLink>
        </div>
    )
}

export default Trend;