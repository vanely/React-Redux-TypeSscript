import * as React from 'react';
import { IState } from '../../reducers/reducers';
import Hello from '../../components/Hello/Hello';

export interface IProps {
  compiler: string;
  framework: string;
  bundler: string;
}

export default class App extends React.Component<IProps, object> {

  constructor (props: IProps) {
    super(props);
    this.state = {};
  }
  render() {

    return (
      <section>
        <Hello 
        compiler= "TypeScript" 
        framework= "React" 
        bundler= "Webpack" />
      </section>
    );
  }
}