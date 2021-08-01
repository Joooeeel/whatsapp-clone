import './chatsComponents.css'
import { Avatar } from '@material-ui/core'


export default () => {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat-info">
                <h2>Room name</h2>
                <p>Last message</p>
            </div>
        </div>

    )
}