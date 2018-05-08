console.log('App.js is running');
const app = {
    title       : 'Indecision App',
    subtitle    :  'let the computer choose your fate!',
    options     :  ["Option one", "option two"]
};

class Header extends React.Component{
    render(){
       return ( <div>
        <h1>{this.props.title}</h1>
        </div>);}
}

// class Action extends React.Component{

  
//     render(){
       
//         }
// }
const Action = (props)=>{return ( <button disabled ={!props.hasOptions} onClick={props.handlePick}>Decide my fate!</button>);};

class Options extends React.Component{
 
    render()
    {
        {   
            //    return this.prop.options.map((option)=>{
            //      return <p>{option}</p>
            //     });
            return <ol>{ this.props.options.map((option)=>{ return <Option key={option} optionText = {option}/>  })}   </ol> 
    }
}}

class Option extends React.Component{
    render(){ return ( <div>{this.props.optionText}</div> );}
};

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);

    }

    handleAdd(e){
        e.preventDefault();  
        const option = e.target.elements.option.value;
        if (option)  this.props.handleAdd(option);  
        console.log("form submitted");
        return null;
    }
    render()
    {
        return (<form onSubmit={this.handleAdd}> 
            <input type ="text" name = "option"/>
            <button> Add option</button>
        </form>);
    }
}

class RemoveAll extends React.Component{
    render(){
        return(
            <button disabled={!this.props.hasOptions} 
            onClick= {this.props.handleRemoveAll}>
            Remove All
            </button>
        );
    }
}
class IndecisionApp extends React.Component {
   constructor(props){
       super(props);
       this.state = {
        options     :  [],
        pickDisabled : false
       };
       this.handleAdd  = this.handleAdd.bind(this);
       this.handlePick =  this.handlePick.bind(this);
    //    this.invertDisabled = this.invertDisabled.bind(this);
       this.handleRemoveAll = this.handleRemoveAll.bind(this);

   }
   handlePick()
   {
       const result = Math.floor(Math.random() * this.state.options.length);
       console.log(result);
   }
   handleAdd(option){
       this.setState((prevState)=>{

           return {
               options : prevState.options.concat([option])
           };
       });
       console.log("option added");
   }
   componentDidMount(){
    console.log("Component Mounted");
}
   componentDidUpdate(){
       console.log("Component Updated");
   }
   handleRemoveAll(){
    console.log(this.props.options);
    this.setState(()=>{return this.state.options = []});
    }

    render()
    {
       return( 
       <div>
        <Header title ="Indecision App"/>
        <Action handlePick              = {this.handlePick} hasOptions= {this.state.options.length > 0}/>
        <Options options                = {this.state.options}/>
        <AddOption handleAdd            = {this.handleAdd}/>
        <RemoveAll handleRemoveAll      = {this.handleRemoveAll} hasOptions= {this.state.options.length > 0}/>
        </div>);}


}
var appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp/>,appRoot);       


