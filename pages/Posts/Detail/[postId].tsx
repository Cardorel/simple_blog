import React, { useEffect } from 'react'
import { currentpostAction } from '../../../features/redux/post/actions';
import CurrentPost from '../../../components/postDetail';
import Comment from '../../../components/comments/comments';
import { fetchData } from '../../../features/app/api';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';






function PostDetail({currentPost ,  currentPostDispatch} : any) {
    const router = useRouter();
    const { query = {} } = router || {};
    const { postId = 0 } = query || {};
    useEffect(() => {
        const getCurrentPostAsync = async () => {
           const res = postId && await fetchData("posts/" + postId + "?_embed=comments");
           postId && currentPostDispatch(res)
        }
        getCurrentPostAsync();
    }, [currentPostDispatch , postId , currentPost , fetchData]);

   
    return (
        <div>
            <CurrentPost Post={currentPost} />
            <Comment Post={currentPost} />
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

 export async function getStaticProps (ctx : any){
    const postId = ctx.params.postId;   
    const post = await fetchData("posts/" + postId + "?_embed=comments");
    return{
        props:{
            post
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
        currentPost: state.currentPost
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(PostDetail)
