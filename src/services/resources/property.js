import instance from 'services';

const resource = {
  findAll: (params) => instance.get('/house/', params),

  findByID: (id) => instance.get(`/house/${id}`).then((res) => res.data),

  findPropertyComments: (id) =>
    instance.get(`/house/${id}/comments/`).then((res) => res.data),

  findPropertyGallery: (id) =>
    instance.get(`/house/${id}/gallery/`).then((res) => res.data),

  findPropertyNetworks: (id) =>
    instance.get(`/house/${id}/networks/`).then((res) => res.data),

  findPropertyServices: (id) =>
    instance.get(`/house/${id}/services/`).then((res) => res.data),
};

export default resource;
