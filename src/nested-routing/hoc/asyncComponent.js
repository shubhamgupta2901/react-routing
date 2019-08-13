import React from 'react'; 
const asyncComponent = (importedComponent)=>{
    return class extends React.Component{
        
        constructor(props){
            super(props)
            this.state = {
                component: null,
            }
        }

        componentDidMount(){
            importedComponent()
                .then((component)=>{
                    this.setState(component.default)
                });
        }
        
        render(){
            const C = this.state.component;
            return C ? <C {...this.props}/> : null;
        }
    }
}

export default asyncComponent;