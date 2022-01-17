import Constants from "../constants/Constants";

export default class TaskApi {
    static add(task) {
        return fetch(Constants.API_DOMAIN + `/tasks`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task)
        }).then(res => res.json())
    }
    static update(id, body) {
        return fetch(Constants.API_DOMAIN + `/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
    }
    static delete(id) {
        return fetch(Constants.API_DOMAIN + `/tasks/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
    }
    static findOne(id) {
        return fetch(Constants.API_DOMAIN + `/tasks/${id}`).then(res => res.json())
    }
    static findAll() {
        return fetch(Constants.API_DOMAIN + '/tasks?_sort=id&_order=desc').then(res => res.json())
    }
}