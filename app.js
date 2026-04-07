// === ELEMENT REFERENCES ===
const imageUpload = document.getElementById('image-upload');
const imagePreview = document.getElementById('image-preview');
const runOcrBtn = document.getElementById('run-ocr-btn');
const ocrOutput = document.getElementById('ocr-output');
const correctionInput = document.getElementById('correction-input');
const saveCorrectionBtn = document.getElementById('save-correction-btn');

// === STEP 1: IMAGE PREVIEW ===
imageUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    imagePreview.src = event.target.result;
    imagePreview.style.display = 'block';
  };
  reader.readAsDataURL(file);
});

// === STEP 2: RUN OCR ===
runOcrBtn.addEventListener('click', async () => {
  if (!imagePreview.src || imagePreview.style.display === 'none') {
    ocrOutput.textContent = 'Please upload an image first.';
    return;
  }

  ocrOutput.textContent = 'Running OCR... please wait';
  runOcrBtn.disabled = true;

  try {
    const result = await Tesseract.recognize(imagePreview.src, 'eng');
    ocrOutput.textContent = result.data.text;
    correctionInput.value = result.data.text;
  } catch (err) {
    ocrOutput.textContent = 'OCR failed. Please try again.';
    console.error(err);
  }

  runOcrBtn.disabled = false;
});

// === STEP 3: SAVE CORRECTION ===
saveCorrectionBtn.addEventListener('click', () => {
  const correctedText = correctionInput.value.trim();
  if (!correctedText) {
    alert('Please enter a correction first.');
    return;
  }

  console.log('Correction saved:', {
    ocr_raw: ocrOutput.textContent,
    ocr_corrected: correctedText,
    timestamp: new Date().toISOString()
  });

  alert('Correction saved! (Will connect to database soon)');
});