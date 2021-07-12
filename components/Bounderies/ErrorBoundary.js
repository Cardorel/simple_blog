import React, { Component } from 'react'

export default class MyErrorBoundary extends Component {
    state = {
      error: null
    }
  
    static getDerivedStateFromError(error) {
    return { error: error };
  }
  
    componentDidCatch(error, info) {
    logErrorToMyService(error, info);
  }
  
    render() {
      if (this.state.error) {
        return <p>Something broke</p>;
      }
      return this.props.children;
    }
  };