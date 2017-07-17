import {Observable}from 'rxjs';
const $input = document.querySelector('.todo-input');
const $addBtn = document.querySelector('.add-btn');
const $todoList = document.querySelector('.todo-list');
const inputObs = Observable.fromEvent($input, 'keydown').filter((e)=>e.keyCode===13)
const addBtnObs = Observable.fromEvent($addBtn, 'click');

const addEvent = inputObs.merge(addBtnObs);
addEvent.map(()=>createTodoItem($input.value)).do((ele)=>{$todoList.appendChild(ele);$input.value=''}).subscribe()

const createTodoItem = (val)=>{
	const result = document.createElement('li');
	const html = `<div>${val} <button>remove</button></div>`;
	result.innerHTML = html;
	return result;
}
