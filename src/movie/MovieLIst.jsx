import React from 'react';
import MovieItem from './MovieItem';

const MovieLIst = ({data, onDel,onEdit,changeInp}) => {
    return (
        <div className='MovieList'>
            <select onChange={changeInp} >
                <option value="">==정렬==</option>
                <option value="genre">장르</option>
                <option value="title">제목</option>
                <option value="character">주인공</option>
                <option value="release">개봉일</option>
            </select>
            <table>
                <caption></caption>
                <colgroup>
                    <col className='w1'/>
                    <col className='w2'/>
                    <col className='w3'/>
                    <col className='w4'/>
                    <col className='w5'/>
                </colgroup>
                <thead>
                    <tr>
                        <th>장르</th>
                        <th>제목</th>
                        <th>주인공</th>
                        <th>개봉일</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => <MovieItem key={item.id} item={item} onDel={onDel} onEdit={onEdit} />)}
                </tbody>
            </table>
        </div>
    );
};

export default MovieLIst;