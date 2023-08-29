import React from 'react'
import SearchBar from '../../Shared/SearchBar'
function MainSearch() {
  return (
    <div>
    <SearchBar/>
    </div>
  )
}

export default React.memo(MainSearch)