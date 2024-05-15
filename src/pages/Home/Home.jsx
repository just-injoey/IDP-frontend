import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../header/Header';
import BlogPost from '../../posts/Posts';
import SideBar from '../../sideBar/SideBar';

const blogPosts = [
  {
    id: 1,
    title: "Example Blog Post 1",
    summary: "This is the summary of Example Blog Post 1.",
    date: "May 13, 2024",
    imageUrl: "https://example.com/image1.jpg"
  },
  {
    id: 2,
    title: "Example Blog Post 2",
    summary: "This is the summary of Example Blog Post 2.",
    date: "May 14, 2024",
    imageUrl: "https://example.com/image2.jpg"
  }
];

export default function Home() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/ngram-search');
  };

  return (
    <div className='home'>
      <Header />
      <div className='home-content'>
        {blogPosts.map(post => (
          <BlogPost 
            key={post.id} 
            id={post.id} 
            title={post.title} 
            summary={post.summary} 
            date={post.date} 
            imageUrl={post.imageUrl} 
          />
        ))}
        <SideBar />
        <button onClick={handleSearchClick}>Search Ngrams</button>
      </div>
    </div>
  );
}

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../../header/Header';
// import BlogPost from '../../posts/Posts';
// import SideBar from '../../sideBar/SideBar';

// const blogPosts = [
//   {
//     id: 1,
//     title: "Example Blog Post 1",
//     summary: "This is the summary of Example Blog Post 1.",
//     date: "May 13, 2024",
//     imageUrl: "https://example.com/image1.jpg"
//   },
//   {
//     id: 2,
//     title: "Example Blog Post 2",
//     summary: "This is the summary of Example Blog Post 2.",
//     date: "May 14, 2024",
//     imageUrl: "https://example.com/image2.jpg"
//   }
// ];

// export default function Home() {
//   const navigate = useNavigate();

//   const handleSearchClick = () => {
//     navigate('/ngram-search');
//   };

//   return (
//     <div className='home'>
//       <>
//         <Header />
//         <div className='home'>
//           {blogPosts.map(post => (
//             <BlogPost 
//               key={post.id} 
//               id={post.id} 
//               title={post.title} 
//               summary={post.summary} 
//               date={post.date} 
//               imageUrl={post.imageUrl} 
//             />
//           ))}
//           <SideBar />
//           <button onClick={handleSearchClick}>Search Ngrams</button>
//         </div>
//       </>
//     </div>
//   );
// }
