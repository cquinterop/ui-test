import axios from 'axios';

export const getCelebrities = () => axios('http://localhost:3001/data');
export const patchVote = (id, data) => axios.patch(`http://localhost:3001/data/${id}`, data, { headers: { 'Content-Type': 'application/json' } });
