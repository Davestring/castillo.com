import instance from 'services';

const resource = {
  findAll: (params) => instance.get('/insight/', params),

  findByID: (id) => instance.get(`/insight/${id}`),
};

export default resource;
