const TodoData = (props) => {
    // props là một object {}
        // name :"Aiko"
        // age: 25;
        // data: {}
        
    const { name, age, data } = props;
    
    
        console.log(">>> check props : ", props)
        return (
            <div className='todo-data'>
                <div>My name is {name} </div>
            <div> learningReact </div>
            <div> Watching Youtube </div>
            <div>
        {JSON.stringify(props.todoList)}
            </div>
            </div>
        )
    }
    export default TodoData;