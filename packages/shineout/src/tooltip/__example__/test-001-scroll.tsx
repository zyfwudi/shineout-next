/**
 * cn - 在 Scroll 中滚动会自动Tooltip更新位置
 *    -- Scroll 中滚动
 * en - 在 Scroll 中滚动会自动Tooltip更新位置
 *    -- Scroll 中滚动
 */
// import React from 'react'
// import { Table, Tooltip, TYPE } from 'shineout'
// import { fetchSync } from 'doc/data/user'
//
// interface TableRowData {
//   id: number
//   time: string
//   start: string
//   height: number
//   salary: number
//   office: string
//   country: string
//   office5: string
//   position: string
//   lastName: string
//   firstName: string
// }
// type TableColumnItem = TYPE.Table.ColumnItem<TableRowData>
//
// const data: TableRowData[] = fetchSync(20)
//
// const columns: TableColumnItem[] = [
//   { title: 'id', render: 'id', width: 50 },
//   {
//     title: 'First Name',
//     group: 'Name',
//     render: 'firstName',
//     width: 120,
//   },
//   {
//     title: 'Country',
//     render: d => (
//       <Tooltip tip="hello" trigger="click">
//         <span className="self-country">{d.country}</span>
//       </Tooltip>
//     ),
//   },
//   { title: 'Position', render: 'position' },
//   { title: 'Office', render: 'office' },
//   { title: 'Start Date', render: 'start' },
//   {
//     title: 'Salary',
//     fixed: 'right',
//     width: 100,
//     render: d => `$${d.salary.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}`,
//   },
// ]
//
// const App: React.FC = () => (
//   <Table bordered fixed="both" keygen="id" width={1500} style={{ height: 300 }} columns={columns} data={data} />
// )
//
// export default App
