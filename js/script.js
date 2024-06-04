let checkboxState = true

function generateResult() {
  const auxSelect = document.getElementById("aux-select").value
  const powerState1 = document.getElementById("power-state-1").value
  const powerState1LevelFrom = document.getElementById(
    "power-state-1-level-from"
  ).value
  const powerState1LevelTo = document.getElementById(
    "power-state-1-level-to"
  ).value

  const powerState2 = document.getElementById("power-state-2").value
  const powerState2LevelFrom = document.getElementById(
    "power-state-2-level-from"
  ).value
  const powerState2LevelTo = document.getElementById(
    "power-state-2-level-to"
  ).value

  const powerState3 = document.getElementById("power-state-3").value
  const powerState3LevelFrom = document.getElementById(
    "power-state-3-level-from"
  ).value
  const powerState3LevelTo = document.getElementById(
    "power-state-3-level-to"
  ).value

  const portSelect = document.getElementById("port-select").value
  const protocolSelect = document.getElementById("protocol-select").value

  const confirmationCheckbox = document.getElementById("confirmation-checkbox")

  const vtxTable = document.getElementById("vtxTable").value

  //Band control part
  const bandSelect = document.getElementById("band-select").value
  const bandState1 = document.getElementById("band-state-1").value
  const bandState1LevelFrom = document.getElementById(
    "band-state-1-level-from"
  ).value
  const bandState1LevelTo = document.getElementById(
    "band-state-1-level-to"
  ).value

  const bandState2 = document.getElementById("band-state-2").value
  const bandState2LevelFrom = document.getElementById(
    "band-state-2-level-from"
  ).value
  const bandState2LevelTo = document.getElementById(
    "band-state-2-level-to"
  ).value

  const bandState3 = document.getElementById("band-state-3").value
  const bandState3LevelFrom = document.getElementById(
    "band-state-3-level-from"
  ).value
  const bandState3LevelTo = document.getElementById(
    "band-state-3-level-to"
  ).value

  const bandCheckbox = document.getElementById("band-checkbox")

  let results = ``
  results += `# serial
serial ${portSelect} ${protocolSelect} 115200 57600 0 115200`

  if (confirmationCheckbox.checked) {
    results += `

# vtxtable
${vtxTable}`
  }

  results += `

# vtx
vtx 0 ${auxSelect} 0 0 ${powerState1} ${powerState1LevelFrom} ${powerState1LevelTo}
vtx 1 ${auxSelect} 0 0 ${powerState2} ${powerState2LevelFrom} ${powerState2LevelTo}
vtx 2 ${auxSelect} 0 0 ${powerState3} ${powerState3LevelFrom} ${powerState3LevelTo}
`

  if (bandCheckbox.checked) {
    results += `vtx 3 ${bandSelect} ${bandState1} 0 0 ${bandState1LevelFrom} ${bandState1LevelTo}
vtx 4 ${bandSelect} ${bandState2} 0 0 ${bandState2LevelFrom} ${bandState2LevelTo}
vtx 5 ${bandSelect} ${bandState3} 0 0 ${bandState3LevelFrom} ${bandState3LevelTo}`
  }

  document.getElementById("result-output").textContent = results
  document.getElementById("copy-button").style.display = "block"
  document.getElementById("result").style.display = "block"
}

function copyToClipboard() {
  const resultOutput = document.getElementById("result-output")
  const textArea = document.createElement("textarea")
  textArea.value = resultOutput.textContent.trim()
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand("copy")
  document.body.removeChild(textArea)
  const toast = document.createElement("div")
  toast.classList.add("toast")
  toast.textContent = getTranslation("copied_to_clipboard")
  document.body.appendChild(toast)

  setTimeout(() => {
    toast.remove()
  }, 3000)
}
document.addEventListener("DOMContentLoaded", function () {
  const vtxForm = document.getElementById("vtx-form")
  const bandForm = document.getElementById("band-form")

  const auxTemplate = document.getElementById("aux-template-select")
  const portProtocolTemplate = document.getElementById("port-protocol-select")

  vtxForm.addEventListener("input", hideResult)
  bandForm.addEventListener("input", hideResult)
  auxTemplate.addEventListener("input", hideResult)
  portProtocolTemplate.addEventListener("input", hideResult)

  const checkbox = document.getElementById("confirmation-checkbox")
  checkbox.addEventListener("input", function () {
    checkboxState = this.checked
  })
})

function hideResult() {
  document.getElementById("result").style.display = "none"
  document.getElementById("copy-button").style.display = "none"
}
document.addEventListener("DOMContentLoaded", function () {
  const templateSelect = document.getElementById("template-select")
  templateSelect.addEventListener("change", applyTemplate)
  applyTemplate()
})

const checkbox = document.getElementById("band-checkbox")
const bandControl = document.getElementById("band-control")

checkbox.addEventListener("change", function () {
  if (this.checked) {
    bandControl.style.display = "block"
  } else {
    bandControl.style.display = "none"
  }
})

const auxselector = document.getElementById("aux-select")
const bandselector = document.getElementById("band-select")

function updateOptions() {
  const selectedValue1 = auxselector.value
  const selectedValue2 = bandselector.value

  const disableOptions = (select, otherValue) => {
    for (const option of select.options) {
      if (option.value === "" && select.value !== "") {
        option.disabled = true
      } else {
        option.disabled = false
      }

      if (option.value === otherValue) {
        option.disabled = true
      }
    }
  }

  disableOptions(auxselector, selectedValue2)
  disableOptions(bandselector, selectedValue1)
}

auxselector.addEventListener("change", updateOptions)
bandselector.addEventListener("change", updateOptions)

updateOptions()

const selector = document.getElementById("band-select")
const generateButton = document.getElementById("generate-button")
const bandCheckbox = document.getElementById("band-checkbox")

function updateButtonState() {
  if (selector.value === "" && bandCheckbox.checked) {
    generateButton.disabled = true
  } else {
    generateButton.disabled = false
  }
}

selector.addEventListener("change", updateButtonState)
checkbox.addEventListener("change", updateButtonState)

updateButtonState()
