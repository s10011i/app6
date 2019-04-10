import React, {Component} from 'react';


class Comp1 extends Component {
    constructor(props){
        super();
        this.state={
            name:props.name,
            editing:false
        };
        
    }
  onEdit() {
      this.setState({
          editing: true
      });
  }
  onRemove() {
      this.setState({
          com: " "
      });
  }
  save(){
    let val=this.refs.newtext.value;
    this.setState({
      editing:false,
      name:val
    });
  }
  renderNormal(){
    return (
      <div className="container1">
        <h3>{this.state.name}</h3>
        <button onClick={() => this.onEdit()} className="btn btn-primary">Edit</button>
        <button onClick={() => this.onRemove()} className="btn btn-danger">Remove</button>
      </div>
    );
  }
  renderForm(){
    return (
      <div className="container1">
        <textarea ref="newtext" defaultValue={this.state.name} ></textarea>
        <button onClick={() => this.save()} className="btn btn-success">
          Save
        </button>
      </div>
    );
  }
  render() {
    if(this.state.editing){
      return this.renderForm();
    }else{
      return this.renderNormal();
    }
  }
}

export default Comp1;