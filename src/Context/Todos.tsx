import {ReactNode, createContext, useContext, useState } from "react";

export type TodosProviderProps = {
    children: ReactNode;
}

export type TodosContext = {
    todos: Todo[];
    addTaskHandler:(task:string)=>void;
    toggleTodoCompleted:(id:string)=>void;
    handleDelete:(id:string)=>void;
}

export type Todo = {
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}

export const  todosContext = createContext<TodosContext | null>(null);

export const TodosProvider=({children}:TodosProviderProps) =>{

    const [todos,setTodos]=useState<Todo[]>(()=>{
        try {
            const newTodos=localStorage.getItem('todos') || "[ ]"
            return JSON.parse(newTodos) as Todo[];
        } catch (error) {
            return []
        }
    })

    const addTaskHandler=(task:string)=>
    {
            setTodos((prev)=>
            {
                const newTodos:Todo[]=[{
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt:new Date()
                },...prev]
                localStorage.setItem('todos',JSON.stringify(newTodos))
                return newTodos
            })
    }

    const toggleTodoCompleted=(id:string)=>
    {
        setTodos((prev)=>
        {
           const newTodos:Todo[]= prev.map((item)=>{
                if(item.id===id){
                    return {...item,completed:!item.completed}
                } 
                else return item
            })
            localStorage.setItem('todos',JSON.stringify(newTodos))
            return newTodos
        })
    }

    const handleDelete=(id:string)=>{
        setTodos((prev)=>
        {
            const newTodos=prev.map((item:Todo,index:number)=>{
                if(item.id===id){
                    prev.splice(index,1)
                }
                else return item
            })
            localStorage.setItem('todos',JSON.stringify(newTodos))
            return newTodos
        })
    }

    return <todosContext.Provider value={{todos,addTaskHandler,toggleTodoCompleted,handleDelete}}>
        {children}
    </todosContext.Provider>
}

export const useTodos=()=>
{
    const todosConsumer=useContext(todosContext)
    if(!todosConsumer){
        throw new Error("useTodos used outside of Provider")
    }
    return todosConsumer;
}   