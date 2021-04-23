const mwcUploaderButtons = document.querySelectorAll('.mwcUploader__button')
const mwcUploaderFileInputs = document.querySelectorAll('.mwcUploader__file')

mwcUploaderButtons.forEach(mwcButton => {
  mwcButton.addEventListener('click', event => {
    const parent = event.target.closest('.mwcUploader')
    const fileInput = parent.querySelector('.mwcUploader__file')
    fileInput.click()
  })
})

mwcUploaderFileInputs.forEach(fileInput => {
  fileInput.addEventListener('change', event => {
    const textField = event.target.closest('.mwcUploader').querySelector('.mwcUploader__text')
    const unprocessedPath = event.target.value
    let proccessedPath = ''
    let slash = unprocessedPath.indexOf('\/') !== -1 ? '/' : '\\'

    proccessedPath = unprocessedPath.split(slash)
    proccessedPath = proccessedPath[proccessedPath.length - 1]
    
    textField.value = proccessedPath
  })
})