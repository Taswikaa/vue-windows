class Api {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const res = await fetch(`${this.url}data.json`, {
      method: 'GET'
    });
    return await res.json();
  }

  async getAdditionalData() {
    const res = await fetch(`${this.url}create.json`, {
      method: 'GET'
    });
    return await res.json();
  }

  async sendToFirstApi() {
    const res = await fetch('https://myserver/data', {
      method: 'POST'
    });
    return await res.json();
  }

  async sendToSecondApi() {
    const res = await fetch('https://myserver/create', {
      method: 'POST'
    });
    return await res.json();
  }
}

const api = new Api('http://localhost:8080/mock/');

export default api;