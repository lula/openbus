'use strict';

/**
 * @ngdoc overview
 * @name openbusApp
 * @description
 * # openbusApp
 *
 * Main module of the application.
 */

var en = {
  menu: {
    index: 'List',
    new: 'Add',
    
    users: {
      title: 'Users',
      sub: {
        index: "@:menu.index",
        new: "@:menu.new"
      }
    },
    
    service: {
      requests: {
        title: 'Service Requests',
        sub: {
          index: "@:menu.index",
          new: "@:menu.new"
        }
      }
    }
  },
  main: {
    users: {
      descr: "Manage your application users"
    },
    service: {
      requests: {
        descr: "Manage you service requests"
      }
    }
  },
  user: {
    roles: {
      admin: "Administrator",
      user: "User"
    },
    header: {
      title: 'User: {{user}}'
    },
    actions: {
      new: {
        title: "Create new user"
      }
    },
    one: 'User',
    two: 'Users',
    title: 'Title',
    email: 'Email',
    password: 'Password',
    newPassword: 'New password',
    password_confirmation: 'Password confirmation',
    firstname: 'Firstname',
    lastname: 'Lastname',
    fullname: 'Name',
    age: 'Age',
    birthdate: 'Birthdate',
    role: 'Role',
    change_password: 'Change your password'
  },
  login: 'Login',
  messages: {
    user: {
      success: {
        created: '{{user.one}} created successfully',
        updated: 'User {{user}} updated successfully',
        saved: 'User {{user}} saved successfully',
        deleted: 'User {{user}} deleted successfully',
        passwordChanged: 'Password changed'
      },
      danger: {
        created: 'User creation failed',
        updated: 'User {{user}} update failed',
        saved: 'User {{user}} save failed',
        deleted: 'User {{user}} deletion failed'
      }
    }
  }
};