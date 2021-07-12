import { GetStaticPropsContext } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Image from 'next/image';
import { useEffect } from 'react';
import { connect} from 'react-redux';
import PostItem from '../components/posts/PostArticle';
import { PostContainer } from '../components/posts/PostItem-styled-components';
import { fetchData } from '../features/app/api';
import { getpostAction } from '../features/redux/post/actions';
import MyImageSrc from '../public/image-home.jpg'

function Home({Posts ,getPostsDispatch } : any) { 
  useEffect(() => {
    const getPost = async () =>{
      const res = await fetchData("posts");
      getPostsDispatch(res)
    }
    getPost()
  }, [getPostsDispatch]);

  return (
     <div>
      <Image src={MyImageSrc} alt="Image-home" layout="responsive" objectFit="cover" quality={100} height={400}/>
        <PostContainer>
         <PostItem Posts={Posts}/>
      </PostContainer>
     </div>
  )
}


const mapDispatchToProps = (dispatch : any) => {
  return {
    getPostsDispatch: (posts: any) => {
      dispatch(getpostAction(posts))
    }
  }
}

const mapStateToProps = (state : any) => {
  return {
    Posts: state.allPost
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Home);


