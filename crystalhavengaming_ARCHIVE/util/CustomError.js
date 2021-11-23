class CustomError extends Error {
    constructor(message, status, module, page, url) {
        super();
        this.message = message;
        this.status = status;
        this.module = module;
        this.page = page;
        this.url = url;
    }
}

module.exports = CustomError;
