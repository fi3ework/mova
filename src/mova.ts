// import * as warning from 'warning'
import * as invariant from 'invariant'
import * as React from 'react'
// import * as PropTypes from 'prop-types'
import { gStore } from './globalStore'
import { isObservable, observable, extendObservable, IObservable, computed, IComputed, IComputedValue } from 'mobx'
import * as withMobx from './withMobx'

/**
 * 状态的生命周期种类
 * - 全局
 * - 随组件
 * - 随路由（自定义路由 comparer 决定销毁）
 *
 * 状态的创建
 * - 钩子函数（注册到全局 model 中）
 *
 * 状态的销毁
 * - 钩子函数（注册到全局 model 中）
 *
 * 全局状态
 * - 全局状态之间的通信
 * - 全局状态的状态释放
 * - 命名空间管理
 *
 * 局部状态
 * - 局部状态注册为全局状态
 *
 * 局部状态 <-> 全局状态
 * - 局部状态注册为全局的状态
 */

type movaType = 'local' | 'route' | 'global' | 'custom'

interface IModel {
  state: any
  computed?: any
  autorun?: any
  when?: any
  reaction?: any
}

interface IObservableModel {
  obState: IObservable
  obComputed: IComputedValue<any>
  // obAutorun?: any
  // obWhen?: any
  // obReaction?: any
}

class Mova {
  public model: IModel
  public obModel!: IObservableModel

  constructor(model) {
    this.model = model
    const obState = this.makeStateObservable(this.model.state)
    const obComputed = this.makeComputed(obState)
    this.obModel = { obState, obComputed }
  }

  // public model = (options: IModel) => {
  //   this.model =
  // const { type, namespace, state } = options
  // TODO: better code needed
  // if (['global', 'route', 'local'].indexOf(type) < 0) {
  //   throw Error(`[mova]: not invalid state type, type only support 'global', 'route' and 'local'`)
  // }
  // switch (type) {
  //   case 'global':
  //     invariant(namespace, `[mova]: not invalid state type, type only support 'global', 'route' and 'local'`)
  //     this.addToGlobalState(namespace!, state)
  //     break
  //   case 'route':
  //     this.initRouteState(state)
  //   case 'local':
  //     this.initLocalState(state)
  //     break
  // }
  // return this
  // }

  public makeStateObservable = oriState => {
    return observable.object(oriState)
  }

  public makeComputed = (obState: IObservable) => {
    return computed(() => {
      return this.model.computed(obState)
    })
  }

  // public makeStateObservable = state => {
  //   Object.keys(state).forEach(key => {
  //     const observableValue = this.makeStatePropsObservable(key, state[key])
  //   })
  // }

  // public makeStatePropsObservable = (key: string, value: any) => {
  //   if (isObservable(value)) {
  //     return value
  //   } else {
  //     return observable(value)
  //   }
  // }

  // private addToGlobalState = (namespace: string, state: any) => {
  //   gStore.addNamespace(namespace, state)
  // }

  // private initRouteState = (state: any) => {}

  // private initLocalState = (state: any) => {
  //   this._state = state
  // }
}

export default Mova
