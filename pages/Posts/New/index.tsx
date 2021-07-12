import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { CreatePostBtn, CreatePostContainer, CreatePostForm, CreatePostInput } from '../../../components/newPost/create-poste-styled-components';
import { ErrorMessage } from '../../../components/postDetail/detail-styled-components';
import { useAppDispatch } from '../../../features/app/hooks';
import { createpostAction } from '../../../features/redux/post/actions';

export default function NewPost() {
    const[title , setTitle] = useState('');
    const[body , setBody] = useState('');
    const[errorMessage , setErrorMessage] = useState('');
    const dispatch = useAppDispatch();
    const router = useRouter();


    const handleSubmitPost = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(body.trim() != "" && title.trim() != "")
        {
          dispatch(createpostAction({
              title,
              body
          }))
          setTitle('');
          setBody('');
          setErrorMessage('')
          router.push('/');
        }else{
            setErrorMessage("No one of them can be empty, please try again!");
        }
    }
    return (
        <CreatePostContainer>
            <h2>Add New Post</h2>
            <CreatePostForm onSubmit={handleSubmitPost}>
                <label htmlFor="title">Title</label>
                <CreatePostInput onChange={(e) => setTitle(e.target.value)} value={title} type="text" id="title" />
                <label htmlFor="body">Boby</label>
                <CreatePostInput onChange={(e) => setBody(e.target.value)} value = {body} type="text" id="body"/>
                <ErrorMessage>{errorMessage}</ErrorMessage>
                <CreatePostBtn type="submit">Submit</CreatePostBtn>
            </CreatePostForm>
        </CreatePostContainer>
    )
}
