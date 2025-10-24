import { atom } from 'recoil';
import TODO_LIST from '../mocks/todoList';

const ATOM_KEY = 'todoList';

const todoList = atom({
  key: ATOM_KEY,
  default: TODO_LIST,
});

export default todoList;
