import letterList from './letterList'

export default ():string => {
  return letterList[Math.floor(Math.random() * letterList.length)]
}