import React, {useState} from 'react'
import s from './Paginator.module.css'

const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))
  const leftPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPageNumber = portionNumber * portionSize

  return <div className={s.pagination}>
    <button onClick={() => setPortionNumber(portionNumber - 1)} disabled={(portionNumber <= 1)}>Prev</button>
    {
      pages
        .filter(el => el >= leftPageNumber && el <= rightPageNumber)
        .map(p => {
          return <span onClick={(e) => onPageChanged(p)}
                       className={s.page + ' ' + (currentPage === p && s.current)}
                       key={p}>{p}</span>
        })
    }
    <button onClick={() => setPortionNumber(portionNumber + 1)} disabled={(portionCount < portionNumber)}>Next</button>
  </div>
}

export default Paginator;