import React from "react";

function Entry(props) {
    return(
         <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.image}
            </span>
            <span>{props.heading} </span>
          </dt>
          <dd>
        {props.dis}
          </dd>
        </div>

    );
}

export default Entry;
