const postForm = async (url, request) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: request
    });
    return await res.json();
    // возвращаем наверх (функцию pastForm)
    //  результат ответа (команда res.json()) 
    // запроса на сервер,
    // чтобы в дальншейшем обрабатывать через Promise
    //  этот ответ
};

export {postForm};