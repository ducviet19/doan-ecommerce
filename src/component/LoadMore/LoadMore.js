import React from 'react'
const LoadMore = ({
    onLoadMoreEvt = () => { },
}) => {
    return (
        <div className='d-flex'>
            <button className='btn btn-info m-auto' onClick={() => onLoadMoreEvt()}>
                Xem thêm
        </button>
        </div>

    );
};

export default LoadMore;