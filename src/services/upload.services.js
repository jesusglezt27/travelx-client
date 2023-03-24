import _api from "./api"

export const uploadImage = (data) => _api.post('/upload/single', data) 