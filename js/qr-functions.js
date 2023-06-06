const testScreenSize = () => {
  let size = 250
  if (window.innerWidth > 2250) {
    size = 300
  } else {
    size = 250
  }
  return size
}

function makeQR(value) {
  var version = 10;
  qrcode.qrcode.stringToBytes = qrcode.qrcode.stringToBytesFuncs['UTF-8']
  var qr = qrcode.qrcode(version, 'H');
  qr.addData(value);
  try {
    qr.make();
  } catch (err) {
    console.log('Version is low:', version)
    console.log('Error:', err)
  }
  document.getElementById('qr').innerHTML = qr.createImgTag(3);
}

function makeQArt(value, imagePath) {
  var version = 10;
  const qrSize = testScreenSize()
  new QArt({
    value: value,
    imagePath: imagePath,
    filter: 'color',
    version: version,
    size: qrSize,
    fillType: 'scale_to_fit'
  }).make(document.getElementById('combine'));
}

const updateQr = (item) => {
  $("#combine").fadeOut(750);
  const id = item.id;
  const qrValue = `https://www.floridamemory.com/items/show/${id}`
  const qrImagePath = item.children[1].src;
  const mobileInfoLink = document.querySelector('#mobile-info-link')
  mobileInfoLink.href = qrValue
  setTimeout(() => {
    makeQR(qrValue);
    makeQArt(qrValue, qrImagePath)

  }, 750);
  $("#combine").fadeIn(900);
}

// function runs on carousel slide change to update qr code to new image
$('#carouselExampleControls').on('slide.bs.carousel', function onSlide(ev) {
  const currItem = ev.relatedTarget

  updateQr(currItem)

});

// set qr code on page load for initial image
const initialItem = document.querySelector('.active')

updateQr(initialItem)



