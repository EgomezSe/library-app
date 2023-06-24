
export const RestAdapter = () => {

    const  get = async (
        url,
        queryParams = ''
    ) => {
        const request = {
            method: 'get'
        };
        return (execute(
            fetch(`${url}${queryParams}`, request)
        ));
    }

    const post = async  (
        url,
        body
    ) => {
        const request = {
            method: 'post',
            body:
                typeof body === 'string'
                    ? body
                    : JSON.stringify(body),
        };
        return (execute(
            fetch(url, request)
        ));
    }

    const put = async  (
        url,
        body
    ) => {
        const request = {
            method: 'put',
            body:
                typeof body === 'string'
                    ? body
                    : JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        };
        return (execute(
            fetch(url, request), 'PUT'
        ));
    }

    const execute = async (
        operation, method = 'GET'
    ) => {
        return operation
            .then((response) => {
               if (method === 'PUT') {
                   return response;
               }
                return response.json();
            })
            .catch((error) => {
                throw new Error(error);
            });
    }


    return { get, post, put };
}
