import { Action } from 'redux';
import { ActionTypes } from '../actions/actions';
import { createStore } from 'redux';

/**@Note reducers are the most important concept in redux 
 * the onl manditory parameter of the createStore method is a reducer*/ 
export const store = createStore(/*reducer*/).getState();


export interface IState {
  compiler: string;
  framework: string;
  bundler: string;
}

const initialState: IState = {
  compiler: ActionTypes.CMPLR,
  framework: ActionTypes.FRMWRK,
  bundler: ActionTypes.BNDLR
}

function assignCompiler(state: IState, action:) {

}