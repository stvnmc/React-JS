
import { connect } from 'react-redux';
import { addTodo } from '../../actions/actions';
import Todoform from '../pure/TodoForm';


const mapStateToProps = (state) => ({
    // Not necessary
})

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            dispatch(addTodo(text))
        }
    }
}

const TodoFormContainers = connect(mapStateToProps, mapDispatchToProps)(Todoform)

export default TodoFormContainers;