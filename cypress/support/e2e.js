import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // List of error messages to ignore
    const ignoredErrors = [
        
        "analytics is not defined",
        "Script error",
        "Cannot create property 'config_' on string '-ms-'",
        "Unexpected identifier 's'"

    ];

    //verify if the error message includes any of the ignored errors
    const shouldIgnoreError = ignoredErrors.some(errorText => err.message.includes(errorText));

    //if the error should be ignored, prevent Cypress from failing the test
    if (shouldIgnoreError) {
        return false;
    }
});
