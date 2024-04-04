import React from 'react';
import './review.css';


function ReviewClient() {
    return (
        <div className="review-container">
            <div className="review-content">
                <div className="review-1">
                    <h2 className="review-title">REVIEW CLIENT</h2> <br /><br /><br /><br />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil ipsa aut. In voluptate cum, corporis possimus obcaecati eveniet suscipit?sit amet consectetur.</p>
                </div>
            </div> <br /><br />
            <div className="review-content">
                <div className="review">
                    <img src="../src/assets/client1.jpg" alt="" />
                    <h3 className="review-subtitle">Diet Expert <br /> Ömer Faruk ŞEN</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil ipsa aut. In voluptate cum, corporis possimus obcaecati eveniet suscipit? ipsum dolor sit amet consectetur adipisicing elit. Dolor</p>
                </div>
                <div className="review">
                    <img src="../src/assets/client2.jpg" alt="" />
                    <h3 className="review-subtitle">Diet Expert <br /> Haticenur DINÇEL ŞEN</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil ipsa aut. In voluptate cum, corporis possimus obcaecati eveniet suscipit? ipsum dolor sit amet consectetur adipisicing elit. Dolor</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewClient;
