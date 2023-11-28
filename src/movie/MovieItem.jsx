import React from 'react';

const MovieItem = ({item,onDel,onEdit}) => {
    const {id, genre, title, character, release} = item
    return (
        <tr>
            <td>{genre}</td>
            <td>{title}</td>
            <td>{character}</td>
            <td>{release}</td>
            <td>
                <button onClick={()=>{onEdit(id)}}>수정</button>
                <button onClick={()=>{onDel(id)}}>삭제</button>
            </td>
        </tr>
    );
};

export default MovieItem;