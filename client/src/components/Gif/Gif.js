import React from 'react';
import "../Gif/gif.css"

const Gif = (props) =>{
console.log(props);
return (<div id="gif">
    <img id="card-image" src={require(`../../images/${props.images}`)}/>
</div>
)


}

export default Gif;