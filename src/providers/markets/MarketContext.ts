import React from 'react'

interface State {
  user?:any
  config?:any
  changeUser:(user:any)=>void
  updateConfig:(config:any[])=>void
}
const MarketContext = React.createContext<State>({changeUser:()=>{},config:{}, updateConfig:()=>{}})
export default MarketContext
