import { observer } from 'mobx-react'
import withMobx from './withMobx'

/**
 * inject
 * - local 直接注入 model
 * - route 直接注入 model
 * - global 直接注入 model
 * inject
 */

export interface IConnectOptions {
  states: any
  actions: any
  willUnmount: (arg?: any) => any
  didMount: (arg?: any) => any
}

export interface IMapState {
  [propName: string]: any
}

export default (model: any, mapModelProps: any) => {
  return view => {
    return withMobx(model, mapModelProps)(view)
  }
}
