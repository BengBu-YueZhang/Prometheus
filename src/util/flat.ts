/**
 * 数组扁平化
 */
export default function flat (arr: any[]): any[] {
  return arr.reduce((pre, cur) => {
    return [...pre, ...cur]
  }) 
}