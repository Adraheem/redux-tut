import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import Post from "./Post";
import axios, {AxiosResponse} from "axios";
import {IPost} from "../types/post.type";
import {postActions} from "../redux/slices/postSlice";

interface IProps {
}

function Profile(props: IProps) {
  const {isLoading, post} = useAppSelector(state => state.postSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/10")
      .then((res: AxiosResponse<IPost>) => {
        dispatch(postActions.setPost(res.data));
      })
      .catch((err) => {
        console.log(err)
      })
  }, [dispatch]);

  if (isLoading || !post) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <Post post={post}/>
    </div>
  );
}

export default Profile;
