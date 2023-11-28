import React, { useEffect, useRef, useState } from 'react';
import MovieInput from './MovieInput';
import MovieLIst from './MovieLIst';
import './movie.scss'

const Movie = () => {
    const [data, setData] = useState([])
    const [movie, setMovie] = useState({
        genre:'' ,title:'' ,character: '' ,release: ''
    })
    const [isEdit, setIsEdit] = useState(false)
    const no = useRef(1)
    const genreRef = useRef()

    const changeInp = (e) => {
        const {name, value} = e.target
        setMovie({
            ...movie,
            [name] : value
        })
        setData([...data].sort((a,b)=>{return a[value]>b[value] ? 1 : -1}))
    }
    const {genre,title,character,release} = movie
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!genre || !title || !character || !release) return alert('항목을 다 채워주세요')
        if(isEdit){
            setData(data.map(item => item.id === movie.id ? movie : item))
            setIsEdit(false)
            setMovie({
                genre: '', title: '', character: '', release: ''
            })
        }else{
            movie.id = no.current++
            setData([...data,movie])
            setMovie({
                genre: '', title: '', character: '', release: ''
            })
            genreRef.current.focus()
        }
    }
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const onEdit = (id) => {
        setIsEdit(true)
        setMovie(data.find(item => item.id === id))
    }
    useEffect(()=>{
        genreRef.current.focus()
    },[isEdit])
    return (
        <>
            <div className='inner'>
                <h2>영화관리리스트</h2>
                <MovieInput  changeInp={changeInp} movie={movie} onSubmit={onSubmit} genreRef={genreRef} isEdit={isEdit} />
                <MovieLIst data={data} onDel={onDel} onEdit={onEdit} changeInp={changeInp} />
            </div>
        </>
    );
};

export default Movie;