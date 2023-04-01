import data from '../data/data.json'
import config from '../data/config.json'


export const materials = data.filter(f => f.type === 'list')
export const pipes = data.filter(f => f.type === 'pipe')
export const frames = config.filter(f => f.type === 'frame')