// Readonly - only one time able to set it and cannot be modified localStorage.

interface ApiResponse {
    readonly status: number;
    body: string;
    headers?: {};
    responseTime: number;
}
let response: ApiResponse = {
    status: 200,
    body: "Hello",
    responseTime: 250,
};

// response.status = 400;
response.body = "Changed";