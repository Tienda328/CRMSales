import {instance} from './instanceService'

export function getTest() {
  return instance.get('https://reactnative.dev/movies.json');
}

export function getTypicode() {
  return instance.get('https://jsonplaceholder.typicode.com/posts');
}
