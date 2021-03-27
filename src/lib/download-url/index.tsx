export function downloadUrl(url: string, name?: string): void {
  const element = document.createElement('a')
  element.setAttribute('href', url)
  element.setAttribute('download', name)

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}
