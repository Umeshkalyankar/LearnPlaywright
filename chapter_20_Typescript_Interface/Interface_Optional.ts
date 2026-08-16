interface ApiResponse {
    body: string,
    headers?: object,          // ? used for optional field & may be or may not be included in object
    responseTime?: number,
}

let response1: ApiResponse = {
    body: "",
    headers: {},
    responseTime: 250,
};

let response2: ApiResponse = {
    body: "",
};

