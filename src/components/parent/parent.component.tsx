import Child from '../../components/child/child.component';

const Parent = () => {

    const messageList = ['A', 'B'];

    const actionList = (message:string) => {
        console.log(message);
    }

    return (
        <div>
            <Child messages={messageList} onClickMessage={actionList} />
        </div>
    );
}

export default Parent;
