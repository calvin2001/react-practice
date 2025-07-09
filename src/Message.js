function Message({ text }) {
    return (
        <p style={{ fontSize: '20px', color: 'blue'}}>
            메세지: {text}
        </p>
    );
}

export default Message;