import request from '@/utils/request';

export function getUserInfo(id) {
  return request.get(`/todos/${id}`);
}
