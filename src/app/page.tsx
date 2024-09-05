// "use client";
import React, { FC } from 'react';
import { fetchPosts } from '../lib/fetchPosts';
import ContactPage from './contact/page';

// any 

const Home: FC<{ params: { locale: string } }> = async ({ params }) => {
  const postsData = await fetchPosts(params.locale);
  console.log("aaaaa",postsData.data)

  // Veri formatını kontrol et
  const posts: any[] = Array.isArray(postsData) ? postsData : [];

  // React.useEffect(() => {
  //   console.log(posts);
  // }, []);

  return (
    <div>
      {postsData.data ? (
        postsData.data.map((post:any) => (
          
          <div key={post.id}>
            <h2>{post.attributes.title}</h2>
            {/* <p>{post.attributes.content[]}</p> */}
            {post.attributes.content.map((cont:any, index:number) => (
              <p key={index}>{cont.children[0].text}</p>
            ))}
    
    
    
    
    
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
      <ContactPage />
    </div>
  );
};

export default Home;
