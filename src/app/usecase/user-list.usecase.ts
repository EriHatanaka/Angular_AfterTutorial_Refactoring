import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Store } from '../service/store.service';
import { UserApiService } from '../service/user-api.service';

@Injectable({ providedIn: 'root' })
export class UserListUsecase {

  constructor(private userApi: UserApiService, private store: Store) { }

  async fetchUsers() {
    const users = await this.userApi.getAllUsers();

    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        items: users
      }
    }));
  }
}