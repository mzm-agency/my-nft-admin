import React from 'react'

interface State {
  user?:any
  changeUser:(user:any)=>void
}
const MarketContext = React.createContext<State>({changeUser:()=>{}})
export default MarketContext
