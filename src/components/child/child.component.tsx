import { Message } from '../../Types/product.type';

const Child = (props: Message) => {
    const { messages, onClickMessage } = props;
    const handleMessage = (message: string)  => {
        if (onClickMessage) {
            onClickMessage(message);
        }
    }

    return (
        <ul>
            {messages.length > 0 && messages.map((message: string, index) => {
                return (<p key={index} onClick={() => handleMessage(message)}>
                {message}
            </p>)               
            })}
        </ul>
    );
}

export default Child;