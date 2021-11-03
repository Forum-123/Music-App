import React, { useState } from "react";

export const LikesCount = () => {
    const [likesCount, setLikesCount] = useState(0);
    const [liked, setLiked] = useState(false);

    function count() {
        setLiked((prevLiked) => !prevLiked)
        // Change this line
        if (liked) {
            decreaseCount()
        } else {
            increaseCount()
        }
    }

    function increaseCount() {
        setLikesCount((prevLikesCount) => prevLikesCount + 1);
    }

    function decreaseCount() {
        setLikesCount((prevLikesCount) => prevLikesCount - 1);
    }

    return (
        <div className="likeContainer">
            <button
                onClick={count}
                role="switch"
                style={{ backgroundColor: liked ? '#79B4B7' : '#9D9D9D' }}
            >Like!</button>
            <p id="likePhrase">Number of likes: <span role="figure" id="likes">{likesCount}</span></p>
        </div>
    )
}