
import NavigationIcons from "./navigation-icons"
import ExploreNavbar from './icons/explore-navbar.svg'
import MessageNavbar from '../sidebar/icons/message-navbar.svg'
import HomeNavbar from '../sidebar/icons/Home-Fill.svg'
import BooksMarks from '../sidebar/icons/bookmarks-navbar.svg'
import ListsNabar from '../sidebar/icons/lists-navbar.svg'
import Profile from '../sidebar/icons/profile-navbar.svg'
import More from '../sidebar/icons/lists-navbar.svg'


function LeftSideBar() {

    return (
        <>
            <NavigationIcons content=" Home " urlIcon={HomeNavbar} />
            <NavigationIcons content=" Message " urlIcon={MessageNavbar} />
            <NavigationIcons content=" Explore " urlIcon={ExploreNavbar} />
            <NavigationIcons content=" Explore " urlIcon={BooksMarks} />
            <NavigationIcons content=" Lists " urlIcon={ListsNabar} />
            <NavigationIcons content=" Profile " urlIcon={Profile} />
            <NavigationIcons content=" More... " urlIcon={More} />

        </>
    )
}

export default LeftSideBar;