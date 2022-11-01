import axios from 'axios';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos';


axios.get(url)
    .then(res => {
        const todo = res.data as Todo;

        const { id, title, completed } = todo;
    })