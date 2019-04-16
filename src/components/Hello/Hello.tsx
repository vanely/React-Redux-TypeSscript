import * as React from 'react';
import { IProps } from '../../container/App/App';

export default class Hello extends React.Component<IProps, {}> {

  render() {

    const { compiler, framework, bundler } = this.props;

    return (
      <section>
        <h1>This is a {framework} application using {compiler} with {bundler}</h1>
      </section>  
    );
  } 
}