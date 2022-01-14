import React from 'react';
import { userSelector, useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
};

export default Posts;