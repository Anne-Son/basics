import React from 'react'

const Book = (props) => {
    const {img, title, author} = props;
    //attribute, eventHandler
    //onClick, on MouseOver
    return (
     <article className='book'>
       <img src={img} alt="" />
       <h1>{title}</h1>
       <h4>{author}</h4>
     </article>
    );
};

export default Book;
