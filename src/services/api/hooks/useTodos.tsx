import React from 'react'

import {
    AddTodoDto,
    EditTodoDto,
    OpenAPI,
    TodoDto,
    TodosService,
  } from '../../openapi';
  
  const { add, edit, findAll, findOne, remove } = TodosService;
  
  OpenAPI.BASE = 'http://localhost:3000';
  

 const useTodos = () => {

       const getTodos = async () => {
        try {
          const todos: TodoDto[] = await findAll();
          return todos;
        } catch (error) {
          throw new Error(error);
        }
      };
      
       const getTodoById = async (id: number): Promise<TodoDto> => {
        try {
          return await findOne(id);
        } catch (error) {
          throw new Error(error);
        }
      };
      
       const addTodo = async (newTodo: AddTodoDto): Promise<TodoDto> => {
        try {
          return await add(newTodo);
        } catch (error) {
          throw new Error(error);
        }
      };
      
       const updateTodo = async (
        id: number,
        todo: EditTodoDto
      ): Promise<TodoDto> => {
        try {
          return await edit(id, todo);
        } catch (error) {
          throw new Error(error);
        }
      };
      
       const deleteTodo = async (id: number) => {
        try {
          await remove(id);
        } catch (error) {
          throw new Error(error);
        }
      };
      
}
