import userInterfaceMenu from './uiMenu';
import userInterfaceContainer from './uiContainer';
import userInterfaceTodo from './uiTodo';

const userInterface = (() => {
    return Object.assign(
        {},
        userInterfaceMenu,
        userInterfaceContainer,
        userInterfaceTodo
    );
})();

export default userInterface;