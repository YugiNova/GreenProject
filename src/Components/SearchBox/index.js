const SearchBox = ({keyword, setKeyword}) => {

    const onSearch = (e) => {
        setKeyword(e.target.value)
    }
    
    return(
        <input value={keyword} onChange={onSearch} placeholder='name, email,...'/>
    )
}

export default SearchBox