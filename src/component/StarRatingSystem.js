import React, { useState } from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const StarRatingSystem = () => {
    const [ratingValue, setRatingValue] = useState(0);
    const [hoverValue, setHoverValue]=useState(0);
    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <span 
                    key={star} 
                    onClick={() => setRatingValue(star)} 
                    onMouseEnter={() => setHoverValue(star)} 
                    onMouseLeave={() => setHoverValue(0)}
                    style={{ cursor: "pointer" }}
                >
                    {ratingValue >= star || hoverValue >= star ? (
                        <FaStar style={{ color: "gold", fontSize: "20px" }} />
                    ) : (
                        <FaRegStar style={{ fontSize: "20px" }} />
                    )}
                </span>
            ))}
        </div>
    )
}

export default StarRatingSystem