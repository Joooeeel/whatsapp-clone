import './msg.css'

export default ({ sender }) => {
    return (
        <p className={`chat-msg ${sender}`}>
            <span className="chat-name">Tiny</span>

            This is a message

            <span className="chat-timestamp">{new Date().toUTCString()}</span>
        </p>
    )
}