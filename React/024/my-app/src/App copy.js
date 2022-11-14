import React, { useState } from 'react';

function Resume(props) {
    const [like, setLike] = useState(0); //초기값 0
    // let heart = like % 2 === 1 ? '❤️' : '';
    // let clap = like.toString().match(/3|6|9/g) ? '👏' : '';
    let clap = '';
    for (let i of String(like)) {
        if (i === '3') {
            clap = '👏';
        } else if (i === '6') {
            clap = '👏';
        } else if (i === '9') {
            clap = '👏';
        }
    }

    // React에서 이벤트 핸들러의 함수명 앞에 'handle'을 많이 붙임
    function handleClickLike() {
        // setLike(like + 1)
        // console.log(like);
        setLike(like + 1);
    }

    return (
        <div>
            <button onClick={handleClickLike}>like : {like}</button>
            <span>{clap ? clap : ''}</span>
        </div>
    );
}

function App() {
    return (
        <div>
            <Resume />
        </div>
    );
}

export default App;
