enum HTTPmethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

function sendRequest(method: HTTPmethod, endpoint: string): void {
    console.log(method + " " + endpoint + "-> 200 OK");
}

sendRequest(HTTPmethod.GET, "/api/users");