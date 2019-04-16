import { Action, ActionCreator, Reducer } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const ActionTypes = {
  CMPLR: 'COMPILER',
  FRMWRK: 'FRAMEWORK',
  BNDLR: 'BUNDLER'
};

//action interfaces inhert this default template that only contains a payload
export interface IAction extends Action {
  payload: {
    [key: string]: any;
  }
}

export interface setCompiler extends IAction {
  payload: {
    compiler: IState
  }

}