import React, { useContext, useEffect, memo } from 'react';
import { node } from 'prop-types';

import {
  getUser,
  getEvents,
} from '../../utils/apis';

import MainContext from '../../Contexts/MainContext';

import { userActions } from '../Users';
import { FETCH_EVENTS } from './eventsActions';

const { LOGIN_FAILED, FETCH_USER } = userActions;

const Page = ({ children }) => {
  const { user, events } = useContext(MainContext);
  const { state: { isLoggedIn }, dispatch: updateUser } = user;
  const { dispatch: updateEvents } = events;

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await getUser();
        updateUser({ type: FETCH_USER, user: userData });
      } catch (e) {
        updateUser({ type: LOGIN_FAILED });
      }
    }
    if (isLoggedIn) fetchUser();
  }, [isLoggedIn, updateUser]);

  useEffect(() => {
    async function fetchEvents() {
      const eventsData = await getEvents();
      updateEvents({ type: FETCH_EVENTS, events: eventsData });
    }
    if (isLoggedIn) fetchEvents();
  }, [isLoggedIn, updateEvents]);

  return (
    <>
      {children}
    </>
  );
};

Page.propTypes = {
  children: node.isRequired,
};

export default memo(Page);
