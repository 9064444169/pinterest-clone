import React from 'react';

const Pin = ({pinSize,img,name,link}) => {
  return (
    <div className={`pin ${pinSize}`}>
      <img className='mainPic' src={img} alt="" />

      <div className="content">
        <h3>{name}</h3>

        <div className="search">
          <a href={link} target="_blank" rel='noreferrer'>
              <img src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/icons8-forward-arrow-100.png?alt=media&token=3f56e775-43c1-41d3-a0c4-90217b31b5be" alt="arrow"  />
         </a>
            </div>
      </div>
    </div>
  )
}

export default Pin;