import { action, makeAutoObservable } from 'mobx'
import RootStore from './RootStore'

export default class UserStore {
  session: string = ''
  root: RootStore
  constructor(rootStore: RootStore) {
    this.root = rootStore
    makeAutoObservable(this, {
      setSession: action,
    })
  }

  setSession(session: string) {
    this.session = session
  }
}
