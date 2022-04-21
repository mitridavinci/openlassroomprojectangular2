import { Subject } from 'rxjs';

import { User } from "../models/User.model";

export class UserService{
	private users: User[] = [
		{
			firstName:'Diallo Thierno',
		    lastName:'smith',
			email:'james@gmail.com',
			drinkPreference:'cocaCola',
			hobbies:[
				'Coder',
				'La dégustation de café'
			]
		}



	];
	userSubject = new Subject<User[]>();
	emitUsers(){
		this.userSubject.next(this.users.slice());
	}
	addUser(user: User){
		this.users.push(user);
		this.emitUsers();
	}
}