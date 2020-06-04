import React from 'react'

class Api extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
        
      };
      
    }
  
    componentDidMount() {
      
      fetch("https://jsonplaceholder.typicode.com/posts/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
         
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
        
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            
            <div>
               
        <h4><u>Title's </u></h4>
          <ul >
            {items.map(item => (
              <li>
                {item.id}.{item.title}
              </li>
            ))}
          </ul>
          </div>
        );
      }
    }
  }

  export default Api