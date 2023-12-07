
import NavigationIcons from "./navigation-icons"
import ExploreNavbar from './icons/explore-navbar.svg'
import MessageNavbar from '../sidebar/icons/message-navbar.svg'
import HomeNavbar from '../sidebar/icons/Home-Fill.svg'
import BooksMarks from '../sidebar/icons/bookmarks-navbar.svg'
import ListsNabar from '../sidebar/icons/lists-navbar.svg'
import Profile from '../sidebar/icons/profile-navbar.svg'
import More from '../sidebar/icons/lists-navbar.svg'
import Notification from '../sidebar/icons/notification-icon.svg'
import TwitterLogo from '../sidebar/icons/Twiter-logo-navbar.svg'
import Button from "../button"

function LeftSideBarIcons() {

    return (
        <>
            <div className="sidebar">
                <div className="items">

                    <NavigationIcons urlIcon={TwitterLogo} />
                    <NavigationIcons content=" Home " urlIcon={HomeNavbar} navigateTo={"/"} />
                    <NavigationIcons content=" Message " urlIcon={MessageNavbar} />
                    <NavigationIcons content=" Explore " urlIcon={ExploreNavbar} />
                    <NavigationIcons content=" Notifications " urlIcon={Notification} />
                    <NavigationIcons content=" Booksmarks " urlIcon={BooksMarks} />
                    <NavigationIcons content=" Lists " urlIcon={ListsNabar} />
                    <NavigationIcons content=" Profile " urlIcon={Profile} navigateTo={"/profile"} />
                    <NavigationIcons content=" More... " urlIcon={More} />
                    <Button />
                </div>
            </div >
        </> 
    )
}

export default LeftSideBarIcons;