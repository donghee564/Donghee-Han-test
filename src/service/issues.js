class Issues {
  constructor() {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/vnd.github.v3.text-match+json");

    this.getRequestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  }

  async getIssues() {
    const response = await fetch(
      `https://api.github.com/repos/angular/angular-cli/issues?state=open&sort=comments`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result;
  }
}

export default Issues;
