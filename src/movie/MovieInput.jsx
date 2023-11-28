
const MovieInput = ({changeInp, movie,onSubmit,genreRef,isEdit,align}) => {
    const {genre, title, character, release} = movie
    return (
        <form className='MovieInput' onSubmit={onSubmit}>
            <p>
                <label htmlFor="genre">장르</label>
                <input type="text" name="genre" value={genre} onChange={changeInp} ref={genreRef} />
            </p>
            <p>
                <label htmlFor="title">제목</label>
                <input type="text" name="title" value={title} onChange={changeInp} />
            </p>
            <p>
                <label htmlFor="character">주인공</label>
                <input type="text" name="character" value={character} onChange={changeInp} />
            </p>
            <p>
                <label htmlFor="release">개봉일</label>
                <input type="text" name="release" value={release} onChange={changeInp} />
            </p>
            <p>
                <button type="submit">{isEdit ? "수정" : "입력"}</button>
            </p>
        </form>
    );
};

export default MovieInput;