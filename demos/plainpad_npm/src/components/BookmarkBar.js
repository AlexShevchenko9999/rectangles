import React from 'react';
import { pass, R, C, T, startRectangles } from 'rectangles-npm'

function BookmarkBar(props) {

    return (
        <R l bb {...pass(props)} s={"30px"}>
            <BookmarkItem text = {"App Directory"}></BookmarkItem>
            <BookmarkItem text = {"Authentication Portal"}></BookmarkItem>
        </R>
    )

}

function BookmarkItem(props) {

    return (
        < C {...pass(props)} ha={"Center"} p={"0px 15px"} t h >
            <div>{props.text}</div>
        </C >
    )
}

export default BookmarkBar;
//export {BookmarkBar};