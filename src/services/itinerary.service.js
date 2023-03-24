import _api from "./api"

export const removeItinerary = (id)=> _api.delete(`/itinerary/remove/${id}`)
export const editItinerary = (id,data)=> _api.patch(`/itinerary/edit/${id}`,data)
export const detailById = (id)=> _api.get(`/itinerary/detail/${id}`)
export const addItinerary = (data)=> _api.post(`/itinerary/addItinerary`,data)
export const getAllItinerary = ()=> _api.get(`/itinerary/list`)