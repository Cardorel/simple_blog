import Image from 'next/image';
import React , { useEffect } from 'react';
import PostItem from '../components/posts/PostArticle';
import { PostContainer } from '../components/posts/PostItem-styled-components';
import { fetchData } from '../features/app/api';
import { useAppDispatch, useAppSelector } from '../features/app/hooks';
import { getpostAction } from '../features/redux/post/actions';
import MyImageSrc from '../public/image-home.jpg'

function Home({posts} : any) { 
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector(state => state.allPosts)
  useEffect(() => {
    dispatch(getpostAction(posts))
  }, [dispatch , posts]);

  return (
     <div>
      <Image src={MyImageSrc} alt="Image-home" layout="responsive" objectFit="cover" quality={100} height={400}/>
        <PostContainer>
         <PostItem Posts={allPosts}/>
      </PostContainer>
     </div>
  )
}

export async function getStaticProps (){ 
  const posts = await fetchData("posts");
  return{
      props:{
          posts
      }
  }
}


export default Home;


