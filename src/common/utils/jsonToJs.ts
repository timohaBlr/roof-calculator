import data from '../data/data.json'
import config from '../data/config.json'


export const materials = data.filter(f => f.type === 'list')
export const pipes = data.filter(f => f.type === 'pipe')
export const frames = config.filter(f => f.type === 'frame')

export const width = config.find(f => f.key === 'width')
export const length = config.find(f => f.key === 'length')