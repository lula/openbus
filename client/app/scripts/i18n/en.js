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
  action: {
    new: "New",
    edit: "Edit",
    save: "Save",
    create: "Create",
    cancel: "Cancel",
    delete: "Delete",
    followup: "Follow up",
    display: "Display",
    refresh: "Refresh",
    add: "Add",
    search: "Search",
    clear: "Clear",
    toggleFilters: 'Show/Hide filters',
    close: "Close",
    sort: "Sort"
  },
  operator: {
    eq: {
      short: "Equal to",
      long: "Equal to"
    },
    gt: {
      short: "Greater than",
      long: "Greater than"
    },
    gte: {
      short: "Greater/Eq. than",
      long: "Greater or Equal than"
    },
    lt: {
      short: "Less than",
      long: "Less than"
    },
    lte: {
      short: "Less/Eq. than",
      long: "Less or Equal than"
    },
    bt: {
      short: "Between",
      long: "Between"
    }
  },
  menu: {
    notifications: {
      title: 'Notifications'
    },
    toggleSidebar: 'Toggle sidebar',
    currentUser: {
      title: "User menu",
      settings: "Settings",
      logout: "Logout",
      me: "Me"
    },
    users: {
      title: 'Users'
    },
    employees: {
      title: 'Employees'
    },    
    accounts: {
      title: "Accounts"
    },
    service: {
      requests: {
        title: 'Service Requests'
      }
    }
  },
  common: {
    all: "All",
    list: "List",
    details: "Details",
    overview: "Overview",
    notes: "Notes",
    filters: "Filters",
    filterFor: "Filter for",
    map: "Map"
  },
  main: {
    title: "Home",
    users: {
      descr: "Manage openbus users"
    },
    service: {
      requests: {
        descr: "Manage service requests"
      }
    },
    accounts: {
      descr: "Manage accounts"
    }
  },
  relationship: {
    one: "Relationship",
    two: "Relationships",
    type: "Type"
  },
  user: {
    heading: {
      new: "Create User",
      index: 'Users list',
      show: 'User',
      edit: 'Edit User'
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
    change_password: 'Change your password',
    createdAt: 'Created on',
    updatedAt: 'Updated on',
    profile: 'Profile'
  },
  employee: {
    heading: {
      new: "Create Employee",
      index: 'Employees',
      show: "Employee",
      edit: "Edit Employee"
    },
    one: "Employee",
    two: "Employees",
    fullname: "Name",
    firstname: "Firstname",
    lastname: "Lastname",
    address: "Address",
    relationship: {
      type: {
        responsible: "Responsible",
        salesrep: "Sales Rep.",
        technician: "Technician"
      }
    }
  },
  login: 'Login',
  messages: {
    general: {
      showHideFilters: 'Filters',
      errors: {
        required: 'Required',
        email: 'Not a valid email',
        date: 'Not a valid date'
      }
    },
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
    },
    employee: {
      success: {
        created: 'Employee {{employee}} created successfully',
        updated: 'Employee {{employee}} updated successfully',
        saved: 'Employee {{employee}} saved successfully',
        deleted: 'Employee {{employee}} deleted successfully'
      },
      danger: {
        created: 'Employee creation failed',
        updated: 'Employee {{employee}} update failed',
        saved: 'Employee {{employee}} save failed',
        deleted: 'Employee {{employee}} deletion failed'
      }
    },
    account: {
      success: {
        created: 'Account {{account}} created successfully',
        updated: 'Account {{account}} updated successfully',
        saved: 'Account {{account}} saved successfully',
        deleted: 'Account {{account}} deleted successfully',
        passwordChanged: 'Password changed'
      },
      danger: {
        created: 'Account creation failed',
        updated: 'Account {{name}} update failed',
        saved: 'Account {{account}} save failed',
        deleted: 'Account {{account}} deletion failed'
      }
    },
    service: {
      request: {
        success: {
          created: 'Service Request created successfully',
          updated: 'Service Request updated successfully',
          saved: 'Service Request saved successfully',
          deleted: 'Service Request deleted successfully'
        },
        danger: {
          created: 'Service Request creation failed',
          updated: 'Service Request update failed',
          saved: 'Service Request save failed',
          deleted: 'Service Request deletion failed'
        },
        confirmation: {
          success: {
            created: 'Service Request Confirmation created successfully',
            updated: 'Service Request Confirmation updated successfully',
            saved: 'Service Request Confirmation saved successfully',
            deleted: 'Service Request Confirmation deleted successfully'
          }
        }
      }
    }
  },
  account: {
    heading: {
      index: 'Accounts',
      new: "Create Account",
      show: "Account",
      edit: "Edit Account"
    },
    address: {
      modal: {
        title: "Address"
      }
    },
    one: "Account",
    two: "Accounts",
    name: "Name",
    type: "Type"
  },
  followup: {
    modal: {
      title: "Choose follow up",
      titleHead: "Description"
    }
  },
  address: {
    one: "Address",
    two: "Addresses",
    street: "Street",
    city: "City",
    country: "Country",
    houseNo: "House no",
    postalCode: "Postal code",
    region: "Region",
    telephone: "Telephone",
    mobile: "Mobile",
    email: "Email",
    standard: "Default",
    standard_abbr: "def.",
    alternative_abbr: "alt."
  },
  service: {
    request: {
      confirmation: {
        heading: {
          new: "Create Confirmation",
          show: "Confirmation"
        },
        one: {
          short: "Confirmation",
          long: "Service Request Confirmation"
        },
        two: {
          short: "Confirmations",
          long: "Service Request Confirmations"
        },
        startDate: "Start Date",
        endDate: "End Date",
        timeSpent: "Time Spent"
      },
      heading: {
        new:  "Create Service Request",
        index: "Service Requests",
        show: "Service Request",
        edit: "Edit Service Request"
      },
      one: "Service Request",
      two: "Service Requests",
      account: "Account",
      startEndDate: "Start / End Date",
      startDate: "Start At",
      endDate: "End At",
      actualStartDate: "Actual Start At",
      actualEndDate: "Actual End At",
      description: "Description",
      estimatedTime: "Estimated Time",
      employee: "Technician",
      status: "Status"
    }
  }
};