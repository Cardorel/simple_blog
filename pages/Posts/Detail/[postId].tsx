import React, { useEffect } from 'react'
import {useRouter} from 'next/router';
import { connect } from 'react-redux';
import { currentpostAction } from '../../../features/redux/post/actions';
import CurrentPost from '../../../components/postDetail';
import Comment from '../../../components/comments/comments';
import { fetchData } from '../../../features/app/api';






function PostDetail({post ,  currentPostDispatch} : any) {
    const router = useRouter();
    const { query = {} } = router || {};
    const { postId = 0 } = query || {};
 
    useEffect(() => {
        const getCurrentPostAsync = async () => {
           const res = postId && await fetchData("posts/" + postId + "?_embed=comments");
           postId && currentPostDispatch(res)
        }
        getCurrentPostAsync();
    }, [currentPostDispatch , postId , post , fetchData]);

   
    return (
        <div>
            <CurrentPost Post={post} />
            <Comment Post={post}/>
        </div>
    )
}


export async function getStaticPaths (){
    const res = await fetchData("posts");
    const paths = res.map((res : any) =>{
        return{
            params : {
                postId : res.id.toString()
            }
        }
    })
    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps (){
    const posts = await fetchData("posts");
    return{
        props:{
            posts
        }
    }
}



const mapDispatchToProps = (dispatch : any) => {
    return {
        currentPostDispatch: (id : number) => {
            dispatch(currentpostAction(id))
        }
    }
}

const mapStateToProps = (state : any) => {
    return {
        post: state.currentPost
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(PostDetail)
