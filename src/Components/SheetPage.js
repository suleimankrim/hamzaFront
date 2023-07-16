import React from 'react'
import Header from './header/Header'
import SearchBoxContainer from './SearchBoxContainer/SearchBoxContainer'
import { Table } from './Table/Table'

export const SheetPage = () => {
  return (
    <>
      <Header />
      <SearchBoxContainer />
                <Table/>

    </>
  )
}
export default SheetPage;