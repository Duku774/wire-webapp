/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

import type {User as APIClientUser, QualifiedHandle, QualifiedId} from '@wireapp/api-client/lib/user/';
import {container} from 'tsyringe';

import {Logger, getLogger} from 'Util/Logger';

import type {User} from '../entity/User';
import {APIClient} from '../service/APIClientSingleton';
import {StorageSchemata} from '../storage/StorageSchemata';
import {StorageService} from '../storage/StorageService';
import {constructUserPrimaryKey} from '../util/StorageUtil';

type StoredUser = {
  availability: number;
  id: string;
  domain?: string;
};

export class UserService {
  private readonly logger: Logger;
  private readonly USER_STORE_NAME: string;

  constructor(
    private readonly storageService = container.resolve(StorageService),
    private readonly apiClient = container.resolve(APIClient),
  ) {
    this.logger = getLogger('UserService');
    this.USER_STORE_NAME = StorageSchemata.OBJECT_STORE.USERS;
  }

  //##############################################################################
  // Database interactions
  //##############################################################################

  /**
   * Loads user states from the local database.
   * @todo There might be more keys which are returned by this function
   * @returns Resolves with all the stored user states
   */
  async loadUserFromDb(): Promise<{availability: number; domain: string; id: string}[]> {
    const users = await this.storageService.getAll<StoredUser>(this.USER_STORE_NAME);
    return users.map(user => ({...user, domain: user.domain ?? ''}));
  }

  async removeUserFromDb(user: {id: string; domain: string}): Promise<void> {
    const primaryKey = constructUserPrimaryKey(user);
    await this.storageService.delete(this.USER_STORE_NAME, primaryKey);
  }

  /**
   * Saves a user entity in the local database.
   * @returns Resolves with the conversation entity
   */
  saveUserInDb(userEntity: User): Promise<User> {
    const userData = userEntity.serialize();

    const primaryKey = constructUserPrimaryKey(userEntity);

    return this.storageService.save(this.USER_STORE_NAME, primaryKey, userData).then(primaryKey => {
      this.logger.info(`State of user '${userData.id}' was stored`);
      return userEntity;
    });
  }

  //##############################################################################
  // Backend interactions
  //##############################################################################

  /**
   * Check if a username exists.
   *
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/checkUserHandle
   */
  checkUserHandle(handle: string): Promise<void> {
    return this.apiClient.api.user.headHandle(handle);
  }

  async getUserByFQN({domain, handle}: QualifiedHandle): Promise<APIClientUser> {
    if (domain) {
      return this.apiClient.api.user.getUserByHandle({
        domain,
        handle,
      });
    }
    const {user: userId} = await this.apiClient.api.user.getHandle(handle);
    return this.apiClient.api.user.getUser(userId);
  }

  /**
   * Get a set of users for the given usernames.
   *
   * @example ['0bb84213-8cc2-4bb1-9e0b-b8dd522396d5', '15ede065-72b3-433a-9917-252f076ed031']
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/checkUserHandles
   */
  checkUserHandles(usernames: string[], amount: number = 1): Promise<string[]> {
    return this.apiClient.api.user.postHandles({
      handles: usernames,
      return: amount,
    });
  }

  /**
   * Get a set of users.
   *
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/users
   * @example ['0bb84213-8cc2-4bb1-9e0b-b8dd522396d5', '15ede065-72b3-433a-9917-252f076ed031']
   */
  async getUsers(userIds: QualifiedId[]) {
    if (userIds.length === 0) {
      return {found: []};
    }
    return this.apiClient.api.user.postListUsers({qualified_ids: userIds});
  }

  /**
   * Get a user by ID.
   *
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/user
   */
  getUser(userId: QualifiedId): Promise<APIClientUser> {
    return this.apiClient.api.user.getUser(userId);
  }
}
