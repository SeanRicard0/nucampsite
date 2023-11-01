export const validateCommentForm = (values) => {
    const errors = {};
    if(values.rating === 'Select...') {
        errors.rating = 'Required';
    }
    if(values.author.length < 2) {
        errors.author = 'Must be at least 2 characters';
    } else if (values.author.length > 15 ) {
        errors.author = 'Must be 15 characters or less'
    }
    return errors;
};

// Not using !values.rating on line 3 because it allows you to submit "Select..." if you choose a value and then choose select again. 