import { observer } from 'mobx-react'
import * as React from 'react'
import { IConnectOptions } from './connect'

export default function withMobx(model: any) {
  return ComposedComponent => {
    @observer
    class HOC extends React.Component<any, any> {
      public injectedProps: any = {}
      // private hasInited: boolean = false

      public componentWillReact() {
        console.log('will react')
      }

      public basePreRender() {
        const { obState, obComputed, boundAction } = model.obModel
        // ob state
        Object.keys(obState).forEach(prop => {
          /* tslint:disable */
          this.injectedProps[prop] = obState[prop]
        })

        // ob computed
        const obComputedSnap = obComputed.get()
        Object.keys(obComputedSnap).forEach(prop => {
          this.injectedProps[prop] = obComputedSnap[prop]
        })

        // ob actions
        // debugger
        Object.keys(boundAction).forEach(actionKey => {
          this.injectedProps[actionKey] = boundAction[actionKey]
        })
      }

      public render() {
        console.log('> render')
        this.basePreRender()
        console.log(this.injectedProps)
        return <ComposedComponent {...this.props} {...this.injectedProps} />
      }
    }
    return HOC
  }
}
