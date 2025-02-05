/*
 * Wire
 * Copyright (C) 2023 Wire Swiss GmbH
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

import {AVATAR_SIZE, DIAMETER} from 'Components/Avatar';

import {DefaultAvatarImageSmall, DefaultAvatarImageLarge} from './DefaultAvatarImage';

import {AvatarWrapper} from '../AvatarWrapper';

type PlaceholderAvatarProps = {size: AVATAR_SIZE; onClick: () => void};

export function PlaceholderAvatar({size, onClick}: PlaceholderAvatarProps) {
  const diameter = DIAMETER[size];
  const ImageComponent = diameter >= DIAMETER[AVATAR_SIZE.LARGE] ? DefaultAvatarImageLarge : DefaultAvatarImageSmall;
  return (
    <AvatarWrapper avatarSize={size} color={''} onClick={onClick}>
      <ImageComponent diameter={diameter} />
    </AvatarWrapper>
  );
}
