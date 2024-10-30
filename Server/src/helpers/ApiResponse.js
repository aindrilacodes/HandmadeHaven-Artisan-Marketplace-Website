class ApiResponse {
    constructor(data, message) {
      (this.data = data), (this.success = true), (this.message = message);
    }
  }
  module.exports={ ApiResponse };
  