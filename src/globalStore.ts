class GlobalStore {
  [namespace: string]: any

  public addNamespace = (namespace: string, state: any) => {
    if (!this.hasNamespace(namespace)) {
      this[namespace] = state
    } else {
      console.warn(`[mova]: ${namespace} is already exist, and it will be replaced by a new state`)
    }
  }

  private hasNamespace = namespace => {
    return Object.keys(this).indexOf(namespace) >= 0
  }
}

const gStore = new GlobalStore()
export { gStore, GlobalStore }
