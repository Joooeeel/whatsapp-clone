import './msg.css'

export default ({ data }) => {
    return (
        <p className={`chat-msg ${!data.received && 'chat-sender'}`}>
            <span className="chat-name">{data.name}</span>

            {data.msg}

            <span className="chat-timestamp">{data.timestamp}</span>
        </p>
    )
}