export class API {
  constructor(url) {
    this.url = url;
  }

  getResponseJson(res) {
    if (res.ok) {
      return res.json();
    }
    return new Promise.reject(console.log(res.status));
  }

  getData() {
    return fetch(this.url).then((res) => this.getResponseJson(res));
  }
}
