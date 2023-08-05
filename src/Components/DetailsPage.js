import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const DetailsPage = () => {
  const { post } = useSelector((state) => state.detailsCard);
  const navigate=useNavigate();
  if (!post) return <h1>Loading...</h1>

  return (
    <div className='details-section'>
      <div >Details Page For Post With ID {post.id}</div>

      <div className="item details-items" >
        <img className='secion-1'  src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
        <div className='section-2'>
              <div>User ID : {post.userId}</div>
              <div>Title : {post.title}</div>
              <div>Body : {post.body}</div>
        </div>
      </div>
    </div>

  )
}

export default DetailsPage