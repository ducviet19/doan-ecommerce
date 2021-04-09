import React, { useState } from 'react';
import ReplyComment from './ReplyComment';

function ButtonComment(props) {

    const [reply, setReply] = useState(false)
    return (
        <>
            <button onClick={() => {setReply(!reply)
            }}>Trả lời</button>
        {reply == true ? <ReplyComment  id={props.id} reply={reply} /> : ""}
         </>
        
    );
}

export default ButtonComment;