const validation = {
  email: {
    required: {
      value: true,
      message: 'Email is required',
    },
    pattern: {
      value:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Must be a valid email address',
    },
  },
  phone: {
    required: {
      value: true,
      message: 'Phone number is required',
    },
    pattern: {
      value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      message: 'Must be a valid phone number',
    },
  },
  generalRequired: {
    required: {
      value: true,
      message: 'This field is required',
    },
  },
};

export default validation;
