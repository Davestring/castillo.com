import instance from 'services';

const resource = {
  findAll: (params) => instance.get('/house/', params),

  findByID: (id) => instance.get(`/house/${id}`),
};

export default resource;
