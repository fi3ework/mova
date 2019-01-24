import { observer } from 'mobx-react'
import * as React from 'react'
import { IConnectOptions } from './connect'

export default function withMobx(model: any, mapModelProps: any) {
  return ComposedComponent => {
    @observer
    class HOC extends React.Component<any, any> {
      public injectedProps: any
      private hasInited: boolean = false

      private componentWillReact() {
        console.log('will react')
        // console.log(this.injectedProps)
        // React.Component.prototype.forceUpdate.call(this)
      }

      public basePreRender() {
        const propObj = mapModelProps(model)
        this.injectedProps = propObj
        Object.keys(propObj).forEach(prop => {
          /* tslint:disable */
          const _value = propObj[prop]
        })
      }

      public render() {
        console.log('will re-render')
        // if (!this.hasInited) {
        //   console.log('init render')
        this.basePreRender()
        // this.hasInited = true
        // }

        // TODO: add merge conflict in dev mode
        return <ComposedComponent {...this.props} {...this.injectedProps} />
      }
    }
    return HOC
  }
}
